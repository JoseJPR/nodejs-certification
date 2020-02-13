/**
 * Description: Request to url with method GET and port 443 and received JSON object.
 */

/** Import generics dependences */
import https from 'https';
import 'pretty-console-colors';

// Create request method.
const req = https.request({
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos/1',
  method: 'GET',
}, (res) => {
  console.log('👉 Request   | Response ⤵️ ');
  console.log('👀 Response  | statusCode ⤵️ ', res.statusCode);
  console.log('👀 Response  | statusMessage ⤵️ ', res.statusMessage);

  // Get received content.
  res.on('data', (content) => {
    console.log('👀 Response  | data ⤵️ ', JSON.parse(content));
  });
  // Event close.
  res.on('close', () => {
    console.log('🚪 Response  | close 🏁');
  });
});

// Event error.
req.on('error', (e) => {
  console.log('❌ Request   | error', e.message);
});
// Event close.
req.on('close', () => {
  console.log('🚪 Request   | close 🏁');
});

// Send request.
req.end();
