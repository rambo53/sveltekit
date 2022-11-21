import { env as public_env} from '$env/dynamic/public';

export const load = async ({ fetch }) =>{
    const config = await fetch(public_env.PUBLIC_URL_API+'config',{
        method: 'GET',
        headers:{
            "Accept":"application/json"
        }
    });
    if(config.ok === true){
        return config.json();
    }
    throw 'Erreur lors du chargement.';
}
