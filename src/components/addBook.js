const AddBook = () => (
  <div className="Form">
    <h3>ADD NEW BOOK</h3>
    <form className="FormInput">
      <input type="text" placeholder="Author name" value="" className="author-name" />
      <br />
      <input type="text" placeholder="Book title" value="" className="book-title" />
      <br />
      <select className="categories" name="categories" id="categories">
        <option defaultValue="">Category</option>
        <option value="action">Action</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <br />
      <button className="submit" type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
