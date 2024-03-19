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
            <div className='w-full py-[150px] flex items-center justify-center hero-bg proyectos'>
                <div className='text-center'>
                    <h1 className="text-[33px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px] font-medium text-[#bd1622]">
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