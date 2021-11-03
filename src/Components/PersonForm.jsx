import React from 'react';

function PersonForm({setName, setSurname, addPerson}) {
    return(
        <div className="col-4 row mt-4">
            <div className="col-12 row">
                <p className="h4 col-4 row d-flex">Name:</p>
                <div className="col-8 row">
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={setName}
                    />
                 </div>
            </div>
            <div className="col-12 row mt-1">
                <p className="h4 col-4 row d-flex">Surname:</p>
                <div className="col-8 row">
                    <input 
                        type="text" 
                        className="form-control-lg"
                        onChange={setSurname}
                    />
                </div>
            </div>
            <div className="col-6 row mt-2 mb-2"><button className="btn-lg btn-primary" onClick={() => addPerson()}>Add person</button></div>
        </div>
    );
}

export default PersonForm;