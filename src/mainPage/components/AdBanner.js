// import React, { useEffect, useState } from 'react';
// import './AdBanner.css';
//
// const AdBanner = () => {
//     const [currentAdIndex, setCurrentAdIndex] = useState(0);
//     const ads = [
//         // require('../assets/images/광고1.png'),
//         require('../assets/images/광고2.png'),
//         require('../assets/images/광고3.png'),
//         require('../assets/images/광고4.png'),
//         require('../assets/images/광고5.png')
//     ];
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
//         }, 5000); // 5초마다 변경
//         return () => clearInterval(interval);
//     }, [ads.length]);
//
//     return (
//         <div className="ad-banner">
//             <img src={ads[currentAdIndex]} alt="광고" />
//         </div>
//     );
// };
//
// export default AdBanner;

//-----------
// import React, { useEffect, useState } from 'react';
// import './AdBanner.css';
//
// const AdBanner = ({ userRole }) => {
//     const [currentAdIndex, setCurrentAdIndex] = useState(0);
//     const ads = [
//         // require('../assets/images/광고1.png'),
//         require('../assets/images/광고2.png'),
//         require('../assets/images/광고3.png'),
//         require('../assets/images/광고4.png'),
//         require('../assets/images/광고5.png')
//     ];
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [ads.length]);
//
//     return (
//         <div className="ad-banner">
//             <img src={ads[currentAdIndex]} alt="광고" />
//             {userRole === 'admin' && (
//                 <button className="add-ad-button">광고 추가</button>
//             )}
//         </div>
//     );
// };
//
// export default AdBanner;
//----------------------------

import React, { useEffect, useState } from 'react';
import './AdBanner.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 가져옴

const AdBanner = ({ userRole }) => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const ads = [
        // require('../assets/images/광고1.png'),
        require('../assets/images/coupon_ad.png'),
        require('../assets/images/광고2.png'),
        require('../assets/images/광고3.png'),
        require('../assets/images/광고4.png'),
        require('../assets/images/광고5.png')
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [ads.length]);

    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleAdClick = () => {
        // 현재 광고가 coupon_ad.png일 때만 이동
        if (ads[currentAdIndex] === require('../assets/images/coupon_ad.png')) {
            navigate('/coupons/welcome'); // /coupons 경로로 이동
        }
    };

    return (
        <div className="ad-banner">
            <img src={ads[currentAdIndex]} alt="광고" onClick={handleAdClick} style={{ cursor: 'pointer' }}/>
            {userRole === 'ROLE_ADMIN' && (
                <button className="add-ad-button">광고 수정</button>
            )}
        </div>
    );
};

export default AdBanner;

