export const isValidUrl = (url) => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};

export const validateForm = (formFields) => {
  const errors = {};

  if (!formFields.title.trim()) {
    errors.title = 'İlan Başlığı boş bırakılamaz.';
  }

  if (!formFields.image_url.trim()) {
    errors.image_url = 'İlan Kapak Görseli URL boş bırakılamaz.';
  } else if (!isValidUrl(formFields.image_url)) {
    errors.image_url = 'Geçerli bir URL giriniz.';
  }

  return errors;
};

export const isEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}