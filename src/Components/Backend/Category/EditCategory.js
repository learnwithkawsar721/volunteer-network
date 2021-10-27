import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import getUrl from "../../../Utility/GetUrl";

const EditCategory = () => {
  const { id } = useParams();
  const history = useHistory();
  const [category, setCategory] = useState({});
  useEffect(() => {
    axios.get(getUrl(`category/${id}`)).then((data) => setCategory(data.data));
  }, [id]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.put(getUrl("category"), data).then((data) => {
      if (data.data.insertedId) {
        history.push("/category");
        reset();
      }
    });
  };
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center py-3">
          <h4>Category !!</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/admin">Admin</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>
        </div>
        <Row>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  {...register("title")}
                  defaultValue={category?.title}
                  placeholder="title..."
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="img">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  type="text"
                  {...register("img")}
                  placeholder="Url..."
                />
                <img src={category?.img} className="pt-4" alt="" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditCategory;
