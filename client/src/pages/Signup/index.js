import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthActions from 'core/redux/Auth/actions';
import * as AuthSelector from 'core/redux/Auth/selector';

import Page from './Page';

export default compose(
  connect(
    null,
    dispatch => bindActionCreators({ ...AuthActions }, dispatch)
  )
)(Page);
