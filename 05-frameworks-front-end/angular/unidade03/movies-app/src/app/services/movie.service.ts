import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    public APIKey: string;

    constructor(
        private httpClient: HttpClient
    ) {
        this.APIKey = '23557ab5c46f8700d662f99dbd7c8b6d';
    }

    private withBaseUrl(path: string) {
        return `https://api.themoviedb.org/3/${path}?api_key=${this.APIKey}`;
    }

    getPopularMovies() {
        return this.httpClient.get(this.withBaseUrl('movie/popular')).pipe(map((response: any) => response.results));
    }

    getMovie(id: string) {
        return this.httpClient.get(this.withBaseUrl(`movie/${id}`));
    }

}
