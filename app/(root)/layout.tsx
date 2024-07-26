import React from "react";
import Sidebar from "../../components/ui/Sidebar";
import Image from "next/image";
import MobileNav from "../../components/ui/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Vidas", lastName: "Stirbys" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
