import React from "react";
import Link from "next/link";

const Route404 = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transform: "translateY(-20%)"
      }}
    >
      <h1>We couldn&apos;t find the page you were looking for!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go home
      </Link>
    </div>
  );
}

export default Route404;