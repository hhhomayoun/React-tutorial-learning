import React from 'react'
import ReactDom from 'react-dom'
// css
import './index.css'
function Greeting() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._AC_SX184_.jpg'
        alt=''
      />
      <Title />
      <Author />
    </article>
  )
}
const Title = () => {
  return <p>this is your book</p>
}
const Author = () => {
  return <h6>homayoun ostad</h6>
}
ReactDom.render(<Greeting />, document.getElementById('root'))
