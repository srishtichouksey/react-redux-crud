import React, { Component } from 'react';
import {NavLink, NavItem, Navbar, Nav, Modal, ModalBody, ModalHeader, FormGroup, Form, Button, Label, Input} from 'reactstrap';
import Users from './UsersComponent';

export default class Header extends Component {

    constructor(props) {
        super(props);

         this.state = {
             isModalOpen : false,
             islogin : false
         }
         this.toggalModal = this.toggalModal.bind(this); 
         this.handleSubmit = this.handleSubmit.bind(this);
         //this.afterlogin = this.afterlogin.bind(this);
    }

    toggalModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event) {
        this.toggalModal();
        this.props.adminusers.map((user) =>{
            if(user['name'] === this.username.value && user['password'] === this.password.value) {
               alert('LOgged in succesfully');
                this.setState({
                    islogin:true
                });
            } else {
                alert('UserName or Password Is Invalid');
            }
        })
       event.preventDefault();
    }

    render() {
        if(this.state.islogin === true) {
           <Users adminname={this.username} />
            
        }
        return (
        <React.Fragment>
            <Navbar dark expand="md">
                <div className="header_content">
                    <div className="container">
                        <div className="row row-header">
                            <h1>Ristorante con Fusion</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lag"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lag"></span> About Us
                            </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink>
                        <span className="fa fa-list fa-lag"></span> Menu
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink>
                        <span className="fa fa-address-card fa-lag"></span> Contact Us
                    </NavLink>
                 </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button	outline onClick={this.toggalModal}>
                                <span className="fa fa-sign-in fa-lg"></span>Login
                            </Button>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggalModal}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="username">UserName</Label>
                            <Input type="text" name="username" id="username" innerRef={(input)=> this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password"> Password</Label>
                            <Input type="password" name="password" id="password" innerRef={(input)=> this.password = input} />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )};
}