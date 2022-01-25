import { useEffect, useState } from 'react';
import Soda from './rest/Soda';
import './App.css';
import Table from './components/Table';

function App() {

    let [loaded, setLoaded] = useState(false);
    let [sodas, setSodas] = useState([]);

    if(!loaded){
        Soda.all(setSodas, setLoaded);
    }

    return (
        <div className="App">
            <Table
                columns={["ID", "Marca", "Sabor", "Descripción"]}
                propertiesList={["id", "marca", "sabor", "descripcion"]}
                items={sodas}
                />
        </div>
    );
}

export default App;
