const component = require("./component.js");

//bring in the components (initials, shape)

function createDocument(component =[]) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Created Logo</title>
</head>
<body>
${component}
</body>
</html>`
}

module.exports = { createDocument };