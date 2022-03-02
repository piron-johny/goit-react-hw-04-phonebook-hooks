import { StyledFilter } from './Filter.styled';
import PropeTypes from 'prop-types';

const Filter = ({ filterChange, value }) => {
  return (
    <StyledFilter>
      Find contacts by name
      <input type="text" onChange={filterChange} value={value} />
    </StyledFilter>
  );
};

Filter.propTypes = {
  filterChange: PropeTypes.func,
  value: PropeTypes.string,
};

export default Filter;
