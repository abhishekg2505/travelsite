import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Mehak from './assets/mehak.png';
import Sakshi from './assets/sakshi.png';
import Smallph from './assets/small-ph.png';
import Map from './assets/map.png';

export default class Content extends Component {
    render() {
        return (
            <>
                <div className="container-fluid mainConWrap">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mainarea">
                    <div className="lh">
                        <input type="checkbox" className="read-more-state" id="post-1" />
                        <p className="read-more-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. <span className="read-more-target">Sed ut perspiciatis unde omnis
                                iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui
                                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                dolorem ipsum quia dolor
                                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat voluptatem.</span></p>
                        <label for="post-1" className="read-more-trigger"></label>
                    </div>

                    <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="journey-tab" data-bs-toggle="tab"
                                data-bs-target="#journey" type="button" role="tab" aria-controls="journey"
                                aria-selected="true">Journey</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews"
                                type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="photos-tab" data-bs-toggle="tab" data-bs-target="#photos"
                                type="button" role="tab" aria-controls="photos" aria-selected="false">Photos</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="trip-tab" data-bs-toggle="tab" data-bs-target="#trip"
                                type="button" role="tab" aria-controls="trip" aria-selected="false">Trip</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="stats-tab" data-bs-toggle="tab" data-bs-target="#stats"
                                type="button" role="tab" aria-controls="stats" aria-selected="false">Stats</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="journey" role="tabpanel"
                            aria-labelledby="journey-tab">

                            <div className="container-fluid j1">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src={Mehak} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-11">
                                        <h5>Mehak Jain</h5>
                                        <h6>Reviewed <strong>Recong Peo</strong></h6>
                                    </div>
                                    <div className="col-md-12">
                                        <p>2 months ago</p>
                                    </div>
                                    <div className="col-md-12">
                                        <img src={Smallph} alt="" />
                                        <img src={Smallph} alt="" />
                                        <img src={Smallph} alt="" />
                                        <img src={Smallph} alt="" />
                                        <img src={Smallph} alt="" />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <div className="lh">
                                            <input type="checkbox" className="read-more-state" id="post-1" />
                                            <p className="read-more-wrap">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing
                                                elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. <span className="read-more-target">Sed ut perspiciatis unde
                                                    omnis
                                                    iste natus error sit voluptatem
                                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                    quae ab illo inventore
                                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                    Nemo enim ipsam voluptatem
                                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui
                                                    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                                    dolorem ipsum quia dolor
                                                    sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                                    modi tempora incidunt ut
                                                    labore et dolore magnam aliquam quaerat voluptatem.</span></p>
                                            <label for="post-1" className="read-more-trigger"></label>
                                        </div>

                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <p><a href="#"><i className="fa fa-star"></i></a> 120 people found this review
                                            helpful</p>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid j2">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src={Mehak} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-11">
                                        <h5>Mehak Jain</h5>
                                        <h6>Commented on Recong Peo <strong>reviews</strong></h6>
                                    </div>
                                    <div className="col-md-12">
                                        <p>2 months ago</p>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="lh">
                                            <input type="checkbox" className="read-more-state" id="post-1" />
                                            <p className="read-more-wrap">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing
                                                elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. <span className="read-more-target">Sed ut perspiciatis unde
                                                    omnis
                                                    iste natus error sit voluptatem
                                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                    quae ab illo inventore
                                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                    Nemo enim ipsam voluptatem
                                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui
                                                    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                                    dolorem ipsum quia dolor
                                                    sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                                    modi tempora incidunt ut
                                                    labore et dolore magnam aliquam quaerat voluptatem.</span></p>
                                            <label for="post-1" className="read-more-trigger"></label>
                                        </div>

                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <p><a href="#"><i className="fa fa-heart"></i></a> 12 likes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid j3">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src={Mehak} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-11">
                                        <h5>Mehak Jain</h5>
                                        <h6>Recommended <strong>Kaza</strong></h6>
                                    </div>
                                    <div className="col-md-12">
                                        <p>2 months ago</p>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="big-ph.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-10">
                                        <h4 className="title">Kaza <span className="location"><i
                                                    className="fa fa-map-marker"></i>Spiti Valley, Himachal
                                                Pradesh</span>
                                            <span><a href="#" className="followLink">Add to Whislist</a></span>
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
                                        </p>
                                    </div>


                                </div>
                            </div>

                            <div className="container-fluid j4">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src={Mehak} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-11">
                                        <h5>Mehak Jain</h5>
                                        <h6>Followed <strong>Sakshi Goel</strong></h6>
                                    </div>
                                    <div className="col-md-12">
                                        <p>2 months ago</p>
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Sakshi} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-10">
                                        <h4 className="title">Sakshi Goel <span className="location"><i
                                                    className="fa fa-map-marker"></i>New Delhi, India</span> <span><a
                                                    href="#" className="followLink">Follow</a></span></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
                                        </p>
                                    </div>


                                </div>
                            </div>

                            <div className="container-fluid j5">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img src={Map} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-10">
                                        <h4>This journey started on 5 Jan 2015</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <h2>Reviews</h2>
                        </div>
                        <div className="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
                            <h2>Photos</h2>

                        </div>
                        <div className="tab-pane fade" id="trip" role="tabpanel" aria-labelledby="trip-tab">
                            <h2>Trip</h2>

                        </div>
                        <div className="tab-pane fade" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                            <h2>Stats</h2>

                        </div>
                    </div>
               
              
                </div>
                <Sidebar/>
            </div>
        </div>
    </div> 
     
            </>
        )
    }
}
