import React from 'react';

class AgencyBlock extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <li className="agencyItem" key={this.props.agency.tag}>{this.props.agency.title}</li>
        );
    }
}

export default AgencyBlock;