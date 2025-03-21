# RevelateOps Client Portal

A secure, high-end client portal for RevelateOps customers, built with Next.js, Tailwind CSS, and Supabase. This platform enables clients to manage projects, track tasks, schedule meetings, access documents, and monitor time utilization with an elegant, responsive interface that aligns with the RevelateOps brand identity.

![RevelateOps Client Portal](https://example.com/client-portal-screenshot.png)

## ✨ Key Features

- **Secure Authentication System**
  - Multi-method authentication (email/password, magic link, Google OAuth)
  - Role-based access control for clients and administrators
  - Secure JWT-based sessions with automatic renewal
  - Password reset and account recovery workflows

- **Comprehensive Client Dashboard**
  - Real-time overview of projects, tasks, and meetings
  - Time utilization metrics with visual indicators
  - Upcoming deadlines and priority tasks
  - Customized activity feed

- **Project Management**
  - Full project lifecycle tracking (Planning → Active → On-Hold → Completed)
  - Project timelines with milestone visualization
  - Completion percentage tracking
  - Project updates and client collaboration

- **Task Management**
  - Task creation and assignment
  - Priority and status tracking
  - Time estimation and actual time tracking
  - Task commenting and collaboration

- **Meeting Coordination**
  - Schedule meetings with RevelateOps team
  - Meeting details including links, passcodes, and dial-in information
  - Meeting history with recordings and transcripts
  - Calendar integration (Google Calendar, Outlook)

- **Document Management**
  - Secure document storage and sharing
  - Document categorization and versioning
  - Signature workflow for agreements
  - File preview and download capabilities

- **Time Tracking**
  - Purchased time package management
  - Real-time utilization tracking
  - Detailed time entries by project and task
  - Historical time usage reports

- **Design & Experience**
  - Branded interface with RevelateOps design elements
  - Light and dark mode support
  - Responsive design for all devices
  - Optimized user experience with intuitive navigation

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Form Handling**: React Hook Form with Zod validation
- **Data Visualization**: Chart.js with React-Chartjs-2
- **UI Components**: Custom components + Radix UI primitives
- **Date Handling**: date-fns and dayjs
- **Icons**: React Icons

### Backend & Database
- **Backend as a Service**: Supabase
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Storage**: Supabase Storage
- **Real-time Updates**: Supabase Realtime

### Deployment & Infrastructure
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions with Vercel integration
- **Version Control**: Git with GitHub

## 🏗️ Architecture

The client portal uses a modern, component-based architecture:

- **App Router**: Leverages Next.js 14's App Router for server components and routing
- **Hybrid Rendering**: Uses both server and client components strategically
- **API Routes**: Implements API routes for secure data operations
- **Authentication Flow**: Client and server-side auth verification
- **Database Access**: Row Level Security (RLS) for controlled data access
- **State Management**: React Context API for global state

## 📊 Database Schema

The application uses the following primary data models:

- **Profiles**: Extended user information for authentication
- **Projects**: Client projects with various status options and timelines
- **Tasks**: Deliverables and action items linked to projects
- **Meetings**: Scheduled appointments with metadata and recordings
- **Documents**: Files and agreements with versioning and signatures
- **Time Packages**: Purchased time blocks for tracking utilization
- **Time Entries**: Detailed time usage records

All models implement Row Level Security to ensure clients only access their own data.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Git

### Local Development Setup

1. **Clone the repository**

```bash
git clone https://github.com/DrewRevelate/client-portal.git
cd client-portal
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment setup**

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Database setup**

- Go to your Supabase project dashboard
- Open the SQL Editor
- Run the initialization script from `supabase/migrations/00000000000000_initial_schema.sql`

5. **Start the development server**

```bash
npm run dev
```

6. **Access the development site**

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔒 Authentication Implementation

The portal uses a comprehensive authentication system:

### Authentication Methods
- **Email/Password**: Traditional sign-in with email verification
- **Magic Link**: Passwordless authentication via email
- **Social OAuth**: Sign in with Google (expandable to other providers)

### Security Features
- JWT token-based sessions with automatic renewal
- Server-side verification for protected routes
- Secure password reset workflow
- Account recovery options
- CSRF protection

### Implementation Details
- Uses Supabase Auth UI components with custom styling
- Implements client and server auth providers
- Middleware protection for authenticated routes
- Custom hooks for auth state management

## 🧩 Project Structure

```
/app                      # Next.js app directory with routes
  /api                    # API endpoints for data operations
  /auth                   # Authentication pages
  /dashboard              # Main dashboard and overview
  /projects               # Project management
  /tasks                  # Task management
  /meetings               # Meeting scheduling and history
  /documents              # Document management
  /time-tracking          # Time utilization tracking

/components               # Reusable React components
  /auth                   # Authentication components
  /layout                 # Layout and structural components
  /ui                     # UI building blocks

/lib                      # Utility functions and services
  /contexts               # React context providers
  /supabase               # Supabase client configuration
    /client.ts            # Client-side Supabase instance
    /server.ts            # Server-side Supabase instance

/public                   # Static assets
/styles                   # Global styles
/supabase                 # Supabase migration scripts
/types                    # TypeScript type definitions
```

## 🔄 Deployment Workflow

The application is automatically deployed through a CI/CD pipeline:

1. Code changes are pushed to GitHub
2. Vercel automatically detects the changes
3. Build process runs with environment variables
4. Application is deployed to Vercel's global edge network
5. Deployment is verified and monitored

### Environment Configuration

The following environment variables must be set in Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`

## 🧪 Testing and Quality Assurance

Before deployment, the portal undergoes:

- TypeScript type checking
- ESLint static code analysis
- Component testing
- End-to-end functionality tests
- Responsive design verification
- Performance optimization
- Security auditing

## 🛠️ Troubleshooting Common Issues

### Authentication Problems
- Verify Supabase credentials in environment variables
- Check that redirect URLs are properly configured
- Review browser console for CORS-related errors
- Ensure cookies are being properly set and read

### Database Access Issues
- Verify RLS policies are correctly configured
- Check for permission errors in Supabase logs
- Test database queries directly in Supabase interface

### Deployment Failures
- Review build logs in Vercel dashboard
- Ensure all environment variables are set
- Clear browser cache after deployments
- Check for TypeScript or dependency errors

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make changes following our coding standards
3. Test thoroughly locally
4. Push and create a pull request with detailed description
5. Request code review from team members

## 📞 Support and Contact

For technical support or feature requests, please contact:

- **Email**: support@revelateops.com
- **Project Manager**: Drew Lambert (drew@revelateops.com)

## 📜 License

This project is proprietary software owned by RevelateOps, Inc.
Copyright © 2025 RevelateOps, Inc. All rights reserved.