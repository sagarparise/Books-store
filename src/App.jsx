import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import BookList from './components/BookList'
import BooksDetails from './components/BooksDetails'

function App() {
  const [books, setBooks]=useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [show, setShow] = useState(false);
 

 
  useEffect(() => {
    // Fetch initial book data
    fetchBooks("harry+potter");
    fetchBooks("Sherlock+Holmes");
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      console.log(data.items)
     // setBooks(data.items)
      setBooks(prevBooks => [...prevBooks, ...data.items]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = (query)=>{
    setBooks([]);
    fetchBooks(query)
  }

  const handleOnClick = (book)=>{
    setSelectedBook(book);
    setShow(true)
  }

  return (
    <>
      <div className="container  bg-[#242121]">
      <Navbar handleSearch={handleSearch}></Navbar>
     {show &&  <BooksDetails selectedBook = {selectedBook}></BooksDetails>}
     <h1 className=' px-20 py-5 text-lg font-bold text-gray-300'>More Books Like This</h1>
      <BookList books ={books} onBookClick = {handleOnClick}></BookList>
      </div>
    </>
  )
}

export default App
