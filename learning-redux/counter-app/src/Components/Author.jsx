import React from 'react'

const Author = () => {
    const [author, setAuthor] = React.useState('Sithu')
  return (
    <div>
        <h1>Written By {author}</h1>
    </div>
  )
}

export default Author