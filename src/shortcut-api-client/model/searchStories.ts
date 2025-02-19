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

export class SearchStories {
    /**
    * A true/false boolean indicating whether the Story is in archived state.
    */
    'archived'?: boolean;
    /**
    * An array of UUIDs for any Users who may be Owners of the Stories.
    */
    'ownerId'?: string | null;
    /**
    * The type of Stories that you want returned.
    */
    'storyType'?: SearchStories.StoryTypeEnum;
    /**
    * The Epic IDs that may be associated with the Stories.
    */
    'epicIds'?: Set<number>;
    /**
    * The IDs for the Projects the Stories may be assigned to.
    */
    'projectIds'?: Set<number | null>;
    /**
    * Stories should have been updated on or before this date.
    */
    'updatedAtEnd'?: Date;
    /**
    * Stories should have been completed on or before this date.
    */
    'completedAtEnd'?: Date;
    /**
    * The type of Workflow State the Stories may be in.
    */
    'workflowStateTypes'?: Array<SearchStories.WorkflowStateTypesEnum>;
    /**
    * Stories should have a deadline on or before this date.
    */
    'deadlineEnd'?: Date;
    /**
    * Stories should have been created on or after this date.
    */
    'createdAtStart'?: Date;
    /**
    * The Epic IDs that may be associated with the Stories.
    */
    'epicId'?: number | null;
    /**
    * The name of any associated Labels.
    */
    'labelName'?: string;
    /**
    * The UUID of any Users who may have requested the Stories.
    */
    'requestedById'?: string;
    /**
    * The Iteration ID that may be associated with the Stories.
    */
    'iterationId'?: number | null;
    /**
    * The Label IDs that may be associated with the Stories.
    */
    'labelIds'?: Set<number>;
    /**
    * The Group ID that is associated with the Stories
    */
    'groupId'?: string | null;
    /**
    * The unique IDs of the specific Workflow States that the Stories should be in.
    */
    'workflowStateId'?: number;
    /**
    * The Iteration IDs that may be associated with the Stories.
    */
    'iterationIds'?: Set<number>;
    /**
    * Stories should have been created on or before this date.
    */
    'createdAtEnd'?: Date;
    /**
    * Stories should have a deadline on or after this date.
    */
    'deadlineStart'?: Date;
    /**
    * The Group IDs that are associated with the Stories
    */
    'groupIds'?: Set<string>;
    /**
    * An array of UUIDs for any Users who may be Owners of the Stories.
    */
    'ownerIds'?: Set<string>;
    /**
    * An ID or URL that references an external resource. Useful during imports.
    */
    'externalId'?: string;
    /**
    * Whether to include the story description in the response.
    */
    'includesDescription'?: boolean;
    /**
    * The number of estimate points associate with the Stories.
    */
    'estimate'?: number;
    /**
    * The IDs for the Projects the Stories may be assigned to.
    */
    'projectId'?: number | null;
    /**
    * Stories should have been completed on or after this date.
    */
    'completedAtStart'?: Date;
    /**
    * Stories should have been updated on or after this date.
    */
    'updatedAtStart'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "string"
        },
        {
            "name": "storyType",
            "baseName": "story_type",
            "type": "SearchStories.StoryTypeEnum"
        },
        {
            "name": "epicIds",
            "baseName": "epic_ids",
            "type": "Set<number>"
        },
        {
            "name": "projectIds",
            "baseName": "project_ids",
            "type": "Set<number | null>"
        },
        {
            "name": "updatedAtEnd",
            "baseName": "updated_at_end",
            "type": "Date"
        },
        {
            "name": "completedAtEnd",
            "baseName": "completed_at_end",
            "type": "Date"
        },
        {
            "name": "workflowStateTypes",
            "baseName": "workflow_state_types",
            "type": "Array<SearchStories.WorkflowStateTypesEnum>"
        },
        {
            "name": "deadlineEnd",
            "baseName": "deadline_end",
            "type": "Date"
        },
        {
            "name": "createdAtStart",
            "baseName": "created_at_start",
            "type": "Date"
        },
        {
            "name": "epicId",
            "baseName": "epic_id",
            "type": "number"
        },
        {
            "name": "labelName",
            "baseName": "label_name",
            "type": "string"
        },
        {
            "name": "requestedById",
            "baseName": "requested_by_id",
            "type": "string"
        },
        {
            "name": "iterationId",
            "baseName": "iteration_id",
            "type": "number"
        },
        {
            "name": "labelIds",
            "baseName": "label_ids",
            "type": "Set<number>"
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
            "name": "iterationIds",
            "baseName": "iteration_ids",
            "type": "Set<number>"
        },
        {
            "name": "createdAtEnd",
            "baseName": "created_at_end",
            "type": "Date"
        },
        {
            "name": "deadlineStart",
            "baseName": "deadline_start",
            "type": "Date"
        },
        {
            "name": "groupIds",
            "baseName": "group_ids",
            "type": "Set<string>"
        },
        {
            "name": "ownerIds",
            "baseName": "owner_ids",
            "type": "Set<string>"
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string"
        },
        {
            "name": "includesDescription",
            "baseName": "includes_description",
            "type": "boolean"
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
            "name": "completedAtStart",
            "baseName": "completed_at_start",
            "type": "Date"
        },
        {
            "name": "updatedAtStart",
            "baseName": "updated_at_start",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SearchStories.attributeTypeMap;
    }
}

export namespace SearchStories {
    export enum StoryTypeEnum {
        Feature = <any> 'feature',
        Chore = <any> 'chore',
        Bug = <any> 'bug'
    }
    export enum WorkflowStateTypesEnum {
        Started = <any> 'started',
        Backlog = <any> 'backlog',
        Unstarted = <any> 'unstarted',
        Done = <any> 'done'
    }
}
