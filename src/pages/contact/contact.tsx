import ContactHero from '@/components/contact/ContactHero';
import ContactAreaNew from '@/components/contact/ContactAreaNew';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';

const ContactMain = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <ContactHero />
        <ContactAreaNew />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default ContactMain;
