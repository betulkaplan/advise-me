import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-1 p-5 bg-gray-800 text-white ">
        <h2 className="text-2xl mb-5">Advise Me</h2>
        <ul>
          <li className="py-2 hover:bg-gray-700">Discover</li>
          <li className="py-2 hover:bg-gray-700">Dashboard</li>
          <li className="py-2 hover:bg-gray-700">Saved</li>
        </ul>
      </div>

      <div className="col-span-9 ">{children}</div>
    </div>
  );
};

export default Layout;
