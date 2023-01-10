import React from 'react';
import { Link } from 'react-router-dom';
import { getRepairByIdApiCall } from '../../apiCalls/repairApiCalls';
import RepairDetailsData from './repairDetailsData'

class RepairDetails extends React.Component {
    constructor(props) {
        super(props)
        let { repairId } = props.match.params
        this.state = {
            repairId: repairId,
            repair: null,
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        this.fetchRepairDetails()
    }

    fetchRepairDetails = () => {
        getRepairByIdApiCall(this.state.repairId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            repair: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            repair: data,
                            message: null,
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

    render() {
        const { repair, error, isLoaded, message } = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Pobieranie danych napraw...</p>
        } else if (message) {
            content = <p>{message}</p>
        } else {
            content = <RepairDetailsData repairData={repair} />
        }

        return (
            <main>
                <h2>Szczegóły Napraw</h2>
                {content}
                <div className="section-buttons">
                    <Link to="/repairs" className="button-back">Powrót</Link>
                </div>
            </main >
        )
    }
}

export default RepairDetails