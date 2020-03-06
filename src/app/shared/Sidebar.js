import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { Collapse } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/menu', state: 'menuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="https://christham.net" className="nav-link">
              <div className="nav-profile-image">
                <img src={ require("../../assets/images/faces/face1.jpg")} alt="profile" />>
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">Chris Tham</span>
                <span className="text-secondary text-small">Junior Janitor</span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <span className="menu-title">Home</span>
              <i className="mdi mdi-home menu-icon"></i>
            </a>
          </li>
        </ul>
    </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    /*
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
  
      el.addEventListener('mouseover', function() {
        if(body.classNameList.contains('sidebar-icon-only')) {
          el.classNameList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classNameList.contains('sidebar-icon-only')) {
          el.classNameList.remove('hover-open');
        }
      });

    });
    */
  }

}

export default withRouter(Sidebar);