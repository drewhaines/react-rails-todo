import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import avatar from '../images/avatar.png';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Close from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import {signOut} from '../actions/redux-auth/sign-out';
import {NotificationContainer} from 'react-notifications';
import {updateDrawerVisibility} from '../actions/Header';
import Check from 'material-ui/svg-icons/navigation/check';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout () {
    let history = this.props.history;
    this.props.dispatch(signOut('default'))
      .then(history.push('/login'))
      .catch(() => {});
  }

  handleTouchTap() {
    this.props.dispatch(updateDrawerVisibility(!this.props.header.isDrawerOpen));
  }

  menuItems(customers) {
    return customers.map((customer, index) => (
      <MenuItem
        key={customer.customerId + index}
        value={customer.customerId}
        primaryText={customer.customerName}
      />
    ));
  }

  render() {
    const path = this.props.history.location.pathname;
    console.log(path);

    return (
      <div className="header_border no_print">
        <MuiThemeProvider>
          <div>
            <MuiThemeProvider>
              <Toolbar
                style={{
                  backgroundColor: '#FFFFFF',
                  paddingRight: '0px',
                  zIndex: 1000,
                  position: 'fixed',
                  width: '100%',
                  borderBottom: '1px solid lightgrey'
                }}
              >
                <ToolbarGroup firstChild={true}>
                  <div className='pointer' onClick={this.handleTouchTap}>
                    Icon Goes Here
                  </div>
                  <ToolbarSeparator
                    style={{marginLeft: 0, height: '100%'}}
                  />
                </ToolbarGroup>
                <ToolbarGroup style={{width: '100%'}}>
                  <TextField
                    underlineShow={false}
                    fullWidth={true}
                    style={{paddingLeft: 15}}
                    name='search' />
                  <ToolbarSeparator
                    style={{marginLeft: 0, height: '100%'}}
                  />
                  <IconButton style={{margin: 8}}><Search /></IconButton>
                  <IconMenu
                    iconButtonElement={
                      <IconButton
                        style={{padding: 0, border: 'none', width: 56, height: 56}}
                      >
                        <img
                          src={avatar}
                          alt={'avatar'}
                          className='header_avatar'
                        />
                      </IconButton>
                    }
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    menuStyle={{width: 400, padding: 0}}
                    style={{padding: 0}}
                    listStyle={{padding: 0}}
                  >
                    <MenuItem
                      onClick={this.handleSignout}
                      next={() => this.props.history.push('/login')}
                    >
                      <i className="fa fa-power-off menu_item_icon" aria-hidden="true"></i>
                      <span className='menu_item_title'>
                        Sign Out
                      </span>
                    </MenuItem>
                  </IconMenu>
                </ToolbarGroup>
              </Toolbar>
            </MuiThemeProvider>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <Drawer
                width={250}
                open={this.props.header.isDrawerOpen}
                className="app-drawer"
                containerStyle={{top: 56, backgroundColor: '#262e40', boxShadow: 'none'}}
              >
                <br/>
                <Link to="/">
                  <MenuItem
                    id='dashboard_link'
                    className='sidebar_menu'
                  >
                    <i className="fa fa-server menu_item_icon" aria-hidden="true"></i>
                    <span className='menu_item_title'>
                      Home
                    </span>
                  </MenuItem>
                </Link>
              </Drawer>
            </MuiThemeProvider>
          </div>
        </MuiThemeProvider>
        <NotificationContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    header: state.header,
  };
}

export default connect(mapStateToProps)(Header);
