# 🎨 Ritesh Kharal's Portfolio

A modern, interactive portfolio website showcasing my journey as a 15-year-old full-stack developer. Built with cutting-edge web technologies and featuring a unique Pac-Man inspired game section.

## ✨ Features

### 🏠 Main Portfolio
- **Clean Introduction**: Personal introduction with location (Lumbini, Nepal) and professional summary
- **Social Integration**: Direct links to LinkedIn, GitHub, and email contact
- **Responsive Design**: Optimized for all device sizes with smooth animations

### 🚀 Skills Showcase
- **Interactive Toggle**: Switch between Skills and Projects sections
- **Tech Stack Display**:
  - Frontend: React, Next.js, TailwindCSS
  - Design: UI/UX, Figma
  - Tools: Git, VS Code
  - Backend: Node.js
- **Animated Skill Tags**: Hover effects with color-coded technology indicators

### 💼 Projects Gallery
- **Project Cards**: Visual project showcase with hover animations
- **Detailed Modals**: Click to view full project descriptions, tech stacks, and links
- **Live Demos**: Direct links to deployed applications
- **GitHub Integration**: Source code access for all projects

### 🎮 Fun Zone - Pac-Man Game
- **Interactive Maze**: Navigate Pac-Man through a custom-designed maze
- **Special Power-Ups**:
  - 🟢 **Green Orbs**: Reveal personal "About" information
  - 🟣 **Purple Orbs**: Showcase project portfolio
- **Game Mechanics**:
  - Avoid colorful ghosts (red, blue, orange, pink)
  - Collect food pellets for points
  - Lives system with game over/restart
  - Keyboard controls (Arrow keys or WASD)
- **Score Tracking**: Real-time scoring system
- **Responsive Canvas**: Adapts to different screen sizes

### 🌙 Theme System
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **System Preference**: Automatically detects and applies user's system theme
- **Persistent Settings**: Theme choice saved across sessions

### 🎭 Visual Effects
- **Falling Flames Background**: Animated particle system creating ambient atmosphere
- **Mouse Follower Gradient**: Dynamic background gradient following cursor movement
- **Smooth Animations**: CSS transitions and transforms throughout
- **Glass Morphism**: Backdrop blur effects for modern UI aesthetics

### 📱 User Experience
- **Loading Screen**: Elegant loading animation on initial visit
- **Scroll Indicators**: Smooth scroll-to-bottom functionality
- **Fixed Social Links**: Always-accessible contact buttons with hover effects
- **Keyboard Navigation**: Full keyboard accessibility support

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Frontend**: React 19, TypeScript
- **Styling**: TailwindCSS 4, Styled Components
- **Theming**: next-themes
- **Icons**: React Icons
- **Fonts**: Google Fonts (Lilita One, Smooch Sans, Josefin Sans)
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/RiteshKharal/Portfolio-Files.git
   cd Portfolio-Files/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── BackgroundAnimation.jsx    # Falling flames effect
│   │   ├── Loading.jsx                # Initial loading screen
│   │   ├── MouseFollower.tsx          # Cursor gradient effect
│   │   ├── ProjectsCard.jsx           # Project display components
│   │   ├── ScrollDownIndicator.jsx    # Bottom scroll button
│   │   ├── Slider.jsx                 # Skills/Projects toggle
│   │   └── ThemeToggle.tsx            # Dark/light mode switch
│   ├── Game/                          # Pac-Man game section
│   │   ├── Game.jsx                   # Main game logic
│   │   ├── page.tsx                   # Game page
│   │   └── funcomponents/
│   │       └── FunCard.jsx            # Game modal components
│   ├── fonts.ts                       # Font configurations
│   ├── globals.css                    # Global styles
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Main portfolio page
├── public/                            # Static assets
└── package.json                       # Dependencies
```

## 🎯 Game Controls

- **Movement**: Arrow Keys or WASD
- **Objective**: Collect all food pellets while avoiding ghosts
- **Special Items**:
  - Green orbs = About information
  - Purple orbs = Project showcase
- **Scoring**: 10 points per food, 50 points per special orb

## 🌐 Live Demo

Visit the live portfolio at: [riteshkharal.vercel.app](https://riteshkharal.vercel.app/)

## 📧 Contact

- **Email**: kharalritesh@gmail.com
- **LinkedIn**: [Ritesh Kharal](https://www.linkedin.com/in/ritesh-kharal-1a8269377/)
- **GitHub**: [RiteshKharal](https://github.com/RiteshKharal)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Ritesh Kharal*
