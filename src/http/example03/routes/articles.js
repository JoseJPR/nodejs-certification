/**
 * Articles Route
 */

class Articles {
  url() {
    return '/articles';
  }

  get(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const result = JSON.stringify({
      status: 'OK',
      result: 'GET Endpoint /articles',
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
      result: 'POST Endpoint /articles',
    });
    response.end(result, 'utf8', () => {
      console.log('👀 Response | End ⤵️');
    });
  }
}

export default new Articles();
