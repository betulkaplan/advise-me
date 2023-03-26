// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const postId = req.query.id;
    if (req.method == "GET" && postId !== undefined && !Array.isArray(postId)) {
      const prismaResponse = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });
      res.status(200).json(prismaResponse);
    } else if (req.method == "DELETE" && postId && !Array.isArray(postId)) {
      const prismaResponse = await prisma.post.delete({
        where: {
          id: postId,
        },
      });
      res.status(200).json(prismaResponse);
    } else if (req.method == "GET") {
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
