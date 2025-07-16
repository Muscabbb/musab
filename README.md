# Musab's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing my skills as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 15 for optimal performance
- **Accessibility**: Follows accessibility best practices
- **SEO Optimized**: Proper meta tags and structured data
- **Component-Based**: Reusable components with shadcn/ui
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Tools & Libraries
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Conditional classes

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero section
│       ├── About.tsx      # About section
│       ├── Skills.tsx     # Skills showcase
│       ├── Projects.tsx   # Projects portfolio
│       ├── Experience.tsx # Work experience
│       └── Contact.tsx    # Contact form
├── data/
│   └── portfolio.ts       # Portfolio data
├── types/
│   └── index.ts           # TypeScript types
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Sections

1. **Hero** - Introduction with call-to-action
2. **About** - Personal information and highlights
3. **Skills** - Technical skills categorized by:
   - Frontend Development
   - Backend Development
   - Full Stack & Tools
4. **Projects** - Featured and other projects
5. **Experience** - Work experience and education
6. **Contact** - Contact form and information

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd musab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update your personal information in `src/data/portfolio.ts`:
- Personal details
- Skills and proficiency levels
- Projects and descriptions
- Work experience
- Contact information

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Tailwind CSS classes
- Theme customization: `tailwind.config.js`

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Add the component to `src/app/page.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: musab@example.com
- **LinkedIn**: [linkedin.com/in/musab](https://linkedin.com/in/musab)
- **GitHub**: [github.com/musab](https://github.com/musab)

---

Built with ❤️ by Musab using Next.js and Tailwind CSS
