import React, {Component} from 'react';

class Title extends Component{
    render() {
        return <h1>Hello, {this.props.title}</h1>;
      }
}
export default Title;