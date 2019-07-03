var app = {
    addTodo: function() {
        var userInput = document.getElementById('user-input').value;
        var todoText = document.createTextNode(userInput);
        var todoItem = document.createElement('li');
        todoItem.appendChild(todoText);

        var todoList = document.getElementById('todo-list');

        if (userInput === '') {
            alert("Valamit be kell írnod!");
        } else {
            todoList.appendChild(todoItem);
            todoItem.className = 'todo-item';
            this.renderCompleteButtons();
            this.renderDeleteButtons();
            /* Reset form field to empty. */
            document.getElementById('user-input').value = '';
        }
    },
    completeTodo: function(clickedCompleteButton) {
        var completedTodo = clickedCompleteButton.parentNode;
        completedTodo.classList.toggle('completed');
    },
    deleteTodo: function(clickedDeleteButton) {
        var todoItem = clickedDeleteButton.parentNode;
        todoItem.remove();
    },
    removeAllCompletedTodos: function() {
        var completedTodos = document.querySelectorAll('.completed');
        Array.from(completedTodos).forEach(function(completedTodo) {
            completedTodo.remove();
        });
    },
    /* Think about emptying the already existing buttons. */
    /* Think about merging these render functions into one in a later lesson.*/
    renderCompleteButtons: function() {
        var completeButton = document.createElement('button');
        completeButton.textContent = '\u2713';
        completeButton.className = 'button-complete';
        var allTodoItems = document.getElementsByClassName('todo-item');
        Array.from(allTodoItems).forEach(function(todoItem) {
            todoItem.appendChild(completeButton);
        });
    },
    renderDeleteButtons: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = '\u00D7';
        deleteButton.className = 'button-delete';
        var allTodoItems = document.getElementsByClassName('todo-item');
        Array.from(allTodoItems).forEach(function(todoItem) {
            todoItem.appendChild(deleteButton);
        });
    },
    setupEventListeners: function() {
        document.addEventListener('click', function(event) {
            if (event.target.matches('#button-add-todo')) {
                app.addTodo();
            } else if (event.target.matches('.button-complete')) {
                app.completeTodo(event.target);
            } else if (event.target.matches('.button-delete')) {
                app.deleteTodo(event.target);
            } else if (event.target.matches('#button-remove-all-completed')) {
                app.removeAllCompletedTodos();
            }
        });
        document.getElementById('user-input').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                app.addTodo();
            }
        });
    }
};

app.setupEventListeners();