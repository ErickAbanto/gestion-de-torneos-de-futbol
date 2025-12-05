import { Title } from "../atoms/Title";
import { Paragraph } from "../atoms/Paragraph";

export const HomeDescription = () => (
  <div className="md:w-1/2 animate-fadeIn">
    <Title>Bienvenido al Sistema de Gestión de Torneos</Title>

    <Paragraph>
      Administra equipos, jugadores, torneos, partidos y resultados de manera
      rápida, ordenada y accesible para organizadores y público en general
      de Celendín.
    </Paragraph>
  </div>
);
