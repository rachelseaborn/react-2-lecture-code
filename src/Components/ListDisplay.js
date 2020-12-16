//import React, {Component} from 'react;
import {Component} from 'react';

class ListDisplay extends Component {
    render(){
        console.log('Props: ', this.props);
        return (
            <section>
                <p>{this.props.todo}</p>
            </section>
        )
    }
}

export default ListDisplay;