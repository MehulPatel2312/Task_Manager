# Task Manager

A simple task manager web app where you can add, edit, delete, and filter tasks. The tasks are stored in the browser's `localStorage` so they persist across page refreshes.

## Features

- **Add tasks**: Users can add tasks by providing a title, due date, and category.
- **Edit tasks**: Users can edit the task details.
- **Remove tasks**: Users can delete tasks.
- **Filter tasks**: Tasks can be filtered by category (Work, Personal, Shopping) or searched by title.
- **Persistent storage**: All tasks are stored in the browser's localStorage, so they remain even after the page is reloaded.

## Files

### `index.html`
- The HTML structure of the Task Manager app, including input fields for task details (title, due date, category) and task display.
  
### `styles.css`
- Contains the styling for the Task Manager app, ensuring a clean and user-friendly layout.
  
### `script.js`
- The JavaScript file that handles the logic of adding, editing, removing, and filtering tasks. It also uses `localStorage` to persist the tasks across page reloads.

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your web browser to use the Task Manager app.
3. Add tasks by entering a title, selecting a due date, and choosing a category, then click **Add Task**.
4. Edit tasks by clicking the **Edit** button next to the task.
5. Remove tasks by clicking the **Remove** button.
6. Filter tasks by category or search by title using the filter inputs.

## Dependencies

- **jQuery**: Used for handling DOM manipulations and event handling.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
