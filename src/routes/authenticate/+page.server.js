import { env as public_env} from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    // todo
}

export const actions = {
    auth: async ({ request}) =>{
        const formdata = await request.formData();
        console.log(formdata);
        const user = {
            id :formdata.get("id"),
            password:formdata.get("password")
        }
        console.log(JSON.stringify(user));
        fetch(public_env.PUBLIC_URL_API+"authenticate", {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                "Content-type":"application/json; charset=UTF-8",
                "Accept":"application/json"
            }
        })
        throw redirect(307, '/');
    }
}
