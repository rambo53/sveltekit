<script>
    import { env as public_env} from '$env/dynamic/public';
    import { goto } from '$app/navigation';
    import { userStore } from '../../store.js';

    const checkForm = async () => {
        const form = document.getElementById('formAuth');
        let formdata = new FormData(form);
        const user = {
            id :formdata.get("id"),
            password:formdata.get("password")
        }
        
        let r = await fetch(public_env.PUBLIC_URL_API+'authenticate', 
        {
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "Content-type":"application/json; charset=UTF-8",
                "Accept":"application/json"
            }
        });
        let data = await r.json();
        if(data.status==200){
            console.log("ok auth");
            userStore.update(($u) => $u = { role: 'admin', token: data.token })
            console.log($userStore)

            form.reset();
            goto("/");
        }
    }
</script>

<h1>Authenticate</h1>

<form id="formAuth" method="post" on:submit|preventDefault={checkForm}>
    <label for="id">identifiant :</label>
    <br>
    <input name="id" type="texte">
    <br>
    <label for="id">password :</label>
    <br>
    <input name="password" type="texte">
    <br>

    <button>Go</button>
</form>
