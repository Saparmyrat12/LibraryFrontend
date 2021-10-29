import React from 'react';
import PropTypes from 'prop-types';

function TablePersons({persons, deletePerson}) {
    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Surname</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map((person, index) => {
                        return <tr key={index}>
                            <td className="text-center">{person.id}</td>
                            <td className="text-center">{person.name}</td>
                            <td className="text-center">{person.surname}</td>
                            <td className="text-center"><button className="btn btn-outline-danger" onClick={() => deletePerson(person)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    );
}

TablePersons.propTypes = {
    persons: PropTypes.array,
    deletePerson: PropTypes.func,
}

TablePersons.defaultProps = {
    persons: [],
    deletePerson: () => {},
}

export default TablePersons;