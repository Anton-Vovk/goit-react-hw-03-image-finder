
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import styles from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <SearchForm onSubmit={onSubmit}></SearchForm>
    </header>
  );
};

export default Searchbar;