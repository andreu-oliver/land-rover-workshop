function loadFooter() {
    const footerHtml = `
        <div class="grid-footer">
            <p class="style2">2.4TDCi</p>
            <p class="style2">Workshop Manual</p>
            <p class="style4">Info: This manual is for reference only, no liability for any inaccuracies, omissions or errors shall be taken - if in doubt please check with an appropriate expert before action - assume information contained is not verified or accurate and requires expertise to use or understand information contained. If this is not acceptable do not use the data contained - you do so at your risk.</p>
        </div>
    `;
    document.getElementById('footer-container').innerHTML = footerHtml;
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFooter);
