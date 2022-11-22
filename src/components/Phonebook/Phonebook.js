import ContactForm from 'components/ContactForm/ContactForm';
import css from './Phonebook.module.css';


const Phonebook = () => {
  return (
    <>
      <h1 className= {css.title} >Phonebook</h1>
      <ContactForm />
      < h2 className= {css.sub_title}>Contacts</h2>
    </>
  );
};

export default Phonebook;