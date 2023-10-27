import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className='app__navigation'>
      <ul className='app__navigation__list'>
        <li className='app__navigation__item'>
          <Link className='app__navigation__item-link' href='/#about'>
            ABOUT
          </Link>
        </li>
        <li className='app__navigation__item'>
          <Link className='app__navigation__item-link' href='/#team'>
            TEAM
          </Link>
        </li>
        <li className='app__navigation__item'>
          <Link className='app__navigation__item-link' href='/#projects'>
            PROJECTS
          </Link>
        </li>
        <li className='app__navigation__item'>
          <Link className='app__navigation__item-link' href='/#contacts'>
            CONTACS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
