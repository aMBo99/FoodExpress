import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload, SessionSchema } from "./definitions";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  // Optional: Validate payload against schema before encrypting
  const parsedPayload = SessionSchema.parse(payload);

  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(new Date(parsedPayload.expiresAt).toISOString())
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const session = await encrypt({ userId, expiresAt });
  (await cookies()).set(
    "session",
    session,
    {
      httpOnly: true,
      secure: true,
      expires: new Date(expiresAt),
      sameSite: "lax",
      path: "/",
    }
  );
}

export async function updateSession() {
  const session = (await cookies()).get('session')?.value;
  const payload = await decrypt(session);
 
  if (!session || !payload) {
    return null
  }
 
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
 
  (await cookies())
  .set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  (await cookies())
  .delete('session');
}