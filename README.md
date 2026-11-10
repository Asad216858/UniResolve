# UniResolve (Academic Concierge)
### Centralized University Complaint Management & Resolution System

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?logo=php&logoColor=white)](https://www.php.net/)
[![MySQL / MariaDB](https://img.shields.io/badge/MySQL-MariaDB_10.4-4479A1?logo=mysql&logoColor=white)](https://mariadb.org/)
[![License](https://img.shields.io/badge/License-Academic_Research-blue)](#project-information)

---

## 📌 Table of Contents
1. [Project Overview](#-project-overview)
2. [Problem Statement & Motivation](#-problem-statement--motivation)
3. [System Architecture](#-system-architecture)
4. [Key Features & How It Works](#-key-features--how-it-works)
   - [1. Role-Based Access Control (RBAC)](#1-role-based-access-control-rbac)
   - [2. Intelligent Auto-Routing Engine](#2-intelligent-auto-routing-engine)
   - [3. Complaint Submission & Collective Issues](#3-complaint-submission--collective-issues)
   - [4. Real-Time Tracking & Public Verification](#4-real-time-tracking--public-verification)
   - [5. Bidirectional Communication & Internal Notes](#5-bidirectional-communication--internal-notes)
   - [6. Asynchronous Notification & Email Queue](#6-asynchronous-notification--email-queue)
   - [7. Administrative Intelligence & Analytics](#7-administrative-intelligence--analytics)
5. [User Roles & Modules](#-user-roles--modules)
6. [Technology Stack](#-technology-stack)
7. [Database Schema (17 Normalized Tables)](#-database-schema-17-normalized-tables)
8. [Getting Started & Installation](#-getting-started--installation)
9. [Project Structure](#-project-structure)
10. [Development Process Model](#-development-process-model)
11. [Project Contributors & Supervisors](#-project-contributors--supervisors)

---

## 📖 Project Overview

**UniResolve** (Academic Concierge) is a secure, role-based, end-to-end complaint management and tracking platform engineered for higher education institutions, tailored for **Mirpur University of Science and Technology (MUST)**.

Traditional complaint processes rely on informal paper slips, ad-hoc emails, and verbal complaints. This results in missing files, zero audit trails, lack of progress visibility, and administrative bottlenecks. **UniResolve** solves these challenges by providing a digital portal with automated complaint routing, real-time ticket tracking, bi-directional feedback channels, and analytical oversight for university leadership.

---

## ⚡ Problem Statement & Motivation

| Traditional Manual / Semi-Digital System | UniResolve Solution |
| :--- | :--- |
| **No Central Tracking**: Lost paper forms and buried emails. | **Unique Tracking ID**: Standardized format (`CMP-2026-CS-XXXXXX`). |
| **Zero Transparency**: Students are left in the dark about progress. | **Interactive Visual Timeline**: Step-by-step audit logs and public tracker. |
| **Manual Forwarding Bottlenecks**: Complaints sit on wrong desks. | **Automated Routing Engine**: Rules dispatch tickets by Department & Type instantly. |
| **Overworked Department Staff**: Unorganized, untracked queues. | **Smart Prioritization**: Urgency levels (Normal, Medium, High) & SLA deadlines. |
| **Duplicate Requests**: Many students report the exact same facility outage. | **Collective Complaints**: Students co-sign single issues to prevent duplication. |
| **No Accountability**: No way to track response times or recurring problems. | **Admin KPIs & Analytics**: Departmental resolution metrics and system activity logs. |

---

## 🏛 System Architecture

UniResolve operates on a multi-tier decoupled architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                      User Personas                          │
│        [ Students ]         [ Staff / CMS ]      [ Admin ]   │
└──────────────┬─────────────────────┬───────────────────┬────┘
               │                     │                   │
┌──────────────▼─────────────────────▼───────────────────▼────┐
│                    Presentation Layer                       │
│  React 19 + Tailwind CSS + Heroicons (Vite SPA & Responsive) │
└──────────────────────────────┬──────────────────────────────┘
                               │ (RESTful API / JSON State)
┌──────────────────────────────▼──────────────────────────────┐
│                    Application / Logic Layer                │
│  - Authentication & Session Verification (bcrypt)           │
│  - RBAC Middleware (Student, Staff, Session Advisor, Admin) │
│  - Auto-Routing Engine (Dept + Type -> Staff + SLA hours)   │
│  - Two-Way Feedback Thread & Private Staff Notes Engine     │
└──────────────┬─────────────────────────────────┬────────────┘
               │                                 │
┌──────────────▼──────────────┐   ┌──────────────▼────────────┐
│   Notification & Mailer     │   │     Data Storage Layer    │
│  - Asynchronous Email Queue │   │  MySQL / MariaDB InnoDB   │
│  - Optimistic Lock Worker   │   │  (17 Normalized Tables,   │
│  - PHPMailer via SMTP       │   │   Transactions, Indices)  │
└─────────────────────────────┘   └───────────────────────────┘
```

---

## 🚀 Key Features & How It Works

### 1. Role-Based Access Control (RBAC)
* Dynamic authorization ensuring users only access permitted views and actions.
* Strict role boundaries: `Student`, `Staff` (General, CMS Coordinator, Session Advisor), and `System Administrator`.
* Session safety with anti-caching headers and first-login password update enforcement.

### 2. Intelligent Auto-Routing Engine
* When a student submits a grievance, the system inspects the **Department** and **Complaint Type** (e.g., Academic, Transport, Hostel, IT Services, Security, Administration).
* Based on admin-configured routing rules, the complaint is automatically assigned to the designated staff officer along with an expected response deadline (SLA in hours).

### 3. Complaint Submission & Collective Issues
* **Individual Complaints**: Students submit tickets with titles, descriptions, categories, and supporting evidence files (`.pdf`, `.jpg`, `.png`, `.doc`, `.docx`).
* **Collective Complaints**: For widespread departmental or hostel grievances, a student can initiate a collective complaint. Peers within the same department can join the complaint with one click, eliminating duplicate tickets while demonstrating issue severity.
* **Withdrawal Option**: Allows students to recall a pending complaint if resolved independently, saving staff time.

### 4. Real-Time Tracking & Public Verification
* Every submission generates a cryptographic tracking token (e.g., `CMP-2026-CS-A3B2F1`).
* **In-App Timeline**: Authenticated students view a live chronological timeline of their ticket (`Pending` → `In Progress` → `Resolved` / `Rejected`).
* **Public Tracking Page**: Students or guardians can check resolution status directly without needing an active login.

### 5. Bidirectional Communication & Internal Notes
* **Public Complaint Thread**: Students and assigned staff can exchange comments, request missing proofs, or give clarifications directly on the complaint view.
* **Private Staff Notes**: Handlers can record internal notes and case remarks that remain strictly confidential between department staff and administrators.

### 6. Asynchronous Notification & Email Queue
* Decoupled mail delivery powered by `PHPMailer` and an `email_queue` background worker (`process_queue.php`).
* Employs **optimistic locking** (`status = 'sending'`, attempt counters) to prevent duplicate mail dispatch and eliminate UI response lag.

### 7. Administrative Intelligence & Analytics
* High-level Executive Dashboard displaying critical KPIs (Total, Pending, In Progress, Resolved, Rejected).
* Departmental workload breakdown with interactive progress bars.
* Full system activity logs and audit trails recording every status change, reassignment, and ticket escalation.

---

## 👥 User Roles & Modules

```
├── 🎓 Student Module
│   ├── Secure Login & Password Management
│   ├── Submit Individual or Collective Complaint
│   ├── File Attachment Support (.png, .jpg, .pdf, .docx)
│   ├── Real-Time Status Tracking & Visual Timeline
│   ├── Ticket Withdrawal (for Pending / In Progress cases)
│   ├── Bidirectional Commenting with Staff
│   └── In-App Notifications Center
│
├── 👔 Staff Module
│   ├── Assigned Complaints Dashboard (Smart Priority & Age Sorting)
│   ├── SLA Deadline & Overdue Visual Indicators (Red Alert Badges)
│   ├── Status Updates (Pending → In Progress → Resolved / Rejected)
│   ├── Forward Complaint to Department Colleagues with Reason
│   ├── Confidential Internal Notes (Hidden from students)
│   ├── CMS Coordinator Tools (Bulk Student Import via CSV)
│   └── Session Advisor Delegation
│
└── 🛠️ Administrator Module
    ├── Institutional Overview & Real-Time KPI Cards
    ├── User & Account Management (Activate / Deactivate / Reset)
    ├── Role Management & Dynamic Permission Assignment
    ├── Department & Complaint Category Configuration
    ├── Automated Routing Rules Configuration
    ├── Global Audit Trails & System Activity Logs
    └── Institutional Reporting & Resolution Analytics
```

---

## 💻 Technology Stack

### Frontend Application (In this Repository)
* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Routing**: [React Router v7](https://reactrouter.com/)
* **Iconography**: [@heroicons/react](https://heroicons.com/)

### Backend & Storage Architecture (System Design)
* **Server-Side Language**: PHP 8.2 (Secure session management, PDO prepared statements, bcrypt hashing)
* **Database**: MySQL / MariaDB 10.4 (InnoDB transactional storage, foreign key constraints)
* **Mailing Service**: PHPMailer with SMTP & Asynchronous Queue Worker
* **Server Environment**: Apache / XAMPP / Linux Web Servers

---

## 🗄 Database Schema (17 Normalized Tables)

The backend data model relies on a normalized relational architecture:

| Table Name | Primary Purpose |
| :--- | :--- |
| `users` | Central authentication table (email/login ID, bcrypt hash, role, status) |
| `students` | Student profiles (registration number, session, department linkage) |
| `staff` | Staff member profiles, designations, and department affiliations |
| `departments` | University academic and administrative departments |
| `roles` | System roles (Admin, CMS Coordinator, Session Advisor, HOD) |
| `staff_roles` | Dynamic many-to-many role mapping supporting session advisors |
| `complaints` | Core complaint data, tracking ID, title, details, status, priority, due date |
| `complaint_types` | Complaint categories (Academic, Hostel, IT, Transport, Facilities) |
| `complaint_students` | Many-to-many relationship mapping collective complaint participants |
| `complaint_status_history`| Immutable audit log tracking state transitions and actors |
| `complaint_comments` | Bidirectional dialogue entries between students and handlers |
| `complaint_internal_notes`| Private staff-only notes on specific complaints |
| `complaint_routing_rules` | Automated assignment matrices (Department + Type → Staff + SLA) |
| `notifications` | In-app notification alerts with read/unread flags |
| `email_queue` | Asynchronous queue with retry limits and optimistic locking |
| `forwarding_logs` | Audit trail of case transfers between staff members |
| `priority_records` | Historical log of priority adjustments (Normal, Medium, High) |

---

## 🚀 Getting Started & Installation

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18+ recommended)
* `npm` or `yarn`

### 1. Clone or Download the Repository
```bash
git clone https://github.com/your-username/uniresolve.git
cd uniresolve
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (typically `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```
This generates an optimized production bundle in the `dist/` directory.

---

## 📁 Project Structure

```
FYP PROJECT/
├── public/                     # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/                 # Images and design graphics
│   ├── pages/
│   │   ├── LoginPage.jsx       # Universal authentication entry point
│   │   ├── student/
│   │   │   ├── StudentDashboard.jsx  # Student KPI summary & ticket table
│   │   │   ├── SubmitRequest.jsx     # New complaint creation form
│   │   │   └── CaseDetail.jsx        # Ticket details, timeline & conversation
│   │   ├── staff/
│   │   │   └── StaffDashboard.jsx    # Assigned tickets, priorities, & workflow
│   │   └── admin/
│   │       └── AdminDashboard.jsx    # System metrics, charts & audit logs
│   ├── App.jsx                 # Client-side router configuration
│   ├── index.css               # Global styling & Tailwind directives
│   └── main.jsx                # Application root mounting
├── index.html                  # HTML entry template
├── tailwind.config.js          # Tailwind styling design tokens
├── vite.config.js              # Vite bundler configuration
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Project documentation
```

---

## 🔄 Development Process Model

UniResolve was engineered using the **Spiral Model** of software engineering:
1. **Planning & Requirements Gathering**: Formal study of manual student complaint bottlenecks at MUST.
2. **Risk Analysis**: Mitigation of email queue timeouts, security vulnerabilities (XSS, SQL injection), and data fragmentation.
3. **Engineering & Prototyping**: Iterative rollout of core ticket flows, dynamic RBAC, collective ticket handling, and administrative analytics.
4. **Evaluation & Verification**: Supervisor review, functional black-box and white-box test cases across authentication, auto-routing, and notification modules.

---

## 🎓 Project Contributors & Supervisors

Developed as a Final Year Project for the degree of **Bachelor of Science in Computer Science (BSCS)**, Session 2022–2026.

### 👨‍💻 Development Team
* **Muhammad Saddique** (FA22-BCS-053) – [siddiquerajput1028@gmail.com](mailto:siddiquerajput1028@gmail.com)
* **Asad Haroon** (FA22-BCS-004) – [asadharoon316@gmail.com](mailto:asadharoon316@gmail.com)
* **Shahzaib Khurram** (FA22-BCS-027) – [shahzaibkhurram25@gmail.com](mailto:shahzaibkhurram25@gmail.com)

### 👨‍🏫 Project Supervision
* **Prof. Dr. Faisal Riaz** (Professor, Head of Department of CS & IT, Director ORIC) – [faisal.riaz@must.edu.pk](mailto:faisal.riaz@must.edu.pk)
* **Mr. Mohsin Ansari** (Lecturer, Department of CS & IT) – [mohsen.csit@must.edu.pk](mailto:mohsen.csit@must.edu.pk)

**Department of Computer Science and Information Technology**  
*Faculty of Natural and Applied Sciences*  
**Mirpur University of Science and Technology (MUST)**  
Mirpur, Azad Jammu & Kashmir, Pakistan.
