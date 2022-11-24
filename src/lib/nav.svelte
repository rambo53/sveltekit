<script>
    import publicRoutes from "$lib/data.json";
    import { userStore } from '../store.js';

    console.log("from navbar")
    console.log($userStore)

    $:userRole = $userStore.role == 'admin'? true:false;

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
