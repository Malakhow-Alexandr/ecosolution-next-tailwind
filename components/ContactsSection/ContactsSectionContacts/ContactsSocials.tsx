import InstagramIcon from "@/public/contacts/instagram.svg";
import FaceBookIcon from "@/public/contacts/facebook.svg";
import { FC } from "react";

interface ContactsSocialsProps {
  instagramLink: string;
  faceBookLink: string;
  containerClassNames?: string;
}

const ContactsSocials: FC<ContactsSocialsProps> = ({
  instagramLink,
  faceBookLink,
  containerClassNames
}) => {
  return (
    <div className={`${containerClassNames}`}>
      <a
        href={faceBookLink}
        className="group"
        aria-label="contacts-facebook-link"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <FaceBookIcon
          aria-label="contacts-facebook-icon"
          className="stroke-mainText group-hover:stroke-mainElementsColor \
          group-focus:stroke-mainElementsColor
           transition-colors duration-200"
        />
      </a>
      <a
        href={instagramLink}
        className="group"
        aria-label="contacts-instagram-link"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <InstagramIcon
          aria-label="contacts-instagram-icon"
          className="stroke-mainText group-hover:stroke-mainElementsColor \
          group-focus:stroke-mainElementsColor
           transition-colors duration-200"
        />
      </a>
    </div>
  );
};

export default ContactsSocials;
