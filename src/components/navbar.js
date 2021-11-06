import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
      name: 'book',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
      name: 'categories',
    },
  ];

  return (
    <nav className="Navbar">
      <div className="Nav1">
        <header>
          <h1 className="Title">Bookstore CMS</h1>
        </header>
        <ul className="Links">
          {links.map((link) => (
            <li key={link.id} className={link.name}>
              <Link to={link.path} activeClassname="active-link">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ImUser className="user" />
    </nav>
  );
};

export default Navbar;
