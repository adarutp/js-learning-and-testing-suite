<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async Data Fetching</title>
</head>
<body>
    <button onclick="fetchData()">Fetch Data</button>
    <script>
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            alert('Data fetched: ' + JSON.stringify(data));
        }
    </script>
</body>
</html>
