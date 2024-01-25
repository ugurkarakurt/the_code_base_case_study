import { createContext, useEffect, useState } from 'react';

export const AlertContext = createContext({
  alert: {
    isShow: false,
    alertType: '',
    alertContent: '',
  },
  setAlert: () => { },
  showAlert: () => { },
  hideAlert: () => { },
});

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({});
  const [timeoutID, setTimeoutID] = useState(null);

  useEffect(() => {
    setAlert(alert);
  }, [alert])

  const showAlert = ({ isShow, alertType, alertContent }) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    setAlert({ isShow, alertType, alertContent });
    const newTimeoutID = setTimeout(() => {
      hideAlert();
    }, 3000);
    setTimeoutID(newTimeoutID);
  };

  const hideAlert = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    setAlert({ ...alert, isShow: false });
  };

  const value = {
    alert,
    showAlert,
    hideAlert
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};