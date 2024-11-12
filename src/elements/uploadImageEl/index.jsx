import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, message } from 'antd';
// import toast from ''

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

    const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        throw new Error('Failed to upload image');
    }
    const data = await response.json();
    return data.secure_url;
};

export const ImageUpload = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = async ({ file, fileList: newFileList }) => {
        if (file.size && file.size / 1024 / 1024 > 1) {
            file.error = 'file should be less then 1mb'
            const updatedFileList = newFileList.filter((item) => item.uid !== file.uid);
            setFileList(updatedFileList);
            return;
        }

        setFileList(newFileList);

        if (file.status === 'done') {
            try {
                const url = await uploadImageToCloudinary(file.originFileObj);
                const updatedFileList = newFileList.map((item) =>
                    item.uid === file.uid ? { ...item, status: 'done', url } : item
                );
                setFileList(updatedFileList);
                message.success('Image uploaded successfully!');
            } catch (error) {
                const updatedFileList = newFileList.map((item) =>
                    item.uid === file.uid ? { ...item, status: 'error' } : item
                );
                setFileList(updatedFileList);
                message.error('Failed to upload image');
            }
        } else if (file.status === 'error') {
            message.error('Failed to upload image');
        }
    };

    console.log(fileList);


    const customUpload = ({ file, onSuccess, onError }) => {
        setTimeout(() => {
            onSuccess('ok'); // Simulate a successful response
        }, 0);
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <>
            <Upload
                customRequest={customUpload}
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                showUploadList={{ showRemoveIcon: true }}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
};

export default ImageUpload;
