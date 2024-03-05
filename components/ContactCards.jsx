import React from 'react';

function ContactCards() {
    return (
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 px-[10px] py-[30px]">
            {/* card-1 */}
            <a className="bg-[#1b1919] hover:bg-[#2c2a2a] flex justify-center items-center p-4" href="tel:311 456 7907" target="_blank">
                <div>
                    <div>
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                    </div>
                    <div className="text-left mt-3 text-center">
                        <p className="font-bold">
                            Teléfono:
                        </p>
                        <p>
                            311 456 7907
                        </p>
                    </div>
                </div>
            </a>
            {/* card-1 */}
            {/* card-2 */}
            <a className="bg-[#1b1919] hover:bg-[#2c2a2a] flex justify-center items-center p-4" href="https://www.google.com/maps/place/Garay+Arquitectos,+INEGI,+Av.+Insurgentes+76+pte.+Col.+Centro+frente+al,+63000+Tepic,+Nay./@21.5048858,-104.8959446,17z/data=!4m6!3m5!1s0x842737ad5ef58b63:0x29a086ee978a3aeb!8m2!3d21.5048858!4d-104.8959446!16s%2Fg%2F11qp0qml2k" target="blank">
                <div>
                    <div>
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </div>
                    <div className="text-center mt-3">
                        <p className="font-bold">
                            Dirección:
                        </p>
                        <p>
                            Av. Insurgentes 76 pte. Col. Centro , 63000 Tepic, Nay.
                        </p>
                    </div>
                </div>
            </a>
            {/* card-2 */}
            {/* card-3 */}
            <a className="bg-[#1b1919] hover:bg-[#2c2a2a] flex justify-center items-center p-4" href="mailto:garay.arquitectos@gmail.com">
                <div >
                    <div>
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                        </svg>
                    </div>
                    <div className="text-center mt-3">
                        <p className="font-bold">
                            Correo:
                        </p>
                        <p className='break-all'>
                            garay.arquitectos@gmail.com
                        </p>
                    </div>
                </div>
            </a>
            {/* card-3 */}
            {/* card-4 */}
            <div className="bg-[#1b1919] hover:bg-[#2c2a2a] p-4 hover:">
                <div>
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                </div>
                <div className="text-center mt-3">
                    <p>Lunes a Viernes: 9:00 AM - 2:00 PM & 4:00 PM - 7:00 PM</p>
                    <p className="mt-3">Sabado: 9:00 AM - 2:00 PM</p>
                    <p>Domingo: Cerrado</p>
                </div>
            </div>
            {/* card-4 */}
        </div>
    );
}

export default ContactCards;