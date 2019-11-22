import React, {Component} from 'react';

class Title extends Component{
    render() {
        return <h1>Hello, {this.props.userName}</h1>;
      }
}
export default Title;