/**
 * Description: Extends class EventEmitter and create main scope with custom properties.
 */

/** Import generics dependences */
import EventEmitter from 'events';
import 'pretty-console-colors';

// Create class MyEmitter and include custom properties.
class MyEmitter extends EventEmitter {
  constructor(properties) {
    super();
    this.properties = properties;
  }

  setProperties(properties) {
    this.properties = properties;
  }

  getProperties() {
    return this.properties;
  }
}

// Define emitter.
const myEmitter = new MyEmitter({ firstName: 'Any', lastName: 'Other' });

// Add emitter and define Event and launch.
myEmitter.on('event', (profile) => {
  console.log('[launchEventProfile] myEmitter.properties', myEmitter.properties);
  console.log('[launchEventProfile] myEmitter.setProperties', myEmitter.setProperties(profile));
  console.log('[launchEventProfile] myEmitter.properties', myEmitter.properties);
  console.log('[launchEventProfile] myEmitter.getProperties', myEmitter.getProperties());
});
const launchEventProfile = (firstName, lastName) => {
  myEmitter.emit('event', { firstName, lastName });
};
launchEventProfile(
  'Jhon',
  'Doe',
);
