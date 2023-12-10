import ContactsSocials from "../ContactsSection/ContactsSectionContacts/ContactsSocials";
import { Logo as NewLogo } from "../Logo/NewLogo";
import RenewableContacts from "../RenewableSection/RenewableContacts";
import Line from "../UtilsComponents/Line";
import LinkToTop from "./LinkToTop";

const Footer = () => {
  return (
    <footer className="pb-[36px]">
      <div className="custom-container ">
        <Line classNames="mb-[24px]" />
        <div className="tablet:flex items-center">
          <div className="flex items-center justify-between">
            <NewLogo
              active={false}
              containerStyles={
                "flex items-center justify-start "
              }
            />
            <LinkToTop styles="tablet:hidden relative bottom-[-2px]" />
          </div>

          <ContactsSocials
            faceBookLink="#"
            instagramLink="#"
            containerClassNames="flex  gap-[8px] mt-[24px] mb-[24px] mx-auto tablet:mr-auto tablet:ml-[100px] desktop:ml-[512px] w-[56px]"
          />
          <LinkToTop styles="hidden tablet:flex" />
        </div>
        <RenewableContacts />
      </div>
    </footer>
  );
};

export default Footer;
