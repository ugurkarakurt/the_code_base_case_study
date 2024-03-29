import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import FormInput from '../form-input';
import styles from "./styles.module.scss";
import FormCheckbox from '../form-checkbox';
import Button from '../button';
import { validateForm } from '@/utils/validation';
import { OrdersContext } from '@/context/order';
import { AlertContext } from '@/context/alert';

const defaultFormFields = {
  title: "",
  image_url: "",
  favorite_count: 0,
  urgent: false
};

const AddForm = () => {
  const { addOrderToList } = useContext(OrdersContext);
  const { showAlert } = useContext(AlertContext);


  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, image_url, urgent } = formFields;

  const [validationErrors, setValidationErrors] = useState({});
  const router = useRouter();


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormFields({ ...formFields, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm(formFields);

    if (Object.keys(errors).length > 0) {
      console.error('Validation Errors:', errors);
      setValidationErrors(errors);
      showAlert({
        isShow: true,
        alertType: 'error',
        alertContent: "Form hatalı, lütfen kontrol ediniz.",
      });
    } else {
      const formattedDate = new Date();
      const postData = {
        ...formFields,
        last_update_date: formattedDate,
      };
      addOrderToList(postData)
        .then((response) => {
          if (response.error_code) {
            return;
          }
          setFormFields(defaultFormFields);
        }).then(() => {
          console.log('Form submitted successfully!');
          setValidationErrors({});
          showAlert({
            isShow: true,
            alertType: 'success',
            alertContent: "İlan başarı ile kaydedilmiştir. Anasayfaya yönlendiriliyorsunuz.",
          });
        }).then(() => {
          setTimeout(() => {
            router.push("/")
          }, 500);
        })
    }
  };

  return (
    <div className={styles.addFormContainer}>
      <form>
        <FormInput
          label='İlan Başlığı'
          type='text'
          required
          onChange={handleChange}
          name='title'
          value={title}
        />
        {validationErrors.title && <span className={styles.validationError}>{validationErrors.title}</span>}

        <FormInput
          label='İlan Kapak Görseli'
          type='text'
          required
          onChange={handleChange}
          name='image_url'
          value={image_url}
        />
        {validationErrors.image_url && <span className={styles.validationError}>{validationErrors.image_url}</span>}

        <FormCheckbox
          label='Acil Mi?'
          type='checkbox'
          onChange={handleChange}
          name='urgent'
          value={urgent}
          checkboxFor={"urgent"}
          checkboxId={"urgent"}
        />

        <Button onClick={handleSubmit} buttonType="submitButton" link="/add-order" children="Yeni İlan Ekle" />
      </form>
    </div>
  );
}

export default AddForm;


