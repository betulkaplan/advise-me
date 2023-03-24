// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (req.method == "GET") {
      const prismaResponse = await prisma.user.findMany();
      res.status(200).json(prismaResponse);
    } else if (req.method == "POST") {
      const data = JSON.parse(req.body);
      const prismaResponse = await prisma.user.create({
        data,
      });
      res.status(200).json(prismaResponse);
    } else if (req.method == "GET") {
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
