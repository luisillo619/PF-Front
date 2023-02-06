

const Favorites = () => {
 
  //const favorites = JSON.parse(localStorage.getItem("favorites"));

  //const handleClearFavs = () => {
    //localStorage.removeItem("favorites");
    //setUpdate(!update);
  //};
  let favorites = JSON.parse(localStorage.getItem("favorites"))

  if (favorites) {
    favorites.forEach(product => {
      console.log(product.name)
    });
  } else {
    console.log("No tienes productos marcados como favoritos")
  }
 
};

export default Favorites;
