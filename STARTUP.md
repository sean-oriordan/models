# Enterprise Startup Guide

This repo is split into two independent services:
- `backend/` (Java 17 + Spring Boot 3.3)
- `frontend/` (Angular 18)

## Prereqs
- Java 17 (JDK)
- Maven 3.9+
- Node.js 18.19.1+ (or 20.11.1+) and npm 8+

## Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

Service runs at `http://localhost:8080`.
Health check: `http://localhost:8080/api/health`
Currency codes: `http://localhost:8080/api/currency-codes`

## Frontend (Angular)

```bash
cd frontend
npm install
npm start -- --proxy-config proxy.conf.json
```

App runs at `http://localhost:4200`.

## Notes
- Frontend and backend run as separate processes.
- If you need to proxy API calls, configure Angular dev-server proxy in `frontend/proxy.conf.json` and reference it in `frontend/angular.json`.
