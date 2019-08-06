import React from 'react'

export default ({
  id,
  from,
  to,
  categoryId,
  date,
  title,
  body
}) => (
  <article>
    <header>
      <h1>{title}</h1>
      <ul>
        <li><button>&#128465;</button></li>
        <li><button>spam</button></li>
        <li><button>send</button></li>
      </ul>
    </header>
    <section>
      <p>From: {from.name}</p>
      <p>To: {to.name}</p>
      <p><time dateTime={date}>{date}</time></p>
    </section>  
    <section>
      {body}
    </section>
  </article>
)
