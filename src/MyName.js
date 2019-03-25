import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        name: '기본이름'
    }
    render() {
        return (
            <div>
                안녕! 내 이름은 {this.props.name} 입니다.
            </div>
        )
    }
}

export default MyName;