// Create the todoList function - It should run after a click on  the Add button.
var app = {

	
	// Handlers

	//Create the add function
	addTodo: function() {
	    var inputValue    = document.getElementById('todoInput').value; // Store user input in a variable
	    var text    = document.createTextNode(inputValue);  // Create a text node from the user input
		var newItem = document.createElement('li');			// Create a li tag from the text node
		var todoList = document.getElementById('todoList'); // Store the list element in a variable for later
	
	    newItem.appendChild(text); 					// Append text to newItem
		    if (inputValue === '') {				// Make sure that empty field is not "submittable"
				alert("Valamit be kell írnod!");
	  	    } else {
			    todoList.appendChild(newItem); // Append the li to the todoList
                newItem.className = 'newItem'; // Adds a class to the list items
				document.getElementById('todoInput').value = ''; // Reset empty input field after submit
				app.addCompleteButton();
				app.addRemoveButton();
             }
	},
	  
	// Create the remove function
	removeTodo: function() {
        var newItem = this.parentNode;
		newItem.remove();
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
		var x = document.getElementsByClassName('newItem');
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
		var x = document.getElementsByClassName('newItem');
		var i;
		for (i = 0; i < x.length; i++) {
  			x[i].appendChild(completeButton);
    	    completeButton.onclick=app.completeTodo;
		}
	},
};


// Attach the Enter key press to the add function

document.getElementById('todoInput').addEventListener('keypress', app.addOnEnter);