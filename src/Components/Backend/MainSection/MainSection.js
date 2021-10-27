import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center py-3">
        <h4>Admin !!</h4>
        <Breadcrumb>
          <Breadcrumb.Item as={Link} to="/admin">
            Admin
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
        
      </div>
    </div>
  );
};

export default MainSection;
