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
* The Identity of the VCS user that authored the Commit.
*/
export class Identity {
    /**
    * A string description of this resource.
    */
    'entityType': string;
    /**
    * This is your login in VCS.
    */
    'name': string | null;
    /**
    * The service this Identity is for.
    */
    'type': Identity.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entityType",
            "baseName": "entity_type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Identity.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
    }
}

export namespace Identity {
    export enum TypeEnum {
        Slack = <any> 'slack',
        Github = <any> 'github',
        Gitlab = <any> 'gitlab',
        Bitbucket = <any> 'bitbucket'
    }
}
