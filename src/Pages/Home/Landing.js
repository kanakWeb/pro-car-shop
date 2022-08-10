import React from 'react';
import baner from '../../Images/Slider/SliderImages/2.jpg'

const Landing = () => {
    return (
        <>
        <div class="hero h-screen relative z-10 lg:h-[60vh] bg-gradient-to-r from-orange-300 to-slate-900  ">
            <div class="hero-content flex-col lg:flex-row">
                <div data-aos="fade-right">
                    <p>Best Quality</p>
                    <h1 class="text-4xl font-bold">Professional New Brand</h1>
                    <p class="py-6 max-w-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div className="h-[60vh] shrink-0">
                    <img data-aos="fade-down-left" src={baner} class="h-100 rounded-lg" alt="img" />
                </div>
            </div>
        </div>

        <div className="p-6 bg-base-300 mb-8 mt-[-20px] rounded-xl mx-auto relative z-20 shadow-lg w-5/6">
            <h1 className="text-2xl mb-2 text-primary">Get Free Estimate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full "
                />
            </div>
            <button class="btn btn-primary mt-5">REQUEST A QOUTE</button>
        </div>
    </>
    );
};

export default Landing;