//add student component with name, age, and grade and email
import { useState } from 'react'
function Student({name, age, grade, email}) {
    //add button to add year to age
    const [newAge, setNewAge] = useState(age);

    const handleClick = () => {
        setNewAge(newAge + 1);
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {newAge}</p>
            <p>Grade: {grade}</p>
            <p>Email: {email}</p>
            <button onClick={handleClick}>Happy Birthday!</button>
        </div>
    )
}

export default Student;