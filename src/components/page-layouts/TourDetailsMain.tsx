import Breadcrumb3 from '@/components/breadcrumb/breadcrumb-3';
import TourDetailsArea from '@/components/tour/details/tour-details-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';
import { ITourDT } from '@/types/tour-packages-d-t';
import Head from 'next/head';

interface TourDetailsProps {
  tour: ITourDT;
}

const TourDetailsMain = ({ tour }: TourDetailsProps) => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        {/* <Breadcrumb3 title={tour?.title} subtitle="T" /> */}
        <Breadcrumb3 title="CORAL BOATS TOURS" />

        <TourDetailsArea tour={tour} />


      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default TourDetailsMain;
