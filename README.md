# DUPLOX - Portfolio Website

**Focus on profits, we'll handle presence.**

A modern, professional portfolio website for DUPLOX - a next-gen creative and media agency specializing in social media management, performance ads, and Shopify development.

## 🎨 Features

- **Modern Design**: Bold, creative design with a vibrant color scheme (Indigo, Amber, Pink)
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Comprehensive meta tags, OpenGraph, and semantic HTML
- **Performance**: Built with Next.js 15 for blazing-fast page loads
- **Animations**: Smooth Framer Motion animations for engaging user experience
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📄 Pages

1. **Home** - Hero section, services overview, process, results, featured work, clients, pricing preview, team
2. **Services** - Detailed service offerings and strategy philosophy
3. **Work** - Case studies with filterable categories
4. **Pricing** - Transparent pricing for Launch X and Scale X plans
5. **About** - Mission, process, and team information
6. **Contact** - Contact form and multiple contact channels

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Custom UI components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd /Users/aryanarvindsingh/Documents/duplox
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Update Contact Information

Edit the following files to add your actual contact details:

1. **Footer** (`components/footer.tsx`):
   - Update email: `hello@duplox.in`
   - Update phone: `+91 XXXXX XXXXX`
   - Add social media links

2. **Contact Page** (`app/contact/page.tsx`):
   - Update email, phone, and WhatsApp links
   - Configure form submission endpoint

### Update Content

All content is stored in the `data/` directory:

- `data/services.ts` - Service offerings
- `data/team.ts` - Team members
- `data/clients.ts` - Client logos
- `data/pricing.ts` - Pricing plans
- `data/process.ts` - Process steps
- `data/case-studies.ts` - Portfolio case studies

### Add Team Photos

Replace the placeholder User icons in team cards with actual photos:

1. Add images to `public/team/`
2. Update `data/team.ts` with image paths
3. Update the Team component to display images

### Add Client Logos

1. Add logo images to `public/clients/`
2. Update `data/clients.ts` with logo paths
3. Update the Clients component to display logos

### Color Scheme

The color scheme is defined in `app/globals.css`:

- **Primary**: Vibrant Indigo (#6366f1)
- **Secondary**: Energetic Amber (#f59e0b)
- **Accent**: Bold Pink (#ec4899)

You can customize these colors by editing the CSS custom properties.

## 📱 SEO & Meta Tags

SEO is configured in:
- `app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata

Update the following:
- Site URL: `https://duplox.in`
- OpenGraph images (add to `public/og/`)
- Twitter card information

## 🔧 Form Submission

The contact form currently has a simulated submission. To add real form handling:

1. **Option 1 - Email Service** (Recommended for MVP):
   - Use [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)
   - Create API route in `app/api/contact/route.ts`

2. **Option 2 - Form Service**:
   - Use [Formspree](https://formspree.io) or [Getform](https://getform.io)
   - Update form action in `app/contact/page.tsx`

3. **Option 3 - Custom Backend**:
   - Integrate with your own API endpoint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Environment Variables

No environment variables are required for the basic setup. Add them as needed for:
- Form submission services
- Analytics (Google Analytics, Plausible, etc.)
- CMS integration (if added later)

## 📊 Analytics

To add analytics:

1. **Google Analytics**:
   ```bash
   npm install @next/third-parties
   ```
   Add to `app/layout.tsx`

2. **Plausible** (Privacy-focused):
   Add script to `app/layout.tsx`

## 🎨 Design System

The design system uses:
- **Typography**: Geist Sans for body, Geist Mono for code
- **Spacing**: Tailwind's default spacing scale
- **Border Radius**: 8px (default), 12px (large), 16px (xl)
- **Shadows**: Layered shadows for depth
- **Animations**: Subtle transitions (200-300ms) and Framer Motion

## ♿ Accessibility

The website follows accessibility best practices:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast ratios (WCAG AA)
- Screen reader friendly

## 📝 License

This project is built for DUPLOX. All rights reserved.

## 🤝 Support

For questions or support:
- Email: hello@duplox.in
- Phone: +91 XXXXX XXXXX
- WhatsApp: [Add link]

---

Built with ❤️ by DUPLOX Team
