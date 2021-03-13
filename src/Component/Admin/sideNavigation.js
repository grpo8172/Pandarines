import React from 'react';
import logo from "../../Assets/logo_bottom.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            {/* <a href="/" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a> */}
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/admin" activeClassName="heavy-rain-gradient">
                    <MDBListGroupItem style={{color: "#212529"}}> 
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Stastics
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/admin/teachers" activeClassName="heavy-rain-gradient">
                    <MDBListGroupItem style={{color: "#212529"}}>
                        <MDBIcon icon="user" className="mr-3"/>
                        Teachers
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/admin/contactinfo" activeClassName="heavy-rain-gradient">
                    <MDBListGroupItem style={{color: "#212529"}}>
                        <MDBIcon icon="table" className="mr-3"/>
                        Contact Info
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/admin/blog" activeClassName="heavy-rain-gradient">
                    <MDBListGroupItem style={{color: "#212529"}}>
                        <MDBIcon icon="blog" className="mr-3"/>
                        Blog
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/admin/feedback" activeClassName="heavy-rain-gradient">
                    <MDBListGroupItem style={{color: "#212529"}}>
                        <MDBIcon icon="comments" className="mr-3"/>
                        Feed back
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;