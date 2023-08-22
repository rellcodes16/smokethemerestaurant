import { TESTIMONIAL } from '../Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FormatQuoteSharp } from '@mui/icons-material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="testimonial" id='myTes'>
        <div className="testimonial-container">
            <div className="title">
                <h4 className="heading">Testimonials</h4>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={5}
                slidesPerView={4}
                pagination={{clickable: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={{
                    //when window width is <= 320px
                    320: {
                        width: 320,
                        slidesPerView: 1,
                    },
                    //when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    //when window width is >768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}

            >
                <div className='tes-list'>
                    {
                        TESTIMONIAL
                            .map((tes) => (
                            <SwiperSlide key={tes.id}>
                            <div className='tes-swiper-container'>
                                {/* <img src={tes.img} alt="" className="tesImg"/> */}
                                <FormatQuoteSharp style={{width: 70, textAlign: 'start', color: 'black'}}/>
                                <div className='text'>
                                   <p className='tes-text'>"{tes.text}"</p> 
                                   <h5 className='tes-name'>--{tes.username}</h5>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))  
                    }
                </div>
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials