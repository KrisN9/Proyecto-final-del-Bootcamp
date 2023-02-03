import React from "react";
import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0
});

const FavoriteContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavorite = (favoriteOffer) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteOffer);
        });
    }

    const removeFavorite = (favoriteId) => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(favorite => favorite.id !== favoriteId);
        });
    }

    const itemIsFavorite = (favoriteId) => {
        return userFavorites.some(favorite => favorite.id === favoriteId);
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;