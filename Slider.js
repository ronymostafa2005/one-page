import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // استيراد أنماط Swiper

const Slider = () => {
  // معلومات عن الإعلانات
const ads = [
    { id: 1, title: 'عرض خاص 1', description: 'خصم 30% على جميع المنتجات', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'عرض خاص 2', description: 'احصل على هدية مجانية مع كل عملية شراء', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'عرض خاص 3', description: 'سعر خاص لموسم الأعياد', image: 'https://via.placeholder.com/300' },
];

return (
    <Box sx={{ width: '100%', padding: 2 }}>
        <Swiper
        spaceBetween={50} // المسافة بين الشرائح
        slidesPerView={1} // عدد الشرائح المعروضة في كل مرة
        pagination={{ clickable: true }} // تفعيل إمكانية التنقل بالضغط
        navigation // تفعيل أسهم التنقل
        >
        {ads.map((ad) => (
            <SwiperSlide key={ad.id}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6} sx={{ textAlign: 'center', padding: 2 }}>
                <img src={ad.image} alt={ad.title} style={{ width: '20%', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ marginTop: 1 }}>{ad.title}</Typography>
                <Typography variant="body1">{ad.description}</Typography>
                </Grid>
            </Grid>
            </SwiperSlide>
        ))}
        </Swiper>
    </Box>
);
};

export default Slider;
