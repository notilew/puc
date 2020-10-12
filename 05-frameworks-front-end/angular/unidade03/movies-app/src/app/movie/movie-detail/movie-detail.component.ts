import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

    public movieId: string;
    public movie: any;
    private activatedRouteSubscription: Subscription;
    private movieServiceSubscription: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private movieService: MovieService
    ) { }

    ngOnInit() {
        this.movie = {};
        
        this.activatedRouteSubscription =
            this.activatedRoute.paramMap.subscribe((param) => {
                this.movieId = param.get('id');

                this.movieServiceSubscription =
                    this.movieService.getMovie(this.movieId).subscribe((movie: any) => {
                        this.movie = movie;
                    });
            });
    }

    ngOnDestroy() {
        this.activatedRouteSubscription.unsubscribe();
        this.movieServiceSubscription.unsubscribe();
    }

}
