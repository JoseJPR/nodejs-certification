/**
 * NotFound Route
 */

export default class NotFound {
  all(request, response) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    const result = JSON.stringify({
      status: 'No Found',
    });
    response.end(result, 'utf8', () => {
      console.log('👀 Response | End ⤵️');
    });
  }
}
