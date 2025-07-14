---
applyTo: '**'
---


# Converting PDF to HTML workflow
1. When a PDF is provided, create a subdirectory with the same name, lowercased and wihtout spaces
2. Create HTML version in appropriate `Workshop Manual/` subdirectory with the name `index.html`
3. Use the HTML template structure provided to convert all the PDF content to HTML format, this is a 1 to 1 copy, do not reinterpret the content or change the structure. Conver all the tables as they are. Leve container elements empty for the images which I will create later
4. Ubdate navigation links in relevant `Menu/*.htm` file from the PDF to the converted HTML
5. Update checklist in `readme.md` 
6. Preserve original PDF in the same subfolder as the intex.html file

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
    <!-- Titles -->
    <!-- Paragraphs with content -->
    <!-- Tables with content -->
    <!-- Pagination: Page 3 -->
    <!-- Image containers -->
    <div class="image-container">
        <img src="images/E48627.PNG" alt="Bolt and Nut Identification Symbols">
        <div class="caption">Image Caption and ID number here</div>
    </div>
    <!-- Caution Messages -->
    <div class="caution">
        <p><img src="../../images/caution_symbol.PNG" alt="Caution"><strong>CAUTION:</strong>Caution text here</p>
    </div>
    <!-- Warning Messages -->
    <div class="warning">
        <p><img src="../../images/warning_symbol.PNG" alt="Warning"><strong>WARNING:</strong> Warning Message here</p>
    </div>
    </table>
</div>
```