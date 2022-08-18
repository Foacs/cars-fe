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
    ...commonTheme.colors,
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
    breadcrumbs: {
      main: "#ffffffcf",
    },
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#fb8c00",
    },
    text: {
      ...commonTheme.palette.text,
      breadcrumbs: {
        active: "#fff",
        inactive: "#ffffffcf",
      },
    },
  },
});
// endregion

// region Dark mode theme
const darkTheme = createTheme({
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
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
    breadcrumbs: {
      main: "#ffffff7f",
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
      breadcrumbs: {
        active: "#fff",
        inactive: "#ffffff7f",
      },
    },
    warning: {
      main: "#ffa726",
    },
  },
});
// endregion

// region Context provider
export const ThemeContextProvider = ({ ...otherProps }) => {
  // region Dark mode
  // Get the current system preference for the dark mode
  const [darkMode, setDarkMode] = React.useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  // Select a theme based on the system preference
  const theme = darkMode ? darkTheme : lightTheme;

  // Function to switch modes
  const switchMode = () => setDarkMode((prev) => !prev);

  // Add a listener on the system preference
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => setDarkMode(event.matches));
  // endregion

  // region Mobile
  const useMobile = () => {
    // Get the maximum width of the mobile mode from the current theme
    const maxWidth = theme.breakpoints.values.md;

    // Initialize the mobile mode
    const [isMobile, setMobile] = React.useState(window.innerWidth < maxWidth);

    // Add a listener on the window resizing to update the mobile mode
    React.useEffect(() => {
      const handleResize = () => setMobile(window.innerWidth < maxWidth);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [maxWidth]);

    return isMobile;
  };
  // endregion

  return (
    <ThemeContext.Provider value={{ switchMode, theme, useMobile }}>
      {otherProps.children}
    </ThemeContext.Provider>
  );
};
// endregion

export const ThemeContext = React.createContext({});
