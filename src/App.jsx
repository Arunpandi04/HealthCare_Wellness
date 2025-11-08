import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicHealthInfo from "./pages/PublicHealthInfo";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientGoals from "./pages/patient/PatientGoals";
import PatientMessages from "./pages/patient/PatientMessages";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import Header from "./components/Header";
import Find from "./pages/Find";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function Logout() {
  const { logout } = useAuth();
  React.useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/public/health-info" element={<PublicHealthInfo />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/logout" element={<Logout />} />

          {/* Patient protected routes */}
          <Route
            path="/patient/dashboard"
            element={
              <ProtectedRoute allowedRoles={["patient"]}>
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient/profile"
            element={
              <ProtectedRoute allowedRoles={["patient"]}>
                <PatientProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient/goals"
            element={
              <ProtectedRoute allowedRoles={["patient"]}>
                <PatientGoals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient/messages"
            element={
              <ProtectedRoute allowedRoles={["patient"]}>
                <PatientMessages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient/doctors"
            element={
              <ProtectedRoute allowedRoles={["patient"]}>
                <Find />
              </ProtectedRoute>
            }
          />

          {/* Provider protected routes */}
          <Route
            path="/provider/dashboard"
            element={
              <ProtectedRoute allowedRoles={["healthcare_provider", "doctor"]}>
                <ProviderDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/provider/patients"
            element={
              <ProtectedRoute allowedRoles={["healthcare_provider", "doctor"]}>
                <div className="py-5 mt-4">
                  <h1>Patients Management</h1>
                  <p>Patient management page coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/provider/schedule"
            element={
              <ProtectedRoute allowedRoles={["healthcare_provider", "doctor"]}>
                <div className="py-5 mt-4">
                  <h1>Schedule</h1>
                  <p>Schedule management page coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/provider/messages"
            element={
              <ProtectedRoute allowedRoles={["healthcare_provider", "doctor"]}>
                <div className="py-5 mt-4">
                  <h1>Provider Messages</h1>
                  <p>Provider messages page coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return <AppRoutes />;
}
