import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar proyectos..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="py-2 px-4 rounded-full text-gray-800 text-sm w-64"
      />
      <button className="absolute right-0 top-0 h-full px-3 text-gray-600">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
