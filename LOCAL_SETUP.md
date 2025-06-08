# Local Development Setup for Luvan Cuadros y Arte

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
This will start the development server at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
This creates a `dist` folder with production-ready files.

### 4. Preview Production Build
```bash
npm run preview
```
This serves the production build locally for testing.

## Development Workflow

1. **Make Changes**: Edit files in the `src` folder
2. **See Changes**: The dev server automatically reloads when you save files
3. **Test**: Check your changes at `http://localhost:5173`
4. **Build**: Run `npm run build` when ready to deploy
5. **Deploy**: Upload the `dist` folder contents to your hosting provider

## File Structure
```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Home.tsx        # Homepage
│   ├── Catalog.tsx     # Product catalog
│   ├── Contact.tsx     # Contact page
│   └── ProductCard.tsx # Product card component
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment Options

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Making Changes

### To modify the design:
- Edit Tailwind classes in component files
- Modify `src/index.css` for global styles

### To add new products:
- Edit the `products` object in `src/components/Catalog.tsx`
- Add new categories to the `categories` array

### To update contact information:
- Edit `src/components/Contact.tsx`
- Update the `contactInfo` array

### To change the logo:
- Replace the Frame icon in `src/components/Navigation.tsx`
- Or add an image file and import it

## Tips
- Use the browser's developer tools to inspect and debug
- The site is fully responsive - test on different screen sizes
- All animations use Framer Motion for smooth transitions