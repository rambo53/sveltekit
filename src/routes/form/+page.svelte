<script>
    export let form;
</script>

<h1>form</h1>

<form method="post" action="?/send">
    <label for="file">fichier :</label>
    <br>
    <input name="file" type="file">
    {#if form?.error}<span>{form?.message}</span>{/if}
    <br>
    <button>send file</button>
</form>
