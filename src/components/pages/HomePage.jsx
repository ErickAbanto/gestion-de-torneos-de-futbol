function HomePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-blue-200 p-8 rounded-xl shadow-lg">
        
        {/* DESCRIPCIÓN */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">
            Bienvenido al Sistema de Gestión de Torneos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Administra equipos, jugadores, torneos, partidos y resultados de manera rápida, ordenada 
            y accesible para organizadores y público en general de la provincia de Celendín.
          </p>
        </div>

        {/* IMAGEN */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://media.istockphoto.com/id/1400857848/es/vector/ilustraci%C3%B3n-del-logotipo-o-etiqueta-de-f%C3%BAtbol-dorado.jpg?s=612x612&w=0&k=20&c=Cf-gYR2fB0n9xk6lNCZuL6QaNDTQ91j940QEVRSTrss=" 
            alt="Torneos de Fútbol Celendín" 
            className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>
  );
}

export { HomePage };
