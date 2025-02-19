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
* True if the Story has archived, otherwise false.
*/
export class StoryHistoryChangeOldNewBool {
    /**
    * The old value.
    */
    'old'?: boolean;
    /**
    * The new value.
    */
    '_new'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "old",
            "baseName": "old",
            "type": "boolean"
        },
        {
            "name": "_new",
            "baseName": "new",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return StoryHistoryChangeOldNewBool.attributeTypeMap;
    }
}

