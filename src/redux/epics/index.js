/* External Dependencies */
import { combineEpics } from 'redux-observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

/* Internal Dependencies */
import managerEpics from './managerEpics';

export default combineEpics(managerEpics);
