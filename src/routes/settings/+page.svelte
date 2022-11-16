<script>
    export let data
    let message1 = data.message1;
    let message2 = data.message2;

</script>

<h1>multiple fetch</h1>

<p>{ message1.message }</p>
<p>{ message2.message }</p>

<form method="POST" action="/about">
    <input name="text" type="text">
    <input name="password" type="password">
    <button>Log in</button>
</form>
