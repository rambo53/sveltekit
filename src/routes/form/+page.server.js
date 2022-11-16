import { env as public_env} from '$env/dynamic/public'
import { invalid } from '@sveltejs/kit';

function valideForm(formdata){
    const file = formdata.get('file');
    console.log(file)
    if(file.trim() == ""){
        return invalid(400,
            {error:true,
            message:"Pas de fichier choisit."}
        )
    }
}

function sendApi(formdata){
    console.log("j'envoie formdata")
    fetch(public_env.PUBLIC_URL_API+'file', {method: "POST", body: formdata});
}

export const actions = {
    send: async ({ request }) =>{
        const formdata = await request.formData();
        let errors = valideForm(formdata);

        if(errors?.data.error){
            return errors;
        }
        sendApi(formdata);
        return {
            success:true
        }
    }
}
