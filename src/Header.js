import React, { Component } from 'react'
import Sanjay from './assets/sanjay.png';
import Feed from './assets/feed.png';
export default class Header extends Component {
    render() {
        return (
            <>
               <nav className="navbar navbar-expand-lg navbar-light customNav">
        <div className="container">
            <a className="navbar-brand" href="#"><i className="fa fa-map-marker"></i> TravelSite.com</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form className="d-flex">
                <input className="form-control navSearch" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn searchIcon" type="submit"><i className="fa fa-search"></i></button>
            </form>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><img src={Sanjay}
                                className="me-1 pp" />Sanjay Singh</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src={Feed} className="me-1" />Feeds</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className="nwrap">
                                <i className="fa fa-envelope"></i>
                                <span className="number">5</span>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className="nwrap">
                                <i className="fa fa-bell"></i>
                                <span className="number">5</span>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-cog"></i>
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    </nav> 
            </>
        )
    }
}
