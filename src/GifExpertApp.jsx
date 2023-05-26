import { useState } from "react"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([' Dragon ball'])

  return (
    <>
      {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}

      {/* Listado de git */}
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
      {/* Gif item */}
    </>
  )
}
