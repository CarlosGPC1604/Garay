import React from 'react';

function PresentationCards() {
    return (
        <>
         <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {/* Card 1 */}
                <div className='rounded-[15px]'>
                  
                        <div>
                            <img className='rounded-[15px]' src="design.webp" alt="design" />
                        </div>
                        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300' style={{ background: 'linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 0, 0.2))' }}>
                            <div>
                                <div className='w-[30%] mx-auto'>
                                    <svg data-slot="icon" fill="none" stroke-width="1.0" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"></path>
                                    </svg>
                                </div>
                                <p className='text-center mt-3'>
                                    Diseño Arquitectonico
                                </p>
                                <p className='text-center mt-3'>
                                    Cada proyecto es unico creativo y con un excelentr diseño.
                                </p>
                            </div>
                        </div>
                
                </div>
                {/* Card 1 */}
            </div>
            
        </div>

        
        </>
       
    );
}

export default PresentationCards;

