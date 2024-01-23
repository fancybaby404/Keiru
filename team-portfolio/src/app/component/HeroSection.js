"use client"
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import ButtonWrapper  from './SpotlightButton';
import Image from 'next/image';

const HeroSection = () => {
  const [currentName, setCurrentName] = useState('Jameson');
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [currentName, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0, scale: 0.5 }).then(() => {
        setCurrentName((prevName) => (prevName === 'Jameson' ? 'Junell' : 'Jameson'));
        controls.start({ opacity: 1, scale: 1 });
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [controls]);

  const handleNameChange = () => {
    controls.start({ opacity: 0, scale: 0.5 }).then(() => {
      setCurrentName((prevName) => (prevName === 'Jameson' ? 'Junell' : 'Jameson'));
      controls.start({ opacity: 1, scale: 1 });
    });
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-6xl lg:text-6xl font-extrabold">
            <span className="text-white bg-clip-text">Hello, I&apos;m{' '}</span>
            <TypeAnimation
              sequence={[currentName, 3000, 'Junell', 4000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              onComplete={handleNameChange}
            />
          </h1>

          <p className="text-{#ADB7BE} text-4xl lg:text-xl max-w-lg">
            We are passionate aspiring IT professionals in various fields, like
            full-stack development, graphic design, and many more. Explore our website to
            know us more. Let's collaborate on our works!
          </p>
          <div className="col-span-5"></div>
          <ButtonWrapper/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {currentName === 'Jameson' && (
              <Image
                src="/images/jameson.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={300}
              />
            )}
            {currentName === 'Junell' && (
              <Image
                src="/images/junell.jpg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80"
                width={300}
                height={300}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
