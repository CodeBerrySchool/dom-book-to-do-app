# Notes

## Step 1: Setup

- Create the GitHub repo
- Create the .html, .js .css files (we will need the CSS at the end of the process only)
- try to commit and check if it works well

## Step 2: What are we going to build?

- A To-Do App with:
   - a title
   - an input field
   - an Add button
   - a removeAll completed button
   ( we can do all of these in just the HTML)

   -then we will need:
      - the Add button to take action: to make a new list element and show it in the page
      - we will need a Remove button - which deletes the item
      - we will need a Complete button - which turns the item's inner text into italics, faded, strikethrough format
      - we should reach that Enter key does the same as a click on the add button
      - we should use basic CSS to make the App nice enough for the students portfolio
      -important: we are going to create one big function which happens on a click

## Building process

### Build the HTML
 - It is the easiest part: we make a container and inside:a title and a form wtih an input field and an Add button

### Do the functional part - the JS
 - first, build a todoList() function that will contain everything we'd like to happen on clicking the Add button
 - this todoList() should include these actions:
      - add the given text to a list as a list item
      - create a remove and a ready button on the fly and show it next to the list item

 - save input field value in a variable, then append it to a list item and make it show up on Add button click
      - make sure that the given input is not empty
 - create the remove button
      - simply add a .hide class to the item when clicked
      - don't show it after empty input alert!
 - create complete button
      - adds a CSS class to make the text faded, italic and strikethrough
      - don't show it after empty input alert!

 - close todoList() and connect it to the click event on Add button
 - connect this action to the press Enter key too
 
## Problems occured during the building process
 - It's easy to make permanent buttons, but how to make them on the fly in JS?
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

## Useful observations
 - It is essential wo understand child-parent relations to create this to-do list
 - The Remove and Complete buttons are going INSIDE the function which is connected to the Add button - it is not essential, we can move them out.

 # Notes II.

  - 

