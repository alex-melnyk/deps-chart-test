import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Header from './components/Header';
import Chart from './components/Chart';

class App extends Component {
    calculateMedium() {
        const maxBuy = _.maxBy(this.props.data.buyOrdrList, (buy) => buy.px).px;
        const minSell = _.minBy(this.props.data.sellOrdrList, (sell) => sell.px).px;
        return (maxBuy + minSell) / 2;
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.data ?
                    <h3 style={{ textAlign: 'center' }}>Mid Market Price is {this.calculateMedium()}</h3>
                    :
                    <h3 style={{ textAlign: 'center' }}>Please select chart date</h3>}
                <Chart/>
            </div>
        );
    }
}

const mapStateToProps = ({ data }) => {
    return { data }
};

export default connect(mapStateToProps)(App);
