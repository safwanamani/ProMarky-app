import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputSearch from "../components/InputSearch";
import Layout from "../components/Layout";

function List() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const newProducts = searchTerm.length < 1 ? products : searchResults;

    useEffect(() => {
        const source = axios.CancelToken.source();

        axios.get("http://localhost:4000/api/", {
            cancelToken: source.token,
        }).then(response => {
            setProducts(response.data);
        }).catch(error => {
            if (axios.isCancel(error)) {
            } else {
                throw error;
            }
        });

        return () => {
            source.cancel();
        }
    });

    const deleteProduct = (id) => {
        const conf = window.confirm("Are sure want to delete ?");

        if (conf) {
            axios.delete("http://localhost:4000/api/delete/" + id)
                .then(() => {
                    console.log("Product deleted successfully");
                }).catch(() => {
                    console.log("Can't delete product");
                })
        }
    }

    const getSearchTerm = (event) => {
        const Value = event.target.value;
        setSearchTerm(Value);

        if (Value !== "") {
            const _products = products.filter(product => {
                return Object.values(product)
                    .join(" ").toLowerCase()
                    .includes(Value.toLowerCase());
            });

            setSearchResults(_products);
        } else {
            setSearchResults(products);
        }
    }

    return (
        <Layout>
            <Container>
                <InputSearch
                    placeholder="Search products..."
                    value={searchTerm}
                    name="search"
                    onChange={getSearchTerm}
                />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {newProducts.length > 0 ? <tbody>
                        {newProducts.map((product, index) => {
                            return <tr key={index}>
                                <td>{product.proId}</td>
                                <td>{product.productName}</td>
                                <td>{product.quantity}</td>
                                <td>{product.date}</td>
                                <td>{product.status}</td>
                                <td>
                                    <Link to={"/edit/" + product._id} className="btn btn-primary">Edit</Link>
                                    <Button onClick={() => deleteProduct(product._id)}>Delete</Button>
                                </td>
                            </tr>
                        })}
                    </tbody> : "No Product found"}
                </Table>
            </Container>
        </Layout>
    )
}

export default List;