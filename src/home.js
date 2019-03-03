import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Button from './Components/button'

export default class Login extends React.Component {
    navigate = (data) => {
        if (data === 'animal') {
            this.props.history.push({
                pathname: '/animalSection'
            })
        } else {
            this.props.history.push({
                pathname: '/vegetableSection'
            })
        }
    }
    render() {
        return (
            <div className="col-md-12 col-xs-12 center-block" >
                <Button className="cc-button-primary" onClick={() => this.navigate('animal')} value="CLICK TO SEE ANIMAL SECTION" />
                <Button className="cc-button-primary2" onClick={() => this.navigate('vegetable')} value="CLICK TO SEE VEGETABLE SECTION" />
            </div>
        );
    }
}