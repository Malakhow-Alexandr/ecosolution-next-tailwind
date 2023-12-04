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
      <a href={instagramLink} className="group">
        <InstagramIcon
          className="stroke-mainText group-hover:stroke-mainElementsColor \
           transition-colors duration-200"
        />
      </a>
      <a href={faceBookLink} className="group">
        <FaceBookIcon
          className="stroke-mainText group-hover:stroke-mainElementsColor \
           transition-colors duration-200"
        />
      </a>
    </div>
  );
};

export default ContactsSocials;