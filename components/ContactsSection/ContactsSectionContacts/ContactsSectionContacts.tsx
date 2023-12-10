import { contactsBd } from "@/bd/contactsBd";
import PhoneIcon from "@/public/contacts/call.svg";
import MapIcon from "@/public/contacts/map.svg";
import EmailIcon from "@/public/contacts/sms.svg";
import ContactsSocials from "./ContactsSocials";

const {
  address,
  email,
  faceBookLink,
  instagramLink,
  phone1Call,
  phone1Meta,
  phone2Call,
  phone2Meta,
  addressLink
} = contactsBd;

const ContactsSectionContacts = () => {
  return (
    <section className="flex flex-col mb-[36px]">
      <h2 className="hidden">Contacts</h2>
      <h4 className="contacts-title">Phone:</h4>
      <a
        href={`callto:${phone1Call}`}
        className="contacts-link group"
        aria-label="contacts-phone-link"
      >
        <PhoneIcon
          width={24}
          height={24}
          aria-label="contacts-phone-icon"
          className="w-[24px] h-[24px] stroke-mainText transition-colors duration-200  \
           group-hover:stroke-mainElementsColor group-focus:stroke-mainElementsColor"
        />
        {phone1Meta}
      </a>
      <a
        href={`callto:${phone2Call}`}
        aria-label="contacts-phone-link"
        className="flex gap-[8px] group font-text text-[20px] text-mainText mb-[24px]"
      >
        <PhoneIcon
          width={24}
          height={24}
          aria-label="contacts-phone-icon"
          className="w-[24px] h-[24px] stroke-mainText transition-colors duration-200  \
           group-hover:stroke-mainElementsColor group-focus:stroke-mainElementsColor"
        />
        {phone2Meta}
      </a>

      <h4 className="contacts-title">E-mail:</h4>
      <a
        href={`mailto:${email}`}
        className="contacts-link group"
        aria-label="contacts-email-link"
      >
        <EmailIcon
          aria-label="contacts-email-icon"
          className="w-[24px] h-[24px] stroke-mainText transition-colors duration-200  \
           group-hover:stroke-mainElementsColor group-focus:stroke-mainElementsColor"
        />
        {email}
      </a>

      <h4 className="contacts-title">Address:</h4>

      <address className="not-italic ">
        <a
          href={addressLink}
          className="contacts-link group"
          aria-label="contacts-address-link"
        >
          <MapIcon
            aria-label="contacts-map-icon"
            className="w-[24px] h-[24px] stroke-mainText group-hover:stroke-mainElementsColor group-focus:stroke-mainElementsColor transition-colors duration-200"
          />
          <span className="block w-[212px] text-[20px] tracking-[-0.8px] leading-normal">
            {address}
          </span>
        </a>
      </address>

      <h4 className="contacts-title mb-[20px]">
        Social Networks:
      </h4>
      <ContactsSocials
        faceBookLink={faceBookLink}
        instagramLink={instagramLink}
        containerClassNames="flex gap-[32px]"
      />
    </section>
  );
};

export default ContactsSectionContacts;
