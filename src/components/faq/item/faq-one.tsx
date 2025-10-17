'use client';

import Image, { StaticImageData } from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

interface FaqItem {
  id: number;
  uuid: string;
  title: string;
  description: string;
  // image: StaticImageData;
}

interface FaqItemProps {
  faqs: FaqItem[];
  preExpand: string;
}

const FaqOne = ({ faqs, preExpand }: FaqItemProps) => {
  return (
    <Accordion
      className="accordion"
      preExpanded={[preExpand]}
      allowZeroExpanded
    >
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} className="accordion-items" uuid={faq.uuid}>
          <AccordionItemHeading className="accordion-header" id="headingOne">
            <AccordionItemButton className="accordion-buttons ">
              <span>{faq.id}</span>
              {faq.title}
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <div className="accordion-body d-flex align-items-center">
              <p className="mb-0">{faq.description}</p>
              {/* <Image src={faq.image} alt="Faq Image" /> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default FaqOne;
