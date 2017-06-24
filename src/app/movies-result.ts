import { Movie } from './movie';

// sample: page: 1, total_results: 314632, total_pages: 15732, results: Array(20)
export class MoviesResult {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<Movie>;
}