import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Input from "./Input";

function InputSearch(props) {
    return (
        <Row>
            <Col md={4}>
            <Form>
                <Input 
                    type="text"
                    value={props.value}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    />
            </Form>
            </Col>
        </Row>
    )
}

export default InputSearch;