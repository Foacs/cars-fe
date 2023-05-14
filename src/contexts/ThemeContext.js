import React from "react";

import { createTheme, useMediaQuery } from "@mui/material";

// region Default theme from Material UI
const defaultTheme = createTheme();
// endregion

// region Common elements of the themes
const commonTheme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&, & *": {
            scrollbarWidth: "none",
          },
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            display: "none",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            display: "none",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            display: "none",
          },
        },
      },
    },
  },
  dimensions: {
    drawer: {
      width: {
        extended: "320px",
        compact: "3.25rem",
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
  shape: {
    borderRadius: 12,
  },
  transitions: {
    drawer: `${defaultTheme.transitions.create("width", {
      duration: defaultTheme.transitions.duration.complex,
      easing: defaultTheme.transitions.easing.easeInOut,
    })}!important`,
  },
  typography: {
    fontFamily: "\"Roboto\",sans-serif",
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
    error: {
      main: "#E64A19",
      background: "#FFEBEE",
    },
    info: {
      main: "#1E88E5",
      background: "#E3F2FD",
    },
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#fb8c00",
    },
    success: {
      main: "#43A047",
      background: "#E8F5E9",
    },
    text: {
      ...commonTheme.palette.text,
      breadcrumbs: {
        active: "#fff",
        inactive: "#ffffffcf",
      },
    },
    warning: {
      main: "#FFB300",
      background: "#FFF8E1",
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
      main: "#BF360C",
      background: "#FFEBEE",
    },
    info: {
      main: "#0D47A1",
      background: "#E3F2FD",
    },
    primary: {
      main: "#546e7a",
    },
    secondary: {
      main: "#ffb300",
    },
    success: {
      main: "#1B5E20",
      background: "#E8F5E9",
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
      main: "#FF8F00",
      background: "#FFF8E1",
    },
  },
});
// endregion

// region Context provider
export const ThemeContextProvider = ({ ...otherProps }) => {

  // region State
  // Get the current system preference for the dark mode
  const [ darkMode, setDarkMode ] = React.useState(useMediaQuery("(prefers-color-scheme: dark)"));

  // Function to switch modes
  const switchMode = () => setDarkMode((prev) => !prev);

  // Select a theme based on the system preference
  const theme = darkMode ? darkTheme : lightTheme;

  // Get the maximum width of the mobile mode from the current theme
  const maxWidth = theme.breakpoints.values.md;

  // Initialize the mobile mode
  const [ isMobile, setMobile ] = React.useState(window.innerWidth < maxWidth);
  // endregion

  // region Listener on the system preference to update the dark mode
  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => setDarkMode(event.matches));
  // endregion

  // region Listener on the window resizing to update the mobile mode
  window.addEventListener("resize", () => setMobile(window.innerWidth < maxWidth));
  // endregion

  return (
    <ThemeContext.Provider value={{ switchMode, theme, isMobile }}>
      {otherProps.children}
    </ThemeContext.Provider>
  );
};
// endregion

export const ThemeContext = React.createContext({});
