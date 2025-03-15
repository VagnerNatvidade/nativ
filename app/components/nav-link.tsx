import Link from "next/link";

interface NavLinkProps {
  children: string;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#ecb365] after:transition-all hover:w-full hover:after:w-full"
    >
      {children}
    </Link>
  );
};

export default NavLink;
