import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verificar si el usuario ha seleccionado el modo oscuro previamente
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Guardar el modo en localStorage
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    // Aplicar el modo oscuro al cargar el componente
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      className={`bg-gray-800 dark:bg-gray-300 hover:bg-gray-700 dark:hover:bg-gray-400 text-white dark:text-black font-bold py-3 px-3`}
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-sun-fill"
          viewBox="0 0 16 16"
        >
          {/* Icono del sol */}
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-moon-fill"
          viewBox="0 0 16 16"
        >
          {/* Icono de la luna */}
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
