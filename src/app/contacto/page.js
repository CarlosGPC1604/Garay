import ContactCards from "../../../components/ContactCards";
import Mapa from "../../../components/Mapa";

export default function Contacto() {

    const divStyle = {
        backgroundImage: 'url(./dark-bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        overflow: 'hidden',
        transition: 'background-image 0.5s ease-in-out',
    };

    return (
        <section className="bg-[#c5c5c5] dark:bg-[#231f20]" style={divStyle}>
            {/* Hero */}
            <div className='w-full py-[150px] flex items-center justify-center contacto hero-bg'>
                <div className='text-center'>
                    <h1 className="text-[#c21e25] text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                        Contactanos
                    </h1>
                    <p className="text-lg text-white">
                        Contactanos y te ayudamos a hacerlo realidad
                    </p>
                </div>
            </div>
            {/* Hero */}
            {/* Cards */}
            <ContactCards />
            {/* Cards */}
            {/* Mapa */}
            <Mapa />
            {/* Mapa */}
        </section>
    );
}