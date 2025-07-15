---
applyTo: '**'
---
# Land Rover Defender Workshop Manual - AI Agent Instructions

## Project Overview
This is a digital workshop manual for the Land Rover Defender 2.4 TDCi, converted from the original CD-ROM format. The project serves as both a static website and documentation repository containing PDFs, HTML pages, and technical manuals.

## Architecture & Structure

### Core Navigation Pattern
- **Main entry**: `index.htm` - Primary landing page with vehicle image and section links
- **Menu system**: `Menu/` directory contains category-specific navigation pages (`generalinfo.htm`, `chassis.htm`, etc.)
- **Content hierarchy**: `Workshop Manual/` follows numbered sections (1. General, 2. Chassis, 3. Powertrain, 4. Electrical, 5. Body and Paint)

### Dual Content Strategy
- **PDF preservation**: Original manufacturer PDFs maintained in root directories (`Service Bulletins/`, `Recalls/`, etc.)
- **HTML conversion**: Progressive migration to HTML in `Workshop Manual/` subdirectories with `index.html` files
- **Consistent styling**: Two CSS systems - `styles.css` (main navigation) and `Workshop Manual/styles.css` (content pages)

### Content Organization
- **Section numbering**: Workshop content uses Land Rover's official numbering (e.g., `100-00`, `412-03`)
- **Consistent navigation**: Right sidebar always contains full menu structure for cross-linking
- **Image assets**: 
    - Images in the navigation and general content are centralized in `Menu/images/` with consistent naming (`lr_defender_oldnew_450.jpg`)
    - Images for the Workshop Manual sections are stored in their respective subdirectories (e.g., `Workshop Manual/3. Powertrain/303 Engine/images/`)

## Critical Dependencies

### External References
- All PDF links target `_blank` for new window/tab opening
- All html pages target `_self` to maintain navigation context
- Relative paths used throughout - maintain directory structure when moving files
- Images sized consistently (450px width for main content images)

### Browser Compatibility
- HTML 4.01 Transitional DOCTYPE for maximum compatibility
- Table-based layouts (legacy CD-ROM design preserved)
- CSS classes: `.style1` (58px titles), `.style2` (36px), `.style3` (standard links), `.style4` (9px disclaimers)

## Development Workflow

### Styling Guidelines
- Use existing CSS class system rather than inline styles
- Maintain green theme (`#333300` background, `#FFFFFF` text)
- Red/orange link colors (`#FF0000` unvisited, `#FF9900` visited)
- Consistent disclaimer text in footer across all pages

## Common Tasks
- **Converting PDF to HTML**: Follow existing `Workshop Manual/1. General/general_information/index.html` structure
- **Adding new sections**: Update both navigation menus and readme.md progress tracking
- **Image integration**: Place in `Menu/images/` or section-specific `images/` directories
- **Cross-references**: Use relative paths and maintain the established linking patterns

## Testing Considerations
- Verify all relative links work when files are moved
- Check PDF links open in new tabs/windows
- Ensure image paths resolve correctly across different directory levels
- Test navigation consistency across all menu pages
