import Link from "next/link";
import React from "react";

const menuItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Posts",
    route: "post",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-1 bg-gray-800 text-white ">
        <h2 className="text-2xl mb-5 pl-5 my-5">Advise Me</h2>
        <ul>
          {menuItems.map((item) => (
            <Link key={item.name} href={item.route}>
              <li className="py-2 pl-5 hover:bg-gray-700">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="col-span-9 ">{children}</div>
    </div>
  );
};

export default Layout;
