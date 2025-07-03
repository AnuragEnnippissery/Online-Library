import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/bookslice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css'
import './Navbar.css'
function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: Date.now(), // generate unique id 
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.author || !formData.category) {
      alert("Please fill all required fields");
      return;
    }

    dispatch(addBook(formData));  // send to Redux
    navigate('/BrowseBook'); // redirect after adding
  }

  return (
    <div className='title'> 
        <form onSubmit={handleSubmit} className='form-content'>
      <h2>Add a New Book</h2>

      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <textarea name="image" placeholder="Image" onChange={handleChange} />
      <input name="rating" placeholder="Rating (1-5)" onChange={handleChange} />

      <button type="submit">Add Book</button>
    </form>
    </div>
    
  );
}

export default AddBook;
