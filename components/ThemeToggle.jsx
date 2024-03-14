// components/ThemeToggle.js

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Estado para controlar el modo de la página
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar entre modos
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Efecto para aplicar el modo oscuro/claro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      className={`bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 text-black dark:text-white font-bold py-2 px-4 rounded`}
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default ThemeToggle;
