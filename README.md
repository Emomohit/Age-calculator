# Age Calculator OS
A massive 100+ feature Life Analytics Dashboard built for the modern web.

## Live Demo
🚀 **[View Live on Vercel](https://age-calculator-omega-sable.vercel.app)**

## Overview
Age Calculator OS is not just a tool to find your age; it's a comprehensive bio-chronological engine. Built with vanilla JavaScript for maximum performance and zero dependencies (aside from Flatpickr for the calendar UI), this dashboard calculates over 100 metrics related to a user's lifespan in real-time.

## Tech Stack
- **Frontend**: HTML5, CSS3 (CSS Variables, CSS Grid, Flexbox), Vanilla JavaScript (ES6+).
- **Libraries**: [Flatpickr](https://flatpickr.js.org/) (for optimized date selection).
- **Hosting**: Vercel Serverless Edge Network.

## Key Features
- **Core Chronology**: Exact seconds, minutes, hours, and days lived.
- **Biological Estimates**: Algorithmic estimations of heartbeats, breaths, hair growth, and sleep cycles.
- **Cosmic Age**: Relativistic age mapping across the entire Solar System (Mars, Jupiter, Venus, etc.).
- **Identity & Lore**: Full Astrological profiling including Western Zodiac, Chinese Zodiac, Ruling Elements (Fire/Earth/Air/Water), Ruling Planets, Core Traits, and Lucky Colors.
- **Milestones**: Tracking for major life events like reaching 10,000 days or 1 billion seconds old.

## Installation for Local Development
1. Clone the repository: `git clone https://github.com/Emomohit/Age-calculator.git`
2. Open the directory: `cd Age-calculator`
3. Serve locally: You can simply open `index.html` in any modern web browser, or use a live server extension.

## Architecture
The application uses a monolithic JavaScript controller (`calculateAll()`) triggered by the Flatpickr `onChange` event. The DOM is mutated dynamically using a highly optimized template literal engine that maps over internal data structures (arrays for Zodiacs, objects for Planetary constants) to generate the 100+ metric cards efficiently.

## License
MIT License. Feel free to use and modify for personal projects.