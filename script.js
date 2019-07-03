var app = {

	todos: [],

	addtodo: function(userInput) {
		var input = document.querySelector('.user-input').value;
        if (input === '') {
            alert("Valamit be kell írnod!");
        } else {
			this.todos.push(
			input
		  );
		  
		/* Reset form field to empty. */
		document.getElementById('user-input').value = '';
		this.displayList();
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

// 	// Connect the Enter key to the Add button
	addOnEnter: function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			document.getElementById('add-btn').click();
		}
	},

// 	// Rendering

	displayList: function() {

	// Clear the list every time we add a new item - to avoid duplicates
		var todoList = document.getElementById('todo-list');
		var todosUl = document.querySelector('ul'); 
	  	todosUl.innerHTML = ''; // Clear the list so the for loop won't duplicate its contents.
  
		for (i=0; i<this.todos.length; i++) {
	
		var todoText = document.createTextNode(this.todos[i]);
		var todoItem = document.createElement('li');
		todoItem.appendChild(todoText);
	
		todoList.appendChild(todoItem);
		todoItem.className = 'todo-item';

		// add the two buttons to the li
		app.addCompleteButton();
		app.addRemoveButton();
		}
	},

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
