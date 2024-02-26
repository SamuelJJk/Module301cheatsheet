
// keyword --- name ---   () => {}
// const changeButton =  () => {
//     // this is where i put my instructions
//     let container = document.querySelector('.termsAnsCont')
//    container.innerHTML=" HEY! THIS WORKS"
// }   


    // Get all the buttons
    const buttons = document.querySelectorAll('.attnBtn');

    // Attach click event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            changeButton(this.id); // Pass the id of the clicked button to the changeButton function
        });
    });

    // Function to handle button click
    function changeButton(id) {
        // Reset all buttons to default state
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        // Set the clicked button to active state
        const clickedButton = document.getElementById(id);
        clickedButton.classList.add('active');

        // You can perform additional actions here based on the clicked button
        // For demonstration purposes, I'm just logging the button id to the console
        //console.log("Clicked button: ", id);

        if (id === 'scope') {
            // Update the content of .termsAnsCont to "Hello World"
            document.querySelector('.termsAnsCont').innerHTML = "Defines the work to be done - How much work and all expectations – Quality, Cost, Delivery, etc.";
        }
    }
   