import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "patient",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation function
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

  // ✅ Handle input change and clear specific field errors
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Login:", formData);
     axios.post("", formData,{
      headers: {
        "Content-Type": 'Application/json',
      }
    })
  };

  const { email, password, role } = formData;

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <h4 className="text-center mb-4">Login</h4>

        <Form noValidate onSubmit={handleSubmit}>
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Role Selection */}
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

          {/* Submit Button */}
          <Row>
            <Col className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
