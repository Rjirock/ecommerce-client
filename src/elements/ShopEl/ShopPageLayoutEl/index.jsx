"use client";

import React, { useState } from 'react';
import { GifOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
import ShCaHawanSamagiriEl from '@/elements/ShopPageCategories/ShCaHawanSamagriEl';
import ShCaFlowersEl from '@/elements/ShopPageCategories/ShCaFlowersEl';
import ShCaFruitsEl from '@/elements/ShopPageCategories/ShCaFruitsEl';
import ShCaGiftEl from '@/elements/ShopPageCategories/ShCaGiftEl';

const ShopPageLayoutEl = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Hawan Samagiri', component: <ShCaHawanSamagiriEl /> },
    { id: 2, name: 'Flowers', component: <ShCaFlowersEl /> },
    { id: 3, name: 'Fruits', component: <ShCaFruitsEl /> },
    { id: 3, name: 'Gifts', component: <ShCaGiftEl/> },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const renderCategoryContent = () => {
    const selectedCategory = categories.find((cat) => cat.id === activeCategory);
    return selectedCategory ? selectedCategory.component : <p>Select a category to view content.</p>;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for large screens */}
      <div className="hidden md:block w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          {categories.map((cat) => (
            <div key={cat.id} className="mb-2">
              <Button
                block
                onClick={() => handleCategoryChange(cat.id)}
                className={activeCategory === cat.id ? 'bg-blue-500 text-white' : ''}
              >
                {cat.name}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer for small screens */}
      <Drawer
        title="Categories"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <div className="p-4">
          {categories.map((cat) => (
            <div key={cat.id} className="mb-2">
              <Button
                block
                onClick={() => {
                  handleCategoryChange(cat.id);
                  setDrawerVisible(false); // Close drawer after selecting
                }}
                className={activeCategory === cat.id ? 'bg-blue-500 text-white' : ''}
              >
                {cat.name}
              </Button>
            </div>
          ))}
        </div>
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
          Categories
        </Button>

        <div>
          {/* <h2 className="text-lg font-bold mb-4 flex items-center">
            <ShopOutlined className="mr-2" /> Category Content
          </h2> */}
          <div className="p-4 border rounded-lg bg-white shadow-sm">{renderCategoryContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageLayoutEl;
