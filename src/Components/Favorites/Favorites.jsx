
import React from 'react'

function Favorites() {
     const localFavorites = localStorage.getItem("favorites")
     const favorites = localFavorites || JSON.parse(localFavorites)

  // const handleClearFavs = () => {
  //   localStorage.removeItem("favorites");
  //   setUpdate(!update);
  // };


  if (favorites) {
    favorites.forEach(product => {
      console.log(product.name)
    });
  } else {
    console.log("No tienes productos marcados como favoritos")
  }
 
  return (
    <div>
      
    </div>
  )
}

export default Favorites



// const Favorites = () => {
 
//   //const favorites = JSON.parse(localStorage.getItem("favorites"));

//   //const handleClearFavs = () => {
//     //localStorage.removeItem("favorites");
//     //setUpdate(!update);
//   //};
//   let favorites = JSON.parse(localStorage.getItem("favorites"))

//   if (favorites) {
//     favorites.forEach(product => {
//       console.log(product.name)
//     });
//   } else {
//     console.log("No tienes productos marcados como favoritos")
//   }
 
// };

// export default Favorites;
