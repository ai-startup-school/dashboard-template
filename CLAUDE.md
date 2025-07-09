# Admin Dashboard Template - Claude Code Rules

## Project Overview
This is an admin dashboard template built with Next.js 15, TypeScript, Supabase, and tRPC. It provides a complete foundation for building admin interfaces with social media monitoring capabilities.

## Tech Stack & Architecture
- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Backend**: tRPC for type-safe APIs, Next.js API routes
- **Database**: Supabase (PostgreSQL) with Row Level Security
- **Authentication**: Supabase Auth with email-based admin controls
- **Background Jobs**: Inngest for scheduled tasks
- **Type Safety**: Full TypeScript with end-to-end type safety

## Project Structure
```
admin-dashboard-template/
├── nextjs/                    # Main Next.js application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Reusable UI components (Radix UI)
│   │   │   ├── layout/       # Layout components
│   │   │   └── [feature]/    # Feature-specific components
│   │   ├── config/           # App configuration
│   │   │   └── app.ts        # Main app config (includes admin emails)
│   │   ├── pages/            # Next.js pages
│   │   │   ├── admin/        # Admin-only pages
│   │   │   └── api/          # API routes
│   │   ├── server/           # tRPC server and routers
│   │   │   └── api/          # tRPC API definitions
│   │   └── utils/            # Utility functions
│   ├── .env.example          # Environment variables template
│   └── package.json
├── shared-types/             # Shared TypeScript types
│   └── database.types.ts     # Generated Supabase types
└── supabase/                # Supabase configuration
    ├── migrations/          # Database migration files
    └── config.toml         # Supabase configuration
```

## Core Development Principles

### Database-First Development
1. **Always use migrations** for schema changes
2. **Regenerate types** after database changes:
   ```bash
   npx supabase gen types typescript --local > ../shared-types/database.types.ts
   ```
3. **Never modify database directly** - always use migration files
4. **Use tRPC procedures** for type-safe database operations

### Authentication & Security
- Admin access controlled by email addresses in `nextjs/src/config/app.ts`
- Always verify admin permissions in tRPC procedures
- Use Supabase RLS policies for additional security
- Never expose sensitive data in client-side code

### Type Safety
- Use TypeScript for all code
- Import database types from `shared-types/database.types.ts`
- Use tRPC for end-to-end type safety
- Avoid `any` type - use proper TypeScript types

### Component Development
- Use Radix UI primitives for accessible components
- Follow existing patterns in `src/components/ui/`
- Implement proper loading states and error handling
- Use Tailwind CSS for styling
- Make components responsive by default

## Common Development Workflows

### Adding a New Database Table
1. Create migration: `supabase migration new add_table_name`
2. Write SQL in the migration file
3. Apply migration locally: `supabase db push`
4. Regenerate types: `npx supabase gen types typescript --local > ../shared-types/database.types.ts`
5. Create tRPC procedures for the new table
6. Update UI components as needed

### Adding New Admin Features
1. Add navigation items to `src/config/app.ts`
2. Create page components in `src/pages/admin/`
3. Implement tRPC procedures with admin permission checks
4. Add UI components with proper error handling
5. Test with both admin and non-admin users

### Environment Setup
- Use `.env.example` as template for environment variables
- Never commit `.env.local` to version control
- Update admin emails in `nextjs/src/config/app.ts`
- Ensure all required environment variables are set

## File Naming Conventions
- Components: PascalCase (e.g., `DashboardSidebar.tsx`)
- Pages: kebab-case (e.g., `admin/twitter/index.tsx`)
- Utilities: camelCase (e.g., `utils/api.ts`)
- Types: PascalCase (e.g., `types/Database.ts`)

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Generate database types
npx supabase gen types typescript --local > ../shared-types/database.types.ts

# Database migrations
supabase db push           # Apply migrations locally
supabase db reset          # Reset local database
supabase migration new     # Create new migration

# Build for production
npm run build
npm run start
```

## Key Configuration Files
- `nextjs/src/config/app.ts` - Main app configuration including admin emails
- `nextjs/.env.example` - Environment variables template
- `supabase/config.toml` - Supabase configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## Security Considerations
- Admin access is email-based - update `adminEmails` array in config
- Use Supabase RLS policies for database security
- Validate all user inputs and API requests
- Keep environment variables secure and documented

## When Working on This Project
1. Always start by understanding the current database schema
2. Use migrations for any database changes
3. Regenerate types after schema changes
4. Follow the existing code patterns and conventions
5. Test admin permissions thoroughly
6. Update documentation when adding new features

Remember: This is a production-ready template focused on security, type safety, and maintainability.