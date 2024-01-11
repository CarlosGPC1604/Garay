import React from "react";

export default function PresentationCards() {

    return (
        <div className="paralax-1 w-full py-[60px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="rounded-[15px] w-[80%] mx-auto">
                        <div className="relative">
                            <div >
                                <img className="rounded-[15px]" src="/design.webp" alt="design" />
                            </div>
                            <div className="absolute bottom-0 py-[15px] rounded-b-[15px] w-full" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)' }}>
                                <div className="w-[30%] mx-auto">
                                    <svg data-slot="icon" fill="none" stroke-width="1.0" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"></path>
                                    </svg>
                                </div>
                                <p className="text-center mt-3 font-black">
                                    Diseño Arquitectonico
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 */}
                    {/* Card 2 */}
                    <div className="rounded-[15px] w-[80%] mx-auto">
                        <div className="relative">
                            <div >
                                <img className="rounded-[15px]" src="/plan.webp" alt="design" />
                            </div>
                            <div className="absolute bottom-0 py-[15px] rounded-b-[15px] w-full" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)' }}>
                                <div className="w-[30%] mx-auto">
                                    <svg data-slot="icon" fill="none" stroke-width="0.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                                    </svg>
                                </div>
                                <p className="text-center mt-3 font-black">
                                    Planificación de proyectos
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    {/* Card 3 */}
                    <div className="rounded-[15px] w-[80%] mx-auto">
                        <div className="relative">
                            <div >
                                <img className="rounded-[15px]" src="/supervision.webp" alt="design" />
                            </div>
                            <div className="absolute bottom-0 py-[15px] rounded-b-[15px] w-full" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)' }}>
                                <div className="w-[30%] mx-auto">
                                    <svg data-slot="icon" fill="none" stroke-width="0.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                                    </svg>
                                </div>
                                <p className="text-center mt-3 font-black">
                                    Supervisión de obras
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                </div>
            </div>
        </div>
    );
}