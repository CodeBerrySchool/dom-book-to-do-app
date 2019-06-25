
// Create the todoList function - It should run after a click on  the Add button.
function todoList() {
	
	var item    = document.getElementById('todoInput').value; // Create a text node from the user input
	var text    = document.createTextNode(item); // Create a li tag
	var newItem = document.createElement('li');  // Add the user input to the li tag
	newItem.appendChild(text); 					 //	Append text to newItem
		if (item === '') {						 // Make sure that empty field is not "submittable"
			alert("Valamit be kell írnod!");
	  	} else {
			document.getElementById('todoList').appendChild(newItem); // Append the li to the html todoList id tag
			newItem.className = 'newItem'; // Adds a class to the list items
		  }
		  
	// Create the Remove button
	var removeButton = document.createElement('button'); // Creates the button.
	removeButton.textContent = 'Törlés'; // Sets its text.
	removeButton.className = 'removeButton'; // Adds a class to it.
	newItem.appendChild(removeButton)// Appends it to the list items
	
	// Create the Complete button
	var completeButton = document.createElement('button'); // Creates the button.
	completeButton.textContent = 'Kész van!'; // Sets its text.
	completeButton.className = 'completeButton'; // Adds a class to it.
	newItem.appendChild(completeButton); //Appends it to the list items

	// Remove the element AND the buttons when the Remove button is clicked
	removeButton.addEventListener('click', function(){   // Connect item removal to Remove button click event
		newItem.parentNode.removeChild(newItem);
	});
	
	// Add complete class to list items
	completeButton.addEventListener('click', function(){ // Add Completed class onclick of Complete button
		newItem.classList.add('completed')

	
	})
	
	document.getElementById('todoInput').value = ''; // reset empty input field!

};				// the todoList function closing tag is here!

// Add the function to the click event
document.getElementById('add-btn').addEventListener('click', todoList);

// Link the Enter key press on the input field to the click event
document.getElementById('todoInput').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
		event.preventDefault();
        document.getElementById('add-btn').click();
    }
});