import * as Yup from "yup";

export const ContactsFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2)
    .max(35)
    .matches(/^[A-Z][a-z]+\s[A-Z][a-z]+$/, "Wrong Fullname")
    .required("Required"),
  email: Yup.string()
    .matches(
      /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/,
      "Wrong Email"
    )
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(/^380\d{9}$/, "Wrong Phone")
    .required("Required"),
  message: Yup.string().min(3).max(200)
});
