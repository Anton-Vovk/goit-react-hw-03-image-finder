import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [quary, setQuary] = useState('');

  const handleOnChange = ({ target: { value } }) => {
    setQuary(value);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(quary);
      }}
      className={styles.SearchForm}
    >
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        onChange={handleOnChange}
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="quary"
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
