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
 * The Token model module.
 * @module model/Token
 * @version 1.0.0
 */
export class Token {
  /**
   * Constructs a new <code>Token</code>.
   * @alias module:model/Token
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Token} obj Optional instance to populate.
   * @return {module:model/Token} The populated <code>Token</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Token();
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} token
 */
Token.prototype.token = undefined;

/**
 * @member {Number} user
 */
Token.prototype.user = undefined;
