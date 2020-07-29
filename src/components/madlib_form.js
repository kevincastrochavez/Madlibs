import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class MadlibForm extends Component {

    handleChange = function () {

    }
    
    render() {
        return (
            <Row style={{textAlign: 'center', color: 'white'}}>

                <Col md='3' className="inputWrapper">
                    <Row>
                        <Col md='2'>
                            <label className="greenLabel">1</label>
                        </Col>

                        <Col md="10">
                            <input placeholder="Color" type="text" onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col>

                <Col md='3' className="inputWrapper">
                    <Row>
                        <Col md='2'>
                            <label className="greenLabel">1</label>
                        </Col>

                        <Col md="10">
                            <input placeholder="Color" type="text" onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col>

                <Col md='3' className="inputWrapper">
                    <Row>
                        <Col md='2'>
                            <label className="greenLabel">1</label>
                        </Col>

                        <Col md="10">
                            <input placeholder="Color" type="text" onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col>

                <Col md='3' className="inputWrapper">
                    <Row>
                        <Col md='2'>
                            <label className="greenLabel">1</label>
                        </Col>

                        <Col md="10">
                            <input placeholder="Color" type="text" onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        );
    };
}

export default MadlibForm;