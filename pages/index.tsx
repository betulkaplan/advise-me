import Head from "next/head";
import { useEffect, useState } from "react";
import packageJson from "../package.json";
type User = {
  id: string;
  email: string;
  name: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        setUsers(res);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-red-300">
          <h3>Users</h3>
          {users.map((u, index) => {
            return (
              <div key={index}>
                {u.email} - {u.name}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
