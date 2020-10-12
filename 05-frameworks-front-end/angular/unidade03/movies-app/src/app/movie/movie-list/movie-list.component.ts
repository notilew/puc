import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

    public movies: any[];
    private movieServiceSubscription: Subscription

    constructor(
        private movieService: MovieService
    ) { }

    ngOnInit() {
        this.movies = [];

        this.movieServiceSubscription =
            this.movieService.getPopularMovies().subscribe((movies: any[]) => {
                this.movies = movies;
            });
    }

    ngOnDestroy() {
        this.movieServiceSubscription.unsubscribe();
    }

}
