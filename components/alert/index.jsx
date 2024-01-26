import { Fragment, useContext } from 'react';
import { AlertContext } from '@/context/alert';
import styles from "./styles.module.scss";

const AlertMessage = () => {
  const { alert } = useContext(AlertContext);
  const { isShow, alertType, alertContent } = alert;

  return (
    <Fragment>
      {isShow && (
        <div className={`${styles.alertMessageContainer} ${styles[alertType]}`} >
          <span>{alertContent}</span>
        </div>
      )}
    </Fragment>

  );
};

export default AlertMessage;