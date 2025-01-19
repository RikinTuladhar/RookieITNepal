"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";
import { HeaderNavProps } from "@/types/HeaderNav";

const HeaderNav: FC<HeaderNavProps> = ({ value, href }) => {
  const route: string = usePathname();
  return (
    <div className=" h-full w-max relative">
      <Link href={href} className="text-gray-200 font-semibold hover:text-green-400 delay-100">
        {value}
      </Link>
      <div
        className="bg-primaryColor absolute w-full h-1 top-[62px]"
        style={href === route ? { display: "flex" } : { display: "none" }}
      />
    </div>
  );
};

export default HeaderNav;
