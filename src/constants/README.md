# Constants

This directory contains all application constants, organized similar to API constants files for better maintainability and scalability.

## Structure

```
constants/
├── index.ts          # Main export file
├── api.ts           # API-related constants
├── ui.ts            # UI/Design constants
├── navigation.ts    # Navigation and routing
├── content.ts       # Static content and text
├── forms.ts         # Form validation and config
├── environment.ts   # Environment and feature flags
├── seo.ts           # SEO and meta constants
└── analytics.ts     # Analytics and tracking
```

## Usage

### Import from main index
```typescript
import { API_BASE_URL, COLORS, CONTACT_INFO } from '../constants';
```

### Import from specific files
```typescript
import { API_ENDPOINTS, HTTP_STATUS } from '../constants/api';
import { COLORS, SPACING } from '../constants/ui';
import { FORM_VALIDATION } from '../constants/forms';
```

## Categories

### API Constants (`api.ts`)
- Base URLs and endpoints
- HTTP status codes
- Request methods
- Headers
- Timeout configurations

### UI Constants (`ui.ts`)
- Colors (brand, status, text, backgrounds)
- Spacing and sizing
- Typography (fonts, weights, sizes)
- Breakpoints
- Shadows and z-index

### Navigation Constants (`navigation.ts`)
- Route definitions
- Navigation links
- Footer links
- Breadcrumb labels

### Content Constants (`content.ts`)
- Site information
- Contact details
- Social media links
- Business information
- CTA text and labels

### Forms Constants (`forms.ts`)
- Validation rules
- Service options
- Budget ranges
- Form configuration

### Environment Constants (`environment.ts`)
- Environment detection
- Feature flags
- External service configs
- Storage keys
- Cache configuration

### SEO Constants (`seo.ts`)
- Default meta tags
- Open Graph data
- Twitter Card data
- Schema.org markup
- Page-specific titles/descriptions

### Analytics Constants (`analytics.ts`)
- Tracking IDs
- Event definitions
- Analytics categories
- Tracking configuration

## Best Practices

1. **Use `as const`** for type safety and better IntelliSense
2. **Environment variables** are prefixed with `REACT_APP_`
3. **Group related constants** in objects for better organization
4. **Use UPPER_CASE** for constant names
5. **Document complex constants** with comments

## Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
REACT_APP_API_BASE_URL=https://api.azentiqlabs.com
REACT_APP_API_TIMEOUT=10000

# Analytics
REACT_APP_GA_TRACKING_ID=GA_MEASUREMENT_ID
REACT_APP_ENABLE_ANALYTICS=true

# Features
REACT_APP_ENABLE_CHAT_WIDGET=false
REACT_APP_ENABLE_NEWSLETTER=true

# App Info
REACT_APP_VERSION=1.0.0
REACT_APP_BUILD_DATE=2024-01-01
```

## Adding New Constants

1. Choose the appropriate category file
2. Add the constant with proper typing
3. Export it from the main `index.ts` if needed
4. Update this README if adding new categories

## Migration from Data Files

Constants are now separated from data. Use constants for:
- Static configuration values
- Environment-specific settings
- UI/UX values
- API endpoints and settings

Use data files for:
- Dynamic content
- User-generated data
- Database responses
- CMS content