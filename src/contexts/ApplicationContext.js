import React from "react";

// region Context provider
export const ApplicationContextProvider = ({ ...otherProps }) => {

  // region State
  const [ isDrawerOpen, setDrawerOpen ] = React.useState(false);

  const switchDrawerOpen = () => setDrawerOpen((prev) => !prev);
  // endregion

  return (
    <ApplicationContext.Provider
      value={{
        isDrawerOpen,
        switchDrawerOpen,
      }}
    >
      {otherProps.children}
    </ApplicationContext.Provider>
  );
};
// endregion

export const ApplicationContext = React.createContext({});
