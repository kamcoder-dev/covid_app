import React from 'react';



import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {


    state = {

        data: {},
        country: '',

    }
    async componentDidMount() {

        const data = await fetchData();
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
        // fetch the data
        // set the state
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container} >
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}


export default App;