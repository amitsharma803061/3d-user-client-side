import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";
import { HiArrowUpRight } from "react-icons/hi2";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/services"} className={"nav-item"}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"} className={"nav-item"}>
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink to={"/abouts-us"} className={"nav-item"}>
          Abouts Us
        </NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"} className={"nav-item"}>
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to={"/be-rider"} className={"nav-item"}>
          Be a Rider
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full mx-auto h-25 navbar bg-base-300 shadow-xl top-5 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="ml-5">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal text-black/80 gap-7 px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2 mr-5">
        <Link className="btn text-black border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#2563eb,0_0_50px_#2563eb,0_0_100px_#2563eb] mb-5 mt-5">
          Sing in
        </Link>
        <Link className="btn bg-[#dad72c] text-black border-none transition-all duration-300 hover:-translate-y-1 hover:bg-[#dad72c] hover:shadow-[0_0_20px_#dad72c,0_0_50px_#dad72c,0_0_100px_#dad72c]">
          Be a Rider
        </Link>
        <Link className="w-10 h-10 bg-black rounded-full">
          <HiArrowUpRight className="text-[#dad72c] text-3xl text-center font-bold ml-1 mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
