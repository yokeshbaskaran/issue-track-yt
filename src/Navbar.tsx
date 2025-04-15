"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();
  //   console.log("currentPath", currentPath);

  const navLinks = [
    { label: "Dashboard", link: "/" },
    { label: "Issues", link: "/issues" },
  ];

  return (
    <>
      <nav className="flex space-x-6 border-b border-gray-300 mb-5 mx-2 px-5 h-14 items-center">
        <Link href="/">
          <AiFillBug />
        </Link>

        <ul className="flex space-x-6">
          {navLinks.map((nav, idx) => (
            <Link
              className={classNames({
                "text-zinc-900": nav.link === currentPath,
                "text-zinc-500": nav.link !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              //   className={`${
              //     nav.link === currentPath ? "text-zinc-900" : "text-zinc-500"
              //   } hover:opacity-85`}
              href={nav.link}
              key={idx}
            >
              {nav.label}
              {/* {nav.link} */}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
