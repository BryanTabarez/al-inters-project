
export const API_URL = '//api.themoviedb.org/3/';
export const API_KEY = '802cd9bec58e75474a66bfa717fd1106';
export const API_IMG = '//image.tmdb.org/t/p/w500';

// primary_release_date.asc, primary_release_date.desc, vote_count.asc, vote_count.desc
// revenue.asc, revenue.desc
export const SORTING_OPTIONS = [
  { id: 'popularity.desc', name: 'Popularity Descending' },
  { id: 'popularity.asc', name: 'Popularity Ascending' },
  { id: 'release_date.desc', name: 'Release Date Descending' },
  { id: 'release_date.asc', name: 'Release Date Ascending' },
  { id: 'original_title.desc', name: 'Title [A-Z]' },
  { id: 'original_title.asc', name: 'Title [Z-A]' },
  { id: 'vote_average.desc', name: 'Rating Descending' },
  { id: 'vote_average', name: 'Rating Ascending' }
];
