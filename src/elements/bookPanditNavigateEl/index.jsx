'use client';

import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const BookPanditNavigateBtn = () => {
    const router = useRouter();
    const [expanded, setExpanded] = useState(false);

    const handleNavigation = () => {
        router.replace('/bookpandit');
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setExpanded(true);
        } else {
            setExpanded(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-[58px] sm:bottom-4 right-0 sm:right-4 cursor-pointer active:scale-95 transition-transform duration-500 ease-in-out">
            <Button
                type="primary"
                shape="round"
                icon={<RightOutlined />}
                size="large"
                onClick={handleNavigation}
                className={`transition-all duration-500 ease-in-out ${expanded ? 'pl-4 pr-6' : 'w-12 h-12 flex items-center justify-center'
                    }`}
                style={{
                    backgroundColor: '#FF4500',
                    borderColor: '#FF4500',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden',
                }}
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
            >
                {expanded && 'Book Your Pandit Now'}
            </Button>
        </div>
    );
};
