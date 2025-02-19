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
import { BaseTaskParams } from './baseTaskParams';
import { CreateLabelParams } from './createLabelParams';
import { CustomFieldValueParams } from './customFieldValueParams';

/**
* A map of story attributes this template populates.
*/
export class CreateStoryContents {
    /**
    * The description of the story.
    */
    'description'?: string;
    /**
    * An array of labels to be populated by the template.
    */
    'labels'?: Array<CreateLabelParams>;
    /**
    * The type of story (feature, bug, chore).
    */
    'storyType'?: string;
    /**
    * An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
    */
    'customFields'?: Array<CustomFieldValueParams>;
    /**
    * An array of the attached file IDs to be populated.
    */
    'fileIds'?: Set<number>;
    /**
    * The name of the story.
    */
    'name'?: string;
    /**
    * The ID of the epic the to be populated.
    */
    'epicId'?: number | null;
    /**
    * An array of external links to be populated.
    */
    'externalLinks'?: Array<string>;
    /**
    * The ID of the iteration the to be populated.
    */
    'iterationId'?: number | null;
    /**
    * An array of tasks to be populated by the template.
    */
    'tasks'?: Array<BaseTaskParams>;
    /**
    * The ID of the group to be populated.
    */
    'groupId'?: string | null;
    /**
    * The ID of the workflow state to be populated.
    */
    'workflowStateId'?: number | null;
    /**
    * An array of UUIDs for any Members listed as Followers.
    */
    'followerIds'?: Array<string>;
    /**
    * An array of UUIDs of the owners of this story.
    */
    'ownerIds'?: Array<string>;
    /**
    * The numeric point estimate to be populated.
    */
    'estimate'?: number | null;
    /**
    * The ID of the project the story belongs to.
    */
    'projectId'?: number;
    /**
    * An array of the linked file IDs to be populated.
    */
    'linkedFileIds'?: Set<number>;
    /**
    * The due date of the story.
    */
    'deadline'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<CreateLabelParams>"
        },
        {
            "name": "storyType",
            "baseName": "story_type",
            "type": "string"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldValueParams>"
        },
        {
            "name": "fileIds",
            "baseName": "file_ids",
            "type": "Set<number>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "epicId",
            "baseName": "epic_id",
            "type": "number"
        },
        {
            "name": "externalLinks",
            "baseName": "external_links",
            "type": "Array<string>"
        },
        {
            "name": "iterationId",
            "baseName": "iteration_id",
            "type": "number"
        },
        {
            "name": "tasks",
            "baseName": "tasks",
            "type": "Array<BaseTaskParams>"
        },
        {
            "name": "groupId",
            "baseName": "group_id",
            "type": "string"
        },
        {
            "name": "workflowStateId",
            "baseName": "workflow_state_id",
            "type": "number"
        },
        {
            "name": "followerIds",
            "baseName": "follower_ids",
            "type": "Array<string>"
        },
        {
            "name": "ownerIds",
            "baseName": "owner_ids",
            "type": "Array<string>"
        },
        {
            "name": "estimate",
            "baseName": "estimate",
            "type": "number"
        },
        {
            "name": "projectId",
            "baseName": "project_id",
            "type": "number"
        },
        {
            "name": "linkedFileIds",
            "baseName": "linked_file_ids",
            "type": "Set<number>"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CreateStoryContents.attributeTypeMap;
    }
}

