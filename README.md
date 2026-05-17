# FreeDrops Admin & Sponsor Portal

FreeDrops is a UAE-based platform that places free water bottle dispensing stations at high-traffic locations (malls, airports, events). Brands sponsor these stations and run QR-code-driven advertising campaigns through them. This app is the management interface for both the **FreeDrops admin team** and **sponsors**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Iconify (`@iconify/react`) |
| Fonts | Satoshi (headings), General Sans (body) |

---

## Project Structure

```
app/
├── (admin)/          → Admin portal — FreeDrops internal team
├── (auth)/           → Login, register, forgot password pages
├── (sponsor)/        → Sponsor portal — brand/advertiser facing
└── page.tsx          → Root redirect

components/
├── admin/            → Admin-specific components (tabs, steps)
└── shared/           → Shared components (AnimatedPage, AnimatedGrid)

public/
└── qr8.png           → Sample QR code image
```

---

## User Roles & Entry Points

### 1. Admin (`/admin/login`)
FreeDrops internal staff who manage the entire platform.

### 2. Sponsor (`/login`)
Brand representatives who log in to manage their own campaigns.
- New sponsors register at `/register` → success page at `/register-success`
- Forgot password at `/forgot-password`

---

## Application Flow

### Admin Portal Flow

```
/admin/login
    └── /admin/dashboard
            ├── /admin/campaigns
            │       ├── /admin/campaigns/create/step-1   (Basics)
            │       ├── /admin/campaigns/create/step-2   (Creative & CTA)
            │       ├── /admin/campaigns/create/step-3   (Targeting)
            │       ├── /admin/campaigns/create/step-4
            │       ├── /admin/campaigns/create/step-5
            │       └── /admin/campaigns/[id]/
            │               ├── overview        (stats + scan chart)
            │               ├── brief           (project brief, target audience, business model)
            │               ├── qr-links        (QR codes per location)
            │               ├── analytics       (scan trend, location breakdown)
            │               ├── leads           (captured lead data)
            │               └── creative        (ad creative assets)
            │
            ├── /admin/sponsors
            │       └── /admin/sponsors/[id]/           (sponsor profile)
            │               └── /admin/sponsors/[id]/campaigns
            │
            ├── /admin/locations                         (distribution points, filterable)
            ├── /admin/emirates                          (UAE emirate regions)
            ├── /admin/qr-links                          (global QR code list with QR image)
            └── /admin/redirect-links                    (global redirect URL management)
```

### Sponsor Portal Flow

```
/login  (or /register → /register-success)
    └── /sponsor/dashboard
            ├── /sponsor/campaigns
            │       ├── /sponsor/campaigns/create/step-1
            │       ├── /sponsor/campaigns/create/step-2
            │       ├── /sponsor/campaigns/create/step-3
            │       ├── /sponsor/campaigns/create/step-4
            │       ├── /sponsor/campaigns/create/step-5
            │       └── /sponsor/campaigns/create/review
            │
            │       └── /sponsor/campaigns/[id]/
            │               ├── analytics
            │               ├── creative
            │               ├── qr-downloads
            │               └── qr-setup
            │
            └── /sponsor/support
```

---

## Key Pages Explained

### Admin Dashboard (`/admin/dashboard`)
- Top stat cards: Bottles Scanned, Total Scans, CTA Clicks, Leads, Active Campaigns
- Top Campaigns table: name, sponsor, bottles, scans, unique scans, clicks, leads
- Top Locations table + Campaign Status donut chart side by side

### Campaigns List (`/admin/campaigns`)
Filterable table of all campaigns with columns: Campaign Name, Sponsor, Status, Unique Scans, CTA Type, Start Date, Total Bottles, Scans, Clicks, Leads, Actions.

### Campaign Detail Tabs
Each campaign has 6 tabs:
1. **Overview** — KPI cards + scan chart + campaign details
2. **Project Brief** — industry/field, brand nature, target audience, business model, project manager
3. **QR Links** — per-location QR codes
4. **Analytics** — scan trend graph + location breakdown
5. **Leads** — captured lead table
6. **Creative** — ad creative assets

### Locations (`/admin/locations`)
All distribution points with search + filter by emirate, type, and status. Full add/edit/delete via modal.

### Emirates (`/admin/emirates`)
Manage UAE geographical regions (Dubai, Abu Dhabi, etc.) with active/inactive toggle. Add new emirates via modal.

### QR Links (`/admin/qr-links`)
Global list of all QR codes across campaigns. Shows campaign, sponsor, location, status, bottles, scans, progress bar, QR code image, and download action.

### Redirect Links (`/admin/redirect-links`)
Global redirect URL management. Each entry maps a slug (e.g. `/masafi-summer`) to a destination URL, with status, unique scans, clicks, and CRUD actions.

---

## Campaign Creation (Admin) — 5 Steps

| Step | Content |
|---|---|
| Step 1 | Basics — campaign name, sponsor, quantity, start date, notes, status |
| Step 2 | Creative & CTA |
| Step 3 | Targeting |
| Step 4 | (in progress) |
| Step 5 | (in progress) |

---

## Shared Components

| Component | Purpose |
|---|---|
| `AnimatedPage` | Wraps every page with a fade+slide-up entrance (Framer Motion) |
| `AnimatedGrid` | Staggered grid entrance animation wrapper |
| `AnimatedCell` | Individual grid cell with entrance animation |
| `AnimatedTbody` | Table body with staggered row animations |
| `AnimatedRow` | Individual table row with entrance animation |
| `CampaignDetailTabs` | Tab navigation for campaign detail pages (admin) |
| `CampaignCreateSteps` | Step indicator for campaign creation wizard (admin) |
| `AuthFooter` | Shared footer for auth pages |

---

## Brand Colours

| Token | Hex | Usage |
|---|---|---|
| Brand Red (Admin) | `#D63839` | Admin portal primary |
| Brand Red (Sponsor) | `#B12B2C` | Sponsor portal primary |
| Background | `#FAFBFC` | App background |

---

## Running the Project

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
```
