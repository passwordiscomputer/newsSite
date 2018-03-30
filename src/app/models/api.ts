export class Api {
  callApi(url) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(alert(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
