import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, } from 'recharts';

class Chart extends Component {
    render() {
        let buyOrdrList = null;
        let sellOrdrList = null;
        if (this.props.data) {
            buyOrdrList = this.props.data.buyOrdrList;
            sellOrdrList = this.props.data.sellOrdrList;
        } else {
            buyOrdrList = null;
            sellOrdrList = null;
        }

        return (
            <div style={{ textAlign: 'center' }}>
                <LineChart width={600} height={300} data={buyOrdrList}
                           margin={{ top: 40, right: 0, left: 0, bottom: 5 }} style={{ display: 'inline' }}>
                    <XAxis dataKey="px" reversed/>
                    <YAxis dataKey='qty' orientation='left'/>
                    <Line type="monotone" dataKey="qty" stroke="#3F6B24"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                </LineChart>
                <LineChart width={600} height={300} data={sellOrdrList}
                           margin={{ top: 40, right: 0, left: 0, bottom: 5 }} style={{ display: 'inline' }}>
                    <XAxis dataKey="px"/>
                    <YAxis dataKey="qty" orientation='right'/>
                    <Line type="monotone" dataKey="qty" stroke="#5C1F30"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                </LineChart>
            </div>
        )
    }
}

const mapStateToProps = ({ data }) => {
    return { data };
};

export default connect(mapStateToProps)(Chart);
