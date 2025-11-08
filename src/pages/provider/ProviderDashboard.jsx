import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProviderDashboard() {
  const { user } = useAuth();

  return (
    <Container className="py-5 mt-4">
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold">Provider Dashboard</h1>
          <p className="lead text-muted">
            Welcome back, {user?.role === "doctor" ? "Dr." : ""}{" "}
            {user?.fullName}
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="mb-3">
                <i
                  className="bi bi-calendar-check text-primary"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <Card.Title>Appointments</Card.Title>
              <Card.Text className="text-muted">
                Manage your schedule and upcoming appointments
              </Card.Text>
              <Button
                as={Link}
                to="/provider/schedule"
                variant="outline-primary"
              >
                View Schedule
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="mb-3">
                <i
                  className="bi bi-people text-success"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <Card.Title>Patients</Card.Title>
              <Card.Text className="text-muted">
                Access patient records and medical history
              </Card.Text>
              <Button
                as={Link}
                to="/provider/patients"
                variant="outline-success"
              >
                View Patients
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <div className="mb-3">
                <i
                  className="bi bi-chat-dots text-info"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
              <Card.Title>Messages</Card.Title>
              <Card.Text className="text-muted">
                Communicate with your patients securely
              </Card.Text>
              <Button as={Link} to="/provider/messages" variant="outline-info">
                Check Messages
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Quick Stats</h5>
            </Card.Header>
            <Card.Body>
              <Row className="text-center">
                <Col md={3}>
                  <h4 className="text-primary">12</h4>
                  <p className="text-muted">Today's Appointments</p>
                </Col>
                <Col md={3}>
                  <h4 className="text-success">45</h4>
                  <p className="text-muted">Total Patients</p>
                </Col>
                <Col md={3}>
                  <h4 className="text-warning">3</h4>
                  <p className="text-muted">Pending Requests</p>
                </Col>
                <Col md={3}>
                  <h4 className="text-info">8</h4>
                  <p className="text-muted">Unread Messages</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
