/**
 * Shortcut API
 * Shortcut API
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* A reference to a VCS Commit.
*/
export class HistoryReferenceCommit {
    /**
    * The ID of the entity referenced.
    */
    'id': object;
    /**
    * The type of entity referenced.
    */
    'entityType': string;
    /**
    * The message from the Commit.
    */
    'message': string;
    /**
    * The external URL for the Branch.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "object"
        },
        {
            "name": "entityType",
            "baseName": "entity_type",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return HistoryReferenceCommit.attributeTypeMap;
    }
}

