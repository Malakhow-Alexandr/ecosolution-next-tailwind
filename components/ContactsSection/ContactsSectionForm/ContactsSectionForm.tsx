import {
  Formik,
  ErrorMessage,
  Form,
  Field,
  FormikHelpers
} from "formik";
import { toast } from "react-toastify";
import { ContactsFormSchema } from "./FormSchema";
import CustomErrorMessage from "./CustomErrorMessage";

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactsSectionForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    toast.success(
      "Your form has been submitted! Data output to console."
    );
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <section id="ContactsForm">
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsFormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className="relative">
            * Full name:
            <Field type="text" name="fullName" />
            <ErrorMessage name="fullName">
              {(msg) => (
                <CustomErrorMessage>
                  {msg}
                </CustomErrorMessage>
              )}
            </ErrorMessage>
          </label>
          <label className="relative">
            * E-mail:
            <Field type="email" name="email" />
            <ErrorMessage name="email">
              {(msg) => (
                <CustomErrorMessage>
                  {msg}
                </CustomErrorMessage>
              )}
            </ErrorMessage>
          </label>
          <label className="relative">
            * Phone:
            <Field type="tell" name="phoneNumber" />
            <ErrorMessage name="phoneNumber">
              {(msg) => (
                <CustomErrorMessage>
                  {msg}
                </CustomErrorMessage>
              )}
            </ErrorMessage>
          </label>
          <label className="relative">
            * Message:
            <Field type="textarea" name="message" />
            <ErrorMessage name="message">
              {(msg) => (
                <CustomErrorMessage>
                  {msg}
                </CustomErrorMessage>
              )}
            </ErrorMessage>
          </label>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactsSectionForm;
