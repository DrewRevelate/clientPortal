# RevelateOps Client Portal

A secure, high-end client portal for RevelateOps customers, built with Next.js, Tailwind CSS, and Supabase.

## Features

- 🔐 Secure authentication with Supabase Auth
- 📊 Interactive dashboard with key metrics
- 📝 Project and task management
- 📅 Meeting scheduling with Zoom integration
- 📄 Document storage and management
- ⏱️ Time tracking and reporting
- 🌓 Light/dark mode support
- 📱 Fully responsive design

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Setup

1. Clone the repository:

```bash
git clone https://github.com/DrewRevelate/clientPortal.git
cd clientPortal
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Set up the database schema:

- Navigate to your Supabase project
- Go to the SQL Editor
- Run the SQL script from `supabase/migrations/00000000000000_initial_schema.sql`

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app               # Next.js app directory
  /api             # API routes
  /auth            # Authentication pages
  /dashboard       # Dashboard pages
  /projects        # Project management pages
  /tasks           # Task management pages
  /meetings        # Meeting management pages
  /documents       # Document management pages
  /time-tracking   # Time tracking pages
  /settings        # User settings pages
/components        # React components
  /auth            # Authentication components
  /dashboard       # Dashboard components
  /layout          # Layout components
  /ui              # UI components
/lib               # Utility functions and hooks
  /contexts        # React contexts
  /supabase        # Supabase client
/public            # Static assets
/styles            # Global styles
/supabase          # Supabase migration scripts
```

## Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch.

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Push your branch: `git push origin feature/your-feature-name`
4. Create a pull request

## License

This project is proprietary software owned by RevelateOps.

## Contact

For any questions or support, please contact admin@revelateops.com.
