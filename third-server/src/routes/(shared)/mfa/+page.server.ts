import { invalid, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as database from '$lib/database'
import { element } from 'svelte/internal';
import { ObjectId } from 'mongodb';
export const load: PageServerLoad = async ({ locals }) => {

	if (!locals.userid) {
		throw redirect(302, '/login')
	}

    if(locals.mfa){
        throw redirect(302,'/')
    }

    const client = await database.connect(); // Connect to the mongoDB
    const db = client.db('test'); // select test db
    const collection = db.collection('users'); // select users collection

    const result = await collection.findOne({_id: new ObjectId(locals.userid)});
    const users:Array<{mfa:string}> = [];
    
    if(result?._id)
        return {mfa:result.mfa}
    
}

export const actions: Actions = {
	authenticate: async ({ request, locals, cookies }) => {
		const form = await request.formData();
        const mfa = form.get("mfa")?.toString()
		
	const client = await database.connect(); // Connect to the mongoDB
    const db = client.db('test'); // select test db
    const collection = db.collection('users'); // select users collection

		// TODO: Implement login
		// Check if password and username
		// exists and is correct
		if (!mfa || !await collection.findOne({mfa})){
            return invalid(400, { message: "MFA INVALID" })
        }
        else{
            cookies.set('mfa', 'mfa', {
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