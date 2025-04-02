import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-md w-full min-h-40 p-10 flex flex-col sm:flex-row sm:items-start gap-6 items-center justify-center text-[#efefef] bg-[#04293a]">
      <div className="border-r pr-6">
        <h2>Contatos</h2>
        <nav className="flex flex-col mt-3 ">
          <Link href={"mailto:vagnerflorindojunior@gmai.com"}>Email</Link>
          <Link href={"https://www.instagram.com/vagner_natividade/"}>
            Instagram
          </Link>
          <Link href={"https://github.com/VagnerNatvidade/"}>GitHub</Link>
        </nav>
      </div>
      <p>Copyright (c) 2025 Vagner Natividade</p>
    </footer>
  );
};

export default Footer;
