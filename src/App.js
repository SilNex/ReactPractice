import React, { Component } from 'react';
// import MyName from './MyName';
// import Counter from './Counter';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {
    id = 2
    state = {
        information:[
            {
                id: 0,
                name: '백승진',
                phone: '010-1234-1111',
            },
            {
                id: 1,
                name: '이성필',
                phone: '010-1111-1234',
            },
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        })
    }
    handleRemove = (id) => {
        const { information } = this.state
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }
    render() {
        return (
            <div>
                <PhoneForm 
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList data={this.state.information}/>
            </div>
        )
    }
}

export default App;
