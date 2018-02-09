import React from 'react';

import Header from './header.js';
import Content from './content.js';

class SfHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        console.log('sfHome', this.props);

        return (
            <div className="app">
                <Header />
                <Content />
            </div>
        );
    }
}

export default SfHome;