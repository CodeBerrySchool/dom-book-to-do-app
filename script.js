// Create the todoList function - It should run after a click on  the Add button.
var App = {
	addTodo: function() {
	    var item    = document.getElementById('todoInput').value; // Create a text node from the user input
	    var text    = document.createTextNode(item); // Create a li tag
	    var newItem = document.createElement('li');  // Add the user input to the li tag
	    newItem.appendChild(text); 					 //	Append text to newItem
		    if (item === '') {						 // Make sure that empty field is not "submittable"
				alert("Valamit be kell írnod!");
	  	    } else {
			    document.getElementById('todoList').appendChild(newItem); // Append the li to the html todoList id tag
                newItem.className = 'newItem'; // Adds a class to the list items
				document.getElementById('todoInput').value = ''; //Reset empty input field after submit
             }
	},
	  
	// Create the Remove button
	addRemoveButton: function() {		
        var removeButton = document.createElement('button'); // Creates the button.
	    removeButton.textContent = '\u00D7'; // Sets its text.
	    removeButton.className = 'removeButton'; // Adds a class to it -for later JS.
		var x = document.getElementsByClassName('newItem');
		var i;
		for (i = 0; i < x.length; i++) {
            x[i].appendChild(removeButton);
		    removeButton.onclick=App.removeTodo;
    	}; 
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
    	    completeButton.onclick=App.completeTodo;
		};
	},

	// Remove the element when the Remove button is clicked
	removeTodo: function() {
        var newItem = this.parentNode;
		newItem.remove();
    },
    
    // Add complete class to list items
	completeTodo: function() {
        var completedTodo = this.parentNode;
		completedTodo.classList.toggle('completed')
	
	},
	
    // Complete all completed button functionality
    removeAllComp: function() {
        var completedItem = document.querySelectorAll('li.completed')
		for (i = 0; i < completedItem.length; i++) {
		  completedItem[i].style.display='none';
        };
	},

	// Connect Enter key to Add button
	addOnEnter: function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			document.getElementById('add-btn').click();
		};
	},
};			// the todoList object closing tag is here!


// Attach the event listeners
document.getElementById('add-btn').addEventListener('click', App.addTodo);
document.getElementById('add-btn').addEventListener('click', App.addRemoveButton);
document.getElementById('add-btn').addEventListener('click', App.addCompleteButton);
document.getElementById("remove-all-completed-btn").addEventListener('click', App.removeAllComp);
document.getElementById('todoInput').addEventListener('keypress', App.addOnEnter);