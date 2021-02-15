import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
              <footer className="container-fluid footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 footer-left">
                    <p>copyright &#169; 2015 travelsite.com. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 footer-right">
                    <a href="#">Disclaimer & Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>  
            </>
        )
    }
}
