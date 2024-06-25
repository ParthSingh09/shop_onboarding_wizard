import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const themes = [
  {
    name: 'Bags theme',
    description: '(recommended)',
    image: 'src/assets/bagtheme.png',
    selected: true,
  },
  {
    name: 'Flex theme',
    description: '',
    image: 'src/assets/flextheme.png',
    selected: false,
  },
  {
    name: 'Chic theme',
    description: '',
    image: 'src/assets/chictheme.png',
    selected: false,
  },
];

const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0].name);
  const navigate = useNavigate();

  const handleThemeSelection = (themeName) => {
    setSelectedTheme(themeName);
    localStorage.setItem('selectedTheme', themeName);
  };

  const handleNext = () => {
    navigate('/first-customization');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-10">Apply a theme</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {themes.map((theme, index) => (
          <div key={index} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full" src={theme.image} alt={theme.name} />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{theme.name}</h2>
              <p className="text-sm text-gray-600">{theme.description}</p>
              <button
                className={`mt-4 w-full py-2 px-4 border rounded ${
                  selectedTheme === theme.name ? 'border-green-500 text-green-500' : 'border-blue-500 text-blue-500'
                }`}
                onClick={() => handleThemeSelection(theme.name)}
              >
                {selectedTheme === theme.name ? '✔ Applied' : 'Apply'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 py-2 px-4 bg-blue-500 text-white rounded" onClick={handleNext} >Next</button>
    </div>
  );
};

export default ThemeSelector;
