import { ContactsItem } from './ContactsItem/index';
import { List } from './Contacts.styled';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/actions';

export function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          deleteContact={() => dispatch(actions.delContact(id))}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </List>
  );
}
