import React from 'react';

import AgencyBlock from './agencyBlock';

class AgencyList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ul className="agenciesContainer">
                {this.props.agencies.agencies.agency.map(agency => <AgencyBlock {...this.props} agency={agency} key={agency.tag} />)}
            </ul>
        );
    }
}

export default AgencyList;