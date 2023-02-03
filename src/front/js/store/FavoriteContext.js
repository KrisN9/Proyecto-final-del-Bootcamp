import React from "react";
import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteOffer) => {},
    removeFavorite: (favoriteId) => {},
    itemIsFavorite: (favoriteId) => {}
});

export const FavoriteContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = (favoriteOffer) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteOffer);
        });
    }

    const removeFavoriteHandler = (favoriteId) => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(favorite => favorite.id !== favoriteId);
        });
    }

    const itemIsFavoriteHandler = (favoriteId) => {
        return userFavorites.some(favorite => favorite.id === favoriteId);
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;