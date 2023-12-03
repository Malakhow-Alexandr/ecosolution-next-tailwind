import Image from "next/image";
import { contactsBd } from "@/bd/contactsBd";
import InstagramIcon from "@/public/contacts/instagram.svg";
import FaceBookIcon from "@/public/contacts/facebook.svg";

const {
  address,
  email,
  faceBookLink,
  instagramLink,
  phone1Call,
  phone1Meta,
  phone2Call,
  phone2Meta
} = contactsBd;

const ContactsSectionContacts = () => {
  return (
    <section className="flex flex-col">
      <h3>Phone:</h3>
      <a href={`"call:${phone1Call}"`}>{phone1Meta}</a>
      <a href={`"call:${phone2Call}"`}>{phone2Meta}</a>

      <h4>E-mail:</h4>
      <a href={`mailto:${email}`}>{email}</a>

      <h5>Address:</h5>
      <address>{address}</address>

      <h6>Social Networks:</h6>
      <div>
        <a href={instagramLink}>
          <Image
            src={InstagramIcon}
            alt="This is instagram icon"
            width={24}
            height={24}
          />
        </a>
        <a href={faceBookLink}>
          <Image
            src={FaceBookIcon}
            alt="This is facebook icon"
            width={24}
            height={24}
          />
        </a>
      </div>
    </section>
  );
};

export default ContactsSectionContacts;
