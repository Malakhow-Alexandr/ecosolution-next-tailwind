import ContactsSectionContacts from "./ContactsSectionContacts/ContactsSectionContacts";
import ContactsSectionForm from "./ContactsSectionForm/ContactsSectionForm";

const ContactsSection = () => {
  return (
    <section
      id="Contacts"
      data-section-id="Contacts"
      className="pt-[65px] tablet:pt-[100px] desktop:pt-[120px] mb-[36px] tablet:mb-[100px]"
    >
      <div className="custom-container">
        <h2
          id="ContactsTitle"
          className="font-title text-[28px] tablet:text-[36px] text-mainText text-center \ 
                        leading-[28px] tablet:leading-[36px] mb-[24px] tablet:mb-[40px]"
        >
          CONTACT US
        </h2>
        <div className="tablet:flex justify-between">
          <ContactsSectionContacts />
          <ContactsSectionForm />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
