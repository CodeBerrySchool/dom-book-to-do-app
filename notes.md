# Notes

## Step 1: Setup

- Create the GitHub repo
- Create the .html, .js .css files (we will need the CSS at the end of the process only)
- try to commit and check if it works well

## Step 2: What are we going to build?

- A To-Do App with:
   - a title
   - an input field
   - an add button
   - a remove all completed button
   ( we can do all of these in just the HTML)

   -then we will need:
       - functions: 
           1. add list items
           2. remove list items
           3. mark list items as completed - italics, faded, strikethrough format
           4. remove all completed list items
      
      - we will need buttons to do these, two in the HTML:
           1. add button
           2. remove all completeted button
      
      - and two button will be created on the fly, in JS:
           3. completed button
           4. remove button

      - we have to connect the four functions with the four buttons above.

      Additional functionality:
      - we should reach that Enter key press does the same as a click on the add button
      - we should inhibit add function, when the input field is empty - and flash an alert
      - Reset empty input field after submission

## Step 3: Building process

### Build the HTML
 - It is the easiest part: we make a container with a form inside: a title, an input field, an add button and a remove all completed button

#### A few thoughts on the JS code:
 - I used OOP style for cleaner structure, but mainly I separated everything into a functions and one big object (app)
 - To achieve the target with less code lines, I used 'onclick' approach, which is not necessarily good but here it is reasonable.
 - the addTodo function is a handler and a renderer in the same time, I couldn't separate them, I am still not sure why

### The JS coding process
 - first, make an object called app() that will contain basicly everything
 - functions - HANDLERS:
     1. addTodo(): save input field value in a variable, then append it to a list item and make it show up on Add button click
      + additional funcionality: make sure that the given input is not empty, pop up an alert if it is.

     2. removeTodo(): it has to remove its own parentNode (the list item)
     3. completeTodo(): it has to add the completed class to its own parentNode (the list item)
     4. removeAllCompleted(): it collects the elements with 'completed' class and removes them
     5. addOnEnter(): It should define that hitting Enter in the input field does the same as a click on the add button.

 - functions - RENDERING:

     1. addRemoveButton(): creates a removebutton on the fly, adds it to the list item right after it's made.
     2. addCompleteButton(): creates a completebutton on the fly, adds it to the list item right after it's made.
 
 - app object is ready, let's close it.

 - connect the handlers to the buttons.
     - I chose the onclick style attachment after I tried the classic addEventListener type -  It makes the code longer. It may be used with function chaining (e.g. because we want a few functions to run after a click on the add button), but it also complicates the code a bit.
     - another reason I chose onclick style is because we have to deal with buttons made on the fly (remove and completed) and it is way easier to handle them this way. - and therefore, we can stick to it for other buttons too.

 - add Enter keypress handler (app.addOnEnter()) - I was unable to add it in a different way, I still don't know why.
  
 
## Questions occured during the JS building process - observations
 - It's easy to make permanent buttons, but how to make them on the fly in JS? - This is where for loops are coming in aside with the use of getElementsByClass() method - it is because it returns an array like object - so iteration is unavoidable.

 - It is essential wo understand child-parent relations to create this to-do list app

 - buttons show up after the empty input field alert - Solved
 - Enter and click connection - solved

## Used methods and teachable tools
 - createElement()
 - createTextNode()
 - appendChild()
 - removeChild()
 - parentNode()
 - .value
 - className
 - classList
 - alert()


# Style the app with CSS
 - understand the basic structure of our app - it is a form and a list which will be filled over time by adding items by the user
 - add a complete CSS reset - it is a good practice, most students know it already.
 - We should introduce the grid basics and style the container (create the grid)
 - place our main elements in the grid system
 - style our basic elements: buttonns, input field, backgrounds
 - elements made on the fly could be reached by class, because we do not add IDs to them in JS, only classes, and tags can be too vague categories.

 - we use the ':nth child' to make list item background a bit different.
 - Along the creation, we center almost every element 
 - Flex display is in use as well, so it should be shortly introduced.
 - Relative and absolute positions are used to place the remove and complete buttons to the right. It is necessary because these are childs of the list items.

 - concerning the width of the elements, we can play around with percentages, however it is not recommended in terms of height, because our app size grows with the added elements - this changes the percentages
