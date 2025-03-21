# RevelateOps Client Portal

A secure, high-end client portal for RevelateOps using Next.js and Supabase.

## Features

- Authentication & User Management
- Client Dashboard
- Project Management
- Task Management
- Meeting Scheduling with Calendly Integration
- Document Management

## Recently Updated

- Added Calendly integration for meeting scheduling
- Removed appointments table dependency and simplified implementation
- Added webhooks to automatically create meetings when clients book

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run database migrations:
```bash
supabase db push
```

3. Start the development server:
```bash
npm run dev
```
