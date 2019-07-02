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
            app.addCompleteButton();
            app.addRemoveButton();
            /* Reset form field to empty. */
            document.getElementById('user-input').value = '';
        }
	},
	removeTodo: function() {
        var todoItem = this.parentNode;
		todoItem.remove();
    },
    
    // Create the complete function
	completeTodo: function() {
        var completedTodo = this.parentNode;
		completedTodo.classList.toggle('completed');
	},
	
    // Create delete all completed button function
    removeAllComp: function() {
        var completedItem = document.querySelectorAll('li.completed');
		for (i = 0; i < completedItem.length; i++) {
		  completedItem[i].remove();
        }
	},

	// Connect the Enter key to the Add button
	addOnEnter: function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			document.getElementById('add-btn').click();
		}
	},

	// Rendering

	// Create the Remove button
	addRemoveButton: function() {		
        var removeButton = document.createElement('button'); // Creates the button.
	    removeButton.textContent = '\u00D7'; // Sets its text.
	    removeButton.className = 'removeButton'; // Adds a class to it -for later JS.
		var x = document.getElementsByClassName('todo-item');
		var i;
		for (i = 0; i < x.length; i++) {
            x[i].appendChild(removeButton);
		    removeButton.onclick=app.removeTodo;
    	}
	},
	
    // Create the Complete button
    addCompleteButton: function() {
		var completeButton = document.createElement('button'); // Creates the button.
		completeButton.textContent = '\u2713'; // Sets its text.
		completeButton.className = 'completeButton'; // Adds a class to it.
		var x = document.getElementsByClassName('todo-item');
		var i;
		for (i = 0; i < x.length; i++) {
  			x[i].appendChild(completeButton);
    	    completeButton.onclick=app.completeTodo;
		}
	},
};


// Attach the Enter key press to the add function

document.getElementById('user-input').addEventListener('keypress', app.addOnEnter);