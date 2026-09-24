import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

const userSelect = {
    id: true,
    name: true,
    email: true,
    createdAt: true,
    updatedAt: true,
}

export async function createUser(data: { name: string; email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10)

    return prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.email
        },
        select: userSelect,
    })
}

export async function listUser() {
    return prisma.user.findMany({ select: userSelect})
}