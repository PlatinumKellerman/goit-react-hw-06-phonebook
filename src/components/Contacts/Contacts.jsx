import { getFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem/index';
import { List } from './Contacts.styled';

export function Contacts() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <List>
      <ContactsItem filteredContacts={filteredContacts} />
    </List>
  );
}

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
};
