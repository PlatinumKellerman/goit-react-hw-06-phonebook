import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import { FcPhoneAndroid } from 'react-icons/fc';
import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export function ContactsItem({ filteredContacts }) {
  const dispatch = useDispatch();

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

ContactsItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
};
