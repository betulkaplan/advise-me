import { useRouter } from "next/router";
import React, { useEffect } from "react";

const UserDetail = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      fetch(`/api/user/${router.query.id}`)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  }, [router.query.id]);
  return <div>UserDetail</div>;
};

export default UserDetail;
