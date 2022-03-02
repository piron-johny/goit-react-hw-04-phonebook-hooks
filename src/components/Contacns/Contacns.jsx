import { StyledContacts } from './Contacns.styled';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <StyledContacts>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id} id={id}>
            <span>
              {name} : {number}
            </span>
            <button type="button" onClick={onDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </StyledContacts>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default Contacts;
