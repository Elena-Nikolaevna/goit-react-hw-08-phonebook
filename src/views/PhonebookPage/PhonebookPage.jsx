import {ContactItem} from '../../components/ContactItem/ContactItem';
import {ContactForm} from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';

export default function PhonebookPage() {
  return (
    <section>
      <ContactForm />
      <Filter />
      <ContactItem />
    </section>
  );
}