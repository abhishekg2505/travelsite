import React, { Component } from 'react'
import Mehak from './assets/mehak.png';
export default class Sidebar extends Component {
    render() {
        return (
            <>
              <div className="col-md-4 sidebar">
                    <div className="sidebar1 sidebarBg">
                        <ul className="sidelist">
                            <li><a href="#"><i className="fa fa-map-marker"></i> Journey</a></li>
                            <li><a href="#"><i className="fa fa-pencil"></i> Reviews</a></li>
                            <li><a href="#"><i className="fa fa-camera"></i> Photos</a></li>
                            <li><a href="#"><i className="fa fa-suitcase"></i> Trips</a></li>
                            <li><a href="#"><i className="fa fa-bar-chart"></i> Stats</a></li>
                        </ul>
                    </div>
                    <div className="sidebar2 sidebarBg">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Popular reviews by Mehak Jain</h3>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar2 sidebarBg">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Popular trips by Mehak Jain</h3>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 col-2 pe-1">
                                <img src={Mehak} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-md-9 col-10 ps-0">
                                <h6><strong>Mehak Jain</strong> Reviewed <strong>Recong Peo</strong></h6>
                                <p>2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                </>
        )
    }
}
