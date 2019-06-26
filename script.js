// Create the todoList function - It should run after a click on  the Add button.
var todoList = {
	addNewTodo: function() {
	    var item    = document.getElementById('todoInput').value; // Create a text node from the user input
		var text    = document.createTextNode(item); // Create a li tag
		var newItem = document.createElement('li');  // Add the user input to the li tag
		newItem.appendChild(text); 					 //	Append text to newItem
			if (item === '') {						 // Make sure that empty field is not "submittable"
				alert("Valamit be kell írnod!");
	  		} else {
				document.getElementById('todoList').appendChild(newItem); // Append the li to the html todoList id tag
				newItem.className = 'newItem'; // Adds a class to the list items
	}},
		  
	// Create the Remove button
	addRemoveButton: function() {
		var removeButton = document.createElement('button'); // Creates the button.
		removeButton.textContent = 'Törlés'; // Sets its text.
		removeButton.className = 'removeButton'; // Adds a class to it.
		var x = document.getElementsByClassName('newItem');
		var i;
		for (i = 0; i < x.length; i++) {
  		x[i].appendChild(removeButton);
		};
		removeButton.attachEvent(onclick, this.removeTodo)
	},

	// Create the Complete button
	addCompleteButton: function() {
		var completeButton = document.createElement('button'); // Creates the button.
		completeButton.textContent = 'Kész van!'; // Sets its text.
		completeButton.className = 'completeButton'; // Adds a class to it.
		var x = document.getElementsByClassName('newItem');
		var i;
		for (i = 0; i < x.length; i++) {
  		x[i].appendChild(completeButton);
		};
	},

	// Create a remove element function
	removeTodo: function() {
		  // Connect item removal to Remove button click event
		newItem.parentNode.removeChild(newItem);		
	},
	
	// Creat a function that adds complete class to list items
	completeTodo: function() {
		newItem.classList.add('completed')
	},

	// Reset input field after submissions
	resetInput: function() {
		document.getElementById('todoInput').value = ''; // reset empty input field!
	},

	// Link the Enter key press on the input field to the click event
	pressEvent: function() {
		document.getElementById('todoInput').addEventListener('keypress', function(event) {
    		if (event.keyCode == 13) {
				event.preventDefault();
        		document.getElementById('add-btn').click();
    		}
	})},
};			// the todoList function closing tag is here!

	//completeButton.addEventListener('click', todoList.completeTodo);
	//removeButton.addEventListener('click', removeTodo);

	document.getElementById('add-btn').addEventListener('click', todoList.addNewTodo);
	document.getElementById('add-btn').addEventListener('click', todoList.addRemoveButton);
	document.getElementById('add-btn').addEventListener('click', todoList.addCompleteButton);
	document.getElementById('add-btn').addEventListener('click', todoList.resetInput);
	removeButton.addEventListener('click', removeTodo);

	
	
	