import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-white hover:text-blue-300"
      >
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-blue-700 outline-none">
      <img src={logo} alt="Logo" className="w-full h-14 object-contain" />
      <NavLinks />
    </div>
  );
};

export default Sidebar;
