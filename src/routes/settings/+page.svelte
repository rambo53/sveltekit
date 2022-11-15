<script>

fetch('http://127.0.0.1:5000',{
  method: 'GET',
})
  .then((response) => response.json())
  .then((data) => console.log(data));

</script>

<h1>settings</h1>

<form method="POST" action="/about">
    <input name="text" type="text">
    <input name="password" type="password">
    <button>Log in</button>
</form>