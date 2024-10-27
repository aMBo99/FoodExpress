// 'use server'

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { cache } from 'react';
import { cookies } from 'next/headers';
 
export async function authenticate(
  prevState,
  formData,
) {
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
        switch (error.type) {
            case 'CredentialsSignin':
                return 'Invalid credentials.';
            default:
                return 'Something went wrong.';
        }
        }
        throw error;
    }
}

export const getCurrentUser = cache(async () => {
    const token = cookies().get('AUTH_TOKEN');
    const decodedToken = await decryptAndValidate(token);
    // Don't include secret tokens or private information as public fields.
    // Use classes to avoid accidentally passing the whole object to the client.
    return new User(decodedToken.id);
  });

export async function logOut() {
  // 'use server';
  await signOut();
};