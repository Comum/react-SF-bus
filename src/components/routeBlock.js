import React from 'react';

class RouteBlock extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick = () => {
        this.props.onClickRoute(this.props.route.tag, this.props.route.title, this.props.agencies.agencyExpanded, this.props.agencies.agencyExpandedName);
    }

    render() {
        return (
            <li className="routeItem" 
                key={this.props.route.tag}
                onClick={this.handleClick}
                >
                {this.props.route.title}
            </li>
        );
    }
}

export default RouteBlock;