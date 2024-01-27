import React from 'react'
function BookList({books, onBookClick}) {
  //console.log(books)
  return (
    <div className=" book-list flex items-center justify-center gap-5 flex-wrap px-[auto] p-10 overflow-y-auto">
    {books.map((book) => (
      <div className="book w-[150px] h-[200px]" key={book.id} onClick={() => onBookClick(book)}>
        <img src={book.volumeInfo.imageLinks.thumbnail} className='w-[100%] h-[100%] rounded-lg' alt={book.volumeInfo.title} />      
      </div>
    ))}
  </div>
  )
}

export default BookList;