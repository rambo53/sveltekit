import { env as public_env} from '$env/dynamic/public'
/*

Exemple avec un SSR (server side rendering)

*/
export const load = async ({ fetch }) =>{
    const r = await fetch(public_env.PUBLIC_URL_API+'test',{
        method: 'GET',
        headers:{
            "Accept":"application/json"
        }
    });
    if(r.ok){
        return r.json();
    }
    throw 'Erreur lors du chargement.';
}
