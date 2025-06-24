# Kenneth Bui - Personal Website

A minimalist personal website built with SvelteKit, featuring a beautiful tan and sage green design with Libre Baskerville typography.

## 🎨 Design Features

- **Color Palette**: Tan background (#F5E6D3) with sage green (#8B9A46) accents
- **Typography**: Libre Baskerville serif font from Google Fonts
- **Layout**: Clean, minimalist design with responsive navigation
- **Sections**: Home, About, Blog, Books, Portfolio

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Header.svelte      # Navigation header
│   │   ├── Footer.svelte      # Site footer
│   │   └── BookCard.svelte    # Book display component
│   ├── data/
│   │   └── books.js           # Book data
│   └── styles/
│       └── global.css         # Global styles & Tailwind
├── routes/
│   ├── +layout.svelte         # Main layout
│   ├── +page.svelte           # Home page
│   ├── about/+page.svelte     # About page
│   ├── blog/+page.svelte      # Blog listing
│   ├── books/+page.svelte     # Book collection
│   └── portfolio/+page.svelte # Project portfolio
└── app.html                   # HTML template
```

## 🛠 Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS v3
- **Typography**: @tailwindcss/typography
- **Font**: Libre Baskerville (Google Fonts)
- **Build Tool**: Vite

## 🎯 Customization

### Update Personal Information

1. **Name & Bio**: Edit `src/routes/+page.svelte` and `src/lib/components/Header.svelte`
2. **About Content**: Update `src/routes/about/+page.svelte`
3. **Blog Posts**: Modify the posts array in `src/routes/blog/+page.svelte`
4. **Books**: Update `src/lib/data/books.js` with your reading list
5. **Projects**: Edit the projects array in `src/routes/portfolio/+page.svelte`
6. **Contact Info**: Update footer links in `src/lib/components/Footer.svelte`

### Styling Customization

The custom colors are defined in `tailwind.config.js`:

```javascript
colors: {
  tan: '#F5E6D3',      // Background color
  sage: '#8B9A46',     // Primary text/accent color
  'sage-dark': '#6B7534' // Hover states
}
```

### Adding Blog Posts

For individual blog posts, create new routes:
- `src/routes/blog/[slug]/+page.svelte`
- `src/routes/blog/[slug]/+page.js` (for markdown loading)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'build' folder to Netlify
```

### Static Hosting
Update `svelte.config.js` to use the static adapter:
```javascript
import adapter from '@sveltejs/adapter-static';
```

## 📝 Content Areas to Update

- [ ] Replace "Kenneth Bui" with your actual name
- [ ] Update personal description on home page
- [ ] Add real blog posts
- [ ] Update book collection with your reading list
- [ ] Add actual projects to portfolio
- [ ] Update contact links in footer
- [ ] Add your own project images to `/static/project-images/`
- [ ] Add book covers to `/static/book-covers/`

## 🎨 Design Philosophy

This website follows minimalist design principles:
- Clean typography with ample whitespace
- Subtle color palette inspired by nature
- Focus on content over decoration
- Responsive design that works on all devices
- Fast loading times with optimized assets

## 📄 License

This project is open source and available under the MIT License.
