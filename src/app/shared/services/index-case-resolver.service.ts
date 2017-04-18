import {Injectable}             from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {DataService} from './data.service';
import {IndexCase} from '../../index-case';

@Injectable()
export class IndexCaseResolver implements Resolve<IndexCase> {
  constructor(private us: DataService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IndexCase> {
    let id = +route.params['id'];
    return this.us.getIndexCase(id).then(indexCase => {
      if (indexCase) {
        return indexCase;
      } else { // id not found
        this.router.navigate(['/index-cases']);
        return null;
      }
    });
  }
}
