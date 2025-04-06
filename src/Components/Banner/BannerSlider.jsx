import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BannerSlider = () => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={60}
                slidesPerView={4}
                navigation={true}
                className="swiper-container"
            >
                <SwiperSlide>
                    <div className="bg-white p-10  text-center h-full rounded-sm">
                        <img className='mx-auto ' src="https://www.creativeitinstitute.com/images/department/gd.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Design & Creative</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="bg-white p-10 text-center h-full rounded-sm">
                        <img className='mx-auto' src="https://www.creativeitinstitute.com/images/department/dm.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Digital Marketing</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-10  text-center h-full rounded-sm">
                        <img className='mx-auto ' src="https://www.creativeitinstitute.com/images/department/wd.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Web & Software</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-10  text-center h-full rounded-sm">
                        <img className='mx-auto ' src="https://www.creativeitinstitute.com/images/department/icon_image1740812199.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Cybersecurity</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-10  text-center h-full rounded-sm">
                        <img className='mx-auto ' src="https://www.creativeitinstitute.com/images/department/dm.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Social Media Marketing (SMM)</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-10  text-center h-full rounded-sm">
                        <img className='mx-auto ' src="https://www.creativeitinstitute.com/images/department/ve.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Video editing</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-10  text-center h-full rounded-sm">
                        <img className='mx-auto ' src="https://i.ibb.co/84Msc3jB/icons8-photo-editing-50.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Photo editing</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white p-10 text-center h-full rounded-sm">
                        <img className='mx-auto ' src="https://i.ibb.co.com/wrjTNkLJ/icons8-artificial-intelligence-50.png" alt="" />
                        <h3 className='md:text-xl text-lg font-semibold'>Artificial Intelligence</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
