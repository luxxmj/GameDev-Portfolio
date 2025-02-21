import React, { useState } from 'react';
import SBManiaThumbnail from '../../assets/Icons/SBMania/SBMania.jpg';
import { SBMANIA } from '../../constants/index.js';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from "react-player";

const SBMania = () => {
        const [skillsDisplaying, setSkills] = useState(false);

        const [programmingDisplaying, setProgramming] = useState(false);
        const [guiDisplaying, setGUI] = useState(false);
        const [gfxDisplaying, setGFX] = useState(false);
        const [animatingDisplaying, setAnimating] = useState(false);
        const [fxDisplaying, setFX] = useState(false);
        const [managementDisplaying, setManagement] = useState(false);

        const [contentDisplaying, setContent] = useState(false);
        const [infoDisplaying, toggleInfo] = useState(false);
        const [variantList, setVariantList] = useState(null);
        const [variantInfo, setVariantInfo] = useState(null);

        const handleClick = () => {
                setSkills(!skillsDisplaying);
                setProgramming(false);
                setGUI(false);
                setGFX(false);
                setAnimating(false);
                setFX(false);
                setManagement(false);
                setContent(false);
                toggleInfo(false);
                setVariantList(null);
                setVariantInfo(null);
        };

        const handleMouseEnter = () => {
                const imgElement = document.getElementById('background-image');
                if (imgElement) {
                        imgElement.style.filter = 'blur(4px)';
                }
        };

        const handleMouseLeave = () => {
                const imgElement = document.getElementById('background-image');
                if (imgElement && !skillsDisplaying) {
                        imgElement.style.filter = 'none';
                }
        };

        const setList = (set) => {
                setProgramming(set === 'Programming' ? !programmingDisplaying : false);
                setGUI(set === 'GUI' ? !guiDisplaying : false);
                setGFX(set === 'GFX' ? !gfxDisplaying : false);
                setAnimating(set === 'Animating' ? !animatingDisplaying : false);
                setFX(set === 'FX' ? !fxDisplaying : false);
                setManagement(set === 'Management' ? !managementDisplaying : false);
        };

        const setInfo = (variant, desc) => {
                setVariantInfo(
                        <>
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                {variant}
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
                                                {desc}
                                        </p>
                                </div>
                        </>
                );
                toggleInfo(true);
        };

        const getSubcatContent = (subcat) => {
                setContent(true);
                setVariantList(
                        Object.keys(subcat).map((variant, varIndex) => (
                                <li key={varIndex}>
                                        <h1 className='pt-[1%] tracking-widest font-black text-center text-2xl text-red-600 '>
                                                {variant}
                                                <span className='absolute -translate-x-[99.95%] translate-y-[1%] font-semibold text-gray-300'> {variant} </span>
                                                <span className='absolute -translate-x-[99%] translate-y-[2%] font-semibold text-black'> {variant} </span>
                                        </h1>
                                        <button type="button" onClick={() => setInfo(variant, subcat[variant].desc)} className=" scale-110 text-lg text-center text-white bg-gray-800 hover:bg-gray-900 rounded-lg mx-auto my-[1%] px-[5%] block">
                                                Info
                                        </button>

                                        <div className='relative scale-[100%] -translate-y-[0%]'>
                                                {subcat[variant].media.map((media, index) => {
                                                        const isImage = media.match(/\.(jpeg|jpg|gif|png)$/) != null;
                                                        return isImage ? (
                                                                <img key={index} src={media} alt={`media-${index}`} className="w-full h-auto" />
                                                        ) : (
                                                                <div key={index} className="flex justify-center">
                                                                        <ReactPlayer url={media} />
                                                                </div>
                                                        );
                                                })}
                                        </div>
                                </li>
                        ))
                );
        };

        const getSubcatButtons = (skill, index, isLeftAligned) => {
                const positions = isLeftAligned
                        ? [
                                { top: '-15%', left: '0' },
                                { top: '-10%', left: '100%' },
                                { top: '10%', left: '100%' },
                                { top: '15%', left: '0' }
                        ]
                        : [
                                { top: '-15%', right: '0' },
                                { top: '-10%', right: '100%' },
                                { top: '10%', right: '100%' },
                                { top: '15%', right: '0' }
                        ];

                const translations = isLeftAligned
                        ? [
                                { transform: 'translateX(10%)' },
                                { transform: 'translateX(10%)' },
                                { transform: 'translateX(10%)' },
                                { transform: 'translateX(10%)' }
                        ]
                        : [
                                { transform: 'translateX(-10%)' },
                                { transform: 'translateX(-10%)' },
                                { transform: 'translateX(-10%)' },
                                { transform: 'translateX(-10%)' }
                        ];

                return Object.keys(skill.subcats).map((subcat, subIndex) => (
                        <motion.button
                                key={subIndex}
                                className='bg-green-500 text-white p-2 rounded absolute'
                                style={{ ...positions[subIndex], ...translations[subIndex], marginTop: `calc(80% * ${index})` }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                onClick={() => getSubcatContent(skill.subcats[subcat])}
                        >
                                {subcat}
                        </motion.button>
                ));
        };

        return (
                <div className='relative flex justify-center h-screen'>
                        <img
                                id="background-image"
                                src={SBManiaThumbnail}
                                alt="Snowball Mania"
                                className={`absolute inset-0 w-full h-full object-cover ${skillsDisplaying ? 'blur-[4px]' : ''}`}
                        />

                        <a href='/'>
                                <div className='absolute top-0 left-0 m-10 px-[2%] py-[1%] bg-blue-500 text-white rounded'>
                                        Return
                                </div>
                        </a>

                        <div className='relative flex justify-center items-center'>
                                <svg viewBox="0 0 100 100" className="size-[100%] relative">
                                        <circle
                                                cx="50"
                                                cy="50"
                                                r="48"
                                                stroke="cyan"
                                                strokeWidth="3"
                                                fill="DarkSlateGray"
                                                opacity={'90%'}
                                                onClick={handleClick}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                className='cursor-pointer z-20'
                                        />
                                        <text
                                                x="50"
                                                y="50"
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fill="white"
                                                fontFamily='Orbitron'
                                                fontSize="10"
                                                className='z-10'
                                        >
                                                Skills
                                        </text>
                                </svg>
                        </div>

                        <AnimatePresence>
                                {skillsDisplaying && (
                                        <>
                                                <motion.div
                                                        className='fixed -translate-x-[50%] -translate-y-[50%] top-[50%] flex flex-col max-w-max z-30'
                                                        initial={{ left: '45%' }}
                                                        animate={{ left: '10%' }}
                                                        exit={{ left: '45%' }}
                                                        transition={{
                                                                left: { duration: .5, delay: skillsDisplaying ? 1 : 0 }
                                                        }}
                                                >
                                                        <div className='flex flex-col relative'>
                                                                {SBMANIA.slice(0, 3).map((skill, index) => (
                                                                        <React.Fragment key={index}>
                                                                                <motion.button
                                                                                        className='bg-blue-500 text-white mb-5 p-2 rounded relative'
                                                                                        initial={{ marginBottom: '0%' }}
                                                                                        animate={{ marginBottom: '50%' }}
                                                                                        exit={{ marginBottom: '0%' }}
                                                                                        transition={{
                                                                                                marginBottom: { duration: 1, delay: skillsDisplaying ? 0 : .5 }
                                                                                        }}
                                                                                        onClick={() => setList(skill.name)}
                                                                                >
                                                                                        {skill.name}
                                                                                </motion.button>
                                                                                {programmingDisplaying && skill.name === 'Programming' && getSubcatButtons(skill, index, true)}
                                                                                {guiDisplaying && skill.name === 'GUI' && getSubcatButtons(skill, index, true)}
                                                                                {gfxDisplaying && skill.name === 'GFX' && getSubcatButtons(skill, index, true)}
                                                                        </React.Fragment>
                                                                ))}
                                                        </div>
                                                </motion.div>

                                                <motion.div
                                                        className='fixed translate-x-[50%] -translate-y-[50%] top-[50%] flex flex-col max-w-max z-30'
                                                        initial={{ right: '45%' }}
                                                        animate={{ right: '10%' }}
                                                        exit={{ right: '45%' }}
                                                        transition={{
                                                                right: { duration: .5, delay: skillsDisplaying ? 1 : 0 }
                                                        }}
                                                >
                                                        <div className='flex flex-col relative'>
                                                                {SBMANIA.slice(3).map((skill, index) => (
                                                                        <React.Fragment key={index}>
                                                                                <motion.button
                                                                                        className='bg-blue-500 text-white mb-5 p-2 rounded relative'
                                                                                        initial={{ marginBottom: '0%' }}
                                                                                        animate={{ marginBottom: '50%' }}
                                                                                        exit={{ marginBottom: '0%' }}
                                                                                        transition={{
                                                                                                marginBottom: { duration: 1, delay: skillsDisplaying ? 0 : .5 }
                                                                                        }}
                                                                                        onClick={() => setList(skill.name)}
                                                                                >
                                                                                        {skill.name}
                                                                                </motion.button>
                                                                                {animatingDisplaying && skill.name === 'Animating' && getSubcatButtons(skill, index, false)}
                                                                                {fxDisplaying && skill.name === 'FX' && getSubcatButtons(skill, index, false)}
                                                                                {managementDisplaying && skill.name === 'Management' && getSubcatButtons(skill, index, false)}
                                                                        </React.Fragment>
                                                                ))}
                                                        </div>
                                                </motion.div>
                                        </>
                                )}
                        </AnimatePresence>

                        <AnimatePresence>
                                {skillsDisplaying && (
                                        <motion.div
                                                className='fixed top-[15%] left-[5%] w-[90%] h-[75%] z-10'>
                                                <div className='absolute w-full h-full bg-black opacity-50'></div>
                                                <div className='absolute left-[50%] -translate-x-[50%] w-[5%] rounded-lg cursor-pointer bg-white' onClick={handleClick}>
                                                        <h1 className='text-center'>Back</h1>
                                                </div>
                                                {contentDisplaying && (
                                                        <>
                                                                <div className='relative left-[50%] top-[30%] -translate-y-[25%] -translate-x-[50%] overflow-auto bg-[url(https://w.wallhaven.cc/full/nm/wallhaven-nm9omy.jpg)] bg-cover' style={{ maxWidth: '60%', maxHeight: '90%' }} >
                                                                        <ul className=''>
                                                                                {variantList}
                                                                        </ul>
                                                                </div>
                                                                {infoDisplaying && (
                                                                        <div id="small-modal" tabindex="-1" className="absolute z-50  w-full p-4  md:inset-0 h-[100%]">
                                                                                <div className="relative left-[50%] top-[50%] -translate-y-[52%] -translate-x-[50%] w-full max-w-md max-h-[79%] overflow-scroll">
                                                                                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                                                                                                {variantInfo}
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                )}
                                                        </>
                                                )}
                                        </motion.div>
                                )}
                        </AnimatePresence>
                </div>
        );
};

export default SBMania;