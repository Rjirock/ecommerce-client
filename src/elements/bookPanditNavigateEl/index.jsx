'use client';

import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export const BookPanditNavigateBtn = () => {
    const router = useRouter();

    const handleNavigation = () => {
        router.replace('/bookpandit');
    };

    return (
        <div className="fixed bottom-4 right-4 cursor-pointer active:scale-[.95]">
            <Button
                type="primary"
                shape="round"
                icon={<RightOutlined />}
                size="large"
                onClick={handleNavigation}
                style={{
                    backgroundColor: '#FF4500',
                    borderColor: '#FF4500',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                }}
            >
                Book Your Pandit Now
            </Button>
        </div>
    );
};
