//import React from 'react';
///import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filtersSlice';
import { nanoid } from 'nanoid';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value.trim()));
    // console.log(value);
  };
  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.input}
        id={nanoid()}
        type="text"
        name="filter"
        onChange={changeFilter}
      ></input>
    </div>
  );
};
export default Filter;
/* Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}; */
