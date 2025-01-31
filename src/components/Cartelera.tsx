import "../index.css";
import { CalendarDays, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const events = [
  {
    fecha: "1/02/2025",
    hora: "1 hora",
    tema: "Alimentación parenteral del niño en cuidados especiales",
    actividad: "Charla",
    departamento: "NUTRICIÓN",
    responsable: "Lcda. Ana Colón",
    duracion: "1 hora",
    modalidad: "Presencial",
  },
  {
    fecha: "12/02/2025",
    hora: "1 hora",
    tema: "Control interno",
    actividad: "Charla",
    departamento: "GERENCIA ADMINISTRATIVA FINANCIERA",
    responsable: "Gerente Administrativo Financiero",
    duracion: "1 hora",
    modalidad: "Presencial",
  },
  {
    fecha: "12/02/2025",
    hora: "1 hora",
    tema: "Unidosis",
    actividad: "Capacitación",
    departamento: "FARMACIA",
    responsable: "Heidi Santos",
    duracion: "1 hora",
    modalidad: "Presencial",
  },
  {
    fecha: "13/02/2025",
    hora: "45 min",
    tema: "Habilidades Blandas",
    actividad: "Charla",
    departamento: "UISAU",
    responsable: "Dr. Edgar Eli Cuxil Salazar",
    duracion: "45 minutos",
    modalidad: "Presencial",
  },
  {
    fecha: "17/02/2025",
    hora: "1 hora",
    tema: "Elaboración y manejo correcto de Tarjetas Cardex",
    actividad: "Capacitación",
    departamento: "PRODUCTOS AFINES",
    responsable: "Elsa Hernandez Ramón",
    duracion: "1 hora",
    modalidad: "Presencial",
  },
  {
    fecha: "17/02/2025",
    hora: "1 hora",
    tema: "Socialización Normativa Interna de la sección de Inventarios",
    actividad: "Charla",
    departamento: "INVENTARIO DE ACTIVOS FIJOS",
    responsable: "Christian Daniel Gomez Figueroa y Mario René Velásquez Canú",
    duracion: "1 hora",
    modalidad: "Presencial",
  },
  {
    fecha: "25/02/2025",
    hora: "6 horas",
    tema: "RCP Avanzado Adulto, Cuidados Pre y Post Operatorios, Atención y manejo a pacientes VSVS, Dilución y administración de medicamentos",
    actividad: "Capacitación",
    departamento: "ENFERMERÍA",
    responsable: "Comité de Formación y Capacitación",
    duracion: "6 horas",
    modalidad: "Presencial",
  },
  {
    fecha: "26/02/2025",
    hora: "6 horas",
    tema: "Cuidados pre y post operatorios, Manejo de emergencias en quirófano, Uso del carro rojo, Socialización de medicamentos y su uso en el carro rojo, Manejo del estrés laboral",
    actividad: "Capacitación",
    departamento: "---",
    responsable: "Comité de Formación y Capacitación",
    duracion: "6 horas",
    modalidad: "Presencial",
  },
  {
    fecha: "27/02/2025",
    hora: "6 horas",
    tema: "Cuidados pre y post operatorios, Atención y manejo de pacientes VSVS, Protocolo de pacientes VIH positivo, Dilución y administración de medicamentos",
    actividad: "Capacitación",
    departamento: "---",
    responsable: "Comité de Formación y Capacitación",
    duracion: "6 horas",
    modalidad: "Presencial",
  },
  {
    fecha: "28/02/2025",
    hora: "60 min",
    tema: "Compatibilidades sanguíneas",
    actividad: "Capacitación",
    departamento: "CENTRO TRANSFUNCIONAL",
    responsable: "Lic. Marvynn Coy",
    duracion: "60 minutos",
    modalidad: "Presencial",
  },
  {
    fecha: "28/02/2025",
    hora: "6 horas",
    tema: "RCP avanzado pediátrico, Dilución y administración de medicamentos, Traslado de neonatos, Salud mental",
    actividad: "Capacitación",
    departamento: "---",
    responsable: "Comité de Formación y Capacitación",
    duracion: "6 horas",
    modalidad: "Presencial",
  },
];

export default function Capacitaciones() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo Hospital" className="logo" />
        </div>
        <h1 className="header-title_">
          Capacitaciones y Charlas Febrero 2025 <br />
          Hospital General Tipo I de Tecpán Guatemala
        </h1>
      </header>

      <div className="container">
        <div className="grid">
          {events.map((event, index) => (
            <div key={index} className="card">
              <h2>{event.tema}</h2>
              <p>
                <strong>Actividad:</strong> {event.actividad}
              </p>
              <p>
                <strong>Departamento:</strong> {event.departamento}
              </p>
              <p>
                <strong>Responsable:</strong> {event.responsable}
              </p>
              <p>
                <strong>Duración:</strong> {event.duracion}
              </p>
              <div className="info">
                <CalendarDays />
                <span>{event.fecha}</span>
                <Clock />
                <span>{event.hora}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
