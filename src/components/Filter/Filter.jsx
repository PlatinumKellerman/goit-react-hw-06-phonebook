import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/actions';
import { FilterLabel, FilterInput } from './Filter.styled';

export function Filter({ title }) {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const changeFilterValue = e => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="filter">
      {title}
      <FilterInput
        name="filter"
        type="text"
        value={value}
        onChange={changeFilterValue}
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
