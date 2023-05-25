import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import * as database from '$lib/database'
import { ObjectId } from 'mongodb';

export const actions: Actions = {
	logout: async ({ request, locals, cookies }) => {
		const form = await request.formData();

		// TODO: Implement register
		// Check if ustername already exist etc.
		cookies.delete('userid')
		cookies.delete('mfa')
		throw redirect(302, '/login')

	},
	deleteaccount: async ({ request, locals, cookies }) => {
		const form = await request.formData();

		// TODO: Implement delete account
		// Check if ustername already exist etc.

		const client = await database.connect(); // Connect to the mongoDB
		const db = client.db('test'); // select test db
		const collection = db.collection('users'); // select users collection

		console.log(locals)

		const account = await collection.deleteOne({ _id: new ObjectId(locals.userid)});

		if (account.acknowledged && account.deletedCount) {
			cookies.delete('userid')
			cookies.delete('mfa')
			throw redirect(302, '/register')
		}

	},
};
