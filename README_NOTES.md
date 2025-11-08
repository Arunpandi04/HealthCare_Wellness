Developer notes:
- Replace placeholder alerts and console.logs in forms with axios calls to your backend endpoints.
- Follow security best practices for JWT storage (prefer httpOnly cookies + CSRF protections) instead of localStorage.
- Add role-based route protection (HOCs or middleware) after auth is implemented.
