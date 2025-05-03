## Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [EarthQuiz](https://llywelyn1282.github.io/earth-quiz/index.html)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

- Samsung A15
- iPad Pro
- Lenovo Ideapad S540

### Accessibility

Wave Accessibility tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in WCAG 2.1 Contrast Guidelines
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed
- Manual tests were also performed to ensure the website was accessible as possible and an accessibility issue was identified.

### Lighthouse Testing

#### __Home Page__

![Home](/assets/documentation/index-lighthouse.png)

#### __Contact Page__

![Contact](/assets/documentation/contact-lighthouse.png)

#### __404 Page__

![404](/assets/documentation/404-lighthouse.png)

### Testing User Stories

| Goals                 | How are they achieved? |
| --------------------- | ---------------------- | 
| “As a user of the site I want to be able to easily identify its purpose.” | Informative text on Home Page |
| “As a user of the site I want to be able to easily navigate the site and across different pages.” | Functioning Navbar |
| “As a user of the site I want to be able to test and improve my geography knowledge.” | Multiple quizzes |
| “As a user of the site I want to be able to see my score upon the completion of the quiz to be able to track my performance.” | Score counted and displayed upon completion of the quiz |
| “As a user of the site I want to be able to be able to easily locate the social media channels of the site to keep track of updates and other potential quizzes in the making.” | Social media links in the footer |
| “As a user of the site I want to be able to contact the makers of the site with any questions or compliments I might have.” | Contact Page with functioning form |
| “As a user of the site I would like to be able to play quizzes of varying difficulties.” | Three seperate quizzes of varying difficulties |
| “As an administrator for the site I want to be able to update the site and features quickly and easily.” | Tidily formatted and sectioned off code |


### Functional Testing

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|------------------|-------------------|--------|-----------|
| `Navbar` | | | | |
| Home Page Nav Link | Home Page Loads | Clicked on Link | Taken to Page | Pass |
| Contact Page Nav Link | Contact Page Loads | Clicked on Link | Taken to Page | Pass |
| `Footer` | | | | |
| Facebook Link | Opens Facebook in New Tab | Clicked on Link | Opens Facebook in New Tab | Pass |
| YouTube Link | Opens YouTube in New Tab | Clicked on Link | Opens YouTube in New Tab | Pass |
| Instagram Link | Opens Instagram in New Tab | Clicked on Link | Opens Instagram in New Tab | Pass |
| `Home Page` | | | | |
| Easy Button | Loads Easy Difficulty Quiz | Clicked on Button | Loads Easy Difficulty Quiz | Pass |
| Medium Button | Loads Medium Difficulty Quiz | Clicked on Button | Loads Medium Difficulty Quiz | Pass |
| Hard Button | Loads Hard Difficulty Quiz | Clicked on Button | Loads Hard Difficulty Quiz | Pass |
| Answer Button | Loads Next Question | Clicked on Button | Loads Next Question | Pass |
| Try Again Button | Takes User Back to Home Page | Clicked on Button | Takes User Back to Home Page | Pass |
| `Contact Page` | | | | |
| Send Button | Sends Form To Designated Address and Gives Succes Message | Clicked on Button | Sends Form To Designated Address and Gives Succes Message | Pass |
| `404 Page` | | | | |
| Back to Homepage Link | Takes User Back to Home Page | Clicked on Link | Takes User Back to Home Page | Pass |

### Validator Testing 

HTML
  - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org)

  ![Index HTML Validator Results](/assets/documentation/home-validation.png)

  ![Contact HTML Validator Results](/assets/documentation/contact-validation.png)

  ![404 HTML Validator Results](/assets/documentation/404-validation.png)

CSS
  - No errors were found when passing through the official [Jigsaw Validator](https://jigsaw.w3.org)
  
  ![CSS Validator Results](/assets/documentation/css-validation.png)

JavaScript
 - 11 warnings were found when passing through the official [JSLint Validator](https://www.jslint.com/), but luckily no errors. The warnings relate entirely to lines being over 8 characters and the code for the Fisher-Yates Algorithm which I borrowed from another page.
  
  ![JavaScript Validator Results 1](/assets/documentation/js-validation-1.png)

  ![JavaScript Validator Results 2](/assets/documentation/js-validation-2.png)



### Fixed Bugs

| Bug | Solution |
|------|-----------|
| Nav and Footer sitting off-center | Realised was styling the padding wrong, sending everything to the right unintentionally |
| Styling all inputs, instead of just contact inputs, messing up the quiz functionality | Being more precise with targetting elements |
| Only hard questions showing up when pressing any difficulty | Sorting out issues with mode with the help of a friend |
| Testing file not linked in README.md | Linked TESTING.md to README.md |
| Was able to enter blank forms | Added form validation |

### Unfixed Bugs

* No known bugs.

