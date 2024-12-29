// 3rd.js
const staticWebsiteContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Static Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
        }
        main {
            padding: 20px;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to the Static Website</h1>
    </header>
    <main>
        <p>This is a static website served from the 3rd JS file.</p>
    </main>
    <footer>
        <p>&copy; 2024 Static Website</p>
    </footer>
    <script>
        console.log("Static website loaded successfully!");
    </script>
</body>
</html>
`;
export { staticWebsiteContent };
