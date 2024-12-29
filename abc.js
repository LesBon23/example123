// 1st.js
import { getStaticWebsite } from 'https://lesbon23.github.io/example123/def.js';

async function displayStaticWebsite() {
    try {
        const staticContent = await getStaticWebsite();
        document.open(); // Clear the existing page content
        document.write(staticContent); // Write the static website content
        document.close();
    } catch (error) {
        console.error("Error displaying static website:", error);
    }
}

displayStaticWebsite();
