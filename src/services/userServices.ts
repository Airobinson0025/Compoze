import { db } from "@/db/schema";
import { users } from "@/db/schema";
import { hash } from "bcrypt";
import { eq } from "drizzle-orm";


export const createUser = async ( firstName: string, lastName: string, email: string, password: string ) => {
    // hashed password
    const hashedPassword = await hash(password, 10);

    //create user
    const newUser = await db.insert(users).values({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        profilePicture: ''
    }).returning()

    return newUser;
}

export const getUserByEmail = async (email: string) => {
    const user = await db.select().from(users).where((user) => eq(user.email, email));
    return user[0];
}