import React from 'react';

export default function ToggleReferral({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center text-sm">
      <span className="mr-2">Mostrar enlaces de referido</span>
      <label className="switch relative inline-block w-10 h-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="opacity-0 w-0 h-0"
        />
        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition rounded-full">
          <span className="absolute content-[''] h-4 w-4 left-1 bottom-1 bg-white transition rounded-full" style={{ transform: checked ? 'translateX(16px)' : 'none' }} />
        </span>
      </label>
    </label>
  );
}
