import React, { Component } from 'react';
import Mehak from './assets/mehak.png'
export default class Banner extends Component {
    render() {
        return (
            <>
               <div className="container-fluid banner">
        <div className="container-fluid bannerInner">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-2 col-4">
                                <img src={Mehak} className="img-fluid w-100" />
                            </div>
                            <div className="col-md-10">
                                <h4 className="title">Mehak Jain <span><a href="#" className="followLink">Follow</a></span></h4>
                                <span className="location"><i className="fa fa-map-marker"></i>New Delhi, India</span>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor</p>
                                <ul className="pul">
                                    <li><i className="fa fa-list-alt"></i> <a href="#">Whislist (10)</a></li>
                                    <li><i className="fa fa-smile-o"></i> <a href="#">Buddy-List (55)</a></li>
                                    <li><i className="fa fa-users"></i> <a href="#">Following (20)</a></li>
                                    <li><i className="fa fa-users"></i> <a href="#">Followers (120)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 bannerSide">
                        <h3>Rank #45</h3>
                        <div className="row">
                            <div className="col-md-2 col-2 pe-1">
                                <p><i className="fa fa-signal"></i> 2</p>
                            </div>
                            <div className="col-md-10 col-10 ps-0">
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width:"25%"}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="col-md-12">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-share-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
            </>
        )
    }
}
