---
applyTo: '**/*.pdf'
---
# Converting PDF to HTML workflow
1. When a PDF is provided, create a subdirectory with the same name, lowercased and without spaces
2. Create HTML version in appropriate `Workshop Manual/` subdirectory with the name `index.html`
3. Use the HTML template structure provided to convert all the PDF content to HTML format, this is a 1 to 1 copy, do not reinterpret the content or change the structure. Convert all the tables as they are. Leve container elements empty for the images which I will create later
4. Ubdate navigation links in relevant `Menu/*.htm` file from the PDF to the converted HTML
5. Update checklist in `readme.md`

# HTML Template Structure
All navigation pages follow this pattern:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Land Rover Service Manual</title>
    <link rel="stylesheet" type="text/css" href="../../styles.css">
</head>
<body>
    <!-- PDF content -->
</div>
```

# Conversion rules

- When you find an image in the PDF, apply this template:
```html
<!-- Image containers -->
<div class="image-container">
    <img src="images/E48627.PNG" alt="Bolt and Nut Identification Symbols">
    <div class="caption">Image Caption and ID number here</div>
</div>
```
- When you find a CAUTION message in the PDF, apply this template:
```html
    <!-- Caution Messages -->
<div class="caution">
    <p><img src="../../images/caution_symbol.PNG" alt="Caution"><strong>CAUTION:</strong>Caution text here</p>
</div>
```
- When you find a WARNING message in the PDF, apply this template:
```html
    <!-- Warning Messages -->
<div class="warning">
    <p><img src="../../images/warning_symbol.PNG" alt="Warning"><strong>WARNING:</strong> Warning Message here</p>
</div>
```
- When you find a NOTE message in the PDF, apply this template:
```html
<div class="note">
    <strong>NOTE:</strong> Note text here.
</div>
```
- When you have table in the pdf, keep in in a <table> element. Apply `class="data-table"` for consistent styling

# Image Naming Rules
- Use original image IDs from PDF when available (e.g., `E48627.PNG`)
- If no ID exists, use descriptive names: `section_topic_number.PNG`
- Maintain original file extensions (.PNG, .JPG, .GIF)
- Store in `images/` subdirectory within the section folder

# Quality Control Checklist
- [ ] All text properly converted (no garbled characters)
- [ ] Table structure preserved with correct alignment
- [ ] All images have placeholder containers with proper alt text
- [ ] Navigation links functional and point to correct sections
- [ ] CSS classes applied correctly (caution, warning, note, image-container)
- [ ] Page numbering maintained in pagination comments