import { headStyle } from "./utils.js";

let moviesList = null;
export let inputSearch = null;
export let triggerMode = false;

const createElement = ({
  tag = "div",
  attrs = {},
  container = null,
  position = "append",
  event = null,
  handler = null
}) => {
  const element = document.createElement(tag);

  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "innerHTML") {
      element.innerHTML = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  if (container && position === "prepend") {
    container.prepend(element);
  }
  if (container && position === "append") {
    container.append(element);
  }

  if (event && handler && typeof handler === "function") {
    element.addEventListener(event, handler);
  }

  return element;
};

const createStyle = () => {
  createElement({
    tag: "style",
    attrs: { innerHTML: headStyle },
    container: document.head
  });
};

const createMarkup = () => {
  //div.container
  const container = createElement({
    attrs: { class: "container" },
    container: document.body,
    position: "prepend"
  });
  //h1
  createElement({
    tag: "h1",
    attrs: { innerHTML: "Live search application" },
    container
  });
  //div.search
  const searchBox = createElement({
    attrs: { class: "search" },
    container
  });
  //div.search__group.search__group--input
  const inputBox = createElement({
    attrs: { class: "search__group search__group--input" },
    container: searchBox
  });
  //label.search__label--input
  createElement({
    tag: "label",
    attrs: {
      class: "search__label--input",
      for: "search",
      innerHTML: "Movie search"
    },
    container: inputBox
  });
  //input.search__input
  inputSearch = createElement({
    tag: "input",
    attrs: {
      class: "search__input",
      id: "search",
      type: "search",
      placeholder: "Type movie name"
    },
    container: inputBox
  });

  // div.search__group.search__group--checkbox
  const checkBox = createElement({
    attrs: { class: "search__group search__group--checkbox" },
    container: searchBox
  });
  //input.search__checkbox
  createElement({
    tag: "input",
    attrs: {
      class: "search__checkbox",
      id: "checkbox",
      type: "checkbox"
    },
    container: checkBox,
    event: "click",
    handler: (e) => {
      triggerMode = !triggerMode;
    }
  });
  //label.search__label--checkbox
  createElement({
    tag: "label",
    attrs: {
      class: "search__label--checkbox",
      for: "checkbox",
      innerHTML: "Add movies to the list"
    },
    container: checkBox
  });
  //div.movies
  moviesList = createElement({
    attrs: { class: "movies" },
    container
  });
};
export const addMovieToList = (movie) => {
  //div.movie
  const item = createElement({
    attrs: {
      class: "movie"
    },
    container: moviesList,
    position: "prepend"
  });
  //img
  createElement({
    tag: "img",
    attrs: {
      class: "movie__img",
      src: /(http|https):\/\//i.test(movie.Poster)
        ? movie.Poster
        : "assets/img/placeholder.jpg",
      alt: `${movie.Title} ${movie.Year}`,
      title: `${movie.Title} ${movie.Year}`
    },
    container: item
  });
};
export const clearMoviesMarkup = () =>
  moviesList && (moviesList.innerHTML = "");

export const renderApp = () => {
  createMarkup();
  createStyle();
};
