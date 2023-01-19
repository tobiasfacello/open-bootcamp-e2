import React, { useState, useEffect } from "react";
import { Persona } from "../../models/persona.class";

const ClockF = (props) => {
	const defaultPersona = new Persona(new Date(), "Tobias", "Facello", 22);

	const [data, setData] = useState(defaultPersona);

	const tick = () => {
		setData((prevData) => {
			const newAge = prevData.age++;
			return new Persona(new Date(), "Tobias", "Facello", newAge);
		});
	};

	useEffect(() => {
		setInterval(() => tick(), 1000);
	}, []);

	return (
		<div>
			<h2>Hora actual: {data.date.toLocaleTimeString()}</h2>
			<h2>
				Nombre completo: {data.firstName} {data.lastName}
			</h2>
			<h2>Edad: {data.age}</h2>
		</div>
	);
};

export default ClockF;
