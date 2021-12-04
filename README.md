# The Jet Reds website

This website was created as a first portfolio project for Code Institute's Diploma in Web Application Development. The Jet Reds are a real band but, with their permission, I have created this website as I have an interest in and actively follow the band.

The website can be [found here](https://fatheed7.github.io/the-jet-reds/).

## Table of Contents

- [UX and UI](#ux-and-ui)
  - [Site Owner Goals](#site-owner-goals)
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
- [Design](#design)
- [Features](#features)
  - [Header](#header)
  - [Carousel](#carousel)
  - [All Sections](#all-sections)
  - [About Section](#about-section)
  - [Media Section](#media-section)
  - [Events Section](#events-section)
  - [Contact Section](#contact-section)
  - [Footer](#footer)
- [Deployment](#deployment)
- [Testing](#testing)
- [Credits](#credits)
  - [Languages](#languages)
  - [Frameworks, Libraries and Tools](#frameworks-libraries-and-tools)
  - [Images](#images)
- [Content](#content)

## UX and UI

#

- ### Site Owner Goals

  The goal of the site for the owner is to:

  1. Keep fans up to date with the bands latest releases.
  2. Provide some background information about the band, and the type of music they play.
  3. Make fans aware of any upcoming events, including venue, date and time.

- ### User Stories

  - #### First Time Visitor Goals

    1. As a first time user, I want to easily understand the type of music played by the band.
    2. As a first time user, I want to be able to easily navigate around the site to find the content I'm looking for.
    3. As a first time user, I'd like to see reviews, to see the opinions of others about the band.

  - #### Returning Visitor Goals

    1. As a returning visitor, I want to find information about any new releases by the band.
    2. As a returning visitor, I want to easily find information about any upcoming shows.
    3. As a returning visitor, I want to find the best way to follow the band on social media.

  - #### Commercial Visitor Goals

    1. As a commercial visitor, I want to easily contact the band with any booking enquiries.

  ## Wireframes

  The wireframes for this site were created using Balasmiq, with each section and subsection noted. I endeavoured to create a single page website and, as such, wireframes are available for desktop view, tablet view and mobile view.

  The first section below shows all views together, with the second second making individual views available.

  <details>
  <summary>Collective Wireframe Image(Desktop, Tablet & Mobile)</summary>
  </details>

  <details>
  <summary>Individual Wireframe Images</summary>
  </details>

## Design

#

## Features

#

- ## Header

  - The Navbar has a fixed position at the head of the page which sits above all other content. This was chosen over a sticky position mainly for browers compatibility, but it's function does not vary in any significant way to a fixed position.
  - To ensure the content sat below the header, a margin was added to the top of the page. More information about this can be found in the [Bugs](#bugs) section.

  #

  - The Navbar was coloured using the Bootstrap 'Danger' colour which was used due to the red colour which is relevant to the bands' name.

  #

  - The logo was provided by The Jet Reds and, due to the unique font used, was retained in an image format, with CSS added to alter size as required. The logo is also a hyperlink which returns the user to the top of the website.

  #

  - The Navbar contains links to other section on the website. They are designed to be displayed as clickable links, changing to a brighter shade of white when hovered over. The displayed links disappear on screens with a resolution width below 768 pixels and are replaced with a hamburger menu.

#

- ## Carousel

  - Rather than using a static hero image, I opted to add a carousel below the header which automatically rotates after a set amount of time has elapsed, but also features controls on either side to allow navigation between images.

  #

  - A div has been placed at the foot of the carousel containing real reviews of the band. The div has been coloured black with an opacity of 0.7. This has been done to contrast against the bright background of the images, but also to also some visibility so the full image can still be seen.

  #

  - The div containing the reviews is automatically hidden for screens with a resultion width below 768 pixels to allow full visibility of the images.

#

- ## All Sections

- All sections begin with a shadow applied to the Section tag itself, which is replicated throughout the site. This effect was added to give the appearance of each section of the website being layered on top of the section below it, and to add some seperation between sections, instead of an immediate colour change.

  #

- The header of the each section is made up of several elements which make it appear to be protruding from the section above.

  - The About section colour has been set to light gray with an opacity of 0.7. This has been done to contrast the white background, but also allows visibility of the shadow from the section element, making it appear as if a seperate shadow is being cast on the header.
  - The colour of all other sections have been set to white gray with an opacity of 0.9. This has been done to contrast the grey background or the blacka and white image of the event section, but also allows visibility of the shadow from the section element, making it appear as if a seperate shadow is being cast on the header.
  - A border radius of 50% has been applied to the bottom left and right corners of the header, giving it a curved appearance.
  - A further shadow has been applied to the header to accentuate it and make it apparent that this sits below the preceding section, but above the content below.

#

- ## About Section

  - The main feature of the About section is an image of vocalist Craig Redpath. This image has been set as the background of the middle column and centered, with a padding of 50% applied to the top of the image. This has been done to ensure the content remains in the center of the page, with any overlap hidden. The image used is actually larger in size to allow some flexibility, with more or less of the image being shown depending on device type.

  #

  - To the left of the About section image is information the members of the band. This section has had a border radius of 10% applied, with a border of 2 pixels being applied to the right side, to give an appearance similar to a bracket, but also to highlight the edge of the section at lower resolutions.

  #

  - To the right of the About section image is information about the band, the type of music they play, their inspirations and some additional information about the band members. This section has also had a border radius of 10% applied, with a border of 2 pixels being applied to the left side, to give an appearance similar to a bracket, but also to highlight the edge of the section at lower resolutions.

  #

  - Below a screen resolution width of 992 pixels the image in the center of the About section is hidden, with the remaining sections displayed side by side.

  #

  - Below a screen resolution width of 768 pixels the image in the center of the About section remains hidden, with the remaining sections stacked on top of each other.

#

- ## Media Section

  - The Media section is made up of two subsections detailing the latest single and album releases by the band. Both sections have been given the same white background colour as the header, but with a slightly lower opacity of 0.7. This differentiates them from the header slightly, but still offsets them easily against the grey background.

  #

  - The 'Latest Single Info' section contains the single artwork on the left side, with text information about the single on the right. The image remains centered within the left column until the resolution width is below 768 pixels, at which point the image moves to the top of the section and the text information is displayed below.

  #

  - The 'Latest Album Info' section contains the album artwork on the right side, with text information about the album on the left. The image remains centered within the right column until the resolution width is below 768 pixels. At this point the original image is hidden, and a new image appears at the top of the section, with the text information displayed below.

#

- ## Events Section

  - The Events section has a background of guitarist Dan Richards on the left, with vocalist Craig Redpath on the right wearing a guitar strap showing the bands name. This has been set with a fixed position so different parts of the image are shown as the user scrolls down the page. This also contrasts against the rest of the website which has fixed colours.

  #

  - The main feature of the Events section are the five divs containing information for venues, locations, dates and times of upcoming events, although they are all fictional. A margin of 2 pixels was applied to each div to space each event slightly apart from eachother and avoid having a large block of colour in the center of the page.

  #

  - The background of the Events section has been set to White with an opacity of 0.9 to make the content stand out from the black and white image behind and to ensure readability of the content.

#

- ## Contact Section

  - The contact section features a form asking for four bits of information - Name, email address, the reason for contact and any further information the user wishes to provide.

  #

  - The form was set to require all fields to be completed as the 'Reason of Contact' options have been left intentionally vague to prompt the user to submit information.

  #

  - Both the Submit and Reset buttons were set to bright colours as a call to action to the user, but also to match with the original carousel image displayed when the page is loaded which contains those bright colours prominently.
  - A small amount of Javascript was written to remove the default function of the Submit button and replace it with a modal response.
  - The form has been designed in an appropriate manner with the required information and name tags applied, but does not submit the information, or display another page. Instead, a modal is displayed thanking the user for their contact and advising a response will be received soon, with two seperate buttons available to close the modal.

#

- ## Footer

  - The Footer is made of three seperate sections.

    - On the far left a link is displayed which, when clicked, will return the user to the top of the page.
    - In the center, three Font Awesome icons are displayed linking to the Facebook, Twitter and Instagram profiles for the band. All links open in a new tab.
    - On the far left is a text statement containing the phrase "It goes On & On" which is a slogan used by the band.

  #

  - The Navbar was coloured using the Bootstrap 'Danger' colour which was used due to the red colour which is relevant to the bands' name and to match the colour of the Navbar.

#

## Deployment

#

The site was created using Visual Studio Code and GitHub, and deployed to GitHub pages for testing using the below process:

    i. Navigate to the repository on GitHub.com
    ii. Select 'Settings' from the navigation bar near the top of the page.
    iii. Select 'Pages' from the sidebar on the left of the page.
    iv. Under the 'Sources' heading, select the 'Branch' dropdown menu and select the main branch.
    v. Once selected, click the 'Save' button to the right of the dropdown menu.
    vi. Deployment should be confirmed by a message on a green background - The message should have a green tick mark followed by "Your site is published at" followed by the web address.
    vii. Confirm deployment by navigating to the displayed web address.

## Testing

#

## Credits

#

- ## Languages

  #

  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS](https://en.wikipedia.org/wiki/CSS)
  - [Javascript](https://en.wikipedia.org/wiki/JavaScript)

- ## Frameworks, Libraries and Tools

  #

  - [Am I Responsive](http://ami.responsivedesign.is/) - Used to verify responsiveness of website on different devices.
  - [Balsamiq](https://balsamiq.com/) - Used to generate Wireframe images.
  - [Bootstrap](https://getbootstrap.com/) - Main framework used for the site, with a focus on responsiveness.
  - [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - Used for overall development and tweaking, including testing responsiveness and performance.
  - [Favicon.io](https://favicon.io) - Used to generate Favicon image.
  - [Font Awesome](https://fontawesome.com/) - Used for Social Media icons in footer.
  - [GitHub](https://github.com/) - Used for version control and hosting.
  - [Google Fonts](https://fonts.google.com/) - Used to import and alter fonts on the page.
  - [JQuery](https://en.wikipedia.org/wiki/JQuery) - Used to override default submit functionality and display modal instead.
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Used for consistent code formatting
  - [Slack](https://slack.com/) - Used for support and advice from the Code Insitute Community.
  - [Visual Studio Code](https://code.visualstudio.com/) - Application used for development of this site.

- ## Images

  #

  - [The Jet Reds](https://www.thejetreds.co.uk/)

    - The Jet Reds Logo
    - Album Artwork
    - Single Artwork

  #

  - [Sop Rodchenvko](https://www.soprodchenvko.com/)

    - About Section Image
    - Event Section Background

  #

  - [Dave Thompson Imaging](https://www.facebook.com/DaveThompsonImaging)

    - Carousel Images

  #

- ## Content

  #

  - As this site is based on a real band, some content on this site is based on content from the band, with permission. The content used is as follows:

    - The non-photographic content displayed is taken from the band themselves and is the artwork used on their single and album releases.
    - All photos are real photographs of the band. Details of the photographers is listed in the [Images](#images) section.
    - The text content of the 'What We Do', 'Latest Single' & Latest Album' sections are descriptions written by the band themselves and are featured on [the bands website](https://www.thejetreds.co.uk/).

  - The gig venues listed in the Events section are all real venues, but the dates and times of the events are all fictional.
