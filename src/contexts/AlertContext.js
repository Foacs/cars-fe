import React from "react";

// region Context provider
export const AlertContextProvider = ({ ...otherProps }) => {
  const [alertQueue, setAlertQueue] = React.useState([]);
  const [isAlertOpen, setAlertOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(undefined);

  React.useEffect(() => {
    if (alertQueue.length && !alert) {
      // Set a new snack when we don't have an active one
      setAlert({ ...alertQueue[0] });
      setAlertQueue((prev) => prev.slice(1));
      setAlertOpen(true);
    }/* else if (snackQueue.length && message && isAlertOpen) {
      // Close an active snack when a new one is added
      setAlertOpen(false);
    }*/
  }, [alertQueue, alert, isAlertOpen]);

  const sendAlert = (message, severity) => () => {
    setAlertQueue((prev) => [ ...prev, { key: new Date().getTime(), message, severity }]);
  };

  const onAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const onAlertExited = () => {
    setAlert(undefined);
  };

  return (
    <AlertContext.Provider
      value={{
        isAlertOpen,
        alert,
        sendAlert,
        onAlertClose,
        onAlertExited
      }}
    >
      {otherProps.children}
    </AlertContext.Provider>
  );
};
// endregion

export const AlertContext = React.createContext({});
