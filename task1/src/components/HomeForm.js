import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { addUser } from "../features/usersSlice";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import "./homeForm.css";
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
            <Form.Label className="InputType">First name</Form.Label>
            <Form.Control
              className="InputType"
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
            <Form.Label className="InputType">Last name</Form.Label>
            <Form.Control
              className="InputType"
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
          {/* // ვეცადე თუმცა aip ის გარეშე არ გამომივიდა ამ ეტაპზე 
          // სთორიჯიებიც ვეძებე თუმცა ...  */}

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
            <Form.Label className="InputType">Age</Form.Label>
            <Form.Control
              className="InputType"
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
          <Form.Label className="InputType">Your Social network</Form.Label>
          <Form.Control
            className="InputType"
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
          <Form.Label className="InputType">Email</Form.Label>
          <Form.Control
            className="InputType"
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
            <Form.Label className="InputType">Address</Form.Label>
            <Form.Control
              className="InputType"
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
            <Form.Label className="InputType">City</Form.Label>
            <Form.Control
              className="InputType"
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
        <Button
          disabled={!UserValue}
          type="submit"
          variant="success"
          className="InputType"
        >
          Submit
        </Button>{" "}
      </Form>
    </div>
  );
};

export default HomeForm;
