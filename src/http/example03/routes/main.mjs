/**
 * Main Route
 */

class Main {
  url() {
    return '/';
  }

  get(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const result = JSON.stringify({
      status: 'OK',
      result: 'GET Endpoint /',
    });
    response.end(result, 'utf8', () => {
      console.log('👀 Response | End ⤵️');
    });
  }

  post(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const result = JSON.stringify({
      status: 'OK',
      result: 'POST Endpoint /',
    });
    response.end(result, 'utf8', () => {
      console.log('👀 Response | End ⤵️');
    });
  }
}

export default new Main();
