'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAnimatedText from './CardAnimatedText';

const ProyectCards = () => {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                handleCloseModal();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };

    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };

    const list = [
        {
            title: "DISEÑO DE MARCA",
            icon: "/icons/LalaWeen-WEB-08.webp",
            sub: "Abarcamos el branding y la identidad corporativa de tu marca.",
            text: "Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.",
            images: [
                "/DISEÑO DE MARCA/Mock up Tarjeta Estudio Arq Logotipo.webp",
                "/DISEÑO DE MARCA/Mock up Etiqueta Tanukiya_11zon_11zon.webp",
                "/DISEÑO DE MARCA/Mock up Gorra MJ.webp",
                "/DISEÑO DE MARCA/Mock up Hoja reciclada.webp",
                "/DISEÑO DE MARCA/Mock up Oficina-min.webp"
            ],
            bgColor: "rgba(0, 0, 0, 0.7)",
        },
        {
            title: "IDENTIDAD GRAFICA",
            icon: "/icons/LalaWeen-WEB-09_1.webp",
            sub: "Diseñamos y definimos el aspecto visual de una marca.",
            text: "En base al logotipo, misión, visión y objetivo de la empresa, se realiza el diseño adecuado para impreso o digital de una manera que sea fácil de identificar para el espectador y logre relacionarlo con la marca.",
            images: [
                "/IDENTIDAD GRÁFICA/Mock up Branding_3_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up hoja grabada_5_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Receta SoyTotalmenteKeto_6_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación A_7.webp",
                "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación B_8.webp",
                "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación D_9.webp",
                "/IDENTIDAD GRÁFICA/Mouckup Triptico pizzopolis_10_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Bolsa de paja_1_11zon.webp",
                "/IDENTIDAD GRÁFICA/Mock up Bolsa de papel ConCafé_2.webp",
                "/IDENTIDAD GRÁFICA/Mock up caja_4_11zon.webp"
            ],
            bgColor: "rgba(0, 0, 0, 0.7)",
        },
        {
            title: "REDES SOCIALES Y DISEÑO WEB",
            icon: "/icons/LalaWeen-WEB-10.webp",
            text: "Identificación del público objetivo, creación de contenido en redes sociales para construir relaciones sólidas, y facilitación de adquisiciones a través de una página web atractiva y amigable.",
            images: [
                "/REDES Y WEB/Mock up Tablet_4_11zon.webp",
                "/REDES Y WEB/Mock up Redes Sociales Dr José_1.webp",
                "/REDES Y WEB/Mock up Redes Sociales Dra Jaz_2_11zon.webp",
                "/REDES Y WEB/Mock up Redes Sociales Dra Marcela_3_11zon.webp",
                "/REDES Y WEB/Mock up Tablet1_5_11zon.webp",
                "/REDES Y WEB/Mock up WEB_6_11zon.webp",
            ],
            bgColor: "rgba(0, 0, 0, 0.7)",
        },
    ];


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-[50px] px-[15px]'>
                {/* Cards */}
                {list.map((item, index) => (
                    <div className="rounded-[15px]" key={index} style={{ backgroundColor: item.bgColor }}>
                        <button className='cursor-pointer' onClick={() => handleOpenModal(index)}>
                            Abrir modal
                            </button>
                
                        
                    </div>
                ))}
                {/* Cards */}
            </div>

            {/* Modal */}
            {openModalIndex !== null && (
                <div className="modal-overlay z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-black rounded-[15px] w-[360px] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1300px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        {/* header del modal */}
                        <div className='p-5' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <p className='title text-2xl'>
                                    {list[openModalIndex].title}
                                </p>
                            </div>
                            {/* Botón para cerrar el modal */}
                            <button
                                className="text-white bg-transparent border-none cursor-pointer"
                                onClick={handleCloseModal}
                                style={{ marginTop: '0' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                            {/* Botón para cerrar el modal */}
                        </div>
                        {/* header del modal */}
                        {/* Contenido del modal */}
                        <div>
                            <Slider className='w-[75%] mx-auto' {...settings}>
                                {list[openModalIndex].images.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            className='w-auto h-[400px] object-contain mx-auto'
                                            src={image}
                                            alt={`slider-${index}`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        {/* Contenido del modal */}
                        {/* footer del modal */}
                        <div className='p-5'>
                            {/* Botón para cerrar el modal */}
                            <div className='flex justify-end'>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleCloseModal}>
                                    Cerrar
                                </button>
                            </div>
                            {/* Botón para cerrar el modal */}
                        </div>
                        {/* footer del modal */}
                    </div>
                </div>
            )}
            {/* Modal */}
        </section>
    );
}

export default ProyectCards;