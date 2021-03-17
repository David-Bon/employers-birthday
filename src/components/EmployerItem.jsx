import React, {useState} from "react";


const EmployerItem = ({item}) => {
    const [x, setX] = useState(false)
    const {id, firstName, lastName} = item
     return (
        <div key={id}>
            <span>{lastName} </span>
            <span>{firstName} </span>
            <input type="checkbox" id={id} checked={x} onChange={() => {
                setX(!x)
            }}/>
        </div>
    )
}

export default EmployerItem