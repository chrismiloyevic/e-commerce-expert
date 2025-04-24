import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { FC, memo } from 'react';

import { SectionId } from '../../../data/data';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';


const Contact: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold text-white">Get in touch</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1 ">
            <ContactForm />
          </div>
          <div className="flex items-center justify-center p-8 bg-neutral-700 rounded-lg">
            <ChatBubbleLeftRightIcon className="h-32 w-32 text-white" />
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
