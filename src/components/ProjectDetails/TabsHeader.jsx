import { useState } from 'react';

export default function TabsHeader({ tabs, setTabs }) {
  const handleActive = id => {
    setTabs(prev =>
      prev.map(tab =>
        tab.id === id
          ? { ...tab, isActive: true }
          : { ...tab, isActive: false },
      ),
    );
  };

  return (
    <div className="w-full h-12 overflow-clip sticky bottom-0 left-0 right-0 bg-slate-50">
      <div className="flex gap-4 h-full">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleActive(tab.id)}
            className={`py-3 px-4 text-sm font-medium ${tab.isActive ? 'text-custom_green border-b-2 border-custom_green' : 'text-custom_black'}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}
