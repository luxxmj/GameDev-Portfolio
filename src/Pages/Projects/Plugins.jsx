import React, { useState, useRef } from 'react';
import { PLUGINS } from '../../constants/index.js';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from "react-player";

const Plugins = () => {
  const [contentDisplaying, toggleContent] = useState(false);
  const [infoDisplaying, toggleInfo] = useState(false);
  const [content, setContent] = useState(null);
  const [info, setInfo] = useState(null);
  const parallaxRef = useRef(null);

  const handleClick = () => {
    toggleContent(false);
    toggleInfo(false);
    const imgElements = document.querySelectorAll('#background-image');
    imgElements.forEach(imgElement => {
      imgElement.style.filter = 'none';
    });
  };

  const handleMouseEnter = () => {
    const imgElements = document.querySelectorAll('#background-image');
    imgElements.forEach(imgElement => {
      imgElement.style.filter = 'blur(4px)';
    });
  };

  const handleMouseLeave = () => {
    const imgElements = document.querySelectorAll('#background-image');
    if (!contentDisplaying) {
      imgElements.forEach(imgElement => {
        imgElement.style.filter = 'none';
      });
    }
  };

  const setupPlugin = (plugin) => {
    setInfo(
      <>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {plugin.name}
          </h3>
          <button type="button" onClick={() => toggleInfo(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {plugin.desc}
          </p>
        </div>
      </>
    );

    setContent(
      <>
        <h1 className='pt-[1%] tracking-widest font-black text-center text-2xl text-red-600 '>
          {plugin.name}
          <span className='absolute -translate-x-[99.95%] translate-y-[1%] font-semibold text-gray-300'> {plugin.name} </span>
          <span className='absolute -translate-x-[99%] translate-y-[2%] font-semibold text-black'> {plugin.name} </span>
        </h1>
        <button type="button" onClick={() => toggleInfo(!infoDisplaying)} className=" scale-110 text-lg text-center text-white bg-gray-800 hover:bg-gray-900 rounded-lg mx-auto my-[1%] px-[5%] block">
          Info
        </button>

        <div className='relative scale-[100%] -translate-y-[0%]'>
          <div className="flex justify-center">
            <ReactPlayer url={plugin.media} />
          </div>
        </div>
      </>
    );
    toggleContent(true)
  };

  const handleNavClick = (index) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(index);
    }
  };

  return (
    <div>
      <div className='fixed z-20 top-0 left-0 m-10 flex items-center justify-between w-full px-[2%] py-[1%] text-2xl text-white rounded'>
        <a href='/'>
          <div className='hover:bg-blue-500'>
            Return
          </div>
        </a>
        {!contentDisplaying && (
          <h1 className='text-center text-sm flex-grow'>Click center of screen to view content</h1>
        )}
      </div>
      {!contentDisplaying && (
        <div className='fixed z-20 top-0 right-0 m-10 px-[2%] py-[1%] text-white rounded'>
          {PLUGINS.map((plugin, index) => (
            <a key={index} onClick={() => handleNavClick(index)} className='hover:bg-blue-500 block py-1 cursor-pointer'>
              {plugin.name}
            </a>
          ))}
        </div>
      )}
      <Parallax ref={parallaxRef} pages={PLUGINS.length} className='bg-[url(https://w.wallhaven.cc/full/nm/wallhaven-nm9omy.jpg)]'>
        {PLUGINS.map((plugin, index) => (
          <ParallaxLayer key={index} offset={index} factor={1} speed={.1} id={`plugin-${index}`}>
            <div className='relative flex justify-center h-screen'>
              <img
                id="background-image"
                src={plugin.image}
                alt={plugin.name}
                className={`absolute inset-0 w-full h-full object-contain ${contentDisplaying ? 'blur-[4px]' : ''}`}
              />

              <div className='fixed origin-top left-[30%] top-[40%] w-[40%] h-[25%]'
                onClick={() => setupPlugin(plugin)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
              </div>

              <AnimatePresence>
                {contentDisplaying && (
                  <motion.div
                    className='fixed top-[15%] left-[5%] w-[90%] h-[75%] z-10'>
                    <div className='absolute w-full h-full bg-black opacity-50'></div>
                    <div className='absolute left-[50%] -translate-x-[50%] w-[5%] rounded-lg cursor-pointer bg-white' onClick={handleClick}>
                      <h1 className='text-center'>Back</h1>
                    </div>
                    <div className='relative left-[50%] top-[30%] -translate-y-[25%] -translate-x-[50%] overflow-auto bg-[url(https://w.wallhaven.cc/full/nm/wallhaven-nm9omy.jpg)] bg-cover' style={{ maxWidth: '60%', maxHeight: '90%' }} >
                      <ul className=''>
                        {content}
                      </ul>
                    </div>
                    {infoDisplaying && (
                      <div id="small-modal" tabindex="-1" className="absolute z-50  w-full p-4  md:inset-0 h-[100%]">
                        <div className="relative left-[50%] top-[50%] -translate-y-[52%] -translate-x-[50%] w-full max-w-md max-h-[79%] overflow-scroll">
                          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            {info}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ParallaxLayer>
        ))}
      </Parallax>
    </div>
  );
};

export default Plugins;
