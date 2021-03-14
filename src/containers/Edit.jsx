import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Input from "../components/Input";
import InputSelect from "../components/InputSelect";
import axios from "axios";

function Edit(props) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(
                "http://localhost:4000/api/" + props.match.params.id,
            );

            setProduct(response.data);
        };

        fetchData();
    }, [props.match.params.id]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProduct(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        })
    };

    const editProduct = (event) => {
        event.preventDefault();

        axios.post("http://localhost:4000/api/edit/" + props.match.params.id, product)
            .then(res => {
                console.log(res.data);
                props.history.push("/");
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Edit Product</h2>
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
                            <Button variant="primary" type="submit" onClick={editProduct}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Edit;