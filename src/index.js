import React from 'react'
import ReactDom from 'react-dom'
// css
import './index.css'

// vars

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._AC_SX184_.jpg',
  title: 'this is your favorite book',
  author: 'homayoun ostad',
}
const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg',
  title: 'this is your second favorite book',
  author: 'homayoun ostad',
}
function Greeting() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
