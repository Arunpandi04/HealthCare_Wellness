import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="text-center p-4 shadow-sm" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <div className="mb-4">
            <i
              className="bi bi-shield-exclamation text-warning"
              style={{ fontSize: "4rem" }}
            ></i>
          </div>
          <h1 className="display-4 fw-bold text-warning">403</h1>
          <h4 className="mb-3">Access Denied</h4>
          <p className="text-muted mb-4">
            You don't have permission to access this page. Please contact
            support if you believe this is an error.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Button as={Link} to="/" variant="primary" size="lg">
              Go Home
            </Button>
            <Button as={Link} to="/login" variant="outline-primary" size="lg">
              Back to Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
