import React from 'react';

function PersonForm({setName, setSurname, addPerson}) {
    return(
        <div className="col-12 row">
            <div className="col-12 row">
                <p className="h4 d-flex">Name</p>
                <div className="col-3 row">
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={setName}
                    />
                 </div>
            </div>
            <div className="col-12 row">
                <p className="h4 d-flex">Surname</p>
                <div className="col-3 row">
                    <input 
                        type="text" 
                        className="form-control-lg"
                        onChange={setSurname}
                    />
                </div>
            </div>
            <button className="col-2 row btn-lg btn-primary" onClick={() => addPerson()}>Add person</button>
        </div>
    );
}

export default PersonForm;