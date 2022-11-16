<script>
    export let data
    let messagePromise = data;
</script>

<h1>simple fetch</h1>
{#await messagePromise}
	<h2>Loading....</h2>
{:then message}
	<h2>{message.message}</h2>
{:catch err}
	<h2>{err}</h2>
{/await}
