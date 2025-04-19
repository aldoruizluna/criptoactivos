import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function App() {
  const [referralEnabled, setReferralEnabled] = useState(true);
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        referralEnabled={referralEnabled}
        onToggleReferral={setReferralEnabled}
        search={search}
        onSearch={setSearch}
      />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <Sidebar />
        <main className="md:w-3/4 lg:w-4/5">
          {/* Aquí irán las secciones de introducción, destacados, exchanges, etc. */}
          <section className="mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">La Guía Definitiva de Web3 y Crypto para Hispanohablantes</h2>
              <p className="mb-4">Bienvenido a <strong>Criptoactivos.Wiki</strong>, tu recurso completo de proyectos blockchain, web3 y criptomonedas diseñado específicamente para la comunidad hispana. Aquí encontrarás información detallada sobre los mejores proyectos, desde las grandes plataformas establecidas hasta las innovaciones emergentes.</p>
              <p>Todos los enlaces que verás incluyen nuestros códigos de referido, lo que significa que si decides registrarte a través de ellos, estarás apoyando este proyecto sin costo adicional para ti. Nuestro objetivo es brindarte información valiosa mientras construimos juntos la mayor base de datos de proyectos crypto para hispanohablantes.</p>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="mr-2">ℹ️</span>
                  ¿Cómo usar esta guía?
                </h3>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Explora las diferentes categorías usando el menú lateral</li>
                  <li>Cada proyecto incluye información sobre su programa de referidos</li>
                  <li>Utiliza los filtros para encontrar proyectos específicos</li>
                  <li>Activa/desactiva los enlaces de referido según prefieras</li>
                </ul>
              </div>
            </div>
          </section>
          {/* Aquí irán ProjectCards y secciones de categorías (destacados, exchanges, etc.) */}
        </main>
      </div>
    </div>
  );
}
