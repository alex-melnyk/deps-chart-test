import React, { Component } from 'react';
import { Navbar, FormControl, FormGroup } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    componentWillMount() {
        this.props.fetchBooksList();
    }

    renderOptions() {
        return this.props.list.map((date, index) => <option key={index} value={date}>{date}</option>);
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Depth Graph</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl componentClass="select" onChange={(e) => this.props.fetchData(e.target.value)}>
                            <option value="-------">------</option>
                            {this.renderOptions()}
                        </FormControl>
                    </FormGroup>
                </Navbar.Form>
            </Navbar>
        )
    }
}

const mapStateToProps = ({ list }) => {
    return { list };
};

export default connect(mapStateToProps, actions)(Header);


