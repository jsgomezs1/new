# Design Guidelines: Multi-Tenant AEO Blog Application

## Design Approach

**Selected Approach:** Design System (Fluent Design/Material Design Hybrid)

**Justification:** This is a data-intensive analytics application requiring information density, clear hierarchy, and professional presentation. We'll combine Material Design's data display patterns with modern SaaS application aesthetics inspired by Linear, Notion, and modern analytics platforms.

**Core Principles:**
- Information clarity over visual decoration
- Consistent spatial rhythm for predictable scanning
- Subtle depth through elevation layers
- Professional, trustworthy presentation
- Real-time data presentation with clear status indicators

---

## Typography System

**Font Families:**
- Primary: Inter (via Google Fonts CDN) - Interface text, data tables, navigation
- Monospace: JetBrains Mono - Numeric data, timestamps, codes

**Type Scale:**
- Page Titles: text-2xl font-semibold (32px)
- Section Headers: text-lg font-semibold (18px)
- Data Table Headers: text-sm font-medium uppercase tracking-wide
- Body Text: text-base (16px)
- Table Data: text-sm (14px)
- Helper Text/Metadata: text-xs (12px)
- Numeric Data: font-mono for alignment

**Hierarchy Rules:**
- Use weight variation (font-medium, font-semibold) over size changes within data tables
- Maintain consistent leading (leading-relaxed for body, leading-tight for headers)
- Never use more than 3 different sizes on a single screen

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16
- Micro spacing (within components): 2, 4
- Component internal padding: 4, 6
- Section spacing: 8, 12
- Major layout gaps: 16

**Grid Structure:**

**Application Shell:**
- Sidebar: Fixed width 16rem (w-64) on desktop, full-width drawer on mobile
- Main content area: Flexible with max-w-7xl container
- Header: Fixed height h-16, spans full width above sidebar

**Content Containers:**
- Page padding: px-8 py-6 on desktop, px-4 py-4 on mobile
- Cards/Panels: p-6 consistently
- Data table cells: px-4 py-3

**Responsive Breakpoints:**
- Mobile: base (< 768px) - Stacked layout, hamburger menu
- Tablet: md (768px+) - Persistent sidebar, 2-column data views
- Desktop: lg (1024px+) - Full multi-column tables, side panels
- Wide: xl (1280px+) - Maximum content width with generous margins

---

## Component Library

### Navigation Components

**Header:**
- Height: h-16 with border-b
- Left section: Tenant logo (h-8 w-auto) + company name (text-lg font-semibold)
- Right section: User avatar, notifications icon, settings menu
- Padding: px-6
- Elevation: subtle border-b, no shadow (flat design)

**Sidebar:**
- Width: w-64 on desktop
- Each menu item: h-12 with px-4 py-3
- Icon size: w-5 h-5 with mr-3 spacing from text
- Active state: Distinct background fill extending full width
- Hover state: Subtle background change
- Icons: Use Heroicons (outline style)
- Section headers within sidebar: text-xs uppercase tracking-wider font-semibold with mt-6 mb-2

### Data Display Components

**Prompts Table (Primary Component):**
- Container: Full-width card with border and subtle rounded corners (rounded-lg)
- Table structure:
  - Header row: Sticky position, distinct background, border-b-2
  - Data rows: border-b, alternating row treatment for readability
  - Cell padding: px-4 py-3
  - Column widths: Prompt text (50%), Frequency (15%), Category (15%), Last Used (12%), Score (8%)

**Table Features:**
- Sort indicators: Small arrow icons in headers
- Search bar above table: h-10 with icon prefix, full rounded (rounded-full)
- Filter badges: Inline tags with rounded-full, text-xs, dismissible X icons
- Pagination: Bottom-aligned, showing "1-10 of 156" with prev/next buttons (h-9)

**Relevance Score Indicator:**
- Visual: Horizontal bar chart or circular badge
- Size: h-2 rounded-full for bar, or h-6 w-6 for badge
- Positioning: Right-aligned in cell

**Loading States:**
- Skeleton rows: h-12 with animated shimmer effect
- Use 8-10 skeleton rows to maintain layout stability
- Pulse animation on loading elements

**Empty States:**
- Center-aligned with icon (w-12 h-12), heading, and description
- "No results found" messaging with clear call-to-action

### Action Components

**Buttons:**
- Primary CTA: h-10 px-6 rounded-md font-medium
- Secondary: h-10 px-4 rounded-md with border
- Icon-only: h-9 w-9 rounded-md
- Export CSV button: Secondary style with download icon

**Search/Filter Controls:**
- Search input: h-10 with pl-10 (space for magnifying glass icon)
- Filter dropdowns: h-10 with chevron-down icon
- Clear filters button: Text button (no background) with X icon

### Cards & Containers

**Dashboard Cards:**
- Padding: p-6
- Rounded corners: rounded-lg
- Border: Consistent 1px border
- Elevation: Minimal - border only, no shadows
- Spacing between cards: gap-6 in grid

**Stat Cards (Dashboard):**
- Large number: text-3xl font-bold with font-mono
- Label: text-sm below number
- Change indicator: Small badge with up/down arrow, text-xs

### Status & Feedback

**Category Tags:**
- Size: px-3 py-1 text-xs rounded-full font-medium
- Inline with table data
- Max width with truncation: max-w-[120px] truncate

**Toast Notifications:**
- Position: Fixed top-right
- Size: min-w-[300px] p-4
- Auto-dismiss after 5 seconds
- Success/error icons with appropriate semantic meaning

---

## Interaction Patterns

**Table Interactions:**
- Row hover: Subtle background change on entire row
- Clickable rows: Cursor pointer with slight background shift
- Column sort: Click header to toggle ascending/descending
- Inline actions: Appear on row hover (edit, delete icons)

**Real-time Updates:**
- New data: Subtle highlight animation (flash) on newly added rows
- Duration: 2-second fade-in effect
- No disruptive movements - maintain scroll position

**Loading Patterns:**
- Initial load: Full skeleton table
- Pagination: Replace rows with skeletons during fetch
- Search/filter: Overlay semi-transparent loading indicator
- Real-time updates: No loading state, seamless data swap

**Mobile Navigation:**
- Hamburger icon: top-left, w-6 h-6
- Slide-in drawer: Full-height overlay from left
- Backdrop: Semi-transparent click-to-close
- Drawer width: 80% of viewport, max w-80

---

## Page-Specific Layouts

**Top User Prompts Page:**
- Page header: mb-6 with title, description text-sm, and action buttons
- Filter bar: mb-4 with search + category filters in horizontal flex
- Table card: Full width with internal scrolling if needed
- Footer: Pagination controls with mt-4

**Dashboard Page:**
- Stats grid: 3 columns on lg+, 2 on md, 1 on mobile with gap-6
- Charts section: mt-8 with heading mb-4
- Recent activity: 2-column layout (activities + top prompts preview)

**Settings Page:**
- Form-based layout: max-w-2xl for comfortable reading
- Section grouping: Each setting group in separate card with mb-6
- Form inputs: h-10 consistently, full-width in form context

---

## Accessibility Requirements

- All interactive elements: min-height h-10 (40px) for touch targets
- Keyboard navigation: Visible focus rings on all interactive elements (ring-2)
- Table: Proper ARIA labels, role="table", scope attributes on headers
- Skip to content link: Hidden but keyboard accessible
- Form inputs: Associated labels, aria-describedby for helper text
- Loading states: aria-live="polite" announcements
- Icon buttons: aria-label describing action

---

## Multi-Tenant Theming

**Dynamic Elements:**
- Tenant logo: Display in header at h-8 with object-contain
- Primary accent: Applied to active nav items, primary buttons, links
- Logo positioning: mr-3 from company name

**Consistent Elements (Not Themed):**
- Layout structure remains identical across tenants
- Typography scale unchanged
- Component sizing and spacing consistent
- Only accent treatments vary per tenant

---

This design system prioritizes data clarity, professional presentation, and seamless real-time updates while maintaining a clean, modern aesthetic suitable for enterprise SaaS applications.