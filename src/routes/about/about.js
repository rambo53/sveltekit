import { env as public_env} from '$env/dynamic/public'

/*
Exemple avec un CSR (client side rendering)
*/ 

export async function dataAbout(){
    const r = await fetch(public_env.PUBLIC_URL_API+'test',{
        method: 'GET',
        headers:{
            "Accept":"application/json"
        }
    })
    if(r.ok){
        return r.json();
    }
    else{
        throw 'Erreur lors du chargement.';
    }       
}
