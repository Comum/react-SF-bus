import React from 'react';

import RouteList from './routesList';

class AgencyBlock extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick = () => {
        this.props.onClickAgency(this.props.agency.tag, this.props.agency.title);
    }

    render() {
        if (this.props.agencies.agencyExpanded !== this.props.agency.tag) {
            return (
                <li className="agencyItem" 
                    key={this.props.agency.tag}
                    onClick={this.handleClick}
                    >
                    {this.props.agency.title}
                </li>
            );
        } else {
            return (
                <li className="agencyItem--withResults" 
                    key={this.props.agency.tag}
                    onClick={this.handleClick}
                    >
                    <div className="agencyItemHeader">
                        {this.props.agency.title}
                    </div>
                    <RouteList {...this.props} />
                </li>
            );
        }
    }
}

export default AgencyBlock;