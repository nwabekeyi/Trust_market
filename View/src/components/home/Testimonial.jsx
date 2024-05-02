import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial1 from '../../assets/testimonial-1.png';
import testimonial2 from '../../assets/testimonial-2.png';
import testimonial3 from '../../assets/testimonial-3.png';

import 'swiper/css';

const Testimonial = () => {

    const details= [
    {
        id:1, 
        image: testimonial1, 
        comment:`"As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!"`,
        name: 'Chidiebere',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    },
    {
        id:2, 
        image: testimonial2, 
        comment:`"As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!"`,
        name: 'Victoria Dike',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    },
    {
        id:3,
        image: testimonial3,
        comment:`"As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!"`,
        name: 'Chisome Amara',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    },
    {
        id:4,
        image: testimonial1,
        comment:`"As a seller, I've always been cautious about online marketplaces, but this platform completely changed my perspective. The safe payment platform provided 
        peace of mind, ensuring that I received my funds securely and on time. It's a game-changer for anyone looking to buy or sell online!"`,
        name: 'Victoria Dike',
        profession: 'Customer care rep',
        company: 'First bank of Nigeria'
    }
    ]

    return(
        <section>
            <h1>Testimonials</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                >
                {details.map(detail => (
                    <SwiperSlide>
                      <div key={detail.id} className="">
                        <div className='inline rounded-full z-3 bg-blue p-20 relative top-20 m-0'>
                        <img className="m-auto  p-5" src={detail.image} alt={detail.name}  />
                        </div>
                      <div className="pb-4 pt-[120px] bg-greyLight">
                        <h2 className=" font-bold text-md text-center text-greenDark">{detail.comment}</h2>
                        <h2 className="text-[10px] font-bold text-md text-center text-greenDark">{detail.position}</h2>
                    </div>
                  </div>
                  </SwiperSlide>

              ))}      ...
        </Swiper>
        </section>
    )
}

export default Testimonial