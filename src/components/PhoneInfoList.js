import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        const { data, onRemove, onUpdate, onClick } = this.props;
        console.log(this.props)
        const list = data.map(
            info => (
                    <PhoneInfo
                        key={info.id}
                        info={info}
                        onRemove={onRemove}
                        onUpdate={onUpdate}
                        onClick={onClick}
                    />
                )
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;