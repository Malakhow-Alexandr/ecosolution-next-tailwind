import ContactsSectionContacts from "./ContactsSectionContacts/ContactsSectionContacts";
import ContactsSectionForm from "./ContactsSectionForm/ContactsSectionForm";

const ContactsSection = () => {
  return (
    <section id="Contacts">
      <div className="custom-container">
        <h2
          className="font-title text-[28px] text-mainText text-center \ 
                        leading-[28px] mb-[24px]"
        >
          CONTACT US
        </h2>
        <ContactsSectionContacts />
        <ContactsSectionForm />
      </div>
    </section>
  );
};

export default ContactsSection;
