import { env as public_env} from '$env/dynamic/public'

export const load = async ({ fetch }) =>{
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
