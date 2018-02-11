import React from 'react';

import RouteBlock from './routeBlock';

class RouteList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ul className="routesContainer">
                {this.props.agencyRoutes.map(route => <RouteBlock {...this.props} route={route} key={route.tag} />)}
            </ul>
        );
    }
}

export default RouteList;