# Replit.md

## Overview

This is a comprehensive school website for Complexe Scolaire Wonder Of God, an educational institution located in Djigbé Madjavi, Benin. The application serves as a digital presence to inform parents about the school's programs, showcase its values, and facilitate enrollment and communication. It features a modern full-stack architecture with a React frontend and Express.js backend, supporting both enrollment applications and contact message management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with React and TypeScript, utilizing a component-based architecture with:
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components with Radix UI primitives for accessible, customizable interfaces
- **Styling**: Tailwind CSS with custom design tokens optimized for educational branding (warm oranges and professional blues)
- **State Management**: React Query (@tanstack/react-query) for server state management with optimistic updates
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
The server follows a RESTful Express.js architecture with:
- **Runtime**: Node.js with TypeScript and ESM modules
- **API Structure**: RESTful endpoints for enrollment requests and contact messages
- **Request Validation**: Zod schemas for runtime type checking and validation
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Storage Abstraction**: Interface-based storage layer supporting both in-memory (development) and database implementations

### Data Storage
The application uses a flexible storage architecture:
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Development Storage**: In-memory storage implementation for rapid development
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Build and Development
The build system leverages Vite for optimal development experience:
- **Bundling**: Vite for frontend with esbuild for backend production builds
- **Development**: Hot module replacement and error overlays
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Organized imports with @/ for client code and @shared/ for shared utilities

### Key Design Patterns
- **Separation of Concerns**: Clear boundaries between client, server, and shared code
- **Type Safety**: End-to-end TypeScript with shared types and Zod validation
- **Progressive Enhancement**: Graceful fallbacks and accessible design patterns
- **Mobile-First**: Responsive design optimized for mobile and desktop viewing

## External Dependencies

### Core Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Vite**: Modern build tool with development server and production optimization

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Consistent icon library for educational interface elements
- **React Icons**: Additional icons for social media and communication

### Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API endpoints
- **React Query**: Server state management with caching and background updates

### Development Tools
- **TypeScript**: Static type checking and improved developer experience
- **ESLint/Prettier**: Code formatting and quality tools (implied by project structure)
- **Replit Plugins**: Development environment integration for cartographer and dev banner

### Communication Services
The application is designed to integrate with:
- **WhatsApp Business API**: For direct parent communication via clickable links
- **Google Maps**: For location display and directions to the school
- **Email Services**: Ready for SMTP integration for automated notifications