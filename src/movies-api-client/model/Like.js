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
import {ApiClient} from '../ApiClient';

/**
 * The Like model module.
 * @module model/Like
 * @version 1.0.0
 */
export class Like {
  /**
   * Constructs a new <code>Like</code>.
   * @alias module:model/Like
   * @class
   * @param movie {Number} 
   * @param user {Number} 
   */
  constructor(movie, user) {
    this.movie = movie;
    this.user = user;
  }

  /**
   * Constructs a <code>Like</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Like} obj Optional instance to populate.
   * @return {module:model/Like} The populated <code>Like</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Like();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('movie'))
        obj.movie = ApiClient.convertToType(data['movie'], 'Number');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Like.prototype.id = undefined;

/**
 * @member {Number} movie
 */
Like.prototype.movie = undefined;

/**
 * @member {Number} user
 */
Like.prototype.user = undefined;

