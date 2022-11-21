import { env as public_env} from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    // todo
}

export const actions = {
    auth: async ({ request }) =>{
        const formdata = await request.formData();
        console.log(formdata)
        throw redirect(307, '/');
    }
}