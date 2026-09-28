import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Outer Banner Container */}
                <div className="bg-[#F3F3F3] rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 shadow-sm">

                    {/* Left Text Content & CTA */}
                    <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight">
                            Books to freshen up your bookshelf
                        </h1>
                        <div>
                            <button className="bg-[#23BE0A] hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl transition shadow-md text-base sm:text-lg">
                                View The List
                            </button>
                        </div>
                    </div>

                    {/* Right Book Graphic/Mockup */}
                    <div className="flex-1 flex justify-center w-full">
                        
                        <Image
                            src={BannerImg}
                            alt="A stack of books"
                            width={400}
                            height={400}
                        />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;