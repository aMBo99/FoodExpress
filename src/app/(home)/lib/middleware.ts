import { NextRequest } from "next/server";
import { updateSession } from "./session";

export async function middleware(request: NextRequest) {
    return await updateSession();
}