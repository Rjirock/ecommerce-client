import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { HomeOutlined, CreditCardOutlined, EnvironmentOutlined } from '@ant-design/icons';

const AccProfileEl = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const [editField, setEditField] = useState('');
  const [tempValue, setTempValue] = useState('');

  // Array to store updated profile data
  const [profileArray, setProfileArray] = useState([]);

  // Handle click to enable editing
  const handleEdit = (field) => {
    if (editField === field) {
      handleSave(field); // Save if already in edit mode
    } else {
      setEditField(field);
      setTempValue(profileData[field]);
    }
  };

  // Handle saving the updated value
  const handleSave = (field) => {
    if (tempValue.trim() === '') return;

    const updatedProfile = { ...profileData, [field]: tempValue };
    setProfileData(updatedProfile);
    setEditField('');

    // Store updated profile data in array, showing only the last two updates
    setProfileArray((prevArray) => {
      const newArray = [...prevArray, updatedProfile];
      return newArray.slice(-2);
    });
  };

  // Handle input change
  const handleChange = (e) => setTempValue(e.target.value);

  // Render each profile field with an edit button
  const renderEditableField = (label, field) => (
    <div className="flex items-center mb-4">
      <label className="font-semibold w-32">{label}:</label>
      {editField === field ? (
        <>
          <Input
            value={tempValue}
            onChange={handleChange}
            className="w-64 mr-4"
            autoFocus
          />
          <Button type="primary" onClick={() => handleSave(field)}>
            Save
          </Button>
        </>
      ) : (
        <>
          <p className="w-64 cursor-pointer" onClick={() => handleEdit(field)}>
            {profileData[field]}
          </p>
          <Button type="link" onClick={() => handleEdit(field)}>
            Edit
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>

      {/* Editable Fields */}
      {renderEditableField('First Name', 'firstName')}
      {renderEditableField('Last Name', 'lastName')}
      {renderEditableField('Email', 'email')}
      {renderEditableField('Phone', 'phone')}

      {/* Navigation Buttons */}
      <div className="mt-6 flex space-x-4">
        <Button type="primary" icon={<CreditCardOutlined />} className="bg-blue-500">
          Go to Cart
        </Button>
        <Button type="default" icon={<EnvironmentOutlined />} className="bg-green-500">
          Go to Address Manager
        </Button>
        <Button type="link" icon={<HomeOutlined />} className="text-red-500">
          Go to Home Page
        </Button>
      </div>

      {/* Display Last Two Updated Profile Data */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Last Two Updates:</h3>
        <ul className="list-disc ml-6">
          {profileArray.slice(-2).map((profile, index) => (
            <li key={index}>
              {profile.firstName} {profile.lastName} - {profile.email} - {profile.phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccProfileEl;
