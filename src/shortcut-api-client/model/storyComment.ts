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
import { StoryReaction } from './storyReaction';

/**
* A Comment is any note added within the Comment field of a Story.
*/
export class StoryComment {
    /**
    * The Shortcut application url for the Comment.
    */
    'appUrl': string;
    /**
    * A string description of this resource.
    */
    'entityType': string;
    /**
    * True/false boolean indicating whether the Comment has been deleted.
    */
    'deleted': boolean;
    /**
    * The ID of the Story on which the Comment appears.
    */
    'storyId': number;
    /**
    * `Deprecated:` use `member_mention_ids`.
    */
    'mentionIds': Array<string>;
    /**
    * The unique ID of the Member who is the Comment\'s author.
    */
    'authorId': string | null;
    /**
    * The unique IDs of the Member who are mentioned in the Comment.
    */
    'memberMentionIds': Array<string>;
    /**
    * Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. Can only be used on a top-level comment.
    */
    'blocker'?: boolean;
    /**
    * Whether the Comment is currently the root of a thread that is linked to Slack.
    */
    'linkedToSlack': boolean;
    /**
    * The time/date when the Comment was updated.
    */
    'updatedAt': Date | null;
    /**
    * The unique IDs of the Group who are mentioned in the Comment.
    */
    'groupMentionIds': Array<string>;
    /**
    * This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.
    */
    'externalId': string | null;
    /**
    * The ID of the parent Comment this Comment is threaded under.
    */
    'parentId'?: number | null;
    /**
    * The unique ID of the Comment.
    */
    'id': number;
    /**
    * The Comments numerical position in the list from oldest to newest.
    */
    'position': number;
    /**
    * Marks the comment as an unblocker to its  blocker parent. Can only be set on a threaded comment who has a parent with `blocker` set.
    */
    'unblocksParent'?: boolean;
    /**
    * A set of Reactions to this Comment.
    */
    'reactions': Array<StoryReaction>;
    /**
    * The time/date when the Comment was created.
    */
    'createdAt': Date;
    /**
    * The text of the Comment. In the case that the Comment has been deleted, this field can be set to nil.
    */
    'text': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appUrl",
            "baseName": "app_url",
            "type": "string"
        },
        {
            "name": "entityType",
            "baseName": "entity_type",
            "type": "string"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "storyId",
            "baseName": "story_id",
            "type": "number"
        },
        {
            "name": "mentionIds",
            "baseName": "mention_ids",
            "type": "Array<string>"
        },
        {
            "name": "authorId",
            "baseName": "author_id",
            "type": "string"
        },
        {
            "name": "memberMentionIds",
            "baseName": "member_mention_ids",
            "type": "Array<string>"
        },
        {
            "name": "blocker",
            "baseName": "blocker",
            "type": "boolean"
        },
        {
            "name": "linkedToSlack",
            "baseName": "linked_to_slack",
            "type": "boolean"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "groupMentionIds",
            "baseName": "group_mention_ids",
            "type": "Array<string>"
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number"
        },
        {
            "name": "unblocksParent",
            "baseName": "unblocks_parent",
            "type": "boolean"
        },
        {
            "name": "reactions",
            "baseName": "reactions",
            "type": "Array<StoryReaction>"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoryComment.attributeTypeMap;
    }
}

