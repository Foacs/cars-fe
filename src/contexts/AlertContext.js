import React from "react";

// region Context provider
export const AlertContextProvider = ({ ...otherProps }) => {

  // region State
  const [ alertQueue, setAlertQueue ] = React.useState([]);
  const [ isAlertOpen, setAlertOpen ] = React.useState(false);
  const [ alert, setAlert ] = React.useState(undefined);
  // endregion

  // region Listener to check the queue of alerts and activate the next one
  React.useEffect(() => {
    if (alertQueue.length && !alert) {
      // Set a new snack when we don't have an active one
      setAlert({ ...alertQueue[0] });
      setAlertQueue((prev) => prev.slice(1));
      setAlertOpen(true);
    }
  }, [ alertQueue, alert, isAlertOpen ]);
  // endregion

  // region Function to trigger a new alert
  const sendAlert = (message, severity) => () => {
    setAlertQueue((prev) => [ ...prev, { key: new Date().getTime(), message, severity } ]);
  };
  // endregion

  // region Function to call to close an alert
  const onAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };
  // endregion

  // region Function to call when closing an alert
  const onAlertExited = () => {
    setAlert(undefined);
  };
  // endregion

  return (
    <AlertContext.Provider
      value={{
        isAlertOpen,
        alert,
        sendAlert,
        onAlertClose,
        onAlertExited,
      }}
    >
      {otherProps.children}
    </AlertContext.Provider>
  );
};
// endregion

export const AlertContext = React.createContext({});
