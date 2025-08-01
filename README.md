# Employee Management System (EMS)

## Overview

EMS is a full-stack web application for managing employees and tasks. It features:
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Frontend:** React (Vite)

---

## Backend

### Description

- **Tech Stack:** Node.js, Express, MongoDB
- **Main Features:** Admin and Employee authentication, task assignment, status updates, user profile management.

### API Endpoints

#### Auth & Profile

| Endpoint                      | Method | Description                       | Request Body                | Success Status | Error Status |
|-------------------------------|--------|-----------------------------------|-----------------------------|----------------|-------------|
| `/admins/Admin-login`         | POST   | Admin login                       | `{ email, password }`       | 200            | 400, 401    |
| `/admins/profile`             | GET    | Get admin profile                 | -                           | 200            | 401         |
| `/employees/Employee-login`   | POST   | Employee login                    | `{ email, password }`       | 200            | 400, 401    |
| `/employees/profile`          | GET    | Get employee profile              | -                           | 200            | 401         |

#### Task Management

| Endpoint                          | Method | Description                       | Request Body                                      | Success Status | Error Status |
|------------------------------------|--------|-----------------------------------|---------------------------------------------------|----------------|-------------|
| `/admins/tasks`                    | POST   | Create a new task                 | `{ title, description, assignedTo, dueDate, category }` | 201            | 400, 500    |
| `/admins/tasks`                    | GET    | Get all tasks (admin)             | -                                                 | 200            | 401, 500    |
| `/admins/tasks/:id`                | PUT    | Update a task                     | `{ title, description, assignedTo, dueDate, category, status }` | 200            | 400, 404, 500|
| `/admins/tasks/:id`                | DELETE | Delete a task                     | -                                                 | 200            | 404, 500    |
| `/employees/tasks`                 | GET    | Get tasks assigned to employee    | -                                                 | 200            | 401, 500    |
| `/employees/tasks/:id`             | PUT    | Update status of employee's task  | `{ status }`                                      | 200            | 403, 404, 500|

#### Employee Management (Admin)

| Endpoint                  | Method | Description                | Request Body | Success Status | Error Status |
|---------------------------|--------|----------------------------|--------------|----------------|-------------|
| `/admins/employees`       | GET    | Get all employees          | -            | 200            | 401, 500    |

---

### Data Requirements

- **Task Creation (`/admins/tasks` POST):**
  ```json
  {
    "title": "Task Title",
    "description": "Task details",
    "assignedTo": "employeeObjectId",
    "dueDate": "YYYY-MM-DD",
    "category": "Task Category"
  }
  ```
- **Task Update (`/admins/tasks/:id` PUT):**
  ```json
  {
    "title": "Task Title",
    "description": "Task details",
    "assignedTo": "employeeObjectId",
    "dueDate": "YYYY-MM-DD",
    "category": "Task Category",
    "status": "pending|in-progress|completed|failed"
  }
  ```
- **Employee Task Status Update (`/employees/tasks/:id` PUT):**
  ```json
  {
    "status": "pending|in-progress|completed|failed"
  }
  ```

---

## Frontend

### Description

- **Tech Stack:** React (Vite)
- **Main Features:** Admin and Employee dashboards, login/signup forms, task creation and management, status updates.

### Usage

- **Admin Dashboard:** Create, update, delete tasks; view all employees and tasks.
- **Employee Dashboard:** View assigned tasks, update task status.

---

## Status Codes

- **200 OK:** Successful GET/PUT/DELETE
- **201 Created:** Successful POST (task creation)
- **400 Bad Request:** Invalid input data
- **401 Unauthorized:** Authentication required or failed
- **403 Forbidden:** Not allowed to perform action
- **404 Not Found:** Resource not found
- **500 Internal Server Error:** Server error

---

## Setup

1. **Backend:**  
   - Install dependencies: `npm install`
   - Start server: `node server.js` or `npx nodemon`
2. **Frontend:**  
   - Install dependencies: `npm install`
   - Start dev server: `npm run dev`

---

## Notes

- All endpoints require a valid JWT token in the `Authorization` header.
- Dates should be sent as ISO strings (`YYYY-MM-DD`).
- `assignedTo` must be a valid employee ObjectId.

---
#   E M S  
 