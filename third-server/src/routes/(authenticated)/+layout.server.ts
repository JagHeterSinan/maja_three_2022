import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';


export const load: LayoutServerLoad = async ({ locals, cookies }) => {



    if (locals.userid) {

        // we have logged in but not passed the mfa
        if(!locals.mfa){
            throw redirect(302,'/mfa')
        }

        return {
            userid: locals.userid,
        }
    } else {
        throw redirect(302, '/login')
    }

}