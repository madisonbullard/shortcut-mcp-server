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
import { CreateStoryParams } from './createStoryParams';

export class CreateStories {
    /**
    * An array of stories to be created.
    */
    'stories': Array<CreateStoryParams>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stories",
            "baseName": "stories",
            "type": "Array<CreateStoryParams>"
        }    ];

    static getAttributeTypeMap() {
        return CreateStories.attributeTypeMap;
    }
}

