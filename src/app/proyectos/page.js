import ProjectCards from "../../../components/ProjectCards";

export default function Proyectos() {

  return (
    <section>
      {/* Hero */}
      <div className='w-full py-[150px] flex items-center justify-center'>
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