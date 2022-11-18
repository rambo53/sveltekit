<script>
    export let data;
    import Button from '../../lib/button.svelte';
    import {test} from './form.js'
    
    let texte = test()
    
    const { configs } = data;
</script>

<h1>form</h1>

<Button message="yolo depuis form!"/>

<h2>{texte}</h2>

<form method="post" action="?/send">
    <label for="file">fichier :</label>
    <br>
    <input name="file" type="file">
    <br>
    {#each configs as config}
        <p>{ config.name }</p>
    {/each}
    <button>send file</button>
</form>
