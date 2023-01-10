import React from 'react';
import { Link } from 'react-router-dom';
import { getCarByIdApiCall } from '../../apiCalls/carApiCalls';
import  CarDetailsData  from './carDetailsData';


class  CarDetails extends React.Component  {

    constructor(props) {
        super(props);
        let { carId } = this.props.match.params;
        this.state = {
            carId: carId,
            car: null,
            error: null,
            isLoaded: false,
            message: null
        }
    }

    fetchCarDetails = () => {
        getCarByIdApiCall(this.state.carId)
        .then(res => res.json())
        .then((data) => {
            if(data.message) {
                this.setState({
                    car:null,
                    message: data.message
                })
            }
            else {
                this.setState({
                    car:data, 
                    message: null
                })
            }
            this.setState({
                isLoaded: true,
            })
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        })
}
    componentDidMount() {
        this.fetchCarDetails()
    }
    

    render(){    

        const {car, error, isLoaded, message} = this.state
        let content;

        if(error) {
            content = <p> Błąd: {error.message}</p>
        }
        else if(!isLoaded) {
            content = <p>Ładowanie danych auta ... </p>
        }
        else if(message) {
            content = <p>{message} </p>
        }
        else {
            content = <CarDetailsData carData={car} />
        }

        return (
            <main>
                <h2>Szczegóły Auta</h2>
                {content}
                <div className="form-buttons">
                    <Link to="/cars" className="form-button-cancel">Powrót</Link>
                </div>
            </main>
        )
    }
    
}
export default CarDetails