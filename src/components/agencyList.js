import React from 'react';

import AgencyBlock from './agencyBlock';

class AgencyList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        console.log('agencies', this.props);

        return (
            <ul className="agenciesContainer">
                {this.props.agencies.map(agency => <AgencyBlock agency={agency} key={agency.tag} />)}
            </ul>
        );
    }
}

export default AgencyList;