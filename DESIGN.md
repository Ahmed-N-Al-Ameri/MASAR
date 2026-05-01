# Design Brief

**Tone**: Professional, authoritative, data-driven enterprise SaaS. Inspires confidence in complex project oversight. No playful or decorative elements.

**Differentiation**: RTL-first architecture (Arabic: نظام مسار MASAR). Full Arabic language support. Sophisticated card layering with high information density. Enterprise-grade status indicators and contextual color-coding.

## Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary | 0.52 0.14 262 | Enterprise blue; primary actions, sidebar active state |
| Success | 0.68 0.12 142 | On-track projects, completion badges |
| Warning | 0.73 0.14 85 | At-risk, attention-needed indicators |
| Destructive | 0.55 0.18 25 | Overdue/delayed projects, critical alerts |
| Background | 0.98 0 0 | Main surface, light theme |
| Card | 1.0 0 0 | Elevated card surfaces |
| Neutral Gray | 0.92 0.02 0 | Secondary surfaces, muted text |

## Typography

| Layer | Font | Usage |
|-------|------|-------|
| Display | Inter 700 | Page titles, card headers, KPI labels |
| Body | Inter 400/500 | Body text, UI labels, Arabic RTL text |
| Mono | GeistMono 400 | Financial figures, timestamps, project codes |

**Scale**: 12px, 14px, 16px, 18px, 20px, 24px (optimized for 4K desktop viewing).

## MASAR Dashboard Structure

| Zone | Components | Details |
|------|-----------|---------|
| Top Header | Logo, system name, search bar, notifications, user menu, logout | Fixed height (64px), bg-card, border-b-border, RTL-aligned |
| Sidebar | 11-item navigation, active indicator | Right-aligned RTL (256px), bg-sidebar, items: Home, Adv Search, Project Data, Documents, Financials, Reports, Statistics, Timelines, Committees, Updates, Admin |
| KPI Grid | 7 metric cards | Responsive 1-4 col grid, 16px gap, 4K: ~6 col. Cards: icon + count + Arabic label |
| Chart Section | 4 data visualizations | Project distribution pie, status breakdown bar, budget vs spend, timeline preview |
| Alerts Section | Latest warnings, updates | Card-based list, color-coded by status (green/amber/red) |

## Elevation & Depth

Card-based layout with three surface levels: background (0.98), card (1.0), elevated/popover (1.0 + shadow-md). Shadows: `shadow-sm` for cards, `shadow-md` for modals. KPI cards use `shadow-card` utility with hover elevation.

## Spacing & Rhythm

Base unit: 4px. KPI card padding: 20px. Gap between cards: 16px. Section margins: 24px top/bottom. 4K optimization: max-content width ~1800px, generous padding for readability.

## Component Patterns

**KPI Cards** (`.kpi-card`): Icon + large count + Arabic label + optional status badge. **Status Badges** (`.badge-success`, `.badge-warning`, `.badge-destructive`): Semantic colors, 8px border-radius. **Status Indicators** (`.status-indicator`): 8px dot, inline with text. **Data Tables**: Zebra striping via `bg-muted/30`. **Charts**: `recharts` library, solid colors only (no gradients).

## Motion

Entrance: 0.3s ease-out fade. Hover: KPI cards lift (shadow-card → shadow-elevated). Interaction: 0.2s cubic-bezier(0.4, 0, 0.2, 1). No bounce animations.

## RTL Support

HTML: `lang="ar" dir="rtl"`. All flex/grid/margin utilities auto-flip via Tailwind. Icons: `lucide-react` auto-mirror. Text: `text-right` for Arabic, `text-left` for numbers/English. Sidebar on right, content flows right-to-left.

## Constraints

No blur effects, no full-page gradients, no decorative overlays. Data and status indicators are the focal point. AA+ contrast both light and dark. Touch targets: min 44px. Minimum font size: 12px (mono data); 14px body text.

## Signature Detail

Enterprise-grade status dashboard with contextual color-coding by project health. KPI cards emphasize key metrics (total, in-progress, overdue, delayed, completed, pending, reports). Charts use corporate blue + semantic status colors. Professional, zero decoration.
