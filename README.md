# Sonautic UI

A beautiful, modern UI showcase for Sonautic - an enterprise learning platform for music schools, conservatoires, and universities.

## Overview

This is a **UI-only showcase** built with Next.js, React, and Tailwind CSS. No backend functionality is implemented - it's purely for visual demonstration.

## Features Implemented

### ✅ Design System
- **Liquid Glass Aesthetic**: Subtle glassmorphism with blurred backgrounds, soft highlights, and rounded corners
- **Apple-inspired**: Clean, spacious layouts with consistent typography and iconography
- **Dark Theme**: Beautiful gradient background with translucent UI elements

### ✅ Sonny AI Chat Interface
- Custom whale animation for voice mode (replaces generic OpenAI circle)
- Quick action buttons: Analyze, Summarize, Create Plan, Set Task, Add to Calendar
- Mic module with recording indicator, level meter, and timer
- Clean message bubbles with glass morphism

### ✅ Student Homepage
- Stats cards: "6 assignments due", "5 events tomorrow"
- Countdown card: "Competition in 14 days"
- 7-day practice stats bar chart (randomized mock data)
- Events timeline with color-coded event types (lesson, competition, audition, masterclass, concert)
- Recent submissions list

### ✅ Educator Homepage
- Stats cards: "6 submissions to review", "3 assignments to set", "5 lessons tomorrow"
- Countdown card: "Competition in 14 days"
- Student deadlines timeline with priority indicators
- Recent reviews and upcoming lessons

### ✅ Files Tab
- Apple-native design with clean hierarchy
- Large tappable rows for files
- Folder organization
- Search functionality UI
- List/Grid view toggle
- File type icons (audio, video, PDF, text)
- Empty state design

### ✅ Tasks Tab
- Clean, proportionate layout
- No hand/figure/bar metadata (as requested)
- Professor-assigned vs self-assigned task distinction
- Priority flags
- Completion states
- Tags and due dates
- Filter tabs: All, Active, Completed

### ✅ Dashboard Layout with Sidebar
- **Fixed sidebar navigation** with collapsible functionality (desktop)
- **Mobile-responsive** with hamburger menu
- **Student Menu**: Home, Files, Sonny AI, Tasks, Calendar, Connect, Stats, Settings
- **Educator Menu**: Home, Files, Sonny AI, Assignments, Students, Connect, Calendar, Stats, Settings
- Active page highlighting with visual indicators
- User profile section at bottom of sidebar
- Smooth transitions and hover states

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically redirect to `/student/home`

## Navigation

### Student Views
- `/student/home` - Student dashboard with practice stats
- `/student/files` - File management interface
- `/student/ai` - Sonny AI chat
- `/student/tasks` - Task management
- `/student/calendar` - Calendar (placeholder)
- `/student/connect` - Community (placeholder)
- `/student/stats` - Statistics (placeholder)
- `/student/settings` - Settings (placeholder)

### Educator Views
- `/educator/home` - Educator dashboard
- `/educator/files` - Teaching materials (placeholder)
- `/educator/ai` - Sonny AI chat
- `/educator/assignments` - Assignment management (placeholder)
- `/educator/students` - Student management (placeholder)
- `/educator/calendar` - Calendar (placeholder)
- `/educator/connect` - Connect (placeholder)
- `/educator/stats` - Statistics (placeholder)
- `/educator/settings` - Settings (placeholder)

## Technology Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Design Notes

### Liquid Glass Style
The UI uses a custom glass morphism design with:
- `background: rgba(255, 255, 255, 0.05)`
- `backdrop-filter: blur(20px)`
- Soft borders and shadows
- Smooth transitions on all interactive elements

### Color Palette
- **Primary**: Blue to Purple gradient
- **Background**: Deep navy gradient (#0a0e1a → #1a1f35)
- **Text**: White with various opacity levels
- **Accents**: Blue, Purple, Green, Yellow, Red (for different states and priorities)

### Typography
- System fonts (Apple-style): `-apple-system, BlinkMacSystemFont, 'Segoe UI'...`
- Clear hierarchy with font sizes from xs to 4xl
- Consistent spacing and line heights

## Mock Data

All data shown is randomized/mocked for demonstration:
- Practice stats: 7 days of practice hours
- Events: Lessons, competitions, auditions, masterclasses, concerts
- Assignments: Various music pieces and exercises
- Files: Audio, video, PDF, and text files
- Tasks: Practice goals and assignments

## Browser Support

- Chrome (recommended)
- Safari
- Firefox
- Edge

## Notes

- This is a **UI showcase only** - no actual functionality is implemented
- All buttons and interactions are visual only
- No data persistence or API calls
- Perfect for presenting design concepts and user flows

## Future Enhancements (Not Implemented)

- Actual audio/video playback
- Real-time collaboration features
- Calendar integration
- File upload functionality
- AI chat with actual responses
- User authentication
- Database integration

## License

This is a demonstration project created for Sonautic.

---

Built with ❤️ for music education
