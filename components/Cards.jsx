import React from 'react';

const cardsData = [
    {
        id: 1,
        service:"Ofrecemos planificación de construcción eficiente y dentro del presupuesto.",
        icon: (
            <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
            </svg>
        ),
        description: "Planificación de proyectos"
    },
    {
        id: 2,
        service:"Ofrecemos diseño arquitectónico completo, adaptado a tus necesidades y estándares.",
        icon: (
            <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
            </svg>
        ),
        description: "Diseño arquitectónico"
    },
    {
        id: 3,
        service:"Brindamos supervisión en sitio para cumplir estándares y planos, asegurando proyectos exitosos.",
        icon: (
            <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1z" />
            </svg>
        ),
        description: "Supervisión de obras"
    },
    {
        id: 4,
        service:"El render 3D es clave en proyectos arquitectónicos para decisiones, presentaciones y aprobaciones.",
        icon: (
            <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.157 5.968h-.844v4.06h.844c1.116 0 1.621-.667 1.621-2.02 0-1.354-.51-2.04-1.621-2.04" />
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.184 4.368c.646 0 1.055.378 1.06.9.008.537-.427.919-1.086.919-.598-.004-1.037-.325-1.068-.756H3c.03.914.791 1.688 2.153 1.688 1.24 0 2.285-.66 2.272-1.798-.013-.953-.747-1.38-1.292-1.432v-.062c.44-.07 1.125-.527 1.108-1.375-.013-.906-.8-1.57-2.053-1.565-1.31.005-2.043.734-2.074 1.67h1.103c.022-.391.383-.751.936-.751.532 0 .928.33.928.813.004.479-.383.835-.928.835h-.632v.914zM8.126 11h2.189C12.125 11 13 9.893 13 7.985c0-1.894-.861-2.984-2.685-2.984H8.126z" />
            </svg>
        ),
        description: "Creación de renders 3D"
    }
];

function Cards() {
    return (
        <div className='w-full px-[15px] py-[50px]'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 flex items-center justify-center'>
                    <div>
                        <div className="mx-auto text-white text-center lg:text-right">
                            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                                Te ofrecemos los mejores
                            </h2>
                            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                                servicios
                            </h2>
                            <p className="text-wrap-balance mt-2">
                                En nuestro estudio, nos dedicamos apasionadamente a cada proyecto con el objetivo de trascender las expectativas y crear obras arquitectónicas que no solo sean funcionales y estéticamente agradables, sino que también cuenten una historia única. Nos esforzamos por fusionar la innovación con la sensibilidad hacia el entorno, incorporando prácticas sostenibles y soluciones creativas en cada diseño.
                            </p>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-2 overflow-hidden">
                        {/* cards */}
                        {cardsData.map(card => (
                            <div key={card.id} className="mx-auto flex items-center justify-center relative overflow-hidden bg-[#1b1b1b] hover:bg-[#2c2a2a] py-12 w-full">
                                <div>
                                    {card.icon}
                                    <p className="mt-3 text-center">
                                        {card.description}
                                    </p>
                                    <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300">
                                        <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-lg"></div>
                                        <div className="text-white relative z-10 text-center p-1 lg:p-3">
                                            <p>
                                                {card.service}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* cards */}
                </div>
            </div>
        </div>
    );
}

export default Cards;
