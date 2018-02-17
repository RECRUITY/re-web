/* Internal dependencies */
import reFetch from './reFetch';

const ping = () => reFetch.get('/maintenance/ping');

export default {
  ping,
};
