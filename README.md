# Task Tracker

**Task Tracker** is a clean, fast, and user-friendly task management app built with React and Vite. It helps users stay organized by allowing them to add, track, and manage tasks with features like priority labels, due dates, search, dark mode, and local persistence.

## ✨ Features

- Login with a username (stored in browser)
- Add, edit, delete tasks
- Edit title, description, due date, priority, and tags
- Mark tasks as completed or pending
- Search tasks by title
- Priority levels: Low / Medium / High (with color labels)
- Add multiple tags (comma-separated)
- Filter tasks: All / Completed / Pending
- Dark and light mode toggle
- Fully responsive layout (2-column on wide screens, 1-column on mobile)
- Tasks saved per user using browser `localStorage`

## 🚀 Live Demo

🔗 [https://yourtasktrack.netlify.app/](https://yourtasktrack.netlify.app/)

## 📷 Screenshots

### 🔐 Login Page (Light Mode)
![Login Light](screenshots/LoginPage(Light).png)

### 🌙 Login Page (Dark Mode)
![Login Dark](screenshots/LoginPage(Dark).png)

### ✅ Task Form (Dark Mode)
![Task Form](screenshots/TaskForm(Dark).png)

### ✅ Tasks List (Dark Mode)
![Tasks List](screenshots/Tasks(Dark).png)

## 🛠️ Tech Stack

- React (Functional Components + Hooks)
- Vite (Build tool)
- CSS (custom styling, no frameworks)
- LocalStorage API (for client-side persistence)

## 📁 Folder Structure

src/
├── components/
│ ├── Login.js
│ ├── AddTask.js
│ ├── TaskItem.js
│ ├── TaskList.js
│ ├── TaskFilter.js
│ └── ThemeToggle.js
├── styles/
│ └── App.css
├── utils/
│ └── localStorage.js
├── App.js
└── main.jsx


## 🧩 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-tracker
cd task-tracker
npm install
npm run dev
npm run build
