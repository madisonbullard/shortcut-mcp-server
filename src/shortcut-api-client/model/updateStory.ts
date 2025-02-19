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
import { CreateLabelParams } from './createLabelParams';
import { CustomFieldValueParams } from './customFieldValueParams';

export class UpdateStory {
    /**
    * The description of the story.
    */
    'description'?: string;
    /**
    * True if the story is archived, otherwise false.
    */
    'archived'?: boolean;
    /**
    * An array of labels attached to the story.
    */
    'labels'?: Array<CreateLabelParams>;
    /**
    * An array of IDs of Pull/Merge Requests attached to the story.
    */
    'pullRequestIds'?: Set<number>;
    /**
    * The type of story (feature, bug, chore).
    */
    'storyType'?: UpdateStory.StoryTypeEnum;
    /**
    * A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
    */
    'customFields'?: Array<CustomFieldValueParams>;
    /**
    * One of \"first\" or \"last\". This can be used to move the given story to the first or last position in the workflow state.
    */
    'moveTo'?: UpdateStory.MoveToEnum;
    /**
    * An array of IDs of files attached to the story.
    */
    'fileIds'?: Set<number>;
    /**
    * A manual override for the time/date the Story was completed.
    */
    'completedAtOverride'?: Date | null;
    /**
    * The title of the story.
    */
    'name'?: string;
    /**
    * The ID of the epic the story belongs to.
    */
    'epicId'?: number | null;
    /**
    * An array of External Links associated with this story.
    */
    'externalLinks'?: Array<string>;
    /**
    * An array of IDs of Branches attached to the story.
    */
    'branchIds'?: Set<number>;
    /**
    * An array of IDs of Commits attached to the story.
    */
    'commitIds'?: Set<number>;
    /**
    * The ID of the member that requested the story.
    */
    'requestedById'?: string;
    /**
    * The ID of the iteration the story belongs to.
    */
    'iterationId'?: number | null;
    /**
    * A manual override for the time/date the Story was started.
    */
    'startedAtOverride'?: Date | null;
    /**
    * The ID of the group to associate with this story
    */
    'groupId'?: string | null;
    /**
    * The ID of the workflow state to put the story in.
    */
    'workflowStateId'?: number;
    /**
    * An array of UUIDs of the followers of this story.
    */
    'followerIds'?: Set<string>;
    /**
    * An array of UUIDs of the owners of this story.
    */
    'ownerIds'?: Set<string>;
    /**
    * The ID of the story we want to move this story before.
    */
    'beforeId'?: number;
    /**
    * The numeric point estimate of the story. Can also be null, which means unestimated.
    */
    'estimate'?: number | null;
    /**
    * The ID of the story we want to move this story after.
    */
    'afterId'?: number;
    /**
    * The ID of the project the story belongs to.
    */
    'projectId'?: number | null;
    /**
    * An array of IDs of linked files attached to the story.
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
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<CreateLabelParams>"
        },
        {
            "name": "pullRequestIds",
            "baseName": "pull_request_ids",
            "type": "Set<number>"
        },
        {
            "name": "storyType",
            "baseName": "story_type",
            "type": "UpdateStory.StoryTypeEnum"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldValueParams>"
        },
        {
            "name": "moveTo",
            "baseName": "move_to",
            "type": "UpdateStory.MoveToEnum"
        },
        {
            "name": "fileIds",
            "baseName": "file_ids",
            "type": "Set<number>"
        },
        {
            "name": "completedAtOverride",
            "baseName": "completed_at_override",
            "type": "Date"
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
            "name": "branchIds",
            "baseName": "branch_ids",
            "type": "Set<number>"
        },
        {
            "name": "commitIds",
            "baseName": "commit_ids",
            "type": "Set<number>"
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
            "name": "startedAtOverride",
            "baseName": "started_at_override",
            "type": "Date"
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
            "type": "Set<string>"
        },
        {
            "name": "ownerIds",
            "baseName": "owner_ids",
            "type": "Set<string>"
        },
        {
            "name": "beforeId",
            "baseName": "before_id",
            "type": "number"
        },
        {
            "name": "estimate",
            "baseName": "estimate",
            "type": "number"
        },
        {
            "name": "afterId",
            "baseName": "after_id",
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
        return UpdateStory.attributeTypeMap;
    }
}

export namespace UpdateStory {
    export enum StoryTypeEnum {
        Feature = <any> 'feature',
        Chore = <any> 'chore',
        Bug = <any> 'bug'
    }
    export enum MoveToEnum {
        Last = <any> 'last',
        First = <any> 'first'
    }
}
