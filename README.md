BW Todo App
-----------

A simple todo list app built with Next.js, React, and Redux.

Table of Contents
-----------------

* [Important Note](#important-note)
* [Demo](#demo)
* [Features](#features)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Components](#components)
* [Store and Reducers](#store-and-reducers)
* [Actions](#actions)
* [Technologies Used](#technologies-used)

Important Note
---------------

this project is using React 19 and the dependencies may not install correctly. please use the command`npm install --legacy-peer-deps` to install the project in case the installment fails.

Demo
----
https://bw-todo.vercel.app/

Features
--------

* Create, read, update, and delete (CRUD) todo items
* Filter and sort todo items by status and due date
* Responsive design for desktop and mobile devices

Getting Started
---------------

1. Clone the repository: `git clone https://github.com/your-username/bw-todo-app.git`
2. Install dependencies: `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open your browser at `http://localhost:3000`

Project Structure
-----------------

* `src/`: Source code for the application
	+ `app/`: App components and pages
	+ `components/`: Reusable UI components
  + `components/ui`: shacdn components
	+ `lib/`: Utilities, helpers, and Redux setup
	+ `presentations/`: Page presentational components
* `public/`: Static assets and index.html

Components
----------

* `TodoItem`: Represents a single todo item
* `TodoList`: Displays a list of todo items
* `TodoForm`: Form for creating and editing todo items
* `Dialog`: Modal dialog for confirming actions

Store and Reducers
------------------

* `todoSlice`: Redux slice for managing todo items
* `todoReducer`: Reduces actions to update the todo state

Actions
-------

* `addTodo`: Adds a new todo item to the list
* `removeTodo`: Removes a todo item from the list
* `updateTodo`: Updates an existing todo item

Technologies Used
-----------------

* **Frontend Framework**: React/Next.js
* **UI Library**: shadcn/ui
* **State Management**: Redux
* **UI Components**: Radix UI, Lucide Icons
* **Form Management**: React Hook Form
* **Date Library**: date-fns
* **Build Tool**: TurboPack
