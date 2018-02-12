import 'whatwg-fetch'

export function callApi(endpoint, payload) {
  return new Promise((resolve, reject) =>
    fetch(endpoint, payload)
      .then(function(response) {
        return response.json().then(json => {
          if (!response.ok) {
            console.log('error')
            resolve({ error: json, response: null })
          }
          return resolve({ response: json, error: null })
        })
      })
      .then(function(json) {
        return json
        console.log('parsed json', json)
      })
      .catch(function(ex) {
        console.log('parsing failed', ex)
      })
  )
}
