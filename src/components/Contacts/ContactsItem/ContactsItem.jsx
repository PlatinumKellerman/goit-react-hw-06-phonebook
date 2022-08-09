import { FcPhoneAndroid } from 'react-icons/fc';

import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export function ContactsItem({ deleteContact, id, name, number }) {
  return (
    <ListItem>
      <ItemName>
        <FcPhoneAndroid size="20" />
        {name}:
      </ItemName>
      <ItemNumber>{number}</ItemNumber>
      <DeleteButton id={id} onClick={deleteContact}>
        Delete
      </DeleteButton>
    </ListItem>
  );
}
