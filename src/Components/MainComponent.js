import React, { Component } from 'react';
import Header from './HeaderComponent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/ActionCreator';

const mapStateToProps = state => {
    return{
        admin: state.admin
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
        //console.log(this.props.admin.adminusers);
        return (
            <Header adminusers = {this.props.admin.adminusers} />
        )
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));