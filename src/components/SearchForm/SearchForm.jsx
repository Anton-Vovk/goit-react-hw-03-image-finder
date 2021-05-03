import React, { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [quary, setQuary] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    setQuary(value);
  };

  return (
    <form
      onSubmit={(event) => {
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

export default SearchForm;