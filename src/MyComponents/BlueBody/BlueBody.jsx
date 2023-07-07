import React from 'react'
import daniel from './../../images/image-daniel.jpg'
import jeanette from './../../images/image-jeanette.jpg'
import jonathan from './../../images/image-jonathan.jpg'
import kira from './../../images/image-kira.jpg'

function BlueBody() {
    return (
        <>
            <div className='h-full bg-[#8574E9] w-screen mt-10'>
                <div className='flex flex-col  justify-center items-center md:flex-col'>
                    <p className='text-white font-extrabold font-sans text-4xl w-52 text-center mt-28 md:text-center'>Testimonials</p>
                    <div className='md:flex mb-20 items-center justify-center md:w-screen lg:p-[3rem]'>
                        <div className="w-80 bg-[#8878E9] md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl text-center flex flex-col items-center md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-2.5">
                            <img src={daniel} alt="Profile" className="rounded-full" />
                            <p className="text-white-500 text-2xl font-bold">Daniel Smith</p>
                            <p className="text-white text-lg">Instagram CEO</p>
                            <p className="text-white pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore.</p>
                        </div>
                        <div className="w-80 bg-[#8878E9]  md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl text-center flex flex-col items-center md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-6">
                            <img src={jeanette} alt="Profile" className="rounded-full" />
                            <p className="text-white-200 text-2xl font-bold">Jeanette Smith</p>
                            <p className="text-white text-lg">Web Developer</p>
                            <p className="text-white pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore.</p>
                        </div>
                        <div className="w-80 bg-[#8878E9]  md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl text-center flex flex-col items-center md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-6">
                            <img src={jonathan} alt="Profile" className="rounded-full" />
                            <p className="text-white-200 text-2xl font-bold">Jonathan Smith</p>
                            <p className="text-white text-lg">Software Designer</p>
                            <p className="text-white pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore.</p>
                        </div>
                        <div className="w-80 bg-[#8878E9]   md:w-80 md:h-3/5 rounded-3xl overflow-hidden  md:mt-0 shadow-xl text-center flex flex-col items-center md:mr-10
                                            mt-14 hover:shadow-2xl bg-scroll py-2.5">
                            <img src={kira} alt="Profile" className="rounded-full" />
                            <p className="text-white-500 text-2xl font-bold">Kira Smith</p>
                            <p className="text-white text-lg">Cashier</p>
                            <p className="text-white pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlueBody;
