# Healthcare Wellness Frontend (MVP)

This repository now contains a Vite + React + TypeScript + Tailwind scaffold for the Healthcare Wellness & Preventive Care Portal frontend MVP.

What is included
- Vite + React + TypeScript project structure (entry: `src/main.tsx`)
- TailwindCSS for styling
- Client-side routing with `react-router-dom`
- Pages: `/`, `/login`, `/register`, `/patient/*`, `/provider/*`, `/public/health-info` (in `src/pages`)
- Core components in `src/components`: `LoginForm`, `RegisterForm`, `DashboardCard`, `GoalTrackerForm`, `ProfileEditor`, `ProviderPatientList`, etc.
- Placeholder UI flows for authentication and profile updates (no backend wired yet)
- GitHub Actions CI workflow skeleton (build step)

Assumptions
- Backend APIs (JWT auth, user/profile, goals) are not yet available. The forms use placeholders and console logs where API calls should be.

Quick start (Windows PowerShell):

```powershell
cd "c:\Users\Admin\Documents\HealthCare_Wellness"
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

Next steps
- Wire API endpoints and JWT flows (prefer httpOnly cookies + CSRF protection)
- Add Auth context or Redux for app-wide auth state and role-based routing
- Add tests (Jest + React Testing Library)
- Improve accessibility (ARIA attributes) and UI polish

Notes
- You may still have leftover Next.js-specific files from an earlier scaffold; the app uses files under `src/` for the Vite setup.

