import React from 'react';

export default function Header({
  referralEnabled,
  onToggleReferral,
  search,
  onSearch,
}: {
  referralEnabled: boolean;
  onToggleReferral: (v: boolean) => void;
  search: string;
  onSearch: (v: string) => void;
}) {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="hexagon w-10 h-10 mr-3 flex items-center justify-center bg-blue-500 text-white font-bold" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            CW
          </div>
          <h1 className="logo-text text-2xl font-extrabold tracking-tight">Criptoactivos.Wiki</h1>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            {/* Toggle de referido */}
            <span className="mr-2 text-sm">Mostrar enlaces de referido</span>
            <label className="switch relative inline-block w-10 h-6 align-middle select-none">
              <input
                type="checkbox"
                checked={referralEnabled}
                onChange={e => onToggleReferral(e.target.checked)}
                className="opacity-0 w-0 h-0"
              />
              <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition rounded-full">
                <span className="absolute content-[''] h-4 w-4 left-1 bottom-1 bg-white transition rounded-full" style={{ transform: referralEnabled ? 'translateX(16px)' : 'none' }} />
              </span>
            </label>
          </div>
          {/* SearchBar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={search}
              onChange={e => onSearch(e.target.value)}
              className="py-2 px-4 rounded-full text-gray-800 text-sm w-64"
            />
            <button className="absolute right-0 top-0 h-full px-3 text-gray-600">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
