import React from 'react';

class RouteSelected extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        if (this.props.agencies.selectedRoutes.length) {
            let pickedRoutes = '';

            this.props.agencies.selectedRoutes.forEach((route, index) => {
                if (index === 0) {
                    pickedRoutes = route.pickedRouteName;
                } else {
                    pickedRoutes = pickedRoutes + ', ' + route.pickedRouteName;
                }
            });

            return (
                <div className="RouteSelectedWrapper">
                    <div className="RouteSelectedCurrentRoute">
                        {pickedRoutes}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="RouteSelectedWrapper">
                    <div className="RouteSelectedCurrentRoute">No route currently selected</div>
                </div>
            );
        }
    }
}

export default RouteSelected;