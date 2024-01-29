import { Fragment, useContext } from 'react';
import { AlertContext } from '@/context/alert';
import styles from "./styles.module.scss";
import { motion } from "framer-motion";


const AlertMessage = () => {
  const { alert } = useContext(AlertContext);
  const { isShow, alertType, alertContent } = alert;

  return (

    <Fragment>
      {isShow && (
        <motion.div
          className={`${styles.alertMessageContainer} ${styles[alertType]}`}
          animate={{ transform: "translateX(-30px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span>{alertContent}</span>
        </motion.div>
      )}
    </Fragment>

  );
};

export default AlertMessage;