// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ message: "success" });
  // try {
  //   const prismaResponse = await prisma.user.findMany();
  //   console.log("DEBUG", prismaResponse);
  //   res.status(200).json(prismaResponse);
  // } catch (error) {
  //   res.status(500).json({ error: error });
  // }
}
