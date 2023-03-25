// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const method = req.method;
  let prismaResponse;
  try {
    switch (method) {
      case "GET":
        prismaResponse = await prisma.post.findMany();
        res.status(200).json(prismaResponse);
        break;
      case "POST":
        const data = req.body;
        prismaResponse = await prisma.post.create({
          data,
        });
        res.status(200).json(prismaResponse);
        break;

      default:
        res.status(404).json("Not allowed");
        break;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
