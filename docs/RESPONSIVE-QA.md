# TermStack Responsive QA

## Goal

Verify that TermStack remains readable, usable, and visually calm across common screen sizes.

## Test Widths

| Width | Device Type | Priority |
|---|---|---|
| 320px | Small mobile | High |
| 390px | Modern mobile | High |
| 560px | Large mobile | High |
| 768px | Tablet | Medium |
| 1024px | Small desktop | Medium |
| 1440px | Desktop | Medium |

## Homepage Checklist

- Page does not horizontally overflow
- Hero title remains readable
- Intro text remains readable
- Theme toggle is reachable
- Category filters remain usable
- Search input does not overflow
- Result count is visible
- Accordion cards feel tappable
- Definitions are readable
- Empty state works cleanly

## Post Page Checklist

- Back link is visible
- Theme toggle is visible
- Article title scales well
- Article summary remains readable
- Paragraph line length is comfortable
- Lists are readable
- Markdown tables do not break layout
- Table can scroll horizontally when needed
- No content is clipped

## Interaction Checklist

- Buttons have enough tap area
- Focus states remain visible
- Hover effects do not make mobile feel jumpy
- Reduced-motion preference is respected
- Dark mode still works
- Light mode still works

## Phase 07 Pass Criteria

Phase 07 passes when the site is usable and visually stable at 320px, 390px, 560px, 768px, and desktop widths.

## QA Notes

| Width | Issue | Status |
|---|---|---|
| 390px | Markdown table clipped the Purpose column on the Content Modeling post | Fixed with dedicated `.markdown-table-wrap` horizontal scroll container |
