import axios from "axios";
import React from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Form,
  NavLink,
  Row,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import getUrl from "../../../Utility/GetUrl";

const AddCategory = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post(getUrl("category"), data).then((data) => {
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
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/admin">Admin</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Category</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  {...register("title")}
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

export default AddCategory;
