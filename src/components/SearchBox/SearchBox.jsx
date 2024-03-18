import css from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchWrap}>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
