"use client";
import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button className={`cursor-pointer fixed bottom-3 right-2 lg:bottom-12 lg:right-10 bg-[#e12527] hover:bg-[#e0323c] text-white px-6 py-5 z-50  ${isVisible ? 'visible' : 'invisible'}`} onClick={scrollToTop}>
            ▲
        </button>
    );
};

export default ScrollTop;
