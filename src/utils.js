export const headStyle = `
  * {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

body {
  font-family: "Titillium Web", sans-serif;
  margin: 0;
  background:  #020626;
  color: white;
}

h1 {
  display: flex;
  justify-content: center;
  letter-spacing: 2.5px;
  font-weight: 300;
  font-size: 60px;
  margin-bottom: 25px;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}

.container {
  width: min(100% - 40px,1280px);
  margin-inline:auto;
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.movie {
  display: flex;
  align-content: center;
  justify-content: center;
}

.movie__img {
  width: 100%;
  object-fit: cover;
  display: block;
  min-width: 100%;
  box-shadow: 0 0 5px rgb(93, 93, 93);
  transition: 0.3s linear;
  cursor: pointer;
  overflow: hidden;
}

.movie__img:hover {
  transform: scale(1.05);
}

.search {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}

.search__label--input {
  display: block;
  margin-bottom: 7px;
}

.search__input {
  width: 100%;
  max-width: 400px;
  padding: 9px 13px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
  background-color: rgb(234, 234, 234);
}

.search__input:focus-within{
    box-shadow: 0px 0px 4px 2px rgb(238, 170, 67);
}

.search__label--checkbox {
  font-size: 16px;
  user-select: none;
}

.serach__group--input {
  margin-bottom: 7px;
}
.search__group--checkbox {
 display: flex;
  gap: 5px;
  align-items: center;
}

@media (max-width:680px) {
 .search {
  align-content:  flex-start;
}
}
`;
