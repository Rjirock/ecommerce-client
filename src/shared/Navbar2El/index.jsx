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
  const user = null;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const profileMenu = (
    <Menu>
      {user ? (
        <Menu.Item key="account">
          <Link href="/account">Account</Link>
        </Menu.Item>
      ) : (
        <Menu.Item key="login">
          <Link href="/account">Login</Link>
        </Menu.Item>
      )}
      <Menu.Item key="logout">
        <Link href="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  const navigationLinks = [
    // { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    // { label: 'Categories', href: '/categories' },
    { label: 'Book Pandit', href: '/book-pandit' },
    { label: 'Offers', href: '/offers' },
    { label: <ShoppingCartOutlined className="cart-icon" />, href: '/cart' },
  ];

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky-navbar' : ''}`}>
        {/* Logo */}
        <div className="navbar-brand">
          <Link href="/">
            <img src="/logo.webp" alt="brand-logo" width="50px" />
          </Link>
        </div>

        {/* Main Menu */}
        <div className="navbar-menu hidden lg:flex items-center">
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
            {user ? (
              <Dropdown overlay={profileMenu} trigger={['hover']}>
                <Button
                  icon={<UserOutlined />}
                  className="profile-icon"
                  shape="circle"
                  size="large"
                />
              </Dropdown>
            ) : (
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <Button className="menu-toggle lg:hidden flex justify-center items-center" onClick={toggleDrawer} style={{outline:"none",border:"none",marginTop:"-8px"}}>
          {isDrawerOpen ? <CloseOutlined /> : <MenuOutlined />}
        </Button>
      </nav>

      {/* Mobile Drawer */}
      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar2El;
