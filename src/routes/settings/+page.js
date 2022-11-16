import { env as public_env} from '$env/dynamic/public'

export const load = async ({ fetch }) =>{

    const fetchMessage1 = async () => {
        const message1 = await fetch(public_env.PUBLIC_URL_API+'test',{
            method: 'GET',
            headers:{
                "Accept":"application/json"
            }
        });
        if(message1.ok === true){
            return message1.json();
        }
        throw 'Erreur lors du chargement.';
    }

    const fetchMessage2 = async () => {
        const message2 = await fetch(public_env.PUBLIC_URL_API,{
            method: 'GET',
            headers:{
                "Accept":"application/json"
            }
        });
        if(message2.ok === true){
            return message2.json();
        }
        throw 'Erreur lors du chargement.';
    }

    return {
        message1 : fetchMessage1(),
        message2 : fetchMessage2()
    }
}
