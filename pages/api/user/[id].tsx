// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const userId = req.query.id;
    if (req.method == "GET" && userId !== undefined && !Array.isArray(userId)) {
      const prismaResponse = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      res.status(200).json(prismaResponse);
    } else if (req.method == "DELETE" && userId && !Array.isArray(userId)) {
      const prismaResponse = await prisma.user.delete({
        where: {
          id: userId,
        },
      });
      res.status(200).json(prismaResponse);
    } else if (req.method == "GET") {
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
