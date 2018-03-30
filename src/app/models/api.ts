import { NewsSource } from './source.model'

export class Api {

  // call api
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



  //***********Parse returned JSON*********
  //parse Sources

  parseSources(json){
    let array = [];
    let body = JSON.parse(json);
    body.sources.forEach(function(source){
      array.push(new NewsSource( source.name, source.id, source.category));

    });
    return array;
  }



}
