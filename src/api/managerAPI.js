/* Internal dependencies */
import reFetch from './reFetch';

export const getMe = () => reFetch.get('/managers/me');

export const signIn = manager => reFetch.post('/managers/signin', manager);

export const signUp = manager => reFetch.post('/managers/signup', manager);

export const signOut = () => reFetch.delet('/managers/signout');
