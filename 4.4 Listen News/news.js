/* 
Il newsEvent l'oggetto emette continuamente tre diversi eventi: newsEvent, breakingNews e error

Allega gli ascoltatori di eventi per ogni evento e disconnetti i loro dati.
 */

const { EventEmitter } = require("node:events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  // 1
  emitter.on("newsEvent", (newsEvent) => {
    console.log(newsEvent);
  });
  const newsEvent = setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  // 2
  emitter.on("breakingNews", (breakingNews) => {
    console.log(breakingNews);
  });
  const breakingNews = setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  // 3
  emitter.on("error", (error) => {
    console.log(error);
  });
  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
    clearInterval(newsEvent);
    clearInterval(breakingNews);
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();
