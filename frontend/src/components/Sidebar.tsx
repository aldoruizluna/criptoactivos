import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExchangeAlt, faCoins, faImage, faLayerGroup, faWallet, faPiggyBank, faHandHoldingUsd, faGlobeAmericas, faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'Destacados', icon: faStar, hash: 'destacados', active: true },
  { name: 'Exchanges', icon: faExchangeAlt, hash: 'exchanges' },
  { name: 'DeFi', icon: faCoins, hash: 'defi' },
  { name: 'NFT', icon: faImage, hash: 'nft' },
  { name: 'Layer 1/2', icon: faLayerGroup, hash: 'layer' },
  { name: 'Wallets', icon: faWallet, hash: 'wallets' },
  { name: 'Staking', icon: faPiggyBank, hash: 'staking' },
  { name: 'Lending', icon: faHandHoldingUsd, hash: 'lending' },
  { name: 'Para Hispanohablantes', icon: faGlobeAmericas, hash: 'hispanos' },
];

export default function Sidebar() {
  return (
    <aside className="md:w-1/4 lg:w-1/5 mb-6 md:mb-0 md:mr-6" id="sidebar">
      <div className="bg-white sidebar rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Categorías</h2>
        <ul>
          {categories.map(cat => (
            <li className="mb-1" key={cat.name}>
              <a
                href={`#${cat.hash}`}
                className={`category-filter flex items-center p-2 rounded-md ${cat.active ? 'bg-blue-500 text-white active' : 'hover:bg-gray-100'}`}
              >
                <FontAwesomeIcon icon={cat.icon} className="mr-2" /> {cat.name}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-4">Filtros</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="comision-min">Comisión mínima</label>
            <select id="comision-min" className="w-full p-2 border rounded-md bg-white">
              <option>Cualquiera</option>
              <option>5%+</option>
              <option>10%+</option>
              <option>20%+</option>
              <option>30%+</option>
              <option>40%+</option>
              <option>50%+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="disponible-en">Disponible en</label>
            <select id="disponible-en" className="w-full p-2 border rounded-md bg-white">
              <option>Todo el mundo</option>
              <option>Latinoamérica</option>
              <option>España</option>
              <option>México</option>
              <option>Argentina</option>
              <option>Colombia</option>
              <option>Chile</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tipo-proyecto">Tipo de proyecto</label>
            <select id="tipo-proyecto" className="w-full p-2 border rounded-md bg-white">
              <option>Todos</option>
              <option>Centralizados</option>
              <option>Descentralizados (DApps)</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
