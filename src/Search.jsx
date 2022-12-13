import './App.css'

export default function Search ({handleSearch}){
  return (
    <>
         <input type="text" placeholder="Search your book..."onChange={handleSearch} className ="search"/>
   
    </>
  )
}