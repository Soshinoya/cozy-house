# Cozy House - Pet Shelter Website

A fully responsive React application for a pet shelter, built with modern web technologies and best practices.

## 🚀 Tech Stack

- **React 18+** - Modern React with functional components and hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v7** - Client-side routing with data mode
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── UI/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── PetCard.tsx
│   │   ├── Layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Layout.tsx
│   │   └── Sections/        # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── OurFriends.tsx
│   │       ├── HowYouCanHelp.tsx
│   │       └── Donation.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── Pets.tsx
│   │   ├── Help.tsx
│   │   └── Contacts.tsx
│   ├── routes.tsx           # Router configuration
│   └── App.tsx              # Main app component
├── hooks/                   # Custom React hooks
│   └── useScrollToTop.ts
├── utils/                   # Helper functions
│   └── helpers.ts
├── types/                   # TypeScript type definitions
│   └── index.ts
├── imports/                 # Figma assets
│   └── Frame1/              # Imported images and SVGs
└── styles/                  # Global styles
    ├── index.css
    ├── theme.css
    ├── variables.css
    ├── tailwind.css
    └── fonts.css
```

## 🎨 Design System

### Color Palette

- **Primary Light**: `#f1cdb3` - Warm beige for buttons and accents
- **Primary Dark**: `#292929` - Dark gray for text and backgrounds
- **Text Dark**: `#545454` - Medium gray for body text
- **Text Light**: `#cdcdcd` - Light gray for secondary text
- **Background Light**: `#fafafa` - Off-white for cards
- **Background Gray**: `#f6f6f6` - Light gray for sections

### Typography

- **Primary Font**: Georgia (serif) - Used for headings and important text
- **Secondary Font**: Arial (sans-serif) - Used for body text

### Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1441px+

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd cozy-house
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Start development server
```bash
npm run dev
# or
pnpm dev
```

4. Build for production
```bash
npm run build
# or
pnpm build
```

## 📱 Features

### Implemented Pages

1. **Home Page**
   - Hero section with call-to-action
   - About the shelter information
   - Featured pets carousel
   - How you can help section
   - Donation information

2. **Our Pets**
   - Grid display of all available pets
   - Pagination controls
   - Pet detail cards
   - Responsive layout

3. **Help the Shelter**
   - Ways to contribute
   - Donation options
   - Support information

4. **Contacts**
   - Contact information
   - Location details
   - Opening hours
   - Interactive contact cards

### Key Features

- ✅ Fully responsive design (mobile-first approach)
- ✅ Type-safe with TypeScript
- ✅ Component-based architecture
- ✅ Client-side routing
- ✅ Smooth page transitions
- ✅ Accessible navigation
- ✅ SEO-friendly structure
- ✅ Performance optimized
- ✅ Clean, maintainable code

## 🧩 Component Architecture

### UI Components

- **Button** - Reusable button with variants (primary, secondary, outline)
- **Card** - Generic card container with hover effects
- **PetCard** - Specialized card for displaying pet information

### Layout Components

- **Header** - Responsive navigation with mobile menu
- **Footer** - Contact information and links
- **Container** - Wrapper for consistent page margins
- **Layout** - Main layout wrapper with header and footer

### Section Components

- **Hero** - Landing page hero section
- **About** - Shelter information section
- **OurFriends** - Featured pets display
- **HowYouCanHelp** - Support options
- **Donation** - Donation information

## 🎯 Code Quality

### Best Practices

- TypeScript interfaces for type safety
- Reusable components following DRY principle
- Consistent naming conventions (PascalCase for components)
- Clean code with proper comments
- Separation of concerns
- No inline styles (all styling via Tailwind CSS)
- Accessibility considerations (ARIA labels, semantic HTML)

### Performance Optimizations

- Lazy loading for images
- Optimized component structure
- Efficient re-rendering
- Code splitting with React Router
- Smooth animations and transitions

## 🔧 Customization

### Modifying Colors

Update the CSS variables in `/src/styles/variables.css`:

```css
:root {
  --color-primary-light: #f1cdb3;
  --color-primary-dark: #292929;
  /* ... other colors */
}
```

### Adding New Pages

1. Create page component in `/src/app/pages/`
2. Add route in `/src/app/routes.tsx`
3. Add navigation link in `/src/app/components/Layout/Header.tsx`

### Adding New Components

1. Create component in appropriate directory
2. Export from component file
3. Import where needed
4. Follow existing component patterns

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to use it as a template for your own projects!

## 📞 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
