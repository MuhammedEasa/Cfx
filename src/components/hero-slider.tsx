"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import AnimationContainer from './global/animation-container';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SLIDER_DATA = [
  {
    id: 1,
    media: '/images/slide_1.mp4',
    type: 'video',
    title: 'Refer & Earn',
    subtitle: 'Unlimited Rewards',
    description: 'Invite friends and earn up to $500 for every successful referral. No limits, no caps - just pure earning potential.',
    buttonText: 'Start Referring',
    buttonLink: '/contact',
    accent: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    media: '/images/slide_2.jpg',
    type: 'image',
    title: 'Swap Free Trading',
    subtitle: 'Zero Hidden Costs',
    description: 'Trade without swap fees on all major currency pairs. Keep more of your profits with our transparent pricing.',
    buttonText: 'Trade Swap Free',
    buttonLink: '/contact',
    accent: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    media: '/images/slide_3.jpg',
    type: 'image',
    title: 'Tightest Spreads',
    subtitle: 'From 0.0 Pips',
    description: 'Experience the market with institutional-grade spreads starting from 0.0 pips on major pairs.',
    buttonText: 'View Spreads',
    buttonLink: '/contact',
    accent: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    media: '/images/slide_4.jpg',
    type: 'image',
    title: 'Professional Trading',
    subtitle: 'Advanced Platform',
    description: 'Access professional trading tools, real-time analytics, and lightning-fast execution on our cutting-edge platform.',
    buttonText: 'Start Trading',
    buttonLink: '/account-types',
    accent: 'from-orange-500 to-red-500'
  }
];

export const HeroSlider = () => {
  return (
    <div className="w-full max-w-[100rem] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm border border-white/10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="hero-slider"
          >
            {SLIDER_DATA.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[550px] w-full">
                  {/* Background Media */}
                  {slide.type === 'video' ? (
                    <video
                      src={slide.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        filter: 'brightness(0.7)',
                        WebkitTransform: 'translateZ(0)',
                        transform: 'translateZ(0)'
                      }}
                    />
                  ) : (
                    <Image
                      src={slide.media}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1600px"
                      className="object-cover"
                      priority={slide.id === 1}
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center px-8 lg:px-16">
                    <div className="text-center text-white max-w-5xl w-full">
                      <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${slide.accent} text-white text-sm lg:text-base font-medium mb-6 shadow-lg`}>
                        {slide.subtitle}
                      </div>

                      <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                        {slide.title}
                      </h2>

                      <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        {slide.description}
                      </p>

                      <Link href={slide.buttonLink}>
                        <Button
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-base lg:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl border-2 border-primary/20"
                        >
                          {slide.buttonText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {SLIDER_DATA.map((_, index) => (
              <div
                key={index}
                className="swiper-pagination-bullet-custom w-3 h-3 bg-white/50 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/70"
              />
            ))}
          </div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default HeroSlider;
