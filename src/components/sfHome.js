import React from 'react';

import Header from './header.js';
import Content from './content.js';

class SfHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        return (
            <div className="app">
                <Header />
                <Content {...this.props.agencies}/>
            </div>
        );
    }
}

export default SfHome;