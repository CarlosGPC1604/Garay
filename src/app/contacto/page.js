
import ContactCards from "../../../components/ContactCards";
import Mapa from "../../../components/Mapa";

export default function Contacto() {
    return (
        <section>
            {/* Titulo */}
            <div className="container mx-auto py-[125px]">
                <div className="text-center">
                    <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                        Contactanos
                    </h1>
                    <p className="text-lg">
                        Contactanos y te ayudamos a hacerlo realidad
                    </p>
                </div>
            </div>
            {/* Titulo */}
            {/* Cards */}
            <ContactCards />
            {/* Cards */}
            {/* Mapa */}
            <Mapa />
            {/* Mapa */}
        </section>
    );
}