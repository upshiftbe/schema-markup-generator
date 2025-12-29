# Schema Types Reference - Field Requirements

This document outlines the common properties for each schema type supported by the Schema Markup Generator.

## 1. Organization
**Purpose**: Represent a business, corporation, or organization

### Required Fields
- `name` - Organization name
- `url` - Website URL

### Common Optional Fields
- `logo` - Logo image URL
- `description` - Organization description
- `address` - Physical address (PostalAddress object)
- `contactPoint` - Contact information (ContactPoint object)
- `sameAs` - Social media profiles (array of URLs)
- `foundingDate` - Date founded
- `numberOfEmployees` - Employee count

## 2. Article
**Purpose**: Blog posts, news articles, editorial content

### Required Fields
- `headline` - Article title
- `author` - Author information (Person or Organization)
- `datePublished` - Publication date (ISO 8601)
- `dateModified` - Last modified date (ISO 8601)

### Common Optional Fields
- `description` - Article summary/description
- `image` - Featured image URL(s)
- `publisher` - Publisher information (Organization)
- `articleBody` - Full article text
- `articleSection` - Section/category
- `keywords` - Article keywords

## 3. Product
**Purpose**: E-commerce product listings

### Required Fields
- `name` - Product name
- `description` - Product description
- `offers` - Pricing information (Offer object)

### Common Optional Fields
- `image` - Product image URL(s)
- `brand` - Brand name or Brand object
- `sku` - Stock keeping unit
- `gtin` - Global Trade Item Number
- `aggregateRating` - Customer ratings (AggregateRating object)
- `review` - Product reviews (Review objects)
- `category` - Product category
- `availability` - Stock status (InStock, OutOfStock, etc.)

## 4. LocalBusiness
**Purpose**: Local business listings (restaurants, shops, services)

### Required Fields
- `name` - Business name
- `address` - Physical address (PostalAddress)

### Common Optional Fields
- `description` - Business description
- `image` - Business photos
- `telephone` - Phone number
- `priceRange` - Price range (e.g., "$$")
- `openingHours` - Business hours
- `geo` - Geographic coordinates (GeoCoordinates)
- `aggregateRating` - Customer ratings
- `review` - Customer reviews
- `servesCuisine` - For restaurants
- `menu` - For restaurants

## 5. Event
**Purpose**: Events, conferences, concerts, etc.

### Required Fields
- `name` - Event name
- `startDate` - Event start date/time (ISO 8601)

### Common Optional Fields
- `description` - Event description
- `endDate` - Event end date/time
- `location` - Event location (Place or PostalAddress)
- `image` - Event image(s)
- `organizer` - Event organizer (Person or Organization)
- `offers` - Ticket pricing (Offer object)
- `eventStatus` - Event status
- `eventAttendanceMode` - Online, offline, or mixed

## 6. FAQPage
**Purpose**: Frequently asked questions

### Required Fields
- `mainEntity` - Array of Question objects

### Question Object Structure
- `@type`: "Question"
- `name` - The question text
- `acceptedAnswer` - Answer object
  - `@type`: "Answer"
  - `text` - The answer text

## 7. BreadcrumbList
**Purpose**: Site navigation breadcrumbs

### Required Fields
- `itemListElement` - Array of ListItem objects

### ListItem Structure
- `@type`: "ListItem"
- `position` - Position in list (number)
- `name` - Breadcrumb label
- `item` - URL of the page

## 8. JobPosting
**Purpose**: Job listings and career pages

### Required Fields
- `title` - Job title
- `description` - Job description
- `datePosted` - Posting date (ISO 8601)
- `employmentType` - Employment type (FULL_TIME, PART_TIME, etc.)
- `hiringOrganization` - Employer (Organization)

### Common Optional Fields
- `jobLocation` - Job location (Place)
- `baseSalary` - Salary information (MonetaryAmount)
- `validThrough` - Application deadline
- `workHours` - Working hours
- `qualifications` - Required qualifications
- `skills` - Required skills

## 9. Person
**Purpose**: Personal profiles, authors, team members

### Required Fields
- `name` - Person's name

### Common Optional Fields
- `jobTitle` - Job title/position
- `description` - Bio/description
- `image` - Profile photo
- `email` - Email address
- `telephone` - Phone number
- `url` - Personal website
- `sameAs` - Social media profiles
- `worksFor` - Employer (Organization)
- `alumniOf` - Educational institution

## 10. VideoObject
**Purpose**: Video content metadata

### Required Fields
- `name` - Video title
- `description` - Video description
- `thumbnailUrl` - Thumbnail image URL
- `uploadDate` - Upload date (ISO 8601)

### Common Optional Fields
- `contentUrl` - Direct video file URL
- `embedUrl` - Embed URL (YouTube, Vimeo, etc.)
- `duration` - Video duration (ISO 8601 duration)
- `publisher` - Publisher (Organization)
- `author` - Creator (Person or Organization)
- `interactionStatistic` - View counts, likes, etc.

## Common Patterns

### PostalAddress Structure
```json
{
  "@type": "PostalAddress",
  "streetAddress": "123 Main St",
  "addressLocality": "City",
  "addressRegion": "State",
  "postalCode": "12345",
  "addressCountry": "US"
}
```

### Offer Structure (for Products)
```json
{
  "@type": "Offer",
  "price": "29.99",
  "priceCurrency": "USD",
  "availability": "https://schema.org/InStock",
  "url": "https://example.com/product"
}
```

### AggregateRating Structure
```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.5",
  "reviewCount": "120"
}
```

## Notes
- All dates should be in ISO 8601 format (e.g., "2024-01-15" or "2024-01-15T10:00:00Z")
- URLs should be absolute (include https://)
- Images can be single strings or arrays of URLs
- Nested objects should follow schema.org structure
- Always include `@context` and `@type` in JSON-LD output

