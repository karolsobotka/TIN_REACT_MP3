import React from 'react';
import {Link} from 'react-router-dom';
import {getRepairApiCall} from '../apiCalls/repairApiCalls';
import RepairListTable from './repairs/repairListTable';


class Repairs extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            repairs: []
        }
    };

    fetchRepairList = () => {
        getRepairApiCall()
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoaded: true,
                repairs: data
        });
    },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}

componentDidMount() {
    this.fetchRepairList();
}

render(){
    const {error, isLoaded, repairs} = this.state;
    let content;
    
    if(error) {
        content = <p> Błąd: {error.message}</p>
    }
    else if(!isLoaded) {
        content = <p>Ładowanie danych Napraw ... </p>
    }
    else {
        content = <RepairListTable repairList={repairs} />
    }

    return (
        <main>
            <h2>Lista Napraw</h2>
            {content}
            <p className="form-buttons">
                <Link to="/repairs/add" className="button-add">Dodaj Nową naprawę</Link>
            </p>
        </main>
    )
    }
}

export default Repairs;