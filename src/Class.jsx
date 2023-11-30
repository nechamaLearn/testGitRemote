//add Class component with grade and student list
function Class({grade, students}) {
    return (
        <div>
            <h1>Grade: {grade}</h1>
            <ul>
                {students.map(student => {
                    return <li>{student}</li>
                })}
            </ul>
        </div>
    )
}

export default Class;