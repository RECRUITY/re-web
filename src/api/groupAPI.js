/* Internal dependencies */
import reFetch from './reFetch';

export const create = group => reFetch.post('/groups', group);
