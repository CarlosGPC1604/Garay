'use client';
import React, { useState, useEffect } from 'react';


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
          
        },
        {
           
        },
        {
          
        },
    ];

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
                    <div className="modal bg-black rounded-[15px] w-[360px] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1300px]">
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