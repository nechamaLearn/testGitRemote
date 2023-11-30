//add Book component with a title, author, and image props

import { useState } from 'react';
function Book({ title, author, image, isRead }) {
    //add button to toggle read status

    const [isReadState, setIsReadState] = useState(isRead);

    const toggleRead = () => {
        setIsReadState(!isReadState);
    }
    return (
        <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <img src={image} alt={title} />
            <button onClick={toggleRead}>{isReadState ? "Read" : "Not Read"}</button>
        </div>
    )
}

export default Book;