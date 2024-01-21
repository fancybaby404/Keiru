"use client"
import React from 'react'
import {TypeAnimation} from "react-type-animation"
import {motion} from 'framer-motion'
import Link from 'next/link'
import ParticleBackground from "./ParticleBackground"

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 min-h-screen'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
                <h1 className="text-white mb-4 text-6xl lg:text-6xl font-extrabold">
                     <span className="text-white bg-clip-text">
                        Hello, I&apos;m{" "}
                    </span>
                    <TypeAnimation
                        sequence={[
                            "Jameson",
                            1000,
                            "Junell",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>


                <p className="text-{#ADB7BE} text-4xl lg:text-xl max-w-lg">
                We are passionate aspiring IT professionals in various fields, like
                full-stack development, graphic design, and many more. Explore our website to
                know us more. Let's collaborate our works!
                </p>

                <div className='absolute'>
                    <button className='px-6 
                                       py-3 
                                       rounded-full 
                                       mt-5 
                                       relative 
                                       left-50
                                       text-lg
                                     bg-blue-500 
                                       text-black 
                                       hover:bg-blue-800'>
                        <Link
                            href={'#about'}>
                                Get Started
                        </Link>
                    </button>
                </div>
            <div className='col-span-5'></div>
        </motion.div>
        </div>
    </section>
  )
}

export default HeroSection