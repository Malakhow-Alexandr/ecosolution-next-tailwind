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
import { IoIosArrowRoundForward } from "react-icons/io";

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
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
        {({ errors, touched, isValid, dirty }) => {
          const isButtonDisabled = !isValid || !dirty;
          return (
            <Form
              className="flex flex-col tablet:w-[342px] desktop:w-[596px] px-[12px] py-[36px] \
             desktop:p-[48px] bg-[#EAEDF1] "
              autoComplete="off"
            >
              <h2 className="hidden">Form</h2>
              <label className="form-label">
                * Full name:
                <Field
                  type="text"
                  name="fullName"
                  placeholder="John Rosie"
                  className={`form-input ${
                    errors.fullName && touched
                      ? "border-[#D28B8B]"
                      : ""
                  }`}
                />
                <ErrorMessage name="fullName">
                  {(msg) => (
                    <CustomErrorMessage>
                      {msg}
                    </CustomErrorMessage>
                  )}
                </ErrorMessage>
              </label>

              <label className="form-label">
                * E-mail:
                <Field
                  type="email"
                  name="email"
                  placeholder="johnrosie@gmail.com"
                  className={`form-input ${
                    errors.email && touched.email
                      ? "border-[#D28B8B]"
                      : ""
                  }`}
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <CustomErrorMessage>
                      {msg}
                    </CustomErrorMessage>
                  )}
                </ErrorMessage>
              </label>

              <label className="form-label">
                * Phone:
                <Field
                  type="tel"
                  name="phoneNumber"
                  placeholder="380961234567"
                  className={`form-input ${
                    errors.phoneNumber &&
                    touched.phoneNumber
                      ? "border-[#D28B8B]"
                      : ""
                  }`}
                />
                <ErrorMessage name="phoneNumber">
                  {(msg) => (
                    <CustomErrorMessage>
                      {msg}
                    </CustomErrorMessage>
                  )}
                </ErrorMessage>
              </label>

              <label className="form-label">
                Message:
                <Field
                  component="textarea"
                  name="message"
                  draggable="false"
                  placeholder="My message...."
                  className={`form-input h-[160px] resize-none ${
                    errors.message && touched.message
                      ? "border-[#D28B8B]"
                      : ""
                  }`}
                />
                <ErrorMessage name="message">
                  {(msg) => (
                    <CustomErrorMessage>
                      {msg}
                    </CustomErrorMessage>
                  )}
                </ErrorMessage>
              </label>
              <button
                disabled={isButtonDisabled}
                type="submit"
                className="button-primary disabled:bg-red-300 mr-0 ml-auto w-[100px] h-[40px] group"
              >
                <span className="group-hover:text-mainElementsColor transition-colors duration-200">
                  Send
                </span>
                <span
                  className="flex w-[32px] ml-auto h-[32px] rounded-full \
           bg-mainElementsColor items-center justify-center"
                >
                  <IoIosArrowRoundForward
                    width="16"
                    height="16"
                    className="w-[16px] h-[16px]"
                  />
                </span>
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default ContactsSectionForm;
