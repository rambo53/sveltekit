<script>
	
	/* ici j'utilise le ssr avec un import auto des data chargés depuis
	mon "+page.js"
	*/
	export let data;
	let messagePromise = data;

	/* ici j'utilise le csr avec un import des data depuis
	mon "about.js" avec la fonction dataAbout

    import {dataAbout} from './about.js'
	let messagePromise = dataAbout();
	*/
	
	import Button from '../../lib/button.svelte';

</script>

<h1>simple fetch</h1>

<Button message="yolo!"/>

{#await messagePromise}
	<h2>Loading....</h2>
{:then message}
	<h2>{message.message}</h2>
{:catch error}
	<h2>{error}</h2>
{/await}
