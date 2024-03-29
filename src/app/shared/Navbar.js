import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () { 
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.svg")} alt="logo" /></a>
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle" id="profileDropdown" href="https://christham.net" data-toggle="dropdown" aria-expanded="false">
                <div className="nav-profile-img">
                  <img src={require("../../assets/images/faces/face1.jpg")} alt="face" />
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">Chris Tham</p>
                </div>
              </a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item" href="https://christham.net">
                  <i className="mdi mdi-cached mr-2 text-success"></i> Activity Log </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://christham.net">
                  <i className="mdi mdi-logout mr-2 text-primary"></i> Signout </a>
              </div>
            </li>
            <li className="nav-item d-none d-lg-block full-screen-link">
              <a className="nav-link" href="https://christham.net">
                <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator dropdown-toggle p-0 toggle-arrow-hide bg-transparent" id="messageDropdown">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count-symbol bg-warning">4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <h6 className="p-3 mb-0">Messages</h6>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face4.jpg")} alt="face" className="profile-pic" />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                      <p className="text-gray mb-0"> 1 Minutes ago </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                    <img src={require("../../assets/images/faces/face2.jpg")} alt="face" className="profile-pic" />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                      <p className="text-gray mb-0"> 15 Minutes ago </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="!#" onClick={evt =>evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <img src={require("../../assets/images/faces/face3.jpg")} alt="face" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                    <p className="text-gray mb-0"> 18 Minutes ago </p>
                  </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item dropdown">
            <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator dropdown-toggle p-0 toggle-arrow-hide bg-transparent" id="notificationDropdown">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count-symbol bg-danger">4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <h6 className="p-3 mb-0">Notifications</h6>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                      <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                      <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                      <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item" href="!#" onClick={evt =>evt.preventDefault()}>
                    <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <a className="nav-link" onClick={evt =>evt.preventDefault()} href="https://christham.net">
                <i className="mdi mdi-power"></i>
              </a>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <a className="nav-link" onClick={evt =>evt.preventDefault()} href="https://christham.net">
                <i className="mdi mdi-format-line-spacing"></i>
              </a>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
