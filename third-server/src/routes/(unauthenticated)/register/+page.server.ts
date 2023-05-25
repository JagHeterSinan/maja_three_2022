import type { Actions } from './$types';
import * as database from '$lib/database'
import { invalid, redirect } from '@sveltejs/kit';

export const actions: Actions = {
    register: async ({ request, locals }) => {
    const form = await request.formData();

    const username = form.get("username")?.toString()
    const password = form.get("password")?.toString()
    const gender = form.get("gender")
    
    var passwordMinLength = 4
    var passwordMaxLength = 8

    if(!username || !password){
        return invalid(400,{error: "You need to create a username and password"})
    }

 //   if(password.length < passwordMinLength){
   //     return invalid(400,{error: "Password is too short, try again"})
    //}

  //  if(password.length > passwordMaxLength){
    //    return invalid(400,{error: "Password is too short, try again"})
    //}

    const client = await database.connect(); // Connect to the mongoDB
    const db = client.db('test'); // select test db
    const collection = db.collection('users'); // select users collection

    if(await collection.findOne({"username":form.get("username")})){
        return invalid(400,{message: "Username already exists, try another one"})
    }
   
    const result = await collection.insertOne({ username, password, gender, mfa:crypto.randomUUID().toString().slice(0,5)});

    if(result.acknowledged){
        throw redirect(302,'/login')
    }

        // TODO: Implement register
        // Check if username already exist etc.
        

    },
};