/*
 * POC app API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {InlineResponse200} from './model/InlineResponse200';
import {Like} from './model/Like';
import {Movie} from './model/Movie';
import {Token} from './model/Token';
import {User} from './model/User';
import {MoviesApi} from './api/MoviesApi';
import {UsersApi} from './api/UsersApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PocAppApi = require('index'); // See note below*.
* var xxxSvc = new PocAppApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PocAppApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PocAppApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PocAppApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export default {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The Like model constructor.
     * @property {module:model/Like}
     */
    Like,

    /**
     * The Movie model constructor.
     * @property {module:model/Movie}
     */
    Movie,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The MoviesApi service constructor.
    * @property {module:api/MoviesApi}
    */
    MoviesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
