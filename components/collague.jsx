import React from 'react';

function Collague() {
    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='flex items-center'>
                <div className='text-center'>
                    <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                        Armonía Urbana
                    </h2>
                    <p className='mt-5'>
                        Sumérgete en nuestro collage visual que captura la diversidad y creatividad de la arquitectura moderna. Desde imponentes rascacielos hasta íntimos espacios públicos, cada imagen es una pieza clave en la sinfonía de formas, líneas y texturas que define nuestro entorno urbano. Celebra la belleza e innovación en la creación de espacios urbanos en este viaje visual único. ¡Bienvenido a "Armonía Urbana"!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                <div className='col-span-1 lg:col-span-1'>
                    <img src="/collague/casa-ciruelos.jpg" alt="" style={imageStyle} />
                </div>
                <div className='col-span-2 lg:col-span-3'>
                    <img src="/collague/Casa-Mari-Trini.jpg" alt="" style={imageStyle} />
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <img src="/collague/casa-lindavista.jpg" alt="" style={imageStyle} />
                </div>
                <div className='col-span-1 lg:col-span-1'>
                    <img src="/collague/Casa-Senderos.jpg" alt="" style={imageStyle} />
                </div>
                <div className='col-span-1 lg:col-span-1'>
                    <img src="/collague/Fotos.jpeg" alt="" style={imageStyle} />
                </div>
                <div className='col-span-2 lg:col-span-3'>
                    <img src="/collague/Planta-Tomates.jpg" alt="" style={imageStyle} />
                </div>
            </div>
        </div>
    );
}

export default Collague;
