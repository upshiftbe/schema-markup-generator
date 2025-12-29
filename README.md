# Schema Markup Generator

A JSON-LD schema markup generator built with React, TypeScript, and Tailwind CSS. Generate valid structured data for your website to improve SEO and enable rich results in search engines.

## Features

- 🎯 **10 Schema Types**: Organization, Article, Product, LocalBusiness, Event, FAQPage, BreadcrumbList, JobPosting, Person, VideoObject
- 📝 **Form-Based Input**: Dynamic forms that adapt to selected schema type
- ⚡ **Real-Time Preview**: See generated JSON-LD code as you type
- 📋 **Copy to Clipboard**: One-click code copying
- ✅ **Validation**: Built-in form validation with Zod
- 🎨 **Modern UI**: Built with shadcn/ui and Tailwind CSS

## Tech Stack

- **React** with TypeScript
- **Vite** for build tooling
- **React Hook Form** for form management
- **Zod** for schema validation
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (package manager)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
pnpm preview
```

## Usage

1. Select a schema type from the dropdown (e.g., "Organization", "Article", "Product")
2. Fill in the required fields (marked with *)
3. Optionally fill in additional fields
4. The JSON-LD code will generate automatically in the preview panel
5. Click "Copy" to copy the generated code
6. Paste the code into a `<script type="application/ld+json">` tag in your HTML

## Supported Schema Types

- **Organization**: Business, corporation, or organization information
- **Article**: Blog posts, news articles, editorial content
- **Product**: E-commerce product listings
- **LocalBusiness**: Local business listings (restaurants, shops, services)
- **Event**: Events, conferences, concerts
- **FAQPage**: Frequently asked questions
- **BreadcrumbList**: Site navigation breadcrumbs
- **JobPosting**: Job listings and career pages
- **Person**: Personal profiles, authors, team members
- **VideoObject**: Video content metadata

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── SchemaForm.tsx  # Dynamic form builder
│   ├── SchemaTypeSelector.tsx
│   └── JSONLDPreview.tsx
├── lib/                # Utilities and helpers
│   ├── schemas.ts      # Zod schema definitions
│   ├── jsonld-generator.ts
│   └── utils.ts
├── types/              # TypeScript type definitions
└── App.tsx             # Main app component
```

## License

MIT