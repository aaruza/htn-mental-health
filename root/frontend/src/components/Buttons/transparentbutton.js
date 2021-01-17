import React, { Component } from 'react'
import './transparentbutton.css'

export default class TransparentButton extends Component {
    render() {
        var text = ""
        var onClick = () => {}
        this.props.text == null ? text = "Click Me!" : text = this.props.text
        this.props.onClick == null ? onClick = () => {} : onClick = this.props.onClick
        return (
            <button onClick={onClick} className="TransparentButton">{text}</button>
        )
    }
}