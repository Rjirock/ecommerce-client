
'use client'

import pBanner from '../../../Assets/p1.png'

export const PromotionalBannerEl = () => {

    return (
        <>
            <div className=' container mt-[50px] ml-auto mr-auto ' >
                <div className=' w-full rounded-sm overflow-hidden bg-cover '>
                    <img className=' w-full max-h-[500px] ' src={pBanner.src} alt="" />
                </div>
            </div>
        </>
    )
}