import React from 'react';

class RouteSelected extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        if (this.props.agencies.pickedRouteName && this.props.agencies.agencyExpandedName) {
            return (
                <div className="RouteSelectedWrapper">
                    <div className="RouteSelectedCurrentRoute">
                        Picked {this.props.agencies.pickedRouteName} from {this.props.agencies.agencyExpandedName}
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