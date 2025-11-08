import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
    gender: "",
    age: "",
    location: "",
    consentAccepted: false,
    professionalInfo: {
      specialization: "",
      experience: "",
      licenseNumber: "",
    },
  });

  const [errors, setErrors] = useState({});
const navigate = useNavigate();
  // ✅ Validation logic
  const validateForm = () => {
    const newErrors = {};
    const {
      fullName,
      email,
      password,
      confirmPassword,
      role,
      gender,
      age,
      location,
      consentAccepted,
      professionalInfo,
    } = formData;

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    else if (fullName.trim().length < 3)
      newErrors.fullName = "Full name must be at least 3 characters";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Enter a valid email address";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.trim().length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword.trim())
      newErrors.confirmPassword = "Confirm password is required";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!role?.trim()) newErrors.role = "Please select a role";

    if (!gender) newErrors.gender = "Please select a gender";

    if (!age) newErrors.age = "Please enter your age";
    else if (isNaN(age) || age < 18)
      newErrors.age = "Age must be 18 or above";

    if (!location.trim()) newErrors.location = "Location is required";

    if (!consentAccepted)
      newErrors.consentAccepted = "You must accept consent to register";

    // ✅ Optional professional info
    if (role === "healthcare_provider") {
      const { specialization, experience, licenseNumber } = professionalInfo;
      const anyField =
        specialization.trim() || experience.trim() || licenseNumber.trim();

      if (anyField) {
        if (!specialization.trim())
          newErrors.specialization = "Specialization is required if provided";
        if (!experience.trim())
          newErrors.experience = "Experience is required if provided";
        if (!licenseNumber.trim())
          newErrors.licenseNumber = "License number is required if provided";
      }
    }

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  // ✅ Handle input change
  const handleChange = (field, value, nested = false) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });

    if (nested) {
      setFormData((prev) => ({
        ...prev,
        professionalInfo: { ...prev.professionalInfo, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // ✅ Remove confirmPassword before API call
    const { confirmPassword, ...dataToSend } = formData;

    console.log("✅ Registering:", dataToSend);

    // axios
    //   .post("YOUR_API_ENDPOINT", dataToSend, {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then(() => alert("Registration successful!"))
    //   .catch(() => alert("Registration failed."));
    navigate("/patient/dashboard");
  };

  const {
    fullName,
    email,
    password,
    confirmPassword,
    role,
    gender,
    age,
    location,
    consentAccepted,
    professionalInfo,
  } = formData;

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light py-5">
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "900px" }}>
        <h3 className="text-center mb-4">User Registration</h3>

        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              {/* Full Name */}
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={fullName}
                  placeholder="Enter your full name"
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => handleChange("email", e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => handleChange("password", e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  placeholder="Re-enter your password"
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Role */}
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  value={role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  isInvalid={!!errors.role}
                >
                  <option value="">Select a role</option>
                  <option value="patient">Patient</option>
                  <option value="healthcare_provider">
                    Healthcare Provider
                  </option>
                  <option value="doctor">Doctor</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.role}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              {/* Gender */}
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={gender}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  isInvalid={!!errors.gender}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Age */}
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  placeholder="Enter your age"
                  onChange={(e) => handleChange("age", e.target.value)}
                  isInvalid={!!errors.age}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.age}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Location */}
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={location}
                  placeholder="Enter your location"
                  onChange={(e) => handleChange("location", e.target.value)}
                  isInvalid={!!errors.location}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.location}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Consent */}
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="I consent to my health data being used according to the privacy policy"
                  checked={consentAccepted}
                  onChange={(e) => handleChange("consentAccepted", e.target.checked)}
                  isInvalid={!!errors.consentAccepted}
                />
                {errors.consentAccepted && (
                  <div className="invalid-feedback d-block">
                    {errors.consentAccepted}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Professional Info */}
          {role === "healthcare_provider" && (
            <>
              <h5 className="mt-4">Professional Information (Optional)</h5>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Specialization</Form.Label>
                    <Form.Control
                      type="text"
                      value={professionalInfo.specialization}
                      placeholder="Enter specialization"
                      onChange={(e) =>
                        handleChange("specialization", e.target.value, true)
                      }
                      isInvalid={!!errors.specialization}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.specialization}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                      type="text"
                      value={professionalInfo.experience}
                      placeholder="e.g. 10 years"
                      onChange={(e) =>
                        handleChange("experience", e.target.value, true)
                      }
                      isInvalid={!!errors.experience}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.experience}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>License Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={professionalInfo.licenseNumber}
                      placeholder="Enter license number"
                      onChange={(e) =>
                        handleChange("licenseNumber", e.target.value, true)
                      }
                      isInvalid={!!errors.licenseNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.licenseNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}

          <Row className="mt-4">
            <Col className="text-end">
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
