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
import { CreateCategoryParams } from './createCategoryParams';

export class CreateObjective {
    /**
    * The name of the Objective.
    */
    'name': string;
    /**
    * The Objective\'s description.
    */
    'description'?: string;
    /**
    * The workflow state that the Objective is in.
    */
    'state'?: CreateObjective.StateEnum;
    /**
    * A manual override for the time/date the Objective was started.
    */
    'startedAtOverride'?: Date;
    /**
    * A manual override for the time/date the Objective was completed.
    */
    'completedAtOverride'?: Date;
    /**
    * An array of IDs of Categories attached to the Objective.
    */
    'categories'?: Array<CreateCategoryParams>;

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
            "name": "state",
            "baseName": "state",
            "type": "CreateObjective.StateEnum"
        },
        {
            "name": "startedAtOverride",
            "baseName": "started_at_override",
            "type": "Date"
        },
        {
            "name": "completedAtOverride",
            "baseName": "completed_at_override",
            "type": "Date"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<CreateCategoryParams>"
        }    ];

    static getAttributeTypeMap() {
        return CreateObjective.attributeTypeMap;
    }
}

export namespace CreateObjective {
    export enum StateEnum {
        InProgress = <any> 'in progress',
        ToDo = <any> 'to do',
        Done = <any> 'done'
    }
}
