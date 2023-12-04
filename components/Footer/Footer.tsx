import ContactsSocials from "../ContactsSection/ContactsSectionContacts/ContactsSocials";
import Logo from "../Logo/Logo";
import RenewableContacts from "../RenewableSection/RenewableContacts";
import Line from "../UtilsComponents/Line";

const Footer = () => {
  return (
    <footer className="pb-[36px]">
      <div className="custom-container ">
        <Line classNames="mb-[24px]" />
        <div className="tablet:flex items-center">
          <Logo containerStyles="justify-center tablet:justify-start" />
          <ContactsSocials
            faceBookLink="#"
            instagramLink="#"
            containerClassNames="flex  gap-[8px] mt-[24px] mb-[24px] mx-auto tablet:mr-auto tablet:ml-[100px] w-[56px]"
          />
        </div>
        <RenewableContacts />
      </div>
    </footer>
  );
};

export default Footer;
