import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("patient");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ Optimized validation
  function validateForm() {
    const newErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) newErrors.name = "Full name is required";
    else if (trimmedName.length < 3)
      newErrors.name = "Full name must be at least 3 characters";

    if (!trimmedEmail) newErrors.email = "Email is required";
    else if (!emailRegex.test(trimmedEmail))
      newErrors.email = "Please enter a valid email address";

    if (!role?.trim()) newErrors.role = "Please select a role";

    if (!consent) newErrors.consent = "You must give consent to register";

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    alert("Form submitted successfully!");
    console.log({ name, email, role, consent });
  }

  // ✅ Remove specific field error when user starts typing/selecting
  const handleChange = (field, value) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field]; // remove only that field’s error
      return updated;
    });

    // Update field values
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "role") setRole(value);
    if (field === "consent") setConsent(value);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card
        className="p-4 shadow-sm"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4">Register</h3>
        <Form noValidate onSubmit={handleSubmit}>
          {/* Full Name */}
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => handleChange("name", e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

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

          {/* Role */}
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Select
              value={role}
              onChange={(e) => handleChange("role", e.target.value)}
              isInvalid={!!errors.role}
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="provider">Provider</option>
              <option value="doctor">Doctor</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.role}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Consent */}
          <Form.Group className="mb-3" controlId="formConsent">
            <Form.Check
              type="checkbox"
              label="I consent to my health data being used according to the privacy policy"
              checked={consent}
              onChange={(e) => handleChange("consent", e.target.checked)}
              isInvalid={!!errors.consent}
            />
            {errors.consent && (
              <div className="invalid-feedback d-block">
                {errors.consent}
              </div>
            )}
          </Form.Group>

          {/* Submit Button */}
          <Row className="mt-3">
            <Col className="d-flex justify-content-end">
              <Button type="submit" variant="primary">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
