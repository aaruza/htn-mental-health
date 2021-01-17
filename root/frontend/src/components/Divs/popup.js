import React, {Component} from 'react'
import "./popup.css"
// import TransparentButton from "../Buttons/button.js"

export default class Popup extends Component {
    constructor() {
        super()
    }

    render() {
        var clarity = 0.0
        var z_index = -9999
        var onClick = () => {}
        
        var content = <p>hi</p>

        if(this.props.visible != null && this.props.visible != false) {
            clarity = 1.0
            z_index = 9999
        }

        this.props.onClick == null ? onClick = () => {} : onClick =  this.props.onClick
        
        if(!(this.props.type == null)) {
            if(this.props.type == "signup")
                content = this.signup()
            if(this.props.type == "signin")
                content = this.signin()
        }


        return(
            <div onClick={onClick} style={{opacity: clarity, zIndex: z_index}} className='Masking-div'>
                <div className="content-pane">
                    {content}
                </div>
            </div>
        )
    }

    signup() {
        return(
            <div className="Popup-Content">
                <form className="forms" id="sign-up">
                    <h1>Sign up</h1>
                    <label className='form-label'>Username: </label>
                    <input className='form-text' type="text" id="username"/>
                    <br/>
                    <label className='form-label'>Email</label>
                    <input className='form-text' type="text" id="email"/>
                    <br/>
                    <label className='form-label'>Password</label>
                    <input className='form-text' type="text" id="password"/>
                    <br/>
                    <label className='form-label'>Confirm Password</label>
                    <input className='form-text' type="text" id="password-confirm"/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

    signin() {
        return(
            <div className="Popup-Content">
                <form className="forms" id="sign-in">
                    <h1>Sign In</h1>
                    <label className='form-label'>Email</label>
                    <input className='form-text' type="text" id="email"/>
                    <br/>
                    <label className='form-label'>Password</label>
                    <input className='form-text' type="text" id="password"/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}