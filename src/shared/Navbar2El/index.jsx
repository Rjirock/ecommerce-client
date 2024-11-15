import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Dropdown, Menu } from 'antd';
import { MenuOutlined, CloseOutlined, SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import CustomDrawer from '../DrawerEl';
import { useRouter } from 'next/router';
import './Navbar2El.css';


const Navbar2El = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="account">
        <Link href="/account">Account</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link href="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Categories', href: '/categories' },
    { label: 'Book Pandit', href: '/book-pandit' },
    { label: 'Offers', href: '/offers' },
    { label: <ShoppingCartOutlined className="cart-icon" />, href: '/cart' },  // Cart icon link
  ];

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky-navbar' : ''}`}>
        <div className="navbar-brand">
          <Link href="/">
            <img src="/logo.webp" alt="brand-logo" width="50px" />
          </Link>
        </div>

        <div className="navbar-menu hidden sm:flex">
          <div className="search-bar flex items-center">
            <SearchOutlined className="text-primary mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          {navigationLinks.map((link, index) => (
            <Link key={index} href={link.href} className="navlink">
              {link.label}
            </Link>
          ))}

          <div className="profile-dropdown">
            <Dropdown overlay={profileMenu} trigger={['hover']}>
              <Button
                icon={<UserOutlined />}
                className="profile-icon"
                shape="circle"
                size="large"
              />
            </Dropdown>
          </div>
        </div>

        <Button className="menu-toggle sm:hidden" onClick={toggleDrawer}>
          {isDrawerOpen ? <CloseOutlined /> : <MenuOutlined />}
        </Button>
      </nav>

      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar2El;
