import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2020 <a href="https://www.hellotham.com/" target="_blank" rel="noopener noreferrer">Hello Tham Pty Ltd</a>. All rights reserved.</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
        </div>
      </footer>
    );
  }
}

export default Footer;