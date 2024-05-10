import Rating from "./rating/Rating";
import GuestList from "./guestList/guestList";
import React, {useState} from "react";
import Context from "./context"

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 }
  ]);
  function removePerson(id) {
    console.log(id)
    setPeople(people.filter(person => person.id !== id))
   }

  return (
    <Context.Provider value={{removePerson}}>
    <div className="App">
      <Rating />
      {people.length ? <GuestList people={people} /> : <p style={{textAlign: 'center', color: 'red'}}>Nobody is invited</p> }
      
    </div>
    </Context.Provider>
  );
}

export default App;
