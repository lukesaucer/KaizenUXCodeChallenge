// Code for  Kaizen UX Code Challenge by Luke Saucer. CSS file is attached but is put into the variable customStyles below so that you can insert the JavaScript file into the Chrome Developer Tools console and it will work.

// CSS Link for VSCode
// var link = document.createElement('link'); 
// link.rel = 'stylesheet';
// link.href = 'CodeChallenge.css';
// document.head.appendChild(link); 

//CSS rules stored in a variable
var customStyles = `
.container-cc {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: darkgray;
}

.box-cc {
  height: 250px;
  width: 1270px;
  max-width: 1270px;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  margin: 2em;
}

.container-cc .box-cc {
  display: flex;
  align-items: center;
}

.container-cc .box-cc .left-cc {
  height: auto;
  display: flex;
  flex-direction: column;
  flex-basis: 20%; 
  align-items: flex-start;
}

.container-cc .box-cc .middle-cc {
  height: auto;
  display: flex;
  flex-direction: column;
  flex-basis: 40%; 
}

.container-cc .box-cc .right-cc {
  height: auto;
  display: flex;
  flex-direction: column; 
  flex-basis: 40%;
}

.container-cc .box-cc .left-cc,
.container-cc .box-cc .middle-cc,
.container-cc .box-cc .right-cc {
  background-color: white;
  border-radius: 10px; 
  padding: .5em;
  display: flex;
  justify-content: center;
}

.container-cc .box-cc .middle-cc h1 {
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-left: .9em;
}

.container-cc .box-cc .middle-cc p {
  margin-top: 0.5em;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
}
.container-cc .box-cc .left-cc button {
  font-size: .8em;
  font-family: 'Roboto', sans-serif;
}

.container-cc .box-cc .left-cc .button-container-cc {
  display: flex;
  align-items: flex-start;
}

.container-cc .box-cc .image-container-cc img {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  height: auto;
}

.btn-primary-cc {
margin-top: 1em;
border: 1px solid transparent;
border-radius: 40px;
background-color:darkred;
color: white;
font-weight: bold;
}

.btn-secondary-cc {
  margin-top: .8em;
  border: 1px solid transparent;
  border-radius: 40px;
  background-color: white;
  color: darkred;
  font-weight: bold;

}

.btn-tertiary-cc {
  margin-top: .8em;
  border: 1px solid transparent;
  border-radius: 40px;
  background-color: white;
  color: darkred;
  font-weight: bold;
}

.btn-primary-cc:hover, .btn-secondary-cc:hover, .btn-tertiary-cc:hover {
  /* Styles for btn-primary-cc when it's hovered */
  background-color: firebrick;
  color: white;
}

.btn-primary-cc.active, .btn-secondary-cc.active, .btn-tertiary-cc.active {
  /* Styles for btn-primary-cc when another button is active */
  background-color: darkred;
  color: white;
}

.btn-primary-cc.inactive, .btn-secondary-cc.inactive, .btn-tertiary-cc.inactive {
  /* Styles for btn-primary-cc when it's inactive */
  background-color: white;
  color: darkred;
}

.btn-primary-cc.clicked, .btn-secondary-cc.clicked, .btn-tertiary-cc.clicked {
  /* Styles for buttons that have been clicked */
  background-color: darkred;
  color: white;
}

#CodeChallengeImage {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

.image-container-cc {
  display: flex;
  max-height: 180px;
  max-width: 180px;
  margin: auto;
}

/* Styles for screens larger than 561px */
@media (min-width: 561px) {
  .container-cc {
      margin: auto;
  }

  .box-cc {
      display: flex;
  }

  .left-cc, .middle-cc, .right-cc {
      flex: 1;
  }

  .container-cc .box-cc .middle-cc h1 {
      margin-left: 3.6em;
  }

  .container-cc .box-cc .middle-cc p {
      margin-top: 0.5em;
      font-size: 1em;
      margin-left: 4em;
  }
  
  .button-container-cc {
      display: flex;
      flex-direction: column;
      box-shadow: none; /* This removes the shadowed box-cc */
  }

  .container-cc .box-cc .left-cc .button-container-cc {
      margin-left: 1.5em;
      margin-bottom: 1.5em;
  }

  .container-cc .box-cc .left-cc button {
      font-size: .8em;
      padding: .5em 1.3em;
      text-align: left;
  }
}

/* Styles for screens smaller than or equal to 560px */
@media (max-width: 560px) {
  .container-cc {
      width: 100%;
  }

  .container-cc .box-cc .right-cc .img {
      flex-direction: column;
  }

  .container-cc .box-cc {
      flex-direction: column;
      height: 100%;
      margin-top: 2.3em;
      margin-bottom: 2.3em;
      margin-left: .5em;
      margin-right: .5em;
      width: 90%;
      padding-bottom: 1em;
  }

  .box-cc {
      display: flex;
  }

  .left-cc, .middle-cc, .right-cc {
      width:95%;
  }

 .container-cc .box-cc .middle-cc h1 {
      margin-left: 1.5em;
      margin-top: .75em;
      font-size: large;
  }

  .container-cc .box-cc .middle-cc p {
      margin-left: 1.8em;
      margin-right: 1.8em;
  }

  .button-container-cc {
      justify-content: space-evenly;
      box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.15); /* This adds a shadowed box-cc */
      border: 1px solid transparent;
      border-radius: 2.5px;
      width: 99%;
      margin-bottom: .5em;
      margin-top: 1.2em;
      padding-left: .2em;
      padding-right: .2em;
  }

  .button-container-cc button {
      margin: 10px 10px; /* This adds 10px of space to the left-cc and right-cc of each button */
  }

  .container-cc .box-cc .left-cc {
      align-items: center;
      justify-content: center;
  }

  .image-container-cc {
      width: 80%;
      margin: 2em auto;
  }
  
  .image-container-cc img {
      display: flex;
      margin: auto;
  }

  .container-cc .box-cc .left-cc button {
      font-size: 1em;
      padding: .6em 1.3em;
  }
}
`;

// Create a style element
var styleElement = document.createElement('style');
// Set the styles
styleElement.innerHTML = customStyles;
// Append the style element to the head
document.head.appendChild(styleElement);

var newSectionHTML = '' +
'<div class="container-cc">' + 
    '<div class="box-cc">' +
        '<div class="left-cc">' +
            '<div class="button-container-cc">' +
                '<button type="button" class="btn-primary-cc">Kaizen UX</button>' +
                '<button type="button" class="btn-secondary-cc">Hints</button>' +
                '<button type="button" class="btn-tertiary-cc">Next Matchup</button>' +
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
var targetElement = document.querySelector('.schedule');

// // Inserting the HTML above the "schedule" section
if (targetElement) {
  targetElement.insertAdjacentHTML('beforebegin', newSectionHTML);
} else {
  console.error('Element with class "schedule" not found.');
}

//Code for VSCode
var newDiv = document.createElement("div"); 
//Set the div's innerHTML to newSectionHTML
newDiv.innerHTML = newSectionHTML;
//Append the new div to the body
document.body.appendChild(newDiv);

// Get the buttons, header, text, and image elements etc.
var buttons = document.querySelectorAll('.container-cc .box-cc .left-cc button');
var header = document.querySelector('.container-cc .box-cc .middle-cc h1');
var text = document.querySelector('.container-cc .box-cc .middle-cc p');
var image = document.querySelector('.container-cc .box-cc .right-cc img');
var btnPrimary = document.querySelector('.btn-primary-cc');
var btnSecondary = document.querySelector('.btn-secondary-cc');
var btnTertiary = document.querySelector('.btn-tertiary-cc');
var imageContainer = document.querySelector('.image-container-cc');
// Get today's date
var today = new Date();
// Get the month as a three-letter string
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var todayFormatted = new Date(today.getFullYear(), today.getMonth(), today.getDate());
// var todayFormatted = monthNames[today.getMonth()] + ' ' + today.getDate();




// Array holding the matches on the schedule.
var matches = [
    {
      team: 'Presbyterian',
      time: '7:00 PM',
      date: 'Nov 7',
      image: 'https://vucommodores.com/wp-content/uploads/2021/06/1200px-Presbyterian_College_logo.jpg'
    },
    {
      team: 'USC Upstate',
      time: '6:00 PM',
      date: 'Nov 10',
      image: 'https://vucommodores.com/wp-content/uploads/2022/08/upstate-u-349.jpg'
    },
    {
      team: 'UNC Greensboro',
      time: '7:00 PM',
      date: 'Nov 14',
      image: 'https://vucommodores.com/wp-content/uploads/2023/08/UNCG_Spartans_logo.svg_.png'
    },
    {
      team: 'Central Arkansas',
      time: '6:00 PM',
      date: 'Nov 17',
      image: 'https://vucommodores.com/wp-content/uploads/2019/10/UCA-Bear-head-.png'
    },
    {
      team: 'NC State',
      time: '9:00 PM',
      date: 'Nov 23',
      image: 'https://vucommodores.com/wp-content/uploads/2023/08/NC_State_Wolfpack_logo.svg_.png'
    },
    {
      team: 'Arizona State',
      time: '7:00 PM',
      date: 'Nov 24',
      image: 'https://vucommodores.com/wp-content/uploads/2007/02/Arizona-State.png'
    },
    {
      team: 'Boston College',
      time: '8:15 PM',
      date: 'Nov 29',
      image: 'https://vucommodores.com/wp-content/uploads/2007/02/Boston-College.png'
    },
    {
      team: 'Alabama A&M',
      time: '4:00 PM',
      date: 'Dec 2',
      image: 'https://vucommodores.com/wp-content/uploads/2021/10/1200px-Alabama_AM_Bulldogs_logo.svg_.png'
    },
    {
      team: 'San Francisco',
      time: '7:00 PM',
      date: 'Dec 6',
      image: 'https://vucommodores.com/wp-content/uploads/2023/08/San_Francisco_Dons_logo.svg_.png'
    },
    {
      team: 'Texas Tech',
      time: '6:30 PM',
      date: 'Dec 16',
      image: 'https://vucommodores.com/wp-content/uploads/2007/09/texas-tech.png'
    },
    {
      team: 'Western Carolina',
      time: '6:00 PM',
      date: 'Dec 19',
      image: 'https://vucommodores.com/wp-content/uploads/2008/03/Western-Carolina.png'
    },
    {
      team: 'Memphis',
      time: '3:00 PM',
      date: 'Dec 23',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Memphis.png'
    },
    {
      team: 'Dartmouth',
      time: '4:00 PM',
      date: 'Dec 30',
      image: 'https://vucommodores.com/wp-content/uploads/2015/09/Dartmouth.png'
    },
    {
      team: 'Alabama',
      time: '2:30 PM',
      date: 'Jan 6',
      image: 'https://vucommodores.com/wp-content/uploads/2022/09/Alabama_Athletics_logo.svg_.png'
    },
    {
      team: 'LSU',
      time: '8:00 PM',
      date: 'Jan 9',
      image: 'https://vucommodores.com/wp-content/uploads/2019/08/LSU.png'
    },
    {
      team: 'Ole Miss',
      time: '12:00 PM',
      date: 'Jan 13',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Ole-Miss.png'
    },
    {
      team: 'Auburn',
      time: '8:00 PM',
      date: 'Jan 17',
      image: 'https://vucommodores.com/wp-content/uploads/2023/09/Auburn_Tigers_logo.png'
    },
    {
      team: 'Mississippi State',
      time: '2:30 PM',
      date: 'Jan 20',
      image: 'https://vucommodores.com/wp-content/uploads/2023/06/1280px-Mississippi_State_Bulldogs_logo.svg_.png'
    },
    {
      team: 'Tennessee',
      time: '5:00 PM',
      date: 'Jan 27',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Tennessee.png'
    },
    {
      team: 'Auburn',
      time: '8:00 PM',
      date: 'Jan 31',
      image: 'https://vucommodores.com/wp-content/uploads/2023/09/Auburn_Tigers_logo.png'
    },
    {
      team: 'Missouri',
      time: '2:30 PM',
      date: 'Feb 3',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Missouri.png'
    },
    {
      team: 'Kentucky',
      time: '7:30 PM',
      date: 'Feb 6',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Kentucky.png'
    },
    {
      team: 'South Carolina',
      time: '12:00 PM',
      date: 'Feb 10',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/South-Carolina.png'
    },
    {
      team: 'Texas A&M',
      time: '6:00 PM',
      date: 'Feb 13',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Texas-AM.png'
    },
    {
      team: 'Tennessee',
      time: '5:00 PM',
      date: 'Feb 17',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Tennessee.png'
    },
    {
      team: 'Georgia',
      time: '7:30 PM',
      date: 'Feb 21',
      image: 'https://vucommodores.com/wp-content/uploads/2021/09/Georgia-400x280-1.png'
    },
    {
      team: 'Florida',
      time: '12:00 PM',
      date: 'Feb 24',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Florida.png'
    },
    {
      team: 'Arkansas',
      time: '8:00 PM',
      date: 'Feb 27',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Arkansas.png'
    },
    {
      team: 'LSU',
      time: '2:30 PM',
      date: 'Mar 2',
      image: 'https://vucommodores.com/wp-content/uploads/2019/08/LSU.png'
    },
    {
      team: 'Kentucky',
      time: '8:00 PM',
      date: 'Mar 6',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Kentucky.png'
    },
    {
      team: 'Florida',
      time: '3:30 PM',
      date: 'Mar 9',
      image: 'https://vucommodores.com/wp-content/uploads/2021/07/Florida.png'
    },
  ];

// Find the next match
var nextMatch = null;
// Loop through the matches
for (var i = 0; i < matches.length; i++) {
  // Get the match date
  var matchMonth = monthNames.indexOf(matches[i].date.split(' ')[0]);
  var matchDay = parseInt(matches[i].date.split(' ')[1]);
  
  // Determine the year of the match
  var matchYear;
  if (matchMonth >= monthNames.indexOf("Nov")) {
    // If the match month is November or December, set the year to 2023
    matchYear = 2023;
  } else if (matchMonth <= monthNames.indexOf("Mar")) {
    // If the match month is January, February, or March, set the year to 2024
    matchYear = 2024;
  }

  var matchDate = new Date(matchYear, matchMonth, matchDay);

  // Compare the dates
  if (matchDate.getTime() > today.getTime()) {
    // This is a future match
    nextMatch = matches[i];
    break; // We found the next match, so we can stop the loop
  }
}

// From "Level 1 Task" of Challenege
// // Get a random match from the matches array
// var matchIndex = Math.floor(Math.random() * matches.length);
// // Get the match at the random index
// var match = matches[matchIndex];

// Define the headers, text, and image URLs for each button
var headers = ['Kaizen UX', 'Hints', 'Vanderbilt Basketball\'s Next Matchup'];
var texts = [
    'Kaizen UX is an A/B Testing and Optimization Agency. We execute large A/B testing, website optimization, and other digital marketing projects for high-traffic clients.', 
    'In this coding challenge, you may not submit an HTML file, so you\'ll want to set up your HTML in a string and use a function of Element called insertAdjacentHTML(). <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML">Learn more here.</a>',
    // From "Level 1 Task" of Challenege
    // 'Vanderbilt Basketball\'s next matchup is against ' + match.team + ' at ' + match.time + ' on ' + match.date + '.'
    'Vanderbilt Basketball\'s next matchup is against ' + nextMatch.team + ' at ' + nextMatch.time + ' on ' + nextMatch.date + '.'
  ];
var images = ['https://vucommodores.com/wp-content/uploads/2024/01/Screenshot-2024-01-11-at-3.03.33-PM-1024x530.png', 'https://vucommodores.com/wp-content/uploads/2024/01/DSC05578-1-1024x683.jpg'];

// Loop through the buttons
buttons.forEach(function(button, index) {

// Add event listeners for mouseenter and mouseleave events
btnPrimary.addEventListener('mouseenter', function() {
    this.classList.remove('inactive');
});

btnPrimary.addEventListener('mouseleave', function() {
    // Only add the inactive class back if the btn-secondary-cc button is clicked
    if (document.querySelector('.btn-secondary-cc').classList.contains('clicked')) {
        this.classList.add('inactive');
    } else if (document.querySelector('.btn-tertiary-cc').classList.contains('clicked')) {
        this.classList.add('inactive');
    }
});

// Add event listeners for click events
    button.addEventListener('click', function() {
        // Change the header and text in the middle-cc section
        buttons.forEach(function(button) {
            button.classList.remove('clicked');
        });

        // Add the active class to the clicked button
        button.classList.add('clicked');

// Add the inactive class to the primary button if the secondary or tertiary button is clicked
if (button.classList.contains('btn-secondary-cc') || button.classList.contains('btn-tertiary-cc')) {
    document.querySelector('.btn-primary-cc').classList.add('inactive');
} else {
    document.querySelector('.btn-primary-cc').classList.remove('inactive');
}
        header.textContent = headers[index];
        text.innerHTML = texts[index]; // Change textContent to innerHTML
        // Change the image in the right-cc column
        if (this.classList.contains('btn-tertiary-cc')) {
            image.src = nextMatch.image; // Assuming nextMatch is a globally accessible object
            // From "Level 1 Task" of Challenege
            // image.src = match.image; // Assuming match is a globally accessible object
        } else {
            image.src = images[index];
        }
    });
});