import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
    li: { 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '300px',
    padding: '10px',
    border: '1px solid rgb(205,205,152)',
    borderRadius: '5px',
    marginBottom: '10px'
    },
    input: {
        marginRight: '10px'
    },
    rm: {
        background: 'pink',
        borderRadius: '10px',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    }
}

function PeopleItem(person){

    const { removePerson } = useContext(Context)
    
    return (
    <li style={styles.li}>
        <span>
            {person.name}
            &nbsp;
            {person.age}
            &nbsp;
            
        </span>
        <button style={styles.rm} onClick={removePerson.bind(null, person.id)}>Remove from the List</button>
    </li>
    )
}

PeopleItem.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    id: PropTypes.number
    
}
export default PeopleItem;