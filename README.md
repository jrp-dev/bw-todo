

Here is the updated README:


[README.md]
================

BW Todo App
-----------

A simple todo list app built with Next.js, React, and Redux.

Table of Contents
-----------------

* [Features](#features)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Components](#components)
* [Store and Reducers](#store-and-reducers)
* [Actions](#actions)
* [Technologies Used](#technologies-used)

Features
--------

* Create, read, update, and delete (CRUD) todo items
* Filter and sort todo items by status and due date
* Responsive design for desktop and mobile devices

Getting Started
---------------

1. Clone the repository: `git clone https://github.com/your-username/bw-todo-app.git`
2. Install dependencies: `npm install` or `yarn install`
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

Note: This is a basic README file, and you should update it to include more details about your project, such as dependencies, licensing, and contribution guidelines.