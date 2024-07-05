import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import File from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../features/usersSlice";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
const HomeForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    SocialNetwor: "",
    Email: "",
    City: "",
    Address: "",
    Image: "",
  });
  console.log(user, "რახდება ამ");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    navigate(routes.members);
  };
  let UserValue = user.FirstName && user.Address;
  return (
    <div className="bootstrap1">
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Col>
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="FirstName"
              placeholder="First name"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </Col>
          <Col>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="LastName"
              placeholder="Last name"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          {/* <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload picture</Form.Label>
            <Form.Control
              name="Img"
              type="file"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </Form.Group> */}
          <Col>
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="Age"
              placeholder="Age"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Your Social network</Form.Label>
          <Form.Control
            name="SocialNetwor"
            placeholder="Social networ"
            aria-label="Social networ"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="Email"
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="Address"
              placeholder="1234 Main St"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="City"
              placeholder="City"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </Form.Group>
        </Row>
        <Button disabled={!UserValue} type="submit" variant="success">
          Submit
        </Button>{" "}
      </Form>
    </div>
  );
};

export default HomeForm;
