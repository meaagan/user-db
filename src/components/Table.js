import React from 'react'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error:null,
            isLoaded: false,
            users: []
        }
    }

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then (result => result.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                })
            }
        )
    }

    render() {

    }

}