$(document).ready(function () {
    // Load saved tasks
    loadTasks();

    // Add task
    $('#addTaskBtn').on('click', function () {
        let taskTitle = $('#taskTitle').val();
        let dueDate = $('#dueDate').val();
        let category = $('#taskCategory').val();

        if (taskTitle === '') {
            alert('Task title cannot be empty!');
            return;
        }

        let task = {
            id: new Date().getTime(),  // Unique ID based on timestamp
            title: taskTitle,
            dueDate: dueDate,
            category: category,
            completed: false
        };

        // Save task to localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear inputs
        $('#taskTitle').val('');
        $('#dueDate').val('');

        // Load the updated task list
        loadTasks();
    });

    // Load tasks from localStorage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let filterCategory = $('#filterCategory').val();
        let filterText = $('#filterText').val().toLowerCase();
        
        $('#taskList').empty();

        tasks.forEach(function (task) {
            if ((filterCategory === 'All' || task.category === filterCategory) &&
                task.title.toLowerCase().includes(filterText)) {
                let taskHTML = `<li data-id="${task.id}">
                    <span>${task.title} (Due: ${task.dueDate}, Category: ${task.category})</span>
                    <button class="remove">Remove</button>
                    <button class="edit">Edit</button>
                </li>`;
                $('#taskList').append(taskHTML);
            }
        });
    }

    // Remove task
    $('#taskList').on('click', '.remove', function () {
        let taskId = $(this).closest('li').data('id');
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    });

    // Edit task
    $('#taskList').on('click', '.edit', function () {
        let taskId = $(this).closest('li').data('id');
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let task = tasks.find(task => task.id === taskId);

        if (task) {
            $('#taskTitle').val(task.title);
            $('#dueDate').val(task.dueDate);
            $('#taskCategory').val(task.category);

            // Remove the task after editing
            tasks = tasks.filter(task => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            loadTasks();
        }
    });

    // Filter tasks
    $('#filterCategory').on('change', function () {
        loadTasks();
    });

    $('#filterText').on('keyup', function () {
        loadTasks();
    });
});
