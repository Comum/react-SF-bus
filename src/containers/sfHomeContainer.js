import {connect} from 'react-redux';

import {pickAgencyRoutes} from '../actions';
import SfHome from '../components/sfHome';

const stateToProps = state => {
    return {
        agencies: state.agencies
    };
}

const dispatchToProps = dispatch => {
    return {
        onClickRoute: (...args) => {
            dispatch(pickAgencyRoutes(...args))
        }
    };
}

const SfHomeContainer = connect(stateToProps, dispatchToProps)(SfHome);

export default SfHomeContainer;