import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <SearchForm onSubmit={onSubmit}></SearchForm>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
