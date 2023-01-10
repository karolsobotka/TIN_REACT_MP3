import React from 'react';
import {Link} from 'react-router-dom';
import {getCarApiCall } from '../apiCalls/carApiCalls';
import CarListTable from './car/carListTable';

class Cars extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cars: []
        }
    };

    fetchCarList = () => {
        getCarApiCall()
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoaded: true,
                cars: data
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
    this.fetchCarList();
}
render(){
    const {error, isLoaded, cars} = this.state;
    let content;
    
    if(error) {
        content = <p> Błąd: {error.message}</p>
    }
    else if(!isLoaded) {
        content = <p>Ładowanie danych aut ... </p>
    }
    else {
        content = <CarListTable carList={cars} />
    }

    return (
        <main>
            <h2>Lista Aut</h2>
            {content}
            <p className="form-buttons">
                <Link to="/cars/add" className="button-add">Dodaj Nowe Auto</Link>
            </p>
        </main>
    )
    }
}

export default Cars

