import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			{/* Titulo */}
			<div className="text-center">
				<h2 className={title({ color: "red" })}>¿Tienes alguna idea en mente?</h2>
				<h2 className="mt-4">Contactanos y te ayudamos a hacerlo realidad</h2>
			</div>
			{/* Titulo */}
			<div>
				{/* contacto */}
				<div className="mt-5">
					<div className="text-center">
						<h2 className="text-[2.0rem]">Contacto</h2>
					</div>
					<div className="text-left mt-5">
						<p><strong>Dirección:</strong>Av. Insurgentes 76 pte. Col. Centro , 63000 Tepic, Nay.</p>
						<a href="tel:311 456 7907" target="_blank">
							<p><strong>Teléfono:</strong>tel: 311 456 7907</p>
						</a>
						<p><strong>Correo Electrónico:</strong> <a href="mailto:garay.arquitectos@gmail.com">garay.arquitectos@gmail.com</a></p>
					</div>
				</div>
				{/* contacto */}
				{/*Redes sociales*/}
				<div className="mt-5">
					<div>
						<h2 className="text-[2.0rem]">Siguenos en nuestras redes sociales</h2>
					</div>
					<div className="text-center">
						<a href="https://www.facebook.com/garay.arquitectos/" target="_blank">
							<p>Facebook</p>
						</a>
						<a href="https://www.instagram.com/garay.arquitectos/" target="_blank">
							<p>Instagram</p>
						</a>
					</div>
				</div>
				{/*Redes sociales*/}
				{/* Horario */}
				<div className="mt-5">
					<h2 className="text-[2.0rem]">Horario de Atención</h2>
					<p>Lunes a Viernes: 9:00 AM - 2:00 PM & 4:00 PM - 7:00 PM</p>
					<p>Sabado: 9:00 AM - 2:00 PM</p>
					<p>Domingo: Cerrado</p>
				</div>
				{/* Horario */}
				{/* Mapa */}
				<div className="mt-5">
					<h2>Visitanos</h2>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.468960221434!2d-104.89810813798556!3d21.504856622501443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737ad5ef58b63%3A0x29a086ee978a3aeb!2sGaray%20Arquitectos!5e0!3m2!1sen!2smx!4v1700590660418!5m2!1sen!2smx" width="600" height="450" loading="lazy"></iframe>
				</div>
				{/* Mapa */}
			</div>
		</div>
	);
}