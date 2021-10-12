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
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
export class User {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @param email {String} 
   * @param password {String} 
   */
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new User();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
User.prototype.id = undefined;

/**
 * @member {String} email
 */
User.prototype.email = undefined;

/**
 * @member {String} password
 */
User.prototype.password = undefined;
