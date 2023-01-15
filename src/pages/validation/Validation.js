import * as Yup from "yup";
export const addSmsSchema = Yup.object().shape({
  sms: Yup.string()
    .min(2, "Too Short!")
    .required("SMS is required field"),
  smsTitle: Yup.string()
    .min(2, "Too Short!")
    .required("SMS Title is required field")
});

export const sendSmsSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(12, "Phone Number must be at least 12 digit")
    .max(12, "Phone Number must be less than 13 digit")
    .required("Phone Number is required field")
});

export const addUserSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .required("Username is required field"),
  email: Yup.string().email('Invalid email').required('Email is required field'),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  role: Yup.number().required('Role is required field'),
});
