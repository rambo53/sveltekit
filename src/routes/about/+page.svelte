<script>

    fetch('http://127.0.0.1:5000/test',{
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    
    </script>

<h1>about</h1>