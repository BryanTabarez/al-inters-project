export class Genre {
    id: number;
    name: string;
}

export class Movie {
    id: number;
    genres: Array<Genre>;
    imdb_id: string;
    original_languaje: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
}
