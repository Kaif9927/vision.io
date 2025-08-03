# Personal Portfolio Website

## Overview

This is a modern, interactive portfolio website built as a desktop-inspired application featuring a unique UI design that mimics a computer desktop environment. The application showcases professional information including skills, projects, experience, and contact details through a windowed interface system. Built with React and TypeScript on the frontend, Express.js on the backend, and styled with Tailwind CSS and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with custom desktop-themed color variables and shadcn/ui component library
- **State Management**: React hooks with TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints
- **Email Service**: Nodemailer integration for contact form submissions
- **Development Setup**: Vite for fast development with HMR support
- **Static Serving**: Express serves static files in production

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: Defined in shared directory for type consistency between frontend and backend
- **Tables**: Users table and contact messages table for portfolio functionality

### Design Pattern
- **Desktop UI Metaphor**: Application mimics a desktop environment with:
  - Desktop icons for navigation
  - Windowed interface for different sections (About, Skills, Projects, etc.)
  - Taskbar with current time display
  - Window management (open/close functionality)
- **Component-Based Architecture**: Modular React components for each portfolio section
- **Responsive Design**: Mobile-friendly adaptations while maintaining desktop theme

### Development Workflow
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Shared types between frontend and backend via TypeScript
- **Development Server**: Integrated Vite dev server with Express API routes

## External Dependencies

### Core Frameworks
- **React**: Frontend library with hooks and modern patterns
- **Express.js**: Backend web framework for API routes
- **TypeScript**: Static typing across entire application

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-zod**: Schema validation integration

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible UI components
- **Lucide React**: Icon library for consistent iconography

### Form & Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **TanStack Query**: Server state management and caching

### Email & Communication
- **Nodemailer**: Email sending service for contact form submissions

### Development Tools
- **Vite**: Fast build tool with HMR for development
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with autoprefixer

### Deployment & Production
- **Replit Integration**: Optimized for Replit environment with custom plugins
- **Environment Variables**: Secure configuration for database and email credentials