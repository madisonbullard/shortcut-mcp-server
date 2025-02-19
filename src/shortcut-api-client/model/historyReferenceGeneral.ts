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
* A default reference for entity types that don\'t have extra fields.
*/
export class HistoryReferenceGeneral {
    /**
    * The ID of the entity referenced.
    */
    'id': object;
    /**
    * The type of entity referenced.
    */
    'entityType': string;
    /**
    * The name of the entity referenced.
    */
    'name': string;

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
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return HistoryReferenceGeneral.attributeTypeMap;
    }
}

