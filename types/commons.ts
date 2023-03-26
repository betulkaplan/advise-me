import { Prisma } from "@prisma/client";

// 1: Define a type that includes the relation to `Post`
const userWithPosts = Prisma.validator<Prisma.UserArgs>()({
  include: { Post: true },
});

// // 2: Define a type that only contains a subset of the scalar fields
// const userPersonalData = Prisma.validator<Prisma.UserArgs>()({
//   select: { email: true, name: true },
// });

// 3: This type will include a user and all their posts
export type UserWithPosts = Prisma.UserGetPayload<typeof userWithPosts>;

// 1: Define a type that includes the relation to `Post`
const postWithUser = Prisma.validator<Prisma.PostArgs>()({
  include: { createdBy: true },
});

// // 2: Define a type that only contains a subset of the scalar fields
// const userPersonalData = Prisma.validator<Prisma.PostArgs>()({
//   select: { email: true, name: true },
// });

// 3: This type will include a user and all their posts
export type PostWithuser = Prisma.PostGetPayload<typeof postWithUser>;
