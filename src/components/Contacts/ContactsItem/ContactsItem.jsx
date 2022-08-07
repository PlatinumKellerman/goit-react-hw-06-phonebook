import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/actions';
import { FcPhoneAndroid } from 'react-icons/fc';
import { getFilteredContacts } from '../../../redux/selectors';
import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export function ContactsItem() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return filteredContacts.map(({ id, name, number }) => (
    <ListItem key={id}>
      <ItemName>
        <FcPhoneAndroid size="20" />
        {name}:
      </ItemName>
      <ItemNumber>{number}</ItemNumber>
      <DeleteButton id={id} onClick={() => dispatch(actions.delContact(id))}>
        Delete
      </DeleteButton>
    </ListItem>
  ));
}
