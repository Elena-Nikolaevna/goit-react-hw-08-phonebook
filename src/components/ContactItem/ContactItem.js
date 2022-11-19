//import React from 'react';
//import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
//import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(getVisibleContacts);

  
  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ id, name, number }) => { return (
        <li className={css.contactsItem} key={id}>
          <span className={css.contactText}>
            {name} : {number}
          </span>
          <Button
              variant="outlined"
              onClick={() => removeContact(id)}
              
            >
            Delete
          </Button>
        </li>
      )})}
    </ul>
  );
};

/* (
	<>
			{contacts.map(({ id, name, number }) => (
				<li key={id} className={css.contactsItem}>
					<p className={css.contactText}>
						{name}: {number}
					</p>
					<button
						className={css.button}
                        type='button'
					    onClick={() => onDeleteContact(id)}>
						Delete
					</button>
				</li>
			))}
	</>
);
 */
/* ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
 */