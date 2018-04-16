import React, { Fragment } from 'react';
import { AppBar } from 'material-ui';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() { this.setState({ open: !this.state.open }); }

  handleClose() { this.setState({ open: false }); }

  render() {
    return (
      <Fragment>
        <AppBar
          title="Document Mangement System"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem>
            <i className="fas fa-home" />&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/"
              className="link"
              onClick={this.handleClose}
            > Home
            </Link>
          </MenuItem>
          <MenuItem>
            <i className="fas fa-chart-line" />&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/dashboard"
              className="link"
              onClick={this.handleClose}
            > Dashboard
            </Link>
          </MenuItem>
        </Drawer>
      </Fragment>
    );
  }
}
