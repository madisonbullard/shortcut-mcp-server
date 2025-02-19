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

export class CreateStoryLink {
    /**
    * The type of link.
    */
    'verb': CreateStoryLink.VerbEnum;
    /**
    * The ID of the subject Story.
    */
    'subjectId': number;
    /**
    * The ID of the object Story.
    */
    'objectId': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "verb",
            "baseName": "verb",
            "type": "CreateStoryLink.VerbEnum"
        },
        {
            "name": "subjectId",
            "baseName": "subject_id",
            "type": "number"
        },
        {
            "name": "objectId",
            "baseName": "object_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreateStoryLink.attributeTypeMap;
    }
}

export namespace CreateStoryLink {
    export enum VerbEnum {
        Blocks = <any> 'blocks',
        Duplicates = <any> 'duplicates',
        RelatesTo = <any> 'relates to'
    }
}
