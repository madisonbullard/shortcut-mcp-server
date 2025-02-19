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

export class UpdateTask {
    /**
    * The Task\'s description.
    */
    'description'?: string;
    /**
    * An array of UUIDs of the owners of this story.
    */
    'ownerIds'?: Array<string>;
    /**
    * A true/false boolean indicating whether the task is complete.
    */
    'complete'?: boolean;
    /**
    * Move task before this task ID.
    */
    'beforeId'?: number;
    /**
    * Move task after this task ID.
    */
    'afterId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "ownerIds",
            "baseName": "owner_ids",
            "type": "Array<string>"
        },
        {
            "name": "complete",
            "baseName": "complete",
            "type": "boolean"
        },
        {
            "name": "beforeId",
            "baseName": "before_id",
            "type": "number"
        },
        {
            "name": "afterId",
            "baseName": "after_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UpdateTask.attributeTypeMap;
    }
}

