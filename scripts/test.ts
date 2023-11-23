import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function main() {
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
}