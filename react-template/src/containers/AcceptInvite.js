import React from 'react';
import AcceptInviteForm from '../containers/AcceptInviteForm';
import {Grid, Row, Col} from 'react-bootstrap';
import Check from 'material-ui/svg-icons/navigation/check';
import {connect} from 'react-redux';

const iconStyles = {
  width: 40,
  height: 40,
  color: '#FFFFFF',
  position: 'relative',
  top: -12,
  float: 'right'
};

class AcceptInvite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      customerName: '',
      customerId: '',
      token: ''
    };
  }

  componentWillMount() {
    const queryString = require('query-string');
    let params = queryString.parse(window.location.search);
    this.setState({
      email: params.email,
      customerName: params.companyName,
      customerId: params.id,
      token: params.token
    });
  }

  next() {
    if (this.state.customerId) {
      this.props.history.push('/');
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className='full_height'>
        <Grid fluid={true} className='full_height'>
          <Row className='full_height'>
            <Col xs={12} sm={6} className='accept_invite_bg_dark'>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h1>Welcome!</h1>
              <br/>
              <br/>
              <br/>
              <p className='accept_invite_text'>You have been invited to manage irrigation for:</p>
              <h2 className='accept_invite_company'>{this.state.customerName}</h2>
              { this.state.token &&
                <p className='accept_invite_text'>
                  { 'Let\'s start by setting a password for your account.' }
                </p>
              }
            </Col>
            <Col xs={12} sm={6} className='accept_invite_bg_light'>
              <Row >
                <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <p className='accept_invite_username_text'>
                    Your username is
                  </p>
                  <p className='accept_invite_username'>
                    {this.state.email}
                  </p>
                  <Check style={iconStyles} />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <AcceptInviteForm
                    token={this.state.token}
                    next={this.next.bind(this)} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect()(AcceptInvite);
