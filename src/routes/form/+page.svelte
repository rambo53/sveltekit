<script>
    import { redirect } from '@sveltejs/kit';
    import { env as public_env} from '$env/dynamic/public'
    export let data;
    import Button from '../../lib/button.svelte';
    import {test} from './form.js'
    
    let texte = test()
    
    const { configs } = data;

    let files;

    const checkForm = async () => {
        const form = document.getElementById('form');
        let formdata = new FormData(form);
        
        let r = await fetch(public_env.PUBLIC_URL_API+'file', {method: "POST", body: formdata});
        let data = await r.json();
        if(data.status==200){
            form.reset();
        }
    }

</script>

<h1>form</h1>

<Button message="yolo depuis form!"/>

<h2>{texte}</h2>

<form id="form" method="post" on:submit|preventDefault={checkForm}>
    <label for="file">fichier :</label>
    <br>
    <input name="file" type="file" bind:files>
    <br>
    {#each configs as config}
        <p>{ config.name }</p>
    {/each}
    <button>send file</button>
</form>
