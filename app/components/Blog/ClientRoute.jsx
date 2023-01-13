"use client";
import Link from "next/link";

function ClientRoute({ children, route }) {
  return <Link href={route}>{children}</Link>;
}

export default ClientRoute;
