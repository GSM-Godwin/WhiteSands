'use client'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const data = [
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        id: `1`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        id: `2`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        id: `3`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        id: `4`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        id: '5'
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        id: `6`
    },   
]

export default function Sliders () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
      };

  return (
    <div>
        <Carousel responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={3000} dotListClass="" infinite={true}>
            <div className='lg:text-[45px] text-[28px] text-white font-medium mx-5 items-center flex justify-center h-[200px] border' style={{ backgroundImage: `url(/assets/snow-truck.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                Melbourne
            </div>
            <div className='lg:text-[45px] text-[28px] text-white font-medium mx-5 items-center flex justify-center h-[200px] border' style={{ backgroundImage: `url(/assets/snow-truck.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                Melbourne
            </div>
            <div className='lg:text-[45px] text-[28px] text-white font-medium mx-5 items-center flex justify-center h-[200px] border' style={{ backgroundImage: `url(/assets/snow-truck.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                Melbourne
            </div>
            <div className='lg:text-[45px] text-[28px] text-white font-medium mx-5 items-center flex justify-center h-[200px] border' style={{ backgroundImage: `url(/assets/snow-truck.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                Melbourne
            </div>
        </Carousel>
    </div>
  )
}

