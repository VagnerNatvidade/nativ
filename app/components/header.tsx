import NavLink from "./nav-link";

const Header = () => {
  return (
    <header className="fixed h-20 w-full flex items-center justify-between py-2 px-6 bg-[#efefef]">
      <h1 className="text-4xl font-bold">nativ</h1>

      <nav className="flex gap-3">
        <NavLink href={"#home"}>Home</NavLink>
        <NavLink href={"#about"}>Sobre</NavLink>
        <NavLink href={"#projects"}>Projetos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
