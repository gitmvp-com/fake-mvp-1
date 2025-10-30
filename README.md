# Fake MVP 1

A modern, minimal MVP built with **Next.js**, **TypeScript**, **Tailwind CSS**, featuring:

✨ **Features**
- 🔐 Fake Authentication (Mock login system)
- 📊 Fake User Dashboard (Mock data)
- 🌓 Dark Mode Support (with system preference detection)
- 🎨 Modern UI with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 🛡️ Full TypeScript support
- 📱 Fully responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gitmvp-com/fake-mvp-1.git
cd fake-mvp-1

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with dark mode
│   ├── page.tsx            # Home page
│   ├── auth/
│   │   ├── login/
│   │   ├── signup/
│   │   └── callback/
│   ├── dashboard/
│   │   └── page.tsx        # Fake user dashboard
│   └── api/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ThemeToggle.tsx
├── contexts/
│   └── ThemeContext.tsx     # Dark mode context
├── types/
│   └── index.ts            # TypeScript types
└── utils/
    ├── mockAuth.ts         # Fake auth utilities
    └── mockData.ts         # Mock user data
```

## 🎯 Features Explained

### Fake Authentication
- Mock login/signup forms with client-side validation
- No backend required - uses localStorage for session management
- Protected dashboard pages (client-side protection)

### Dark Mode
- Uses Tailwind CSS class-based dark mode
- Respects system preference on first visit
- Persistent toggle in navigation
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Fully responsive layouts
- Touch-friendly navigation

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 12.4.3
- **UI Components:** Headless UI, Lucide React Icons
- **Other:** React 19.0.0

## 📝 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Linting
npm run lint
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.ts` to customize colors:
- Primary: Violet (#A78BFA)
- Accent: Sky Blue (#38BDF8)
- Danger: Red (#DC2626)

### Dark Mode
Toggle is available in the navigation bar. Your preference is saved to localStorage.

## 📄 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

Feel free to fork and submit pull requests!

---

**Built with 🔥 by GitMVP**