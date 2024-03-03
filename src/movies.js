import {
  renderApp,
  addMovieToList,
  inputSearch,
  clearMoviesMarkup,
  triggerMode
} from "./dom.js";

let searchLast = null;
const debounceTime = (() => {
  let timer = null;
  return (cb, ms) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }

    timer = setTimeout(cb, ms);
  };
})();
const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data || !data.Search) throw Error("No data found");
      return data.Search;
    });

const inputSearchHandler = (e) => {
  debounceTime(() => {
    const searchString = e.target.value.trim();
    if (searchString.length < 4 || searchString === searchLast) return;
    if (!triggerMode) clearMoviesMarkup();

    getData(`http://www.omdbapi.com/?apikey=4e0d48f7&s=${searchString}`)
      .then((data) => data.forEach((movie) => addMovieToList(movie)))
      .catch((err) => console.log(err));
    searchLast = searchString;
  }, 1000);
};

export const appInit = () => {
  renderApp();
  inputSearch.addEventListener("input", inputSearchHandler);
};
