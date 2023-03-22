import Head from "next/head";
import { Inter } from "next/font/google";
import { commmit_sha } from "../package.json";

const inter = Inter({ subsets: ["latin"] });

const x = process.env.NEXT_PUBLIC_DATABASE_URL;

export default function Home() {
  console.log("Base URL", x);
  return (
    <>
      <Head>
        <title>Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Version TEST: {commmit_sha}
        <button className="bg-red-300 p-2 m-2 rounded">Test Me</button>
      </main>
    </>
  );
}
