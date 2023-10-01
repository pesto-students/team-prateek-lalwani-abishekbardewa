import { createContext, useContext, useState } from 'react';

// ThemeContext
const ThemeContext = createContext();

// Custom hook for accessing the theme context
export const useTheme = () => {
	return useContext(ThemeContext);
};

// ThemeProvider component that provides theme-related functionality
export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	// Function to toggle between light and dark themes
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	// Provides the theme state and toggleTheme function to the context
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
