/*!
 * Extractify-js
 * Url extractor
 * Original author: joao@iknowaghost.com
 *
 * Licensed under the MIT license
 */

(function () {

    'use strict';

    var options = {
        keys:[
            'protocol',
            'host',
            'hostname',
            'port',
            'pathname',
            'search'
        ]
    };

    /**
     * @constructor
     *
     * @param {String} url The url to be extracted
     */
    function Extractify (url) {
        this.url = (url !== undefined) ? parseUrl(url) : window.location;
    }

    /**
     * Get all the properties that compounds
     * the various parts of the url.
     *
     * @return {Object} All the properties
     */
    Extractify.prototype.getAll = function () {

        var parameters = {},
            keys = options.keys;

        for(var item in keys) {
            parameters[keys[item]] = this.url[keys[item]];
        }

        return parameters;
    };

    /**
     * Get an expecific property of the url.
     *
     * @param {String} attribute An key of the property
     *
     * @return {String} The value of the repective key
     */
    Extractify.prototype.get = function (attribute) {
        return this.url[attribute] || null;
    };

    /**
     * Get an object with parsed query parameters.
     * If no parameter is passed then the current URL will be parsed,
     * else it parse an string of query parameters.
     *
     * @param {String} [sparameters] A string of query parameters
     *
     * @return {Object} The parsed object
     */
    Extractify.prototype.getParsedQueryParameters = function (sparameters) {

        var queryParameters = {},
            parameters = (sparameters || location.search.substring(1)).split('&'),
            parametersLen = parameters.length,
            i = 0;

        for (; i < parametersLen; i += 1) {

            var parameter = parameters[i].split('=');

            if (parameter[0] && parameter[1]) {
                queryParameters[parameter[0]] = decodeURIComponent(parameter[1]);
            }
        }

        return queryParameters;
    };

    /**
     * Parse an custom url.
     *
     * @param  {String} url An url string
     *
     * @return {Object} An parsed url into an object
     *
     * @private
     */
    function parseUrl(url) {

        // Create an anchor element
        var aEl = document.createElement('a'),
            parameters = {};

        aEl.href = url;

        for (var item in options.keys) {
            var key = options.keys[item];
            parameters[key] = aEl[key];

        }

        return parameters;

    }

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return Extractify;
        });
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = Extractify;
    }
    else {
        this.Extractify = Extractify;
    }

}.call(this));