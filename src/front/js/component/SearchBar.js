import React from "react";

const SearchBar = () => {
    return (
        <>
        <div className="input-group">
        <input type="text" class="form-control" placeholder="Tu búsqueda aquí..." aria-label="Tu búsqueda aquí..." />
            <button class="btn btn-outline-warning" type="button">Buscar</button>
      </div>
      </>
    )
}

export default SearchBar