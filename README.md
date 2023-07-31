# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Solution](https://github.com/RicardoFuentes437/tip-calculator)
- Live Site URL: [Live Site](https://ricardofuentes437.github.io/tip-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass
- [React](https://reactjs.org/) - JS library

### What I learned

For this challenge i discovered other ways you can use the styles from a sass/css file, i had a little bit of trouble finding a way to make the buttons change style when selected AND have the hover property at the same time, so i used useState to specify which button was selected, if the "selected" variable had the same value as the button's id then it would change color, otherwise it would have the same style i already defined in the sass file, this is the part of the code that helped me do that:

```html
  <button onClick={handleTipChange} id="button-5" value={5} style={ selected === "button-5" ? selectedStyle : styles.button}>5%</button>
```
i didn't know you could use the "styles.button" to specify the styles that you had already defined on the sass/css file, so it was very helpful

### Continued development

i would like to keep discovering things that i didn't know about/didn't know i could do, it's really fun to find a new way to do something because most of the times they're also easier to implement.

## Author

- Github - [RicardoFuentes437](https://github.com/RicardoFuentes437)
- Frontend Mentor - [@RicardoFuentes437](https://www.frontendmentor.io/profile/RicardoFuentes437)

