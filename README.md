# Task Management 
Task Management Application built with React. Users can add, delete, complete, filter, search, and sort tasks with localStorage support and a responsive dark/light mode UI.


**Task Management Application**
A responsive and user-friendly Task Management application built entirely with React. It allows users to add, delete, complete, filter, sort, and search tasks. All task data is saved locally using localStorage for persistence even after page refresh.

**Deployed on Netlify**

** Live Demo: https://tasktelus.netlify.app/**

**Features:**

Add, delete, and mark tasks as completed
I give the today default date 
Auto generated serial numbers for tasks (New task on above and Sr no. in descending order)
Manage and sort tasks by due date (newest first Default )
Search tasks by title
Filter tasks by status: All, Active, Completed
Dark and Light Mode toggle(Added in code App.js using UseEffect)
Fully responsive for all screen sizes
Added task data with localStorage
Clean and modern UI with Simple color  and subtle animations.


**Installation & Setup:**

Step-by-Step Setup
Create a folder named Task Management on your desktop or any preferred location

Open terminal/command prompt and run:
npx create-react-app@latest .
(Make sure you're inside the Task Management folder before running this command.)

Start the development server:
npm start
 (This runs the app in development mode. Open http://localhost:3000 to view it in your browser.)
Build the app for production:
npm run build
 (This creates a build/ folder with the production-ready version of your app.)


**Deploying to Netlify**

Visit Netlify and sign in
Click “Add new site” : “Import an existing project”
Manually I choose file of built and upload
Click "Deploy Site"
After deploy change name of your site name 


Folder Structure

- task_management/
  - public/
    - favicon.ico
  - src/
    - components/
      - AddTaskForm.js (Form to add new tasks)
      - FilterButtons.js (Buttons for filtering and sorting)
      - TaskItem.js (Individual task item)
      - TaskList.js (List of all tasks)
    - App.css (Global CSS)
    - App.js (Main app logic)
    - index.js (App entry point)
  - package.json (Dependencies)
  - README.md (Documentation)
  - build/ (Production build output)


**Challenges faced and solutions implemented**:


Initially, when sorting tasks by newest or oldest due date, the serial number (srNo) order was getting disrupted. This happened because the serial numbers were tied to the position of the task in the array, which changed when sorting was applied.
Solution :
The srNo is now assigned based on the original task creation order, and it remains unchanged even when tasks are sorted by date.


Sorting now works independently of the serial number logic.


Code adjustments were made in:


App.js — to manage tasks state and preserve serial numbers


FilterButtons.js — to properly sort by date while displaying the correct task order



