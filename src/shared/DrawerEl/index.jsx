import { useState } from 'react';
import { Drawer, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import "./DrawerEl.css"
const CustomDrawer = ({ toggleDrawer, isDrawerOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Categories', href: '/categories' },
    { label: 'Book Pandit', href: '/book-pandit' },
    { label: 'Offers', href: '/offers' },
    { label: 'Cart', href: '/cart' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Account', href: '/account' },
    { label: 'Logout', href: '/logout' },
  ];

  return (
    <Drawer
      style={{ padding: '5px', backgroundColor: '#f0f4f8' }}
      className="cd-custom-drawer cd-shadow-xl"
      placement="left"
      onClose={toggleDrawer}
      open={isDrawerOpen}
      width={280}
      closeIcon={<span className="cd-text-gray-600 cd-hover-text-gray-800 cd-text-3xl">&times;</span>}
    >
      <ul className="cd-drawer-menu-list cd-text-lg cd-font-semibold cd-text-gray-800 cd-space-y-5">
      <div className="cd-flex cd-items-center">
          <SearchOutlined className="cd-text-gray-600 cd-mr-2" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="cd-w-full cd-search-input"
          />
        </div>
        {navigationLinks.map((item) => (
          <li key={item.label} className="cd-drawer-menu-item">
            <Link href={item.href} onClick={toggleDrawer} className="cd-drawer-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default CustomDrawer;
