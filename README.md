# Ekansh Rastogi - Personal Portfolio

A modern, dark-themed personal portfolio website showcasing Ekansh Rastogi's achievements, experiences, and projects.

## Features

- **Modern Dark Theme**: Dark background with gradient accents in blue, pink, purple, and orange
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Elegant scroll animations and transitions
- **Image Placeholders**: Ready-to-replace placeholders for images and videos
- **Multiple Sections**:
  - Hero section with introduction
  - About section with essays (Robotics, Cooking)
  - Cricket & Sports section
  - Hive section
  - Other Projects section

## File Structure

```
ekanshPortfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in a web browser
2. That's it! No build process needed - it's pure HTML, CSS, and JavaScript

## Customization

### Adding Images/Videos

Replace the image placeholders by:
1. Adding your images to an `images/` folder
2. Updating the `<div class="image-placeholder">` elements in `index.html` with actual `<img>` or `<video>` tags

Example:
```html
<!-- Before -->
<div class="image-placeholder">
    <span>📷</span>
    <p>Image Placeholder</p>
</div>

<!-- After -->
<img src="images/your-image.jpg" alt="Description" class="image-placeholder">
```

### Color Scheme

Colors can be customized in `styles.css` by modifying the CSS variables in the `:root` selector:
- `--blue`: Blue accent color
- `--pink`: Pink accent color
- `--purple`: Purple accent color
- `--orange`: Orange accent color

### Content Updates

Simply edit the content in `index.html` to update any text, add new sections, or modify existing content.

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Grid/Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)

## License

© 2024 Ekansh Rastogi. All rights reserved.

