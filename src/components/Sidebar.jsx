import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 w-[10em] text-lg font-bold text-yellow-200 hover:text-white hover:border-y-2 duration-75 ease-in p-1"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-blue-700 outline-none">
        <div className="w-full flex justify-center items-center">
          <div className="w-3/4 h-36 text-yellow-200 bg-blue-300 rounded-full border-4 border-yellow-200 p-5">
            <img src={logo} alt="Logo" className="w-full h-14 object-contain mt-5" />
            <p className="text-xl font-bold text-center">LibTune</p>
          </div>
        </div>
        <NavLinks />
      </div>

      <div className="md:hidden block right-3 bg-blue-700 rounded-lg p-2 shadow-lg">
        {mobileMenuOpen ? (
          <CgClose className="w-8 h-8 text-white" onClick={() => setMobileMenuOpen(false)} />
        ) : <HiOutlineMenu className="w-8 h-8 text-white" onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className={`absolute top-16 bg-blue-100 h-screen w-3/4 backdrop-blur-lg bg-opacity-10 z-10 p-6 md:hidden smooth-transition shadow-md outline-none ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="Logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
