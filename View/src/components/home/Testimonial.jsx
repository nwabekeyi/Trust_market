import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial1 from '../../assets/testimonial-1.png';
import testimonial2 from '../../assets/testimonial-2.png';
import testimonial3 from '../../assets/testimonial-3.png';
import { Controller, Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Testimonial = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const details= [
    {
        id:1,
        image: testimonial1,
        comment:`As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!`,
        name: 'Chidiebere',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    },
    {
        id:2, 
        image: testimonial2, 
        comment:`As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!`,
        name: 'Victoria Dike',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    },
    {
        id:3,
        image: testimonial3,
        comment:`As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!`,
        name: 'Chisome Amara',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    },
    {
        id:4,
        image: testimonial1,
        comment:`As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!`,
        name: 'Victoria Dike',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    }
    ]

    return(
        <section>
            <h1 className='text-greenDark font-bold text-center text-5xl'>Testimonials</h1>

            <Swiper
                style={{marginLeft: '8px'}}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                {details.map(detail => (
                    <SwiperSlide>
                      <div key={detail.id}  >
                        <div className='inline h-auto w-auto rounded-full  bg-blue  relative top-20 m-0'>
                        <img className="m-auto rounded-full " src={detail.image} alt={detail.name}  />
                        </div>
                      <div className="pb-4 pt-[120px] bg-greyLight">
                        <h2 className=" font-bold  text-center text-red">" <span className='text-grey'>{detail.comment}</span> "</h2>
                        <h1 className="text-[15px] font-bold text-md text-center text-grey"><span className='text-red text-lg font-bold'>{detail.name}</span> <span>{detail.profession}</span> <span>{detail.company}</span></h1>
                    </div>
                  </div>
                  </SwiperSlide>

              ))}
        </Swiper>
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper}>
          {/* ... */}
        </Swiper>
        </section>
    )
}

export default Testimonial