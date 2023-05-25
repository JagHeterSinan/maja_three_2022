import type { Handle } from '@sveltejs/kit';

// handle runs for every request to the server
export const handle: Handle = async ({ event, resolve }) => {

	let userid = event.cookies.get('userid');
	let mfa = event.cookies.get('mfa');


	if (userid) {
		event.locals.userid = userid;
	}

	if (mfa){
		event.locals.mfa = true
	}

	return resolve(event);
};

