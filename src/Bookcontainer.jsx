import Genre from './Genre.jsx'
import Book from './Book.jsx'

export default function Bookcontainer({buks,handleDelete, editbook, addToCart}) {
  console.log(buks)
  return (
    <div>
      {buks.map(book => <Book book = {book} handleDelete={handleDelete} key = {book.title} editbook ={editbook} addToCart={addToCart}/>)}
    </div>
  )
} 