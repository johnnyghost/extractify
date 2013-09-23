# extractify.js

This is a simple wrapper to grab the information from the current URL or a given one.
It also parse query parameters from the URL into an object.

### Current url
```javascript
// url: https://github.com/johnnyghost/extractify

var url = new Extractify();

url.getAll(); // {'protocol': 'https', 'host': 'github.com' ... }

url.get('host'); // https

```

### Custom url
```javascript
// url: http://example.com:80?limit=0&offset=10

var url = new Extractify();

url.get('hostname'); // example.com

url.getAll(); // {'protocol': 'http', 'host': 'example.com',... }

// Parsed Query Parameters
url.getParsedQueryParameters(); // {limit:'0', offset: '10'}

```


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
