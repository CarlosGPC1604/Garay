import ProjectCards from "../../../components/ProjectCards";


export default function Proyectos() {

  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./proyects-paralax.webp)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backgroundPosition: '50% 50%',
    overflow: 'hidden',
    backdropFilter: 'blur(0)',
    WebkitBackdropFilter: 'blur(0)',
    backgroundAttachment: "fixed",
    transition: 'background-image 0.5s ease-in-out',
  };
  return (
    <section>
      <div className='w-full py-[150px] flex items-center justify-center' style={divStyle}>
        <div className='text-center'>
          <h1 className="text-[33px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px] font-medium text-[#bd1622]">
            Descubre nuestro
            <span className='text-white'>
              portafolio
            </span>
          </h1>
          <p className='text-2xl text-white'>
            Inspiración en Cada Diseño
          </p>
        </div>
      </div>
      {/* Hero */}
      <ProjectCards />
    </section>
  );
}