// "use client"
// import React, { useState } from 'react';
// import { UserOutlined, ShoppingCartOutlined, HomeOutlined, SettingOutlined, ShopOutlined, UserSwitchOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import AccProfileEl from '../AccProfileEl';
// import AccCartEl from '../AccCartEl';
// import AccAddressEl from '../AccAddressEl';
// import AccPanditEl from '../AccPanditEl';
// import AccSellerEl from '../AccSellerEl';
// import AccSettingEl from '../AccSettingEl';
// // import Profile from './components/Profile';
// // import Cart from './components/Cart';
// // import Address from './components/Address';
// // import Pandit from './components/Pandit';
// // import Seller from './components/Seller';
// // import Settings from './components/Settings';

// const menuItems = [
//   { key: 'profile', label: 'Profile', icon: <UserOutlined /> },
//   { key: 'cart', label: 'Cart', icon: <ShoppingCartOutlined /> },
//   { key: 'address', label: 'Address', icon: <HomeOutlined /> },
//   { key: 'pandit', label: 'Pandit', icon: <UserSwitchOutlined /> },
//   { key: 'seller', label: 'Seller', icon: <ShopOutlined /> },
//   { key: 'settings', label: 'Settings', icon: <SettingOutlined /> },
// ];

// const AccountProfileLayoutEl = () => {
//   const [activeTab, setActiveTab] = useState('profile');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'profile': return <AccProfileEl />;
//       case 'cart': return <AccCartEl />;
//       case 'address': return <AccAddressEl />;
//       case 'pandit': return <AccPanditEl />;
//       case 'seller': return <AccSellerEl />;
//       case 'settings': return <AccSettingEl />;
//       default: return <AccProfileEl />;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r">
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['profile']}
//           onClick={(e) => setActiveTab(e.key)}
//           items={menuItems}
//           className="h-full"
//         />
//       </div>

//       {/* Content Area */}
//       <div className="flex-1 p-6">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default AccountProfileLayoutEl;
"use client";

import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Button } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  SettingOutlined,
  ShopOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import AccProfileEl from '../AccProfileEl';
import AccCartEl from '../AccCartEl';
import AccAddressEl from '../AccAddressEl';
import AccPanditEl from '../AccPanditEl';
import AccSellerEl from '../AccSellerEl';
import AccSettingEl from '../AccSettingEl';

const AccountProfileLayoutEl = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Example user object. Replace with actual user data.
  const user = { role: ['pandit', 'seller'] }; // Example: User has both roles.

  // Dynamically create menu items based on user roles
  const menuItems = [
    { key: 'profile', label: 'Profile', icon: <UserOutlined /> },
    { key: 'cart', label: 'Cart', icon: <ShoppingCartOutlined /> },
    { key: 'address', label: 'Address', icon: <HomeOutlined /> },
    ...(user.role.includes('pandit') ? [{ key: 'pandit', label: 'Pandit', icon: <UserSwitchOutlined /> }] : []),
    ...(user.role.includes('seller') ? [{ key: 'seller', label: 'Seller', icon: <ShopOutlined /> }] : []),
    { key: 'settings', label: 'Settings', icon: <SettingOutlined /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <AccProfileEl />;
      case 'cart':
        return <AccCartEl />;
      case 'address':
        return <AccAddressEl />;
      case 'pandit':
        return <AccPanditEl />;
      case 'seller':
        return <AccSellerEl />;
      case 'settings':
        return <AccSettingEl />;
      default:
        return <AccProfileEl />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for large screens */}
      <div className="hidden md:block w-64 bg-white border-r">
        <Menu
          mode="inline"
          defaultSelectedKeys={['profile']}
          onClick={(e) => setActiveTab(e.key)}
          items={menuItems}
          className="h-full"
        />
      </div>

      {/* Drawer for small screens */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['profile']}
          onClick={(e) => {
            setActiveTab(e.key);
            setDrawerVisible(false); // Close drawer after selecting a menu item
          }}
          items={menuItems}
          className="h-full"
        />
      </Drawer>

      {/* Content Area */}
      <div className="flex-1 p-6">
        {/* Toggle Button for Drawer */}
        <Button
          type="primary"
          icon={<MenuOutlined />}
          className="md:hidden mb-4"
          onClick={() => setDrawerVisible(true)}
        >
          Menu
        </Button>
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountProfileLayoutEl;

