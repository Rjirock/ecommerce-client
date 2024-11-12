import React, { useState } from 'react';

const ImageUpload = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size / 1024 / 1024 < 1) {
            setPreviewImage(URL.createObjectURL(file));
            uploadImage(file);
        } else {
            alert('File size must be less than 1MB');
        }
    };

    const uploadImage = async (file) => {
        setIsUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET);

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setUploadedImageUrl(data.secure_url);
            setIsUploading(false);
        } catch (error) {
            console.error('Error uploading image:', error);
            setIsUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <label className="w-32 h-32 flex items-center justify-center border border-dashed border-gray-400 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-100 transition">
                <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                />
                {previewImage ? (
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-500">Upload Image</span>
                )}
            </label>

            {isUploading && <p className="text-blue-500">Uploading...</p>}
            {uploadedImageUrl && (
                <div className="mt-4">
                    <img src={uploadedImageUrl} alt="Uploaded" className="w-32 h-32 object-cover rounded-lg" />
                    <p className="text-green-500 mt-2">Upload successful!</p>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
