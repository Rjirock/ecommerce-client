"use client"
import React, { useState } from 'react';
import { UserOutlined, ShoppingCartOutlined, HomeOutlined, SettingOutlined, ShopOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import AccProfileEl from '../AccProfileEl';
import AccCartEl from '../AccCartEl';
import AccAddressEl from '../AccAddressEl';
import AccPanditEl from '../AccPanditEl';
import AccSellerEl from '../AccSellerEl';
import AccSettingEl from '../AccSettingEl';
// import Profile from './components/Profile';
// import Cart from './components/Cart';
// import Address from './components/Address';
// import Pandit from './components/Pandit';
// import Seller from './components/Seller';
// import Settings from './components/Settings';

const menuItems = [
  { key: 'profile', label: 'Profile', icon: <UserOutlined /> },
  { key: 'cart', label: 'Cart', icon: <ShoppingCartOutlined /> },
  { key: 'address', label: 'Address', icon: <HomeOutlined /> },
  { key: 'pandit', label: 'Pandit', icon: <UserSwitchOutlined /> },
  { key: 'seller', label: 'Seller', icon: <ShopOutlined /> },
  { key: 'settings', label: 'Settings', icon: <SettingOutlined /> },
];

const AccountProfileLayoutEl = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile': return <AccProfileEl />;
      case 'cart': return <AccCartEl />;
      case 'address': return <AccAddressEl />;
      case 'pandit': return <AccPanditEl />;
      case 'seller': return <AccSellerEl />;
      case 'settings': return <AccSettingEl />;
      default: return <AccProfileEl />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <Menu
          mode="inline"
          defaultSelectedKeys={['profile']}
          onClick={(e) => setActiveTab(e.key)}
          items={menuItems}
          className="h-full"
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountProfileLayoutEl;
