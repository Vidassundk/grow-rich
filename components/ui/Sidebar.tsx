"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "../../constants";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link className="mb-12 cursor-pointer items-center gap-2 flex" href="/">
          <Image
            src="/icons/logo.svg"
            height={34}
            width={34}
            alt="grow-rich logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">grow-rich</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.label}`);
          return (
            <Link
              className={cn("sidebar-link", { "bg-bankGradient": isActive })}
              href={item.route}
              key={item.label}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                ></Image>
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
