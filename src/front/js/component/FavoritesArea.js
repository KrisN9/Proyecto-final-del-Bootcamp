import React, { useContext } from "react";
import FavoriteContext from "../store/FavoriteContext";
import Cards from "./Cards";

const FavoritesArea = () => {
  const favoriteCtx = useContext(FavoriteContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>¡Todavía no tienes favoritos!</p>;
  } else {
    content = <Cards offers={favoriteCtx.offers} />;
  }

  return (
    <section>
      <h1>Mis favoritos</h1>
      {content}
    </section>
  );
};

export default FavoritesArea;
