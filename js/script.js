// Target the form using your querySelector*
// Add an event listener to the form to listen for the submit event.*
// Create a handler for the form event listener and prevent the default behavior*
// Target the firstName and lastName input elements without modifying the HTML.*
// Create two new '<strong>' elements for each input
// Add the values of the input fields to the textContent of the appropriate new (<strong>) element.
// Replace both the text inputs inside the the formParagraph.-idea of the entire form-
// Remove the submit button so its in its final state and can no longer be edited.

var formTarget = document.querySelector('#Name');
console.log(formTarget);
var firstName = formTarget.firstName;
console.log(firstName);
var lastName = formTarget.lastName;
console.log(lastName);

formTarget.addEventListener('click', function(e) {
  console.log(e);
  e.preventDefault();
});

var strong1 = document.createElement('strong');
strong1.id = 'strong1-id';

firstName.append(strong1);

var strong2 = document.createElement('strong');
strong2.id = 'strong2-id';
