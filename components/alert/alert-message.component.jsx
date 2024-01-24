import styles from "./styles.module.scss";

const AlertMessage = ({ alertContent, alertType }) => {
  return (
    <div className={`${styles.alertMessageContainer} ${styles[alertType]}`} >
      <span>{alertContent}</span>
    </div>
  );
};

export default AlertMessage;
