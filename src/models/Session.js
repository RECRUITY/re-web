/* External dependencies */
import _ from 'lodash';

export default class Session {
  id = '';
  groupId = '';
  userId = '';
  role = '';

  constructor(args = {}) {
    Object.keys(args).forEach((key) => {
      if (_.has(this, key)) {
        this[key] = args[key];
      }
    });
  }

  getKey() {
    return this.id;
  }

  isEmpty() {
    return !this.id;
  }
}
