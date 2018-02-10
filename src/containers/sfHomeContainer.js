import {connect} from 'react-redux';

import {getAgencyRoutes} from '../actions';
import SfHome from '../components/sfHome';

const stateToProps = state => {
    return {
        agencies: state.agencies
    };
}

const dispatchToProps = dispatch => {
    return {
        onClickAgency: (...args) => {
            dispatch(getAgencyRoutes(...args))
        }
    };
}

const SfHomeContainer = connect(stateToProps, dispatchToProps)(SfHome);

export default SfHomeContainer;