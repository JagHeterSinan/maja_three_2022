import { invalid, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as database from '$lib/database'


export const actions: Actions = {
	login: async ({ request, locals, cookies }) => {
		const form = await request.formData();
		
	const client = await database.connect(); // Connect to the mongoDB
    const db = client.db('test'); // select test db
    const collection = db.collection('users'); // select users collection

    
		
		// TODO: Implement login
		// Check if password and username
		// exists and is correct
        let result = await collection.findOne({"username":form.get("username"),"password":form.get("password")});
		if (!result){
            return invalid(400, { message: "username or password is invalid, try again" })
        }


        else{
            cookies.set('userid', result._id.toString(), {
                path: '/',
                httpOnly: true, // optional for now
                sameSite: 'strict',// optional for now
                secure: process.env.NODE_ENV === 'production',// optional for now
                maxAge: 86400//
            })
			throw redirect(302, '/')
        }
	}
}