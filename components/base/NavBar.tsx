'use client';

import Link from 'next/link';

const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-center bg-slate-600 ">
        <ul>
          <li className="m-2">
            <Link className="p-1" href="/">
              Home
            </Link>
            <Link className="p-1" href="/events">
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
