const ValidateManager = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }else if (values.firstName.length < 2) {
    errors.firstName = 'Must be 15 characters or greater';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }else if (values.lastName.length < 2) {
    errors.lastName = 'Must be 15 characters or greater';
  }

  if (!values.patronymic) {
    errors.patronymic = 'Required';
  }else if (values.patronymic.length > 15) {
    errors.patronymic = 'Must be 15 characters or less';
  }else if (values.patronymic.length < 2) {
    errors.patronymic = 'Must be 15 characters or greater';
  }
  
  return errors;
};

export default ValidateManager;