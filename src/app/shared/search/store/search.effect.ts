import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { Tour } from '../../../tour/tour.model';
import { SearchService } from '../search.service';
import * as SearchActions from './search.action';

@Injectable()
export class TourEffects {
    @Effect()
    searchTourByAddressAndDate$: Observable<Action> = this.actions$.pipe(
        ofType(SearchActions.ON_SEARCH_TOUR_BY_ADDRESS_AND_DATE),
        switchMap((action: SearchActions.OnSearchTourByAddressAndDate) =>
            this.searchService.searchTourByAddressAndDate(action.payload.from, action.payload.to, action.payload.date)
                .pipe(
                    map((tours: Tour[]) => new SearchActions.SearchTourByAddressAndDate(tours))
                )
        )
    )

    constructor(private actions$: Actions,
        private searchService: SearchService) { }
}
