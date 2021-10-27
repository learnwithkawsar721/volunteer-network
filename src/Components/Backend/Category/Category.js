import React from "react";
import { Container, Table } from "react-bootstrap";
import "./Category.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import getUrl from "../../../Utility/GetUrl";
const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(getUrl("category")).then((data) => setCategories(data.data));
  }, []);
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center py-3">
          <h4>Category !!</h4>
          <NavLink to="/category/add">add New</NavLink>
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
        <div className="mainContent">
          <div>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Img</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={category?.img}
                        className="category_img"
                        alt=""
                      />
                    </td>
                    <td>{category?.title}</td>
                    <td>
                      <NavLink
                        to={`/category/edit/${category?._id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Category;
