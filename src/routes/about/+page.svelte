<script>

import { env as public_env} from '$env/dynamic/public'

const getData = async () =>{
    const r = await fetch(public_env.PUBLIC_URL_API+'test',{
        method: 'GET',
        headers:{
            "Accept":"application/json"
        }
    });
    if(r.ok === true){
        return r.json();
    }
    throw 'Erreur lors du chargement.';
}

let messagePromise = getData();

</script>

<h1>about</h1>
{#await messagePromise}
	<h2>Loading....</h2>
{:then message}
	<h2>{message.message}</h2>
{:catch err}
	<h2>{err}</h2>
{/await}
