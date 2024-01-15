// Code for  Kaizen UX Code Challenge by Luke Saucer. CSS file is attached but is put into the variable customStyles below so that you can insert the JavaScript file into the Chrome Developer Tools console and it will work.

var link = document.createElement('link'); 
link.rel = 'stylesheet';
link.href = 'CodeChallenge.css';
document.head.appendChild(link); 




//CSS rules
// var customStyles = `
// .container-cc {
//     height: auto;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     background-color: darkgray;
//   }

// .box-cc {
//     height: 250px;
//     max-width: 1270px;
//     justify-content: center;
//     border-radius: 10px;
//     background-color: white;
//     margin: 2em;
//   }

// .container-cc .box-cc {
//     display: flex;
//     align-items: center;
// }

// .container-cc .box-cc .left-cc {
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     flex-basis: 20%; 
//     align-items: flex-start;
// }

// .container-cc .box-cc .middle-cc {
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     flex-basis: 40%; 
// }

// .container-cc .box-cc .right-cc {
//     height: auto;
//     display: flex;
//     flex-direction: column; 
//     flex-basis: 40%;
// }

// .container-cc .box-cc .left-cc,
// .container-cc .box-cc .middle-cc,
// .container-cc .box-cc .right-cc {
//     background-color: white;
//     border-radius: 10px; 
//     padding: .5em;
//     display: flex;
//     justify-content: center;
// }

// .container-cc .box-cc .middle-cc h1 {
//     font-size: 1.1em;
//     font-family: 'Roboto', sans-serif;
//     font-weight: bold;
//     margin-left: .9em;
// }

// .container-cc .box-cc .middle-cc p {
//     margin-top: 0.5em;
//     font-size: 1em;
//     font-family: 'Roboto', sans-serif;
// }
// .container-cc .box-cc .left-cc button {
//     font-size: .8em;
//     font-family: 'Roboto', sans-serif;
// }

// .container-cc .box-cc .left-cc .button-container-cc {
//     display: flex;
//     align-items: flex-start;
// }

// .btn-primary-cc {
//   margin-top: 1em;
//   border: 1px solid transparent;
//   border-radius: 40px;
//   background-color:darkred;
//   color: white;
//   font-weight: bold;
// }

// .btn-secondary-cc {
//     margin-top: .8em;
//     border: 1px solid transparent;
//     border-radius: 40px;
//     background-color: white;
//     color: darkred;
//     font-weight: bold;

// }

// .btn-primary-cc:hover, .btn-secondary-cc:hover {
//     /* Styles for btn-primary-cc when it's hovered */
//     background-color: firebrick;
//     color: white;
// }

// .btn-primary-cc.active, .btn-secondary-cc.active {
//     /* Styles for btn-primary-cc when another button is active */
//     background-color: darkred;
//     color: white;
// }

// .btn-primary-cc.inactive, .btn-secondary-cc.inactive {
//     /* Styles for btn-primary-cc when it's inactive */
//     background-color: white;
//     color: darkred;
// }

// .btn-primary-cc.clicked, .btn-secondary-cc.clicked {
//     /* Styles for buttons that have been clicked */
//     background-color: darkred;
//     color: white;
// }

// #CodeChallengeImage {
//     width: 100%;
//     height: 100%;
//     border-radius: 10px;
// }

// .image-container-cc {
//     display: flex;
//     height: 60%;
//     width: 50%;
//     margin: 10px 0px 10px 80px;
// }

// /* Styles for screens larger than 561px */
// @media (min-width: 561px) {
//     .container-cc {
//         margin: auto;
//     }

//     .box-cc {
//         display: flex;
//     }

//     .left-cc, .middle-cc, .right-cc {
//         flex: 1;
//     }

//     .container-cc .box-cc .middle-cc h1 {
//         margin-left: 3.6em;
//     }

//     .container-cc .box-cc .middle-cc p {
//     margin-top: 0.5em;
//     font-size: 1em;
//     font-family: 'Roboto', sans-serif;
//     margin-left: 4em;
//     }
    
//     .button-container-cc {
//         display: flex;
//         flex-direction: column;
//         box-shadow: none; /* This removes the shadowed box-cc */
//     }

//     .container-cc .box-cc .left-cc .button-container-cc {
//         margin-left: 1.5em;
//         margin-bottom: 1.5em;
//     }

//     .container-cc .box-cc .left-cc button {
//         font-size: .8em;
//         padding: .5em 1.3em;
//         font-family: 'Roboto', sans-serif;
//     }
// }

// /* Styles for screens smaller than or equal to 560px */
// @media (max-width: 560px) {
//     .container-cc {
//         width: 100%;
//     }

//     .container-cc .box-cc .right-cc .img {
//         flex-direction: column;
//     }

//     .container-cc .box-cc {
//         flex-direction: column;
//         height: 100%;
//         margin-top: 2.3em;
//         margin-bottom: 2.3em;
//         margin-left: .5em;
//         margin-right: .5em;
//         width: 90%;
//         padding-bottom: 1em;
//     }

//     .box-cc {
//         display: flex;
//     }

//     .left-cc, .middle-cc, .right-cc {
//         width:95%;
//     }

//    .container-cc .box-cc .middle-cc h1 {
//         margin-left: 1.4em;
//         margin-top: .75em;
//         font-size: large;
//     }

//     .container-cc .box-cc .middle-cc p {
//         margin-left: 1.8em;
//         margin-right: 1.8em;
//     }

//     .button-container-cc {
//         justify-content: space-evenly;
//         box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.15); /* This adds a shadowed box-cc */
//         border: 1px solid transparent;
//         border-radius: 2.5px;
//         width: 90%;
//         margin-bottom: .5em;
//         margin-top: 1.2em;
//     }

//     .button-container-cc button {
//         margin: 10px 10px; /* This adds 10px of space to the left-cc and right-cc of each button */
//     }

//     .container-cc .box-cc .left-cc {
//         align-items: center;
//         justify-content: center;
//     }

//     .image-container-cc {
//         width: 80%;
//         margin: 2em auto;
//     }
    
//     .image-container-cc img {
//         display: flex;
//         margin: auto;
//     }

//     .container-cc .box-cc .left-cc button {
//         font-size: 1em;
//         padding: .6em 1.3em;
//         font-family: 'Roboto', sans-serif;
//     }

// }
// `;

// Create a style element
// var styleElement = document.createElement('style');

// Set the styles
// styleElement.innerHTML = customStyles;

// Append the style element to the head
// document.head.appendChild(styleElement);


var newSectionHTML = '' +
'<div class="container-cc">' + 
    '<div class="box-cc">' +
        '<div class="left-cc">' +
            '<div class="button-container-cc">' +
                '<button type="button" class="btn-primary-cc">Kaizen UX</button>' +
                '<button type="button" class="btn-secondary-cc">Hints</button>' +
                '<button type="button" class="btn-secondary-cc">Next Matchup</button>' +
            '</div>' +
        '</div>' +
        '<div class="middle-cc">' + 
                '<h1>Kaizen UX</h1>' + 
                '<p>Kaizen UX is an A/B Testing and Optimization Agency. We execute large A/B testing, website optimization, and other digital marketing projects for high-traffic clients.</p>' +
        '</div>' +
        '<div class="right-cc">' +
            '<div class="image-container-cc">' +
                '<img id="CodeChallengeImage" src="https://vucommodores.com/wp-content/uploads/2024/01/Screenshot-2024-01-11-at-3.03.33-PM-1024x530.png" alt="Vanderbilt University Commodores Tennis Racket">' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>'+
''; // Create a string of HTML to add to the page

// Code for Chrome Developer Tools Console
// Finding the target element with the class "schedule"
// var targetElement = document.querySelector('.schedule');

// Inserting the HTML above the "schedule" section
// if (targetElement) {
//   targetElement.insertAdjacentHTML('beforebegin', newSectionHTML);
// } else {
//   console.error('Element with class "schedule" not found.');
// }


// Code for VSCode
var newDiv = document.createElement("div"); 
// Set the div's innerHTML to newSectionHTML
newDiv.innerHTML = newSectionHTML;
// Append the new div to the body
document.body.appendChild(newDiv);





// Now that the new HTML is added to the page, get the buttons, header, text, and image elements
var buttons = document.querySelectorAll('.container-cc .box-cc .left-cc button');
var header = document.querySelector('.container-cc .box-cc .middle-cc h1');
var text = document.querySelector('.container-cc .box-cc .middle-cc p');
var image = document.querySelector('.container-cc .box-cc .right-cc img');
var btnPrimary = document.querySelector('.btn-primary-cc');

// Define the headers, text, and image URLs for each button
var headers = ['Kaizen UX', 'Hints', 'Vanderbilt Basketball\'s Next Matchup'];
var texts = [
    'Kaizen UX is an A/B Testing and Optimization Agency. We execute large A/B testing, website optimization, and other digital marketing projects for high-traffic clients.', 
    'In this coding challenge, you may not submit an HTML file, so you\'ll want to set up your HTML in a string and use a function of Element called insertAdjacentHTML(). <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML">Learn more here.</a>'
];
var images = ['https://vucommodores.com/wp-content/uploads/2024/01/Screenshot-2024-01-11-at-3.03.33-PM-1024x530.png', 'https://vucommodores.com/wp-content/uploads/2024/01/DSC05578-1-1024x683.jpg'];

// Loop through the buttons
buttons.forEach((button, index) => {

// Add event listeners for mouseenter and mouseleave events
btnPrimary.addEventListener('mouseenter', function() {
    this.classList.remove('inactive');
});

btnPrimary.addEventListener('mouseleave', function() {
    // Only add the inactive class back if the btn-secondary-cc button is clicked
    if (document.querySelector('.btn-secondary-cc').classList.contains('clicked')) {
        this.classList.add('inactive');
    }
});
// Add event listeners for click events
    button.addEventListener('click', function() {
        // Change the header and text in the middle-cc section
        buttons.forEach((button) => {
            button.classList.remove('clicked');
        });

        // Add the active class to the clicked button
        button.classList.add('clicked');
            // Add the inactive class to the primary button if the secondary button is clicked
        if (button.classList.contains('btn-secondary-cc')) {
            document.querySelector('.btn-primary-cc').classList.add('inactive');
        } else {
            document.querySelector('.btn-primary-cc').classList.remove('inactive');
        }


        header.textContent = headers[index];
        text.innerHTML = texts[index]; // Change textContent to innerHTML

        // Change the image in the right-cc column
        image.src = images[index];
    });
});