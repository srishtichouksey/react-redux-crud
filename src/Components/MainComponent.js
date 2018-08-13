import React, { Component } from 'react';
import Header from './HeaderComponent';
import { fetchUser } from '../redux/ActionCreator';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        Admin: state.admin
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {dispatch(fetchUser())}
});

class Main extends Component {

    componentDidMount() {
       this.props.fetchUser();
    }

    render() {
        console.log(this.props);
        return (
            <Header />
        )
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));