import React, { Component } from 'react'

class MyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const childrenWithProps = React.Children.map(
            this.props.children,
            child =>
                React.cloneElement(child, {
                    parentState: this.state.count,
                    handleClick: this.handleClick
                })
        )
        return (
            <div style={{ border: '1px solid blue' }}>
                <span>父容器:</span>
                {childrenWithProps}
            </div>
        )
    }
}

export default MyContainer
