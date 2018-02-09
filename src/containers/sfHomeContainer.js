import {connect} from 'react-redux';

import SfHome from '../components/sfHome';

const stateToProps = state => {
    return {
        agencies: state.agencies
    };
}

const dispatchToProps = dispatch => {
    return {};
}

const SfHomeContainer = connect(stateToProps, dispatchToProps)(SfHome);

export default SfHomeContainer;