import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Input from "../components/Input";
import InputSelect from "../components/InputSelect";
import Layout from "../components/Layout";

function Create(props) {
    const [product, setProduct] = useState({
        proId: "",
        productName: "",
        quantity: "",
        date: "",
        status: "Active"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProduct(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const createProduct = (event) => {
        axios.post('http://localhost:4000/api/create', product)
            .then((data) => {
                console.log(data);

                props.history.push("/");
            }).catch(err => {
                console.log(err);
            });

            event.preventDefault();
    }

    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Create Product</h2>
                        <Form>
                            <Input
                                label="Product id"
                                type="text"
                                placeholder="Product id"
                                value={product.proId}
                                name="proId"
                                onChange={handleChange}
                            />

                            <Input
                                label="Product name"
                                type="text"
                                placeholder="Product name"
                                value={product.productName}
                                name="productName"
                                onChange={handleChange}
                            />

                            <Input
                                label="Quantity"
                                type="text"
                                placeholder="Quantity"
                                value={product.quantity}
                                name="quantity"
                                onChange={handleChange}
                            />

                            <Input
                                label="Date"
                                type="Date"
                                placeholder="Date"
                                value={product.date}
                                name="date"
                                onChange={handleChange}
                            />
                            <InputSelect
                                label="Status"
                                type="text"
                                placeholder="Status"
                                value={product.status}
                                name="status"
                                option1="Active"
                                option2="Inactive"
                                onChange={handleChange}
                            />
                            <Button variant="primary" type="submit" onClick={createProduct}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Create;