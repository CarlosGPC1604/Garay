"use client";
import React, { useState, useRef, useEffect } from 'react';

const IframeRender = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);
    return (
        <section>
            <div ref={menuRef} className="text-white w-full bg-[#000000]">
                <div className='flex items-center justify-center'>
                    {/* Drop button */}
                    <div className="">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:border-none flex items-center justify-center py-6 "
                            aria-label="Toggle Menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </button>
                    </div>
                    {/* Drop button */}
                </div>
                {/* Contenido del drop */}
                {isMenuOpen && (
                    <div className="">
                        <iframe
                            title="Mapa de Garay Arquitectos"
                            src="https://www.thetamora.com/webvr-showroom/"
                            width="100%"
                            height="600"
                            loading="lazy"
                        >
                        </iframe>
                    </div>
                )}
                {/* Contenido del drop */}
            </div>
        </section>
    );
};

export default IframeRender;