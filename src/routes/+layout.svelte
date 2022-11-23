<script>
	import { onMount } from 'svelte';
    import publicRoutes from "$lib/data.json";

    let userRole = Boolean();

	onMount(async () => {
        console.log(publicRoutes)
        console.log(document.cookie)
        let cookie = () =>{
            let valCookie;
            document.cookie.split(';').forEach(function(el){
                let [key,value] = el.split('=');
                if(key.trim() === 'admin'){
                    valCookie = value
                }
            })
            return valCookie
        }
        userRole = Boolean(cookie());
	});
</script>

<nav>
    <a href="/">Home</a>
    {#if userRole}
        <a href="/about">simple fetch</a>
        <a href="/settings">multiple fetch</a>
        <a href="/form">form</a>
        <a href="/create">create</a>
    {/if}
    <a href="/authenticate">authenticate</a>
</nav>

<main>
    <slot></slot>
</main>
