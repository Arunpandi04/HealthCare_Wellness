import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "patient",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation
  const validateForm = () => {
    const newErrors = {};
    const { email, password, role } = formData;

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter a valid email address";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.trim().length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!role?.trim()) newErrors.role = "Please select a role";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle input & clear error dynamically
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Login:", formData);
    // axios.post("", formData, {
    //   headers: { "Content-Type": "application/json" },
    // });
    //for now skipping actual API call
    navigate("/patient/dashboard");
  };

  const { email, password, role } = formData;

  return (
    <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100 px-3">
        {/* LEFT SIDE (Illustration / Info for desktop only) */}
        <Col
          md={6}
          className="d-none d-md-flex flex-column justify-content-center align-items-center text-center"
          style={{ backgroundColor: "#f8f9fa", borderRight: "1px solid #eee" }}
        >
          <h2 className="fw-bold text-primary mb-3">Welcome Back!</h2>
          <p className="text-muted" style={{ maxWidth: "80%" }}>
            Sign in to access your patient or provider dashboard and manage your health data securely.
          </p>
        </Col>

        {/* RIGHT SIDE (Login Card) */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center py-5"
        >
          <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "400px" }}>
            <h4 className="text-center mb-4">Login</h4>

            <Form noValidate onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Role */}
              <Form.Group className="mb-4" controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  value={role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  isInvalid={!!errors.role}
                >
                  <option value="patient">Patient</option>
                  <option value="provider">Provider</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.role}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Submit */}
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
