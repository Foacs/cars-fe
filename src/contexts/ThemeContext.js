import React from 'react';
import {createTheme, useMediaQuery} from '@mui/material';

// region Default theme from Material UI
const defaultTheme = createTheme();
// endregion

// region Common elements of the themes
const commonTheme = {
  dimensions: {
    drawer: {
      width: {
        closed: "60px",
        open: "240px",
      },
    },
  },
  palette: {
    black: {
      main: "#000",
    },
    white: {
      main: "#fff",
    },
  },
  transitions: {
    drawer: {
      close: {
        transition: defaultTheme.transitions.create("width", {
          duration: defaultTheme.transitions.duration.complex,
          easing: defaultTheme.transitions.easing.easeInOut,
        }),
      },
      open: {
        transition: defaultTheme.transitions.create("width", {
          duration: defaultTheme.transitions.duration.complex,
          easing: defaultTheme.transitions.easing.easeInOut,
        }),
      },
    },
  },
  typography: {
    fontFamily: '"Roboto",sans-serif',
  },
  zIndex: {
    appBar: defaultTheme.zIndex.drawer,
    drawer: defaultTheme.zIndex.appBar,
  },
};
// endregion

// region Light mode theme
const lightTheme = createTheme({
  ...commonTheme,
  colors: {
    application: {
      label: "#fff",
    },
  },
  darkMode: false,
  palette: {
    ...commonTheme.palette,
    background: {
      default: "#eeeeee",
    },
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#fb8c00",
    },
  },
});
// endregion

// region Dark mode theme
const darkTheme = createTheme({
  ...commonTheme,
  colors: {
    application: {
      label: "#fff",
    },
  },
  darkMode: true,
  palette: {
    ...commonTheme.palette,
    action: {
      active: "#fff",
      activatedOpacity: 0.24,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
    },
    background: {
      default: "#121212",
      paper: "#333333",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    error: {
      main: "#f44336",
    },
    info: {
      main: "#29b6f6",
    },
    primary: {
      main: "#546e7a",
    },
    secondary: {
      main: "#ffb300",
    },
    success: {
      main: "#66bb6a",
    },
    text: {
      disabled: "#ffffff7f",
      icon: "#ffffff7f",
      primary: "#fff",
      secondary: "#ffffffb2",
    },
    warning: {
      main: "#ffa726",
    },
  },
});
// endregion

// region Context provider
export const ThemeContextProvider = ({ ...otherProps }) => {
  // Get current system preference for dark mode
  const [darkMode, setDarkMode] = React.useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  // Select theme based on system preference
  const theme = darkMode ? darkTheme : lightTheme;

  // Create simple function to manually switch modes
  const switchMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Add listener on system preference
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      setDarkMode(event.matches);
    });

  return (
    <ThemeContext.Provider value={{ theme, switchMode }}>
      {otherProps.children}
    </ThemeContext.Provider>
  );
};
// endregion

export const ThemeContext = React.createContext({});
