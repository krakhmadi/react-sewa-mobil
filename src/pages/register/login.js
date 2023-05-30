import React from "react";
import { Col, Row } from "reactstrap";
import Segment from "../../component/Segment";
import loginimage from "../../assets/images/landing_page.png";
import InputForm from "../../component/InputForm";
import Form from "../../component/Form";
import Button from "../../component/Button";
import logo from "../../assets/images/logo/rentalll.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Services } from "../../config/services";

const Login = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Services()
      .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", {
        ...state,
      })
      .then((response) => {
        const { data } = response;
        localStorage.setItem("ACCESS_TOKEN", data.access_token);
        window.location.replace("/");
      })
      .catch((err) => err.message);
  };

  return (
    <>
      <Segment className="login-signup">
        <Row className="m-0" style={{ height: "100vh" }}>
          <Col
            xxl={6}
            className="login-left d-flex align-items-center justify-content-center"
          >
            <div className="login-left py-4">
              <img src={logo} />
              <h3 className="my-4">Welcome Back</h3>
              <Form
                className="jancok d-flex flex-column align-items-center gap-2"
                onSubmit={handleSubmit}
              >
                <InputForm
                  className="form-control col-md-3 search-form-item"
                  name="email"
                  label="Email"
                  placeholder="binarcarrental@mail.com"
                  style={{ color: "#8A8A8A", width: "370px" }}
                  onChange={handleChange}
                />
                <InputForm
                  className="form-control col-md-3 search-form-item"
                  name="password"
                  label="Password"
                  placeholder="8+ karakter"
                  style={{ color: "#8A8A8A", width: "370px" }}
                  onChange={handleChange}
                />
                <Button
                  className="title-form py-2 my-4"
                  type="submit"
                  style={{
                    color: "white",
                    backgroundColor: "#0D28A6",
                    width: "100%",
                  }}
                >
                  Sign In
                </Button>
                <div className="d-flex gap-1 align-items-center justify-content-center">
                  <h6 className="paragraph-form">Dont have account?</h6>
                  <Button
                    onClick={() => navigate("/signup")}
                    className="p-0 s-0"
                    style={{ backgroundColor: "white" }}
                  >
                    <h6
                      className="paragraph-form"
                      style={{ fontWeight: "700", color: "#0D28A6" }}
                    >
                      Sign up for free
                    </h6>
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col
            xxl={6}
            className="p-0 login-right"
            style={{ backgroundColor: "#0D28A6" }}
          >
            <div className="login-right">
              <div className="d-flex p-0">
                <img
                  className="login-image"
                  src={loginimage}
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    // transform: "scale(120%)",
                    transformOrigin: "bottom right",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Segment>
    </>
  );
};

export default Login;
