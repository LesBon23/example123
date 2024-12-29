// 2nd.js
async function getStaticWebsite() {
    try {
        const response = await fetch('https://lesbon23.github.io/example123/ghi.js');
        const scriptText = await response.text();

        // Evaluate the script to access exported content
        const module = new Function(scriptText + " return { staticWebsiteContent };")();
        return module.staticWebsiteContent;
    } catch (error) {
        console.error("Error fetching static website content:", error);
        return "<p>Error loading static website content.</p>";
    }
}

export { getStaticWebsite };
