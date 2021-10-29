import React, { useState, useEffect } from 'react';
import PersonForm from './PersonForm';
import TablePersons from './TablePersons';

function CustomDataList() {

  const [ persons, setPersons] = useState();
  const [ name, setName] = useState();
  const [ surname, setSurname] = useState();
  const [ update, setUpdate ] = useState();

  useEffect(() => {
    if(persons === undefined)
    { 
      setPersons([
          {
              id: 1,
              name: "Max",
              surname: "Smith"
          },
          {
            id: 2,
            name: "John",
            surname: "Bae"
          },
          {
            id: 3,
            name: "Matt",
            surname: "Davidson"
          },
          {
            id: 4,
            name: "Ben",
            surname: "Colinson"
          }
        ]);
    }
  }, [persons]);

  const deletePerson = (person) => {
    let index = persons.indexOf(person);
    console.log(index);
    if(index > -1) persons.splice(index, 1);
    setUpdate(!update);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  }

  const addPerson = () => {
      console.log({
        id: persons[persons.length - 1].id + 1,
        name: name,
        surname: surname
    });
    persons.push({
        id: persons[persons.length - 1].id + 1,
        name: name,
        surname: surname
    });
    setUpdate(!update);
  }

  return (
    <div className="col-12 row">
      <div className="col-10 row mx-auto">
        <div className="col-12 row mx-auto">
          <PersonForm setName={handleNameChange} setSurname={handleSurnameChange} addPerson={addPerson}/>
        </div>
        <TablePersons persons={persons} deletePerson={deletePerson}/>
      </div>
    </div>
  );
}

export default CustomDataList;
