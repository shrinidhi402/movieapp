import React from 'react'

function Favourites() {
    return (
        <>
            <span className="fav-title mr-2 "> Add to Favourites</span>
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
            </div>
        </>
    )
}

export default Favourites
