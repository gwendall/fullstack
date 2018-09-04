import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthActions from 'core/redux/Auth/actions';
import * as AuthSelector from 'core/redux/Auth/selector';

import Sidebar from './Sidebar';

export default compose(
  connect(
    state => ({
      isConnected: AuthSelector.isConnected(state),
    }),
    dispatch => bindActionCreators({ ...AuthActions }, dispatch)
  )
)(Sidebar);
