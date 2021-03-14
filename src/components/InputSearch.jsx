import React from "react";
import { Col, Row } from "react-bootstrap";

function InputSearch(props) {
    return (
        <Row>
            <Col md={4} >
                <input 
                    type="text" 
                    value={props.value} 
                    name={props.name} 
                    placeholder={props.placeholder} 
                    onChange={props.onChange} 
                    />
            </Col>
        </Row>
    )
}

export default InputSearch;