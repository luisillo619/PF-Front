import React from 'react'

import Products from '../Products/Products'

/*
function handleFavorite() {
  let favorites = JSON.parse(localStorage.getItem("favorites"))
  if (favorites.find(e => e.id === id)) {
    let index = favorites.findIndex(e => e.id === id)
    favorites.splice(index, 1)
    localStorage.setItem("favorites", JSON.stringify(favorites))
    butonFav[0].innerHTML = "🤍"
    setUpdate(!update)
  } else {
    favorites = [...favorites, { name, genres, image, id }]
    localStorage.setItem("favorites", JSON.stringify(favorites))
    butonFav[0].innerHTML = "❤"
    setUpdate(!update)
  }
  closeModal()
}*/

function Category() {
  return (
    <div>
      <Products/>
      
    </div>
  )
}

export default Category
