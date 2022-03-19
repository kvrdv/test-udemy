'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = +prompt('How many movies have you seen so far?', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How many movies have you seen so far?', '');
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('One of the last movies you saw?', ''),
        b = prompt('How much would you rate it?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Watch quite a few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('You are a classic viewer');
    } else if (personalMovieDB.count >= 30) {
      console.log('You are a movie buff');
    } else {
      console.log('An error occurred');
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 0; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Your favorite genre by number is ${i}`);
    }
  },
};
