import React from 'react';
import arenaDemo from '../../assets/arenaDemo.jpg'; // necesito poner una imagen de arena use una cualquiera
import ArenaButton from '../arenaSectionButton/ArenaSectionButton';

const Arena = () => {
  const handleClick = () => {
    // PONER URL DEL FORO CUIDADOOOOO 
    window.location.href = '/arenas';
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-[#E8E3CE]">
      {/* Texto Arena */}
        <div className="max-w-md text-left space-y-4">
          <h2 className="text-5xl font-extrabold text-[#3B1F0B] tracking-wide">ARENAS</h2>
          <p className="text-[#3B1F0B] text-lg font-semibold">Lucha por turnos en todo el mundo</p>
          <p className="text-[#3B1F0B] text-base leading-relaxed">
            Cada arena es un escenario estratégico donde podrás demostrar tu ingenio y planificar
            jugadas únicas. Están diseñadas para combates por turnos, tácticas inteligentes y
            momentos memorables. ¡Haz la jugada que otros recordarán y querrán imitar!
          </p>
          <ArenaButton text="Ver todas las arenas" onClick={handleClick} />
        </div>

      {/* Imagen Arena*/}
      <div>
          <img
            src={arenaDemo}
            alt="Arena"
            className="w-80 h-80 rounded-full object-cover shadow-lg  border-[#3B1F0B]"
          />
      </div>
    </div>
  );
};

export default Arena;
