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

export class UpdateLabel {
    /**
    * The new name of the label.
    */
    'name'?: string;
    /**
    * The new description of the label.
    */
    'description'?: string;
    /**
    * The hex color to be displayed with the Label (for example, \"#ff0000\").
    */
    'color'?: string | null;
    /**
    * A true/false boolean indicating if the Label has been archived.
    */
    'archived'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UpdateLabel.attributeTypeMap;
    }
}

