# Zoho Show — Education Page

## Project Structure

```
zoho-show-edu/
├── index.html                  ← Main HTML entry point
├── README.md                   ← This file
└── assets/
    ├── css/
    │   └── style.css           ← All styles (desktop → mobile)
    ├── js/
    │   └── main.js             ← Interactivity (nav, accordion, scroll reveal)
    └── images/
        ├── common-elements.svg ← Sprite sheet (social icons, stores, search, email)
        ├── country-flags.png   ← Language selector globe icon
        ├── zs-webinar-banner.jpg
        ├── zs-testimonial-icon.svg
        └── profile-dots.webp
```

## Improvements Made

### 1. Folder / Code Structure
- Separated HTML, CSS, and JS into dedicated files
- All local images moved to `assets/images/`
- All paths updated accordingly

### 2. Responsive Layout (mobile-first breakpoints)
| Breakpoint | Layout |
|---|---|
| > 1024px | Full desktop nav with all links |
| 768–1024px | Compact nav, CTA button visible |
| < 768px | Hamburger menu, stacked sections |
| < 600px | Footer accordion, stacked banners |
| < 480px | Stacked CTA buttons, full-width inputs |
| < 360px | Smaller logo, tighter nav |

### 3. Working Functionality
- **Sticky navbar** — shadow appears on scroll
- **Hamburger menu** — open/close with animation, overlay, Escape key support
- **Footer accordion** — collapsible columns on mobile, auto-expand on desktop resize
- **Scroll reveal** — smooth IntersectionObserver fade-in animations
- **Smooth scroll** — anchor links scroll smoothly
- **Footer search** — keyboard (Enter) + button click support

### 4. Design Improvements
- Google Fonts (Outfit) for sharper, modern typography
- Floating animated badges on hero image
- Trust badge with avatar stack
- Improved CTA section with gradient background
- Quote styling in testimonial with open/close curly quotes
- Arrow icon on explore links with hover animation
- Hover scale effect on split-section images
- All typos fixed (Collabration → Collaboration, Presentaion → Presentation, HIPPA → HIPAA, etc.)
- Proper ARIA labels and semantic HTML5 throughout
