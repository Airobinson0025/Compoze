import { NextRequest, NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/services/userServices';
import * as z from 'zod';

const registerSchema = z.object({
    firstName: z.string().min(2, { message: 'Must be one character long'}).max(50),
    lastName: z.string().min(2, { message: 'Must be one character long'}).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password } = registerSchema.parse(body);

        //check if user exists by email
        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return NextResponse.json({ message: 'A user with this email alread exists'}, { status: 400 });
        }

        //create user
        const newUser = await createUser(firstName, lastName, email, password);

        //hide password from client side
        const { password: newUserPassword, ...rest } = newUser[0];

        return NextResponse.json({ user: rest, message: 'User created successfully'}, { status: 201 });

    
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'An error occurred while creating user from backend'}, { status: 500 });
    }
}