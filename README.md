# EarthQuiz

EarthQuiz was created as my second milestone project for the Code Institutes Level 5 Diploma in Web Application Development. 

Link to deployed site: (https://llywelyn1282.github.io/earth-quiz/)

![Welcome to EarthQuiz](/documentation/mockup.png) 


- - -

## CONTENTS

* [User Experience](#user-experience)
  * [Project Goals](#project-goals)
  * [Target Audience](#target-audience)
  * [User Stories](#user-story-1)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [Elements Found on Each Page](#elements-found-on-each-page)
  * [Future Implementations](#future-implementations)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Databases Used](#databases-used)
  * [Frameworks Used](#frameworks-used)
  * [Libraries & Packages Used](#libraries--packages-used)
  * [Programs Used](#programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Clone](#how-to-clone)
  
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)

- - -

## User Experience

### Project Goals
My project goals are to create a geography based quiz game which produces a score at the end.

### Target Audience
The target audience of the project are individuals of all ages who have an interesting in testing and improving their knowledge of geography.

### User Story 1
“As a user of the site I want to be able to easily identify its purpose.”

#### Acceptance Criteria
* Clear branding and simple explanations on the home page.

#### Tasks
* Create a navigation bar with an easily readable logo.
* Create a simple explanative introduction box before the quiz starts.

### User Story 2
“As a user of the site I want to be able to easily navigate the site and across different pages.”

#### Acceptance Criteria
* An easily readable and usable navigation bar.
* Simple and effective buttons to navigate through the quiz itself.

#### Tasks
* Create a navigation bar.
* Create clear buttons to answer questions and move through the quiz.

### User Story 3
“As a user of the site I want to be able to test and improve my geography knowledge.”

#### Acceptance Criteria
* Simply worded and engaging quiz questions.

#### Tasks
* Create a series of geography based quiz questions.

### User Story 4
“As a user of the site I want to be able to see my score upon the completion of the quiz to be able to track my performance.”

#### Acceptance Criteria
* Score total displayed on completion screen.

#### Tasks
* Create code which verifies the score, tallies it up and displays it in a simple and easy to read manner.

### User Story 5
“As a user of the site I want to be able to be able to easily locate the social media channels of the site to keep track of updates and other potential quizzes in the making.”

#### Acceptance Criteria
* Easily reachable social media channels linked to the site.

#### Tasks
* Create a footer which displays and links social media profiles.

### User Story 6
“As a user of the site I want to be able to contact the makers of the site with any questions or compliments I might have.”

#### Acceptance Criteria
* A valid method of users being able to contact the creators of this site.

#### Tasks
* Create a contact page with either contact details or a booking form.

### User Story 7
“As a user of the site I would like to be able to play quizzes of varying difficulties.”

#### Acceptance Criteria
* An easy, medium and hard quiz available for users to play.

#### Tasks
* Write multiple sets of quiz questions in varying difficulties.
* A simple menu to choose difficulty.
* Javascript functionality to summon different sets of question depending on that choice.

### User Story 8
“As an administrator for the site I want to be able to update the site and features quickly and easily.”

#### Acceptance Criteria
* Clearly labled and commented code for easy navigation when editing by myself or future users.

#### Tasks
* Keep an organised work space.
* Use comments to clearly sign and section off code.

- - -

## Design

### Colour Scheme

![Colour Scheme for EarthQuiz](/documentation/color-palette.png)

### Typography

I used Google Fonts to import the following fonts for use in the site:

##### Logo & Headings 

[Barrio](https://fonts.google.com/specimen/Barrio)

![Sample](/documentation/barrio.png)

##### Paragraphs 

[Inter](https://fonts.google.com/specimen/Inter)

![Sample](/documentation/inter.png)

##### Icons 

Icons were used from [Font Awesome](https://fontawesome.com/icons)

### Imagery

Favicon generated using [favicon.io](https://favicon.io/) 

![Favicon](/documentation/favicon.png)

### Wireframes

Wireframes were created for mobile and desktop using Balsamiq.

Home Page

![Home Page](/documentation/wireframes/wf-home.png)

Questions

![Questions](/documentation/wireframes/wf-questions.png)

End Message

![End Message](/documentation/wireframes/wf-complete.png)

Contact Page

![Contact Page](/documentation/wireframes/wf-contact.png)


## Features

The website is comprised of 3 pages:

* A Home Page
* A Contact Page
* A 404 Page

### Site Wide

__Navbar__
  
* Navbar styled to have right sided margin and burger icon on smaller devices. Contains links to Home and Contact.
  
  ![Navbar](/documentation/navbar.png)

__Footer__

* Footer containing social media links is displayed on all pages of the website. 

  ![Footer](/documentation/footer.png)

### Home Page

* A Home page displaying an introductionary section that leads to the quiz itself, the questions and the completion section.

![Home Page](/documentation/home-page.png)

### Contact Page

* A Contact page displaying an email address for 

![Contact Page](/documentation/contact-page.png)

### 404 Error Page

* A 404 page is in place to display if a user navigates to a broken link. The page has a link that allows users to navigate back to the homepage and automatically redirects back to the homepage after 10 seconds.

![404 Error Page](/documentation/404.png)

### Future Implementations

In future implementations I would like to:

* Include the ability to log user names and scores.
* Create a function for users to be able to post their score to social media, driving up engagement.
* Offer a wider variety of quizzes.



- - -

## Technologies Used

### Languages Used

HTML
   
 * The structure of the Website was developed using HTML as the main language.

CSS
   
 * The Website was styled using custom CSS in an external file.

JavaScript
   
 * The Website was scripted using JavaScript in an external file.


### Programs Used

[Balsamiq](https://balsamiq.com/) - Used to create wireframes.

[EmailJS](https://www.emailjs.com/) - 

[Github](https://github.com/) - To save and store the files for the website.

[Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

[Favicon.io](https://favicon.io/favicon-converter/) - To create the favicon files.

[Font Awesome](https://fontawesome.com/)  - For the icons on the website.

[Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - To troubleshoot and test features, solve issues with responsiveness and styling.

[Am I Responsive?](http://ami.responsivedesign.is/) - To show the website image on a range of devices.


- - -

## Deployment & Local Development

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully. 

The live link can be found here - (https://llywelyn1282.github.io/earth-quiz/)

#### How to Clone

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now of been cloned on your local machine for use.


- - -


## Credits

Quiz making tutorial I followed to learn the javascript functionality needed:
https://archive.org/details/50-projects-in-50-days-html-css-java-script_202207/47+Day+46+-+Quiz+App/147+Project+Intro.mp4

Quiz making tutorial I followed to learn the javascript functionality needed:
https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack

Stackoverflow questions page used to learn how to pin header and footer to the top and bottom of the page respectively:
https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b

Where I found the confetti npm package:
https://www.npmjs.com/package/canvas-confetti

Page on randomising arrays where I found the Fisher-Yates Sorting Algorithm:
https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/

Also thanks to Gareth McGirr, Alice Dean and Nick Le Mesurier for their additional advice and assistance.

### Content

Content for this project was written by Gwilym Llywelyn.

### Media

High score image found on Unsplash and taken by Ian Stauffer:
https://unsplash.com/photos/man-sitting-on-mountain-cliff-facing-white-clouds-rising-one-hand-at-golden-hour-bH7kZ0yazB0

Mid score image found on Unsplash and taken by Jeremy Wilkinson:
https://unsplash.com/photos/a-cat-laying-on-top-of-a-leather-chair-2YVzSo7oSMw

Low score image found on Unsplash and taken by Ali Jouyandeh:
https://unsplash.com/photos/man-in-white-dress-shirt-sitting-on-couch-W5f2832To9o