import React, { FC } from "react";
import Brand from "../Brand";
import { FooterNavs } from "./constants";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full flex justify-center border-t border-[#ECE4DE] py-20">
      <div className="w-full flex-col lg:flex-row max-w-screen-xl mx-5 md:mx-20 flex gap-10 justify-between">
        <div className="flex flex-col gap-9 ">
          <div>
            <Brand />
          </div>
          <div className="w-[327px] md:w-[505px] flex flex-col gap-3">
            <p className="text-black text-sm md:text-lg">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </p>
            <p className="text-black font-bold text-sm md:text-base">Developed by</p>
            <Link href={'https://www.merto.dev'} target="_blank" className="text-secondaryColor font-bold text-sm md:text-lg">Rikin Tuladhar</Link>
            <Link href={'https://www.merto.dev'} target="_blank" className="text-secondaryColor font-bold text-sm md:text-lg">Deepson Shrestha</Link>
          </div>
        </div>
        <div className="flex justify-between md:gap-28">
          {FooterNavs.map((el:any, _i:number) => (
            <div key={_i} className="flex flex-col gap-5">
              <h4 className="text-black font-semibold">{el.category}</h4>
              <ul className="flex flex-col gap-5">
                {el.navs.map((nav:any, _i:number) => (
                  <li key={_i} className="text-black">
                    <Link href={nav.href}>{nav.value}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
