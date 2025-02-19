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
* A group of calculated values for this Project.
*/
export class ProjectStats {
    /**
    * The total number of stories in this Project.
    */
    'numStories': number;
    /**
    * The total number of points in this Project.
    */
    'numPoints': number;
    /**
    * The total number of documents related to this Project
    */
    'numRelatedDocuments': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "numStories",
            "baseName": "num_stories",
            "type": "number"
        },
        {
            "name": "numPoints",
            "baseName": "num_points",
            "type": "number"
        },
        {
            "name": "numRelatedDocuments",
            "baseName": "num_related_documents",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ProjectStats.attributeTypeMap;
    }
}

