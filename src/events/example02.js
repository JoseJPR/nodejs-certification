/**
 * Description: Define arguments and show.
 */

/** Import generics dependences */
import EventEmitter from 'events';
import 'pretty-console-colors';

// Define variables
const myEmitters = {};

// Define generic function for add emitter.
const addEmitter = (name) => {
  myEmitters[name] = new EventEmitter();
};

// Add emitter and define Event and launch.
addEmitter('profile');
myEmitters.profile.on('event', (profile) => {
  console.log('[launchEventProfile] profile object', profile);
});
const launchEventProfile = (firstName, lastName) => {
  myEmitters.profile.emit('event', { firstName, lastName });
};
launchEventProfile(
  'Jhon',
  'Doe',
);

// Define Event wait 1 second and lanuch.
addEmitter('article');
myEmitters.article.on('event', (article) => {
  console.log('[launchEventArticle] article object', article);
});
const launchEventArticle = (title, excerpt) => {
  myEmitters.article.emit('event', { title, excerpt });
};
launchEventArticle(
  'Title article',
  'Excerpt article',
);
