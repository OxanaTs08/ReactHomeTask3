import PropTypes from "prop-types";
import PeopleItem from "./peopleItem";


const styles = {
    div: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
    },
    ul: {
        listStyle: "none",
        padding: 0,
        marging: 0,
    }
}

function GuestList({people}) {
    return(
        <div style={styles.div}>
            <ul style={styles.ul}> 
        <h2>List of Guests for our Event</h2>
       { people.map((person, index) => {
        return <PeopleItem
          name={person.name} 
          age={person.age}
          key={person.id} 
          index={index} 
          id={person.id}
          />
       })}
    </ul>

        </div>
    )
}
GuestList.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
   
    

}
export default GuestList;