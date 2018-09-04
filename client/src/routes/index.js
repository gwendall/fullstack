import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as AuthActions from 'core/redux/Auth/actions';
import * as AuthSelector from 'core/redux/Auth/selector';

import Layout from 'components/Layout';
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import Home from 'pages/Home';
import NoMatch from 'pages/NoMatch';

import { injectGlobal } from 'styled-components';
import SanFranciscoLight from 'assets/fonts/SanFranciscoDisplay-Light.otf';
import SanFranciscoMedium from 'assets/fonts/SanFranciscoDisplay-Medium.otf';
import SanFranciscoBold from 'assets/fonts/SanFranciscoDisplay-Bold.otf';

injectGlobal`
  body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'San-Francisco';
  }
  #root {
    height: 100%;
  }
  @font-face {
    font-family: 'San-Francisco';
    src: url(${SanFranciscoLight});
    font-weight: lighter;
    font-style: normal;
  }
  @font-face {
    font-family: 'San-Francisco';
    src: url(${SanFranciscoMedium});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'San-Francisco';
    src: url(${SanFranciscoBold});
    font-weight: bold;
    font-style: normal;
  }
`;

class RootRouter extends React.Component {
  render() {
    const { isConnected } = this.props;
    return (
      <Layout>
        <Switch>
          {isConnected ? (
            <React.Fragment>
              <Route exact path="/" component={Home} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route exact path="/" component={Signup} />
              <Route exact path="/login" component={Login} />
            </React.Fragment>
          )}
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    );
  }
}
RootRouter.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  signup: PropTypes.func,
  logout: PropTypes.func,
};
RootRouter.defaultProps = {
  isConnected: false,
};

const SmartRootRouter = compose(
  connect(state => ({
    isConnected: AuthSelector.isConnected(state),
  }))
)(RootRouter);

export default SmartRootRouter;
