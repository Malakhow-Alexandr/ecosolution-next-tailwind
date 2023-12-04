import ContactsSocials from "../ContactsSection/ContactsSectionContacts/ContactsSocials";
import Logo from "../Logo/Logo";
import RenewableContacts from "../RenewableSection/RenewableContacts";
import Line from "../UtilsComponents/Line";

const Footer = () => {
  return (
    <footer className="pb-[36px]">
      <div className="custom-container ">
        <Line classNames="mb-[24px]" />
        <Logo containerStyles="justify-center" />
        <ContactsSocials
          faceBookLink="#"
          instagramLink="#"
          containerClassNames="flex  gap-[8px] mt-[24px] mb-[24px] mx-auto w-[56px]"
        />
        <RenewableContacts />
      </div>
    </footer>
  );
};

export default Footer;
