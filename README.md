# Ekansh Rastogi - Personal Portfolio (React)

A modern, dark-themed personal portfolio website built with React, showcasing Ekansh Rastogi's achievements, experiences, and projects.

## Features

- **React.js**: Built with React 18 and modern React patterns
- **Modern Dark Theme**: Dark background with gradient accents in blue, pink, purple, and orange
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Fixed Overlay Issues**: Proper z-index management for all sections
- **Component-Based**: Clean, modular React components
- **Image Placeholders**: Ready-to-replace placeholders for images and videos

## Sections

1. **Hero**: Introduction with name and subtitle
2. **Hive**: Work and experiences at Hive
3. **Cricket**: Cricket achievements and captaincy story
4. **Personal Projects**: Showcase of projects
5. **Things I Like To Do**: Interests including Cooking and Robotics
6. **What You Should Know About Me**: Personal values and aspirations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
ekanshPortfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Hive.jsx        # Hive section
│   │   ├── Cricket.jsx     # Cricket section
│   │   ├── Projects.jsx    # Projects section
│   │   ├── Interests.jsx   # Interests section
│   │   ├── About.jsx       # About section
│   │   ├── Footer.jsx      # Footer component
│   │   └── ScrollAnimation.jsx  # Scroll animation wrapper
│   ├── App.js              # Main App component
│   ├── App.css             # Main styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Customization

### Adding Images/Videos

Replace the image placeholders by:
1. Adding your images to `public/images/`
2. Updating the placeholder components with actual `<img>` or `<video>` tags

### Color Scheme

Colors can be customized in `src/App.css` by modifying the CSS variables:
- `--blue`: Blue accent color
- `--pink`: Pink accent color
- `--purple`: Purple accent color
- `--orange`: Orange accent color

## Technologies Used

- React 18.2.0
- CSS3 (with CSS Variables and Grid/Flexbox)
- React Scripts (Create React App)

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

© 2024 Ekansh Rastogi. All rights reserved.
