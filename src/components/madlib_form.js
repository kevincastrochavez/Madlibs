import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import _ from 'lodash';
import MadlibContent from './madlib-content';

function MadLibInput(props) {
    return(
        <Col md='3' className="input-wrapper">
            <Row>
                <Col md='2'>
                    <label className="green-label">{props.index}</label>
                </Col>

                <Col md="10">
                    <input placeholder={props.placeholder} value={props.state} type="text" onChange={props.onChange} />
                </Col>
            </Row>

            <Row>
                <Col md="2"></Col>

                <Col md="10">
                    <div className="input-description">
                        {props.placeholder}
                    </div>
                </Col>
            </Row>
        </Col>
    );
}

class MadlibForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            completedForm: false,
            color:'',
            pluralNoun: '',
            adjectiveOne: '',
            celebrityOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebrityTwo: '',
            celebrithThree: '',
            adjectiveFour: '',
            nounThree: '',
            celebrityFour: '',
            adjectiveFive: ''
        }
    }

    onChange = function (props) {
        return function(event) {
            this.setState({[props.inputTitle]: event.target.value});
        }.bind(this);
    }

    onSubmit = function(event) {
        this.setState({completedForm: true});
        event.preventDefault();
    }.bind(this);

    onClick = function() {
        this.setState({
            completedForm: false,
            color:'',
            pluralNoun: '',
            adjectiveOne: '',
            celebrityOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebrityTwo: '',
            celebrithThree: '',
            adjectiveFour: '',
            nounThree: '',
            celebrityFour: '',
            adjectiveFive: ''
        });
    }.bind(this);

    renderButton = function() {
        return this.state.completedForm ? 
            <a className="clear-button" onClick={this.onClick}>Clear Mad Lib</a>
            :
            <input type="submit" className="generate-button" value="Generate Mad Lib"/>
    }
    
    render() {

        this.inputData = [
            {placeholder: 'Color', prop: 'color', state: this.state.color},
            {placeholder: 'Noun (Plural)', prop: 'pluralNoun', state: this.state.pluralNoun},
            {placeholder: 'Adjective', prop: 'adjectiveOne', state: this.state.adjectiveOne},
            {placeholder: 'Celebrity', prop: 'celebrityOne', state: this.state.celebrityOne},
            {placeholder: 'Adjective', prop: 'adjectiveTwo', state: this.state.adjectiveTwo},
            {placeholder: 'Noun', prop: 'nounOne', state: this.state.nounOne},
            {placeholder: 'Number', prop: 'numberOne', state: this.state.numberOne},
            {placeholder: 'Number', prop: 'numberTwo', state: this.state.numberTwo},
            {placeholder: 'Noun', prop: 'nounTwo', state: this.state.nounTwo},
            {placeholder: 'Adjective', prop: 'adjectiveThree', state: this.state.adjectiveThree},
            {placeholder: 'Celebrity', prop: 'celebrityTwo', state: this.state.celebrityTwo},
            {placeholder: 'Celebrity', prop: 'celebrityThree', state: this.state.celebrityThree},
            {placeholder: 'Adjective', prop: 'adjectiveFour', state: this.state.adjectiveFour},
            {placeholder: 'Noun', prop: 'nounThree', state: this.state.nounThree},
            {placeholder: 'Celebrity', prop: 'celebrityFour', state: this.state.celebrityFour},
            {placeholder: 'Adjective', prop: 'adjectiveFive', state: this.state.adjectiveFive},
        ]
        
        return (
            <div className="card-wrapper">
                <Card>
                    <form onSubmit={this.onSubmit} id="madlib-form">
                        <Row style={{textAlign: 'center', color: 'white'}}>
                            {
                                _.map(this.inputData, (data, indexKey) => {
                                    return <MadLibInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.onChange({inputTitle: data.prop})} />;
                                })
                            }
                        </Row>

                        <Row>
                            <Col md="12" className="button-wrapper">
                                {this.renderButton()}
                            </Col>
                        </Row>
                    </form>

                    <MadlibContent data={this.state} />
                </Card>
            </div>
        );
    };
}

export default MadlibForm;