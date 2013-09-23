# extractify.js

This is a simple wrapper to grab the information from the current URL or a given one.
It also parse query parameters from the URL into an object.

```javascript
var url = new Extractify();

url.get('host'); // https
url.getAll(); // {'protocol': 'http', 'host', 'hostname', 'port', 'pathname', 'search'}

url.getParsedQueryParameters(); // {name: 'joao', age: '33'}


## API reference

### getAll()
Get all the properties that compounds the various parts of the url.

### get(property)
Get an expecific property of the url.

### getParsedQueryParameters([sparameters])
Get an object with parsed query parameters.
If no parameter is passed then the current URL will be parsed,
else it parse an string of query parameters.

## License

Extractify is released under a MIT License.
