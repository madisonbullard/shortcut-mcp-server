/** Request parameters for specifying how to pre-populate a task through a template. */
export interface BaseTaskParams {
    /**
     * The Task description.
     * @minLength 1
     * @maxLength 2048
     */
    description: string;
    /** True/false boolean indicating whether the Task is completed. Defaults to false. */
    complete?: boolean;
    /** An array of UUIDs for any members you want to add as Owners on this new Task. */
    owner_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
}
export interface BasicWorkspaceInfo {
    url_slug: string;
    estimate_scale: number[];
}
/** Branch refers to a VCS branch. Branches are feature branches associated with Shortcut Stories. */
export interface Branch {
    /** A string description of this resource. */
    entity_type: string;
    /** A true/false boolean indicating if the Branch has been deleted. */
    deleted: boolean;
    /** The name of the Branch. */
    name: string;
    /** This field is deprecated, and will always be false. */
    persistent: boolean;
    /**
     * The time/date the Branch was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of PullRequests attached to the Branch (there is usually only one). */
    pull_requests: PullRequest[];
    /** The IDs of the Branches the Branch has been merged into. */
    merged_branch_ids: number[];
    /**
     * The unique ID of the Branch.
     * @format int64
     */
    id?: number | null;
    /** The URL of the Branch. */
    url: string;
    /**
     * The ID of the Repository that contains the Branch.
     * @format int64
     */
    repository_id: number;
    /**
     * The time/date the Branch was created.
     * @format date-time
     */
    created_at?: string | null;
}
/** A Category can be used to associate Objectives. */
export interface Category {
    /** A true/false boolean indicating if the Category has been archived. */
    archived: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The hex color to be displayed with the Category (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /** The name of the Category. */
    name: string;
    /** The Global ID of the Category. */
    global_id: string;
    /** The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. */
    type: string;
    /**
     * The time/date that the Category was updated.
     * @format date-time
     */
    updated_at: string;
    /** This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Category.
     * @format int64
     */
    id: number;
    /**
     * The time/date that the Category was created.
     * @format date-time
     */
    created_at: string;
}
/** Commit refers to a VCS commit and all associated details. */
export interface Commit {
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The ID of the Member that authored the Commit, if known.
     * @format uuid
     */
    author_id?: string | null;
    /** The Commit hash. */
    hash: string;
    /**
     * The time/date the Commit was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /**
     * The unique ID of the Commit.
     * @format int64
     */
    id?: number | null;
    /** The URL of the Commit. */
    url: string;
    /** The email address of the VCS user that authored the Commit. */
    author_email: string;
    /**
     * The time/date the Commit was pushed.
     * @format date-time
     */
    timestamp: string;
    /** The Identity of the VCS user that authored the Commit. */
    author_identity: Identity;
    /**
     * The ID of the Repository that contains the Commit.
     * @format int64
     */
    repository_id?: number | null;
    /**
     * The time/date the Commit was created.
     * @format date-time
     */
    created_at: string;
    /** The Commit message. */
    message: string;
}
export interface CreateCategory {
    /**
     * The name of the new Category.
     * @minLength 1
     * @maxLength 128
     */
    name: string;
    /**
     * The hex color to be displayed with the Category (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /**
     * This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
     * @minLength 1
     * @maxLength 128
     */
    external_id?: string;
    /** The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. */
    type?: any;
}
/** Request parameters for creating a Category with a Objective. */
export interface CreateCategoryParams {
    /**
     * The name of the new Category.
     * @minLength 1
     * @maxLength 128
     */
    name: string;
    /**
     * The hex color to be displayed with the Category (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /**
     * This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
     * @minLength 1
     * @maxLength 128
     */
    external_id?: string;
}
export interface CreateCommentComment {
    /**
     * The comment text.
     * @minLength 1
     * @maxLength 100000
     */
    text: string;
    /**
     * The Member ID of the Comment's author. Defaults to the user identified by the API token.
     * @format uuid
     */
    author_id?: string;
    /**
     * Defaults to the time/date the comment is created, but can be set to reflect another date.
     * @format date-time
     */
    created_at?: string;
    /**
     * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
     * @format date-time
     */
    updated_at?: string;
    /**
     * This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
}
/** Request parameters for creating an entirely new entity template. */
export interface CreateEntityTemplate {
    /**
     * The name of the new entity template
     * @minLength 1
     * @maxLength 128
     */
    name: string;
    /**
     * The id of the user creating this template.
     * @format uuid
     */
    author_id?: string;
    /** A map of story attributes this template populates. */
    story_contents: CreateStoryContents;
}
export interface CreateEpic {
    /**
     * The Epic's description.
     * @maxLength 100000
     */
    description?: string;
    /** An array of Labels attached to the Epic. */
    labels?: CreateLabelParams[];
    /**
     * A manual override for the time/date the Epic was completed.
     * @format date-time
     */
    completed_at_override?: string;
    /** An array of IDs for Objectives to which this Epic is related. */
    objective_ids?: number[];
    /**
     * The Epic's name.
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /**
     * The Epic's planned start date.
     * @format date-time
     */
    planned_start_date?: string | null;
    /** `Deprecated` The Epic's state (to do, in progress, or done); will be ignored when `epic_state_id` is set. */
    state?: "in progress" | "to do" | "done";
    /**
     * `Deprecated` The ID of the Milestone this Epic is related to. Use `objective_ids`.
     * @format int64
     */
    milestone_id?: number | null;
    /**
     * The ID of the member that requested the epic.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The ID of the Epic State.
     * @format int64
     */
    epic_state_id?: number;
    /**
     * A manual override for the time/date the Epic was started.
     * @format date-time
     */
    started_at_override?: string;
    /**
     * `Deprecated` The ID of the group to associate with the epic. Use `group_ids`.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * Defaults to the time/date it is created but can be set to reflect another date.
     * @format date-time
     */
    updated_at?: string;
    /** An array of UUIDs for any Members you want to add as Followers on this new Epic. */
    follower_ids?: string[];
    /** An array of UUIDS for Groups to which this Epic is related. */
    group_ids?: string[];
    /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
    owner_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
    /**
     * The Epic's deadline.
     * @format date-time
     */
    deadline?: string | null;
    /**
     * Defaults to the time/date it is created but can be set to reflect another date.
     * @format date-time
     */
    created_at?: string;
}
export interface CreateEpicComment {
    /**
     * The comment text.
     * @minLength 1
     * @maxLength 100000
     */
    text: string;
    /**
     * The Member ID of the Comment's author. Defaults to the user identified by the API token.
     * @format uuid
     */
    author_id?: string;
    /**
     * Defaults to the time/date the comment is created, but can be set to reflect another date.
     * @format date-time
     */
    created_at?: string;
    /**
     * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
     * @format date-time
     */
    updated_at?: string;
    /**
     * This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
}
export interface CreateGroup {
    /**
     * The description of the Group.
     * @maxLength 4096
     */
    description?: string;
    /**
     * The Member ids to add to this Group.
     * @uniqueItems true
     */
    member_ids?: string[];
    /** The Workflow ids to add to the Group. */
    workflow_ids?: number[];
    /**
     * The name of this Group.
     * @minLength 1
     * @maxLength 63
     */
    name: string;
    /**
     * The mention name of this Group.
     * @minLength 1
     * @maxLength 63
     */
    mention_name: string;
    /**
     * The color you wish to use for the Group in the system.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /** The color key you wish to use for the Group in the system. */
    color_key?: "blue" | "purple" | "midnight-blue" | "orange" | "yellow-green" | "brass" | "gray" | "fuchsia" | "yellow" | "pink" | "sky-blue" | "green" | "red" | "black" | "slate" | "turquoise";
    /**
     * The Icon id for the avatar of this Group.
     * @format uuid
     */
    display_icon_id?: string;
}
export interface CreateIteration {
    /** An array of UUIDs for any Members you want to add as Followers. */
    follower_ids?: string[];
    /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
    group_ids?: string[];
    /** An array of Labels attached to the Iteration. */
    labels?: CreateLabelParams[];
    /**
     * The description of the Iteration.
     * @maxLength 100000
     */
    description?: string;
    /**
     * The name of this Iteration.
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /**
     * The date this Iteration begins, e.g. 2019-07-01.
     * @minLength 1
     */
    start_date: string;
    /**
     * The date this Iteration ends, e.g. 2019-07-01.
     * @minLength 1
     */
    end_date: string;
}
/** Request parameters for creating a Label on a Shortcut Story. */
export interface CreateLabelParams {
    /**
     * The name of the new Label.
     * @minLength 1
     * @maxLength 128
     */
    name: string;
    /**
     * The description of the new Label.
     * @maxLength 1024
     */
    description?: string;
    /**
     * The hex color to be displayed with the Label (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /**
     * This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
     * @minLength 1
     * @maxLength 128
     */
    external_id?: string;
}
export interface CreateLinkedFile {
    /**
     * The description of the file.
     * @maxLength 512
     */
    description?: string;
    /**
     * The ID of the linked story.
     * @format int64
     */
    story_id?: number;
    /**
     * The name of the file.
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /**
     * The URL of the thumbnail, if the integration provided it.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    thumbnail_url?: string;
    /** The integration type of the file (e.g. google, dropbox, box). */
    type: "google" | "url" | "dropbox" | "box" | "onedrive";
    /**
     * The filesize, if the integration provided it.
     * @format int64
     */
    size?: number;
    /**
     * The UUID of the member that uploaded the file.
     * @format uuid
     */
    uploader_id?: string;
    /**
     * The content type of the image (e.g. txt/plain).
     * @maxLength 128
     */
    content_type?: string;
    /**
     * The URL of linked file.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    url: string;
}
export interface CreateMilestone {
    /**
     * The name of the Milestone.
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /**
     * The Milestone's description.
     * @maxLength 100000
     */
    description?: string;
    /** The workflow state that the Milestone is in. */
    state?: "in progress" | "to do" | "done";
    /**
     * A manual override for the time/date the Milestone was started.
     * @format date-time
     */
    started_at_override?: string;
    /**
     * A manual override for the time/date the Milestone was completed.
     * @format date-time
     */
    completed_at_override?: string;
    /** An array of IDs of Categories attached to the Milestone. */
    categories?: CreateCategoryParams[];
}
export interface CreateObjective {
    /**
     * The name of the Objective.
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /**
     * The Objective's description.
     * @maxLength 100000
     */
    description?: string;
    /** The workflow state that the Objective is in. */
    state?: "in progress" | "to do" | "done";
    /**
     * A manual override for the time/date the Objective was started.
     * @format date-time
     */
    started_at_override?: string;
    /**
     * A manual override for the time/date the Objective was completed.
     * @format date-time
     */
    completed_at_override?: string;
    /** An array of IDs of Categories attached to the Objective. */
    categories?: CreateCategoryParams[];
}
export interface CreateOrDeleteStoryReaction {
    /** The emoji short-code to add / remove. E.g. `:thumbsup::skin-tone-4:`. */
    emoji: string;
}
export interface CreateProject {
    /**
     * The Project description.
     * @maxLength 100000
     */
    description?: string;
    /**
     * The color you wish to use for the Project in the system.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /**
     * The name of the Project.
     * @minLength 1
     * @maxLength 128
     */
    name: string;
    /**
     * The date at which the Project was started.
     * @format date-time
     */
    start_time?: string;
    /**
     * Defaults to the time/date it is created but can be set to reflect another date.
     * @format date-time
     */
    updated_at?: string;
    /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
    follower_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
    /**
     * The ID of the team the project belongs to.
     * @format int64
     */
    team_id: number;
    /**
     * The number of weeks per iteration in this Project.
     * @format int64
     */
    iteration_length?: number;
    /**
     * The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.
     * @maxLength 63
     */
    abbreviation?: string;
    /**
     * Defaults to the time/date it is created but can be set to reflect another date.
     * @format date-time
     */
    created_at?: string;
}
export interface CreateStories {
    /** An array of stories to be created. */
    stories: CreateStoryParams[];
}
export interface CreateStoryComment {
    /**
     * The comment text.
     * @maxLength 100000
     */
    text: string;
    /**
     * The Member ID of the Comment's author. Defaults to the user identified by the API token.
     * @format uuid
     */
    author_id?: string;
    /**
     * Defaults to the time/date the comment is created, but can be set to reflect another date.
     * @format date-time
     */
    created_at?: string;
    /**
     * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
     * @format date-time
     */
    updated_at?: string;
    /**
     * This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 1024
     */
    external_id?: string;
    /**
     * The ID of the Comment that this comment is threaded under.
     * @format int64
     */
    parent_id?: number | null;
}
/** Request parameters for creating a Comment on a Shortcut Story. */
export interface CreateStoryCommentParams {
    /**
     * The comment text.
     * @maxLength 100000
     */
    text: string;
    /**
     * The Member ID of the Comment's author. Defaults to the user identified by the API token.
     * @format uuid
     */
    author_id?: string;
    /**
     * Defaults to the time/date the comment is created, but can be set to reflect another date.
     * @format date-time
     */
    created_at?: string;
    /**
     * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
     * @format date-time
     */
    updated_at?: string;
    /**
     * This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 1024
     */
    external_id?: string;
    /**
     * The ID of the Comment that this comment is threaded under.
     * @format int64
     */
    parent_id?: number | null;
}
/** A map of story attributes this template populates. */
export interface CreateStoryContents {
    /** The description of the story. */
    description?: string;
    /** An array of labels to be populated by the template. */
    labels?: CreateLabelParams[];
    /** The type of story (feature, bug, chore). */
    story_type?: string;
    /** An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields?: CustomFieldValueParams[];
    /**
     * An array of the attached file IDs to be populated.
     * @uniqueItems true
     */
    file_ids?: number[];
    /**
     * The name of the story.
     * @maxLength 512
     */
    name?: string;
    /**
     * The ID of the epic the to be populated.
     * @format int64
     */
    epic_id?: number | null;
    /** An array of external links to be populated. */
    external_links?: string[];
    /**
     * The ID of the iteration the to be populated.
     * @format int64
     */
    iteration_id?: number | null;
    /** An array of tasks to be populated by the template. */
    tasks?: BaseTaskParams[];
    /**
     * The ID of the group to be populated.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state to be populated.
     * @format int64
     */
    workflow_state_id?: number | null;
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids?: string[];
    /** An array of UUIDs of the owners of this story. */
    owner_ids?: string[];
    /**
     * The numeric point estimate to be populated.
     * @format int64
     */
    estimate?: number | null;
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number;
    /**
     * An array of the linked file IDs to be populated.
     * @uniqueItems true
     */
    linked_file_ids?: number[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
}
/** Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template. */
export interface CreateStoryFromTemplateParams {
    /**
     * The description of the story.
     * @maxLength 100000
     */
    description?: string;
    /** Controls the story's archived state. */
    archived?: boolean;
    /** An array of story links attached to the story. */
    story_links?: CreateStoryLinkParams[];
    /** An array of labels attached to the story. */
    labels?: CreateLabelParams[];
    /**
     * An array of External Links associated with this story. These will be added to any links provided by the template. Cannot be used in conjunction with `external_links`.
     * @uniqueItems true
     */
    external_links_add?: string[];
    /** The type of story (feature, bug, chore). */
    story_type?: "feature" | "chore" | "bug";
    /** A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields?: CustomFieldValueParams[];
    /** One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state. */
    move_to?: "last" | "first";
    /**
     * An array of IDs of files attached to the story.
     * @uniqueItems true
     */
    file_ids?: number[];
    /**
     * Given this story was converted from a task in another story, this is the original task ID that was converted to this story.
     * @format int64
     */
    source_task_id?: number | null;
    /**
     * A manual override for the time/date the Story was completed.
     * @format date-time
     */
    completed_at_override?: string;
    /**
     * The name of the story. Must be provided if the template does not provide a name.
     * @minLength 1
     * @maxLength 512
     */
    name?: string;
    /**
     * An array of IDs of files attached to the story in addition to files from the template. Cannot be used in conjunction with `file_ids`.
     * @uniqueItems true
     */
    file_ids_add?: number[];
    /**
     * An array of IDs of files removed from files from the template. Cannot be used in conjunction with `file_ids`.
     * @uniqueItems true
     */
    file_ids_remove?: number[];
    /** An array of comments to add to the story. */
    comments?: CreateStoryCommentParams[];
    /**
     * The UUIDs of the new followers to be added in addition to followers from the template. Cannot be used in conjunction with `follower_ids.`
     * @uniqueItems true
     */
    follower_ids_add?: string[];
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number | null;
    /**
     * The id of the story template used to create this story.
     * @format uuid
     */
    story_template_id: string;
    /** An array of External Links associated with this story. */
    external_links?: string[];
    /**
     * The UUIDs of the new followers to be removed from followers from the template. Cannot be used in conjunction with `follower_ids`.
     * @uniqueItems true
     */
    follower_ids_remove?: string[];
    /** An array of sub tasks to create. */
    sub_tasks?: CreateSubTaskParams[];
    /**
     * An array of IDs of linked files removed from files from the template. Cannot be used in conjunction with `linked_files.`
     * @uniqueItems true
     */
    linked_file_ids_remove?: number[];
    /**
     * The ID of the member that requested the story.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number | null;
    /**
     * A map specifying a CustomField ID. These will be removed from any fields provided by the template. Cannot be used in conjunction with `custom_fields`.
     * @uniqueItems true
     */
    custom_fields_remove?: RemoveCustomFieldParams[];
    /** An array of tasks connected to the story. */
    tasks?: CreateTaskParams[];
    /**
     * A manual override for the time/date the Story was started.
     * @format date-time
     */
    started_at_override?: string;
    /**
     * An array of labels attached to the story in addition to the labels provided by the template. Cannot be used in conjunction with `labels`.
     * @uniqueItems true
     */
    labels_add?: CreateLabelParams[];
    /**
     * The id of the group to associate with this story.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state the story will be in.
     * @format int64
     */
    workflow_state_id?: number;
    /**
     * The time/date the Story was updated.
     * @format date-time
     */
    updated_at?: string;
    /**
     * An array of UUIDs of the followers of this story.
     * @uniqueItems true
     */
    follower_ids?: string[];
    /**
     * An array of UUIDs of the owners of this story.
     * @uniqueItems true
     */
    owner_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 1024
     */
    external_id?: string;
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number | null;
    /**
     * The UUIDs of the new owners to be removed from owners from the template. Cannot be used in conjunction with `owners`.
     * @uniqueItems true
     */
    owner_ids_remove?: string[];
    /**
     * A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. These will be added to any fields provided by the template. Cannot be used in conjunction with `custom_fields`.
     * @uniqueItems true
     */
    custom_fields_add?: CustomFieldValueParams[];
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number | null;
    /**
     * An array of IDs of linked files attached to the story in addition to files from the template. Cannot be used in conjunction with `linked_files`.
     * @uniqueItems true
     */
    linked_file_ids_add?: number[];
    /**
     * An array of IDs of linked files attached to the story.
     * @uniqueItems true
     */
    linked_file_ids?: number[];
    /**
     * An array of labels to remove from the labels provided by the template. Cannot be used in conjunction with `labels`.
     * @uniqueItems true
     */
    labels_remove?: RemoveLabelParams[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
    /**
     * The UUIDs of the new owners to be added in addition to owners from the template. Cannot be used in conjunction with `owners`.
     * @uniqueItems true
     */
    owner_ids_add?: string[];
    /**
     * The time/date the Story was created.
     * @format date-time
     */
    created_at?: string;
    /**
     * An array of External Links associated with this story. These will be removed from any links provided by the template. Cannot be used in conjunction with `external_links`.
     * @uniqueItems true
     */
    external_links_remove?: string[];
}
export interface CreateStoryLink {
    /** The type of link. */
    verb: "blocks" | "duplicates" | "relates to";
    /**
     * The ID of the subject Story.
     * @format int64
     */
    subject_id: number;
    /**
     * The ID of the object Story.
     * @format int64
     */
    object_id: number;
}
/** Request parameters for creating a Story Link within a Story. */
export interface CreateStoryLinkParams {
    /**
     * The unique ID of the Story defined as subject.
     * @format int64
     */
    subject_id?: number;
    /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
    verb: "blocks" | "duplicates" | "relates to";
    /**
     * The unique ID of the Story defined as object.
     * @format int64
     */
    object_id?: number;
}
/** Request parameters for creating a story. */
export interface CreateStoryParams {
    /**
     * The description of the story.
     * @maxLength 100000
     */
    description?: string;
    /** Controls the story's archived state. */
    archived?: boolean;
    /** An array of story links attached to the story. */
    story_links?: CreateStoryLinkParams[];
    /** An array of labels attached to the story. */
    labels?: CreateLabelParams[];
    /** The type of story (feature, bug, chore). */
    story_type?: "feature" | "chore" | "bug";
    /** A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields?: CustomFieldValueParams[];
    /** One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state. */
    move_to?: "last" | "first";
    /**
     * An array of IDs of files attached to the story.
     * @uniqueItems true
     */
    file_ids?: number[];
    /**
     * Given this story was converted from a task in another story, this is the original task ID that was converted to this story.
     * @format int64
     */
    source_task_id?: number | null;
    /**
     * A manual override for the time/date the Story was completed.
     * @format date-time
     */
    completed_at_override?: string;
    /**
     * The name of the story.
     * @minLength 1
     * @maxLength 512
     */
    name: string;
    /** An array of comments to add to the story. */
    comments?: CreateStoryCommentParams[];
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number | null;
    /**
     * The id of the story template used to create this story, if applicable. This is just an association; no content from the story template is inherited by the story simply by setting this field.
     * @format uuid
     */
    story_template_id?: string | null;
    /** An array of External Links associated with this story. */
    external_links?: string[];
    /** An array of sub tasks to create. */
    sub_tasks?: CreateSubTaskParams[];
    /**
     * The ID of the member that requested the story.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number | null;
    /** An array of tasks connected to the story. */
    tasks?: CreateTaskParams[];
    /**
     * A manual override for the time/date the Story was started.
     * @format date-time
     */
    started_at_override?: string;
    /**
     * The id of the group to associate with this story.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state the story will be in.
     * @format int64
     */
    workflow_state_id?: number;
    /**
     * The time/date the Story was updated.
     * @format date-time
     */
    updated_at?: string;
    /**
     * An array of UUIDs of the followers of this story.
     * @uniqueItems true
     */
    follower_ids?: string[];
    /**
     * An array of UUIDs of the owners of this story.
     * @uniqueItems true
     */
    owner_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 1024
     */
    external_id?: string;
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number | null;
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number | null;
    /**
     * An array of IDs of linked files attached to the story.
     * @uniqueItems true
     */
    linked_file_ids?: number[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
    /**
     * The time/date the Story was created.
     * @format date-time
     */
    created_at?: string;
}
export interface CreateSubTaskParams {
    /**
     * The name of the SubTask.
     * @minLength 1
     * @maxLength 512
     */
    name: string;
}
export interface CreateTask {
    /**
     * The Task description.
     * @minLength 1
     * @maxLength 2048
     */
    description: string;
    /** True/false boolean indicating whether the Task is completed. Defaults to false. */
    complete?: boolean;
    /** An array of UUIDs for any members you want to add as Owners on this new Task. */
    owner_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
    /**
     * Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
     * @format date-time
     */
    created_at?: string;
    /**
     * Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
     * @format date-time
     */
    updated_at?: string;
}
/** Request parameters for creating a Task on a Story. */
export interface CreateTaskParams {
    /**
     * The Task description.
     * @minLength 1
     * @maxLength 2048
     */
    description: string;
    /** True/false boolean indicating whether the Task is completed. Defaults to false. */
    complete?: boolean;
    /** An array of UUIDs for any members you want to add as Owners on this new Task. */
    owner_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
    /**
     * Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
     * @format date-time
     */
    created_at?: string;
    /**
     * Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
     * @format date-time
     */
    updated_at?: string;
}
export interface CustomField {
    /**
     * A string description of the CustomField
     * @minLength 1
     * @maxLength 512
     */
    description?: string;
    /**
     * A string that represents the icon that corresponds to this custom field.
     * @minLength 1
     * @maxLength 63
     */
    icon_set_identifier?: string;
    /** A string description of this resource. */
    entity_type: "custom-field";
    /** The types of stories this CustomField is scoped to. */
    story_types?: string[];
    /**
     * The name of the Custom Field.
     * @minLength 1
     * @maxLength 63
     */
    name: string;
    /** When true, the CustomFieldEnumValues may not be reordered. */
    fixed_position?: boolean;
    /**
     * The instant when this CustomField was last updated.
     * @format date-time
     */
    updated_at: string;
    /**
     * The unique public ID for the CustomField.
     * @format uuid
     */
    id: string;
    /** A collection of legal values for a CustomField. */
    values?: CustomFieldEnumValue[];
    /** The type of Custom Field, eg. 'enum'. */
    field_type: "enum";
    /**
     * An integer indicating the position of this Custom Field with respect to the other CustomField
     * @format int64
     */
    position: number;
    /** The canonical name for a Shortcut-defined field. */
    canonical_name?: string;
    /** When true, the CustomField can be applied to entities in the Workspace. */
    enabled: boolean;
    /**
     * The instant when this CustomField was created.
     * @format date-time
     */
    created_at: string;
}
export interface CustomFieldEnumValue {
    /**
     * The unique public ID for the Custom Field.
     * @format uuid
     */
    id: string;
    /**
     * A string value within the domain of this Custom Field.
     * @minLength 1
     * @maxLength 63
     */
    value: string;
    /**
     * An integer indicating the position of this Value with respect to the other CustomFieldEnumValues in the enumeration.
     * @format int64
     */
    position: number;
    /** A color key associated with this CustomFieldEnumValue. */
    color_key?: string | null;
    /** A string description of this resource. */
    entity_type: "custom-field-enum-value";
    /** When true, the CustomFieldEnumValue can be selected for the CustomField. */
    enabled: boolean;
}
export interface CustomFieldValueParams {
    /**
     * The unique public ID for the CustomField.
     * @format uuid
     */
    field_id: string;
    /**
     * The unique public ID for the CustomFieldEnumValue.
     * @format uuid
     */
    value_id: string;
    /** A literal value for the CustomField. Currently ignored. */
    value?: string;
}
/** Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error */
export interface DataConflictError {
    error: "data-conflict-error";
    /** An explanatory message: "The update failed due to a data conflict. Please refresh and try again." */
    message: string;
}
export interface DeleteStories {
    /**
     * An array of IDs of Stories to delete.
     * @uniqueItems true
     */
    story_ids: number[];
}
/** An entity template can be used to prefill various fields when creating new stories. */
export interface EntityTemplate {
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The unique identifier for the entity template.
     * @format uuid
     */
    id: string;
    /**
     * The time/date when the entity template was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The time/date when the entity template was last updated.
     * @format date-time
     */
    updated_at: string;
    /** The template's name. */
    name: string;
    /**
     * The unique ID of the member who created the template.
     * @format uuid
     */
    author_id: string;
    /**
     * The last time that someone created an entity using this template.
     * @format date-time
     */
    last_used_at: string;
    /** A container entity for the attributes this template should populate. */
    story_contents: StoryContents;
}
/** An Epic is a collection of stories that together might make up a release, a objective, or some other large initiative that you are working on. */
export interface Epic {
    /** The Shortcut application url for the Epic. */
    app_url: string;
    /** The Epic's description. */
    description: string;
    /** True/false boolean that indicates whether the Epic is archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Epic has been started. */
    started: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /** An array of Labels attached to the Epic. */
    labels: LabelSlim[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** An array of Member IDs that have been mentioned in the Epic description. */
    member_mention_ids: string[];
    /** An array containing Group IDs and Group-owned story counts for the Epic's associated groups. */
    associated_groups: EpicAssociatedGroup[];
    /** The IDs of Projects related to this Epic. */
    project_ids: number[];
    /**
     * The number of stories in this epic which are not associated with a project.
     * @format int64
     */
    stories_without_projects: number;
    /**
     * A manual override for the time/date the Epic was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The ID of the associated productboard integration.
     * @format uuid
     */
    productboard_plugin_id?: string | null;
    /**
     * The time/date the Epic was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Epic was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** An array of IDs for Objectives to which this epic is related. */
    objective_ids: number[];
    /** The name of the Epic. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Epic has been completed. */
    completed: boolean;
    /** A nested array of threaded comments. */
    comments: ThreadedComment[];
    /** The URL of the associated productboard feature. */
    productboard_url?: string | null;
    /**
     * The Epic's planned start date.
     * @format date-time
     */
    planned_start_date?: string | null;
    /** `Deprecated` The workflow state that the Epic is in. */
    state: string;
    /**
     * `Deprecated` The ID of the Objective this Epic is related to. Use `objective_ids`.
     * @format int64
     */
    milestone_id?: number | null;
    /**
     * The ID of the Member that requested the epic.
     * @format uuid
     */
    requested_by_id: string;
    /**
     * The ID of the Epic State.
     * @format int64
     */
    epic_state_id: number;
    /** An array of Label ids attached to the Epic. */
    label_ids: number[];
    /**
     * A manual override for the time/date the Epic was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * `Deprecated` The ID of the group to associate with the epic. Use `group_ids`.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The time/date the Epic was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of Group IDs that have been mentioned in the Epic description. */
    group_mention_ids: string[];
    /**
     * The ID of the associated productboard feature.
     * @format uuid
     */
    productboard_id?: string | null;
    /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
    follower_ids: string[];
    /** An array of UUIDS for Groups to which this Epic is related. */
    group_ids: string[];
    /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
    owner_ids: string[];
    /** This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Epic.
     * @format int64
     */
    id: number;
    /**
     * The Epic's relative position in the Epic workflow state.
     * @format int64
     */
    position: number;
    /** The name of the associated productboard feature. */
    productboard_name?: string | null;
    /**
     * The Epic's deadline.
     * @format date-time
     */
    deadline?: string | null;
    /** A group of calculated values for this Epic. */
    stats: EpicStats;
    /**
     * The time/date the Epic was created.
     * @format date-time
     */
    created_at?: string | null;
}
export interface EpicAssociatedGroup {
    /**
     * The Group ID of the associated group.
     * @format uuid
     */
    group_id: string;
    /**
     * The number of stories this Group owns in the Epic.
     * @format int64
     */
    associated_stories_count?: number;
}
/** An Epic in search results. This is typed differently from Epic because the details=slim search argument will omit some fields. */
export interface EpicSearchResult {
    /** The Shortcut application url for the Epic. */
    app_url: string;
    /** The Epic's description. */
    description?: string;
    /** True/false boolean that indicates whether the Epic is archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Epic has been started. */
    started: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /** An array of Labels attached to the Epic. */
    labels: LabelSlim[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** An array of Member IDs that have been mentioned in the Epic description. */
    member_mention_ids: string[];
    /** An array containing Group IDs and Group-owned story counts for the Epic's associated groups. */
    associated_groups: EpicAssociatedGroup[];
    /** The IDs of Projects related to this Epic. */
    project_ids: number[];
    /**
     * The number of stories in this epic which are not associated with a project.
     * @format int64
     */
    stories_without_projects: number;
    /**
     * A manual override for the time/date the Epic was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The ID of the associated productboard integration.
     * @format uuid
     */
    productboard_plugin_id?: string | null;
    /**
     * The time/date the Epic was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Epic was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** An array of IDs for Objectives to which this epic is related. */
    objective_ids: number[];
    /** The name of the Epic. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Epic has been completed. */
    completed: boolean;
    /** A nested array of threaded comments. */
    comments?: ThreadedComment[];
    /** The URL of the associated productboard feature. */
    productboard_url?: string | null;
    /**
     * The Epic's planned start date.
     * @format date-time
     */
    planned_start_date?: string | null;
    /** `Deprecated` The workflow state that the Epic is in. */
    state: string;
    /**
     * `Deprecated` The ID of the Objective this Epic is related to. Use `objective_ids`.
     * @format int64
     */
    milestone_id?: number | null;
    /**
     * The ID of the Member that requested the epic.
     * @format uuid
     */
    requested_by_id: string;
    /**
     * The ID of the Epic State.
     * @format int64
     */
    epic_state_id: number;
    /** An array of Label ids attached to the Epic. */
    label_ids: number[];
    /**
     * A manual override for the time/date the Epic was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * `Deprecated` The ID of the group to associate with the epic. Use `group_ids`.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The time/date the Epic was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of Group IDs that have been mentioned in the Epic description. */
    group_mention_ids: string[];
    /**
     * The ID of the associated productboard feature.
     * @format uuid
     */
    productboard_id?: string | null;
    /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
    follower_ids: string[];
    /** An array of UUIDS for Groups to which this Epic is related. */
    group_ids: string[];
    /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
    owner_ids: string[];
    /** This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Epic.
     * @format int64
     */
    id: number;
    /**
     * The Epic's relative position in the Epic workflow state.
     * @format int64
     */
    position: number;
    /** The name of the associated productboard feature. */
    productboard_name?: string | null;
    /**
     * The Epic's deadline.
     * @format date-time
     */
    deadline?: string | null;
    /** A group of calculated values for this Epic. */
    stats: EpicStats;
    /**
     * The time/date the Epic was created.
     * @format date-time
     */
    created_at?: string | null;
}
/** The results of the Epic search query. */
export interface EpicSearchResults {
    /**
     * The total number of matches for the search query. The first 1000 matches can be paged through via the API.
     * @format int64
     */
    total: number;
    /** A list of search results. */
    data: EpicSearchResult[];
    /** The URL path and query string for the next page of search results. */
    next?: string | null;
}
/** EpicSlim represents the same resource as an Epic but is more light-weight, including all Epic fields except the comments array. The description string can be optionally included. Use the [Get Epic](#Get-Epic) endpoint to fetch the unabridged payload for an Epic. */
export interface EpicSlim {
    /** The Shortcut application url for the Epic. */
    app_url: string;
    /** The Epic's description. */
    description?: string;
    /** True/false boolean that indicates whether the Epic is archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Epic has been started. */
    started: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /** An array of Labels attached to the Epic. */
    labels: LabelSlim[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** An array of Member IDs that have been mentioned in the Epic description. */
    member_mention_ids: string[];
    /** An array containing Group IDs and Group-owned story counts for the Epic's associated groups. */
    associated_groups: EpicAssociatedGroup[];
    /** The IDs of Projects related to this Epic. */
    project_ids: number[];
    /**
     * The number of stories in this epic which are not associated with a project.
     * @format int64
     */
    stories_without_projects: number;
    /**
     * A manual override for the time/date the Epic was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The ID of the associated productboard integration.
     * @format uuid
     */
    productboard_plugin_id?: string | null;
    /**
     * The time/date the Epic was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Epic was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** An array of IDs for Objectives to which this epic is related. */
    objective_ids: number[];
    /** The name of the Epic. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Epic has been completed. */
    completed: boolean;
    /** The URL of the associated productboard feature. */
    productboard_url?: string | null;
    /**
     * The Epic's planned start date.
     * @format date-time
     */
    planned_start_date?: string | null;
    /** `Deprecated` The workflow state that the Epic is in. */
    state: string;
    /**
     * `Deprecated` The ID of the Objective this Epic is related to. Use `objective_ids`.
     * @format int64
     */
    milestone_id?: number | null;
    /**
     * The ID of the Member that requested the epic.
     * @format uuid
     */
    requested_by_id: string;
    /**
     * The ID of the Epic State.
     * @format int64
     */
    epic_state_id: number;
    /** An array of Label ids attached to the Epic. */
    label_ids: number[];
    /**
     * A manual override for the time/date the Epic was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * `Deprecated` The ID of the group to associate with the epic. Use `group_ids`.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The time/date the Epic was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of Group IDs that have been mentioned in the Epic description. */
    group_mention_ids: string[];
    /**
     * The ID of the associated productboard feature.
     * @format uuid
     */
    productboard_id?: string | null;
    /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
    follower_ids: string[];
    /** An array of UUIDS for Groups to which this Epic is related. */
    group_ids: string[];
    /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
    owner_ids: string[];
    /** This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Epic.
     * @format int64
     */
    id: number;
    /**
     * The Epic's relative position in the Epic workflow state.
     * @format int64
     */
    position: number;
    /** The name of the associated productboard feature. */
    productboard_name?: string | null;
    /**
     * The Epic's deadline.
     * @format date-time
     */
    deadline?: string | null;
    /** A group of calculated values for this Epic. */
    stats: EpicStats;
    /**
     * The time/date the Epic was created.
     * @format date-time
     */
    created_at?: string | null;
}
/** Epic State is any of the at least 3 columns. Epic States correspond to one of 3 types: Unstarted, Started, or Done. */
export interface EpicState {
    /** The description of what sort of Epics belong in that Epic State. */
    description: string;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The hex color for this Epic State.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /** The Epic State's name. */
    name: string;
    global_id: string;
    /** The type of Epic State (Unstarted, Started, or Done) */
    type: string;
    /**
     * When the Epic State was last updated.
     * @format date-time
     */
    updated_at: string;
    /**
     * The unique ID of the Epic State.
     * @format int64
     */
    id: number;
    /**
     * The position that the Epic State is in, starting with 0 at the left.
     * @format int64
     */
    position: number;
    /**
     * The time/date the Epic State was created.
     * @format date-time
     */
    created_at: string;
}
/** A group of calculated values for this Epic. */
export interface EpicStats {
    /**
     * The total number of completed points in this Epic.
     * @format int64
     */
    num_points_done: number;
    /**
     * The total number of documents associated with this Epic.
     * @format int64
     */
    num_related_documents: number;
    /**
     * The average cycle time (in seconds) of completed stories in this Epic.
     * @format int64
     */
    average_cycle_time?: number;
    /**
     * The total number of unstarted Stories in this Epic.
     * @format int64
     */
    num_stories_unstarted: number;
    /**
     * The total number of Stories in this Epic.
     * @format int64
     */
    num_stories_total: number;
    /**
     * The date of the last update of a Story in this Epic.
     * @format date-time
     */
    last_story_update?: string | null;
    /**
     * The total number of started points in this Epic.
     * @format int64
     */
    num_points_started: number;
    /**
     * The total number of unstarted points in this Epic.
     * @format int64
     */
    num_points_unstarted: number;
    /**
     * The total number of started Stories in this Epic.
     * @format int64
     */
    num_stories_started: number;
    /**
     * The total number of Stories with no point estimate.
     * @format int64
     */
    num_stories_unestimated: number;
    /**
     * The total number of backlog Stories in this Epic.
     * @format int64
     */
    num_stories_backlog: number;
    /**
     * The average lead time (in seconds) of completed stories in this Epic.
     * @format int64
     */
    average_lead_time?: number;
    /**
     * The total number of backlog points in this Epic.
     * @format int64
     */
    num_points_backlog: number;
    /**
     * The total number of points in this Epic.
     * @format int64
     */
    num_points: number;
    /**
     * The total number of done Stories in this Epic.
     * @format int64
     */
    num_stories_done: number;
}
/** Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but must be updated in the Shortcut UI.  */
export interface EpicWorkflow {
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The unique ID of the Epic Workflow.
     * @format int64
     */
    id: number;
    /**
     * The date the Epic Workflow was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The date the Epic Workflow was updated.
     * @format date-time
     */
    updated_at: string;
    /**
     * The unique ID of the default Epic State that new Epics are assigned by default.
     * @format int64
     */
    default_epic_state_id: number;
    /** A map of the Epic States in this Epic Workflow. */
    epic_states: EpicState[];
}
/** A Group. */
export interface Group {
    /** The Shortcut application url for the Group. */
    app_url: string;
    /** The description of the Group. */
    description: string;
    /** Whether or not the Group is archived. */
    archived: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The hex color to be displayed with the Group (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /**
     * The number of stories assigned to the group which are in a started workflow state.
     * @format int64
     */
    num_stories_started: number;
    /**
     * The mention name of the Group.
     * @minLength 1
     * @pattern ^[a-z0-9\-\_\.]+$
     */
    mention_name: string;
    /** The name of the Group. */
    name: string;
    global_id: string;
    /** The color key to be displayed with the Group. */
    color_key?: "blue" | "purple" | "midnight-blue" | "orange" | "yellow-green" | "brass" | "gray" | "fuchsia" | "yellow" | "pink" | "sky-blue" | "green" | "red" | "black" | "slate" | "turquoise" | null;
    /**
     * The total number of stories assigned to the group.
     * @format int64
     */
    num_stories: number;
    /**
     * The number of epics assigned to the group which are in the started workflow state.
     * @format int64
     */
    num_epics_started: number;
    /**
     * The number of stories assigned to the group which are in a backlog workflow state.
     * @format int64
     */
    num_stories_backlog: number;
    /**
     * The id of the Group.
     * @format uuid
     */
    id: string;
    /** Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. */
    display_icon: Icon | null;
    /** The Member IDs contain within the Group. */
    member_ids: string[];
    /** The Workflow IDs contained within the Group. */
    workflow_ids: number[];
}
/** A history item is a group of actions that represent a transactional change to a Story. */
export interface History {
    /** The date when the change occurred. */
    changed_at: string;
    /** The ID of the primary entity that has changed, if applicable. */
    primary_id?: number | string;
    /** An array of objects affected by the change. Reference objects provide basic information for the entities reference in the history actions. Some have specific fields, but they always contain an id, entity_type, and a name. */
    references?: (HistoryReferenceBranch | HistoryReferenceCommit | HistoryReferenceEpic | HistoryReferenceGroup | HistoryReferenceIteration | HistoryReferenceLabel | HistoryReferenceProject | HistoryReferenceStory | HistoryReferenceStoryTask | HistoryReferenceCustomFieldEnumValue | HistoryReferenceWorkflowState | HistoryReferenceGeneral)[];
    /** An array of actions that were performed for the change. */
    actions: (HistoryActionBranchCreate | HistoryActionBranchMerge | HistoryActionBranchPush | HistoryActionLabelCreate | HistoryActionLabelUpdate | HistoryActionLabelDelete | HistoryActionProjectUpdate | HistoryActionPullRequest | HistoryActionStoryCreate | HistoryActionStoryUpdate | HistoryActionStoryDelete | HistoryActionStoryCommentCreate | HistoryActionStoryLinkCreate | HistoryActionStoryLinkUpdate | HistoryActionStoryLinkDelete | HistoryActionTaskCreate | HistoryActionTaskUpdate | HistoryActionTaskDelete | HistoryActionWorkspace2BulkUpdate)[];
    /**
     * The ID of the member who performed the change.
     * @format uuid
     */
    member_id?: string;
    /** The ID of the webhook that handled the change. */
    external_id?: string;
    /**
     * The ID representing the change for the story.
     * @format uuid
     */
    id: string;
    /** The version of the change format. */
    version: "v1";
    /** The ID of the webhook that handled the change. */
    webhook_id?: string | null;
    /**
     * The ID of the automation that performed the change.
     * @format uuid
     */
    automation_id?: string;
}
/** An action representing a VCS Branch being created. */
export interface HistoryActionBranchCreate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The name of the VCS Branch that was pushed */
    name: string;
    /** The URL from the provider of the VCS Branch that was pushed */
    url: string;
    /** The action of the entity referenced. */
    action: "create";
}
/** An action representing a VCS Branch being merged. */
export interface HistoryActionBranchMerge {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The name of the VCS Branch that was pushed */
    name: string;
    /** The URL from the provider of the VCS Branch that was pushed */
    url: string;
    /** The action of the entity referenced. */
    action: "merge";
}
/** An action representing a VCS Branch being pushed. */
export interface HistoryActionBranchPush {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The name of the VCS Branch that was pushed */
    name: string;
    /** The URL from the provider of the VCS Branch that was pushed */
    url: string;
    /** The action of the entity referenced. */
    action: "push";
}
/** An action representing a Label being created. */
export interface HistoryActionLabelCreate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "create";
    /**
     * The application URL of the Label.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The name of the Label. */
    name: string;
}
/** An action representing a Label being deleted. */
export interface HistoryActionLabelDelete {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "delete";
    /** The name of the Label. */
    name: string;
}
/** An action representing a Label being updated. */
export interface HistoryActionLabelUpdate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "update";
}
/** An action representing a Project being updated. */
export interface HistoryActionProjectUpdate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "update";
    /**
     * The application URL of the Project.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The name of the Project. */
    name: string;
}
/** An action representing various operations for a Pull Request. */
export interface HistoryActionPullRequest {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "open" | "update" | "reopen" | "close" | "sync" | "comment";
    /**
     * The VCS Repository-specific ID for the Pull Request.
     * @format int64
     */
    number: number;
    /** The title of the Pull Request. */
    title: string;
    /**
     * The URL from the provider of the VCS Pull Request.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    url: string;
}
/** An action representing a Story Comment being created. */
export interface HistoryActionStoryCommentCreate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "create";
    /**
     * The application URL of the Story Comment.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The text of the Story Comment. */
    text: string;
    /**
     * The Member ID of who created the Story Comment.
     * @format uuid
     */
    author_id: string;
}
/** An action representing a Story being created. */
export interface HistoryActionStoryCreate {
    /**
     * The application URL of the Story.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The description of the Story. */
    description?: string;
    /** Whether or not the Story has been started. */
    started?: boolean;
    /** The type of entity referenced. */
    entity_type: string;
    /** An array of Task IDs on this Story. */
    task_ids?: number[];
    /** The type of Story; either feature, bug, or chore. */
    story_type: "feature" | "chore" | "bug";
    /** The name of the Story. */
    name: string;
    /** Whether or not the Story is completed. */
    completed?: boolean;
    /** Whether or not the Story is blocking another Story. */
    blocker?: boolean;
    /**
     * The Epic ID for this Story.
     * @format int64
     */
    epic_id?: number;
    /**
     * The ID of the Member that requested the Story.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The Iteration ID the Story is in.
     * @format int64
     */
    iteration_id?: number | null;
    /** An array of Labels IDs attached to the Story. */
    label_ids?: number[];
    /**
     * The Team IDs for the followers of the Story.
     * @format uuid
     */
    group_id?: string;
    /**
     * An array of Workflow State IDs attached to the Story.
     * @format int64
     */
    workflow_state_id?: number;
    /** An array of Story IDs that are the object of a Story Link relationship. */
    object_story_link_ids?: number[];
    /** An array of Member IDs for the followers of the Story. */
    follower_ids?: string[];
    /** An array of Member IDs that are the owners of the Story. */
    owner_ids?: string[];
    /** An array of Custom Field Enum Value ids on this Story. */
    custom_field_value_ids?: string[];
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /**
     * The estimate (or point value) for the Story.
     * @format int64
     */
    estimate?: number;
    /** An array of Story IDs that are the subject of a Story Link relationship. */
    subject_story_link_ids?: number[];
    /** The action of the entity referenced. */
    action: "create";
    /** Whether or not the Story is blocked by another Story. */
    blocked?: boolean;
    /**
     * The Project ID of the Story is in.
     * @format int64
     */
    project_id?: number;
    /** The timestamp representing the Story's deadline. */
    deadline?: string;
}
/** An action representing a Story being deleted. */
export interface HistoryActionStoryDelete {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "delete";
    /** The name of the Story. */
    name: string;
    /** The type of Story; either feature, bug, or chore. */
    story_type: "feature" | "chore" | "bug";
}
/** An action representing a Story Link being created. */
export interface HistoryActionStoryLinkCreate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "create";
    /** The verb describing the link's relationship. */
    verb: "blocks" | "duplicates" | "relates to";
    /**
     * The Story ID of the subject Story.
     * @format int64
     */
    subject_id: number;
    /**
     * The Story ID of the object Story.
     * @format int64
     */
    object_id: number;
}
/** An action representing a Story Link being deleted. */
export interface HistoryActionStoryLinkDelete {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "delete";
    /** The verb describing the link's relationship. */
    verb: "blocks" | "duplicates" | "relates to";
    /**
     * The Story ID of the subject Story.
     * @format int64
     */
    subject_id?: number | null;
    /**
     * The Story ID of the object Story.
     * @format int64
     */
    object_id?: number | null;
}
/** An action representing a Story Link being updated. */
export interface HistoryActionStoryLinkUpdate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "update";
    /** The verb describing the link's relationship. */
    verb: "blocks" | "duplicates" | "relates to";
    /**
     * The Story ID of the subject Story.
     * @format int64
     */
    subject_id: number;
    /**
     * The Story ID of the object Story.
     * @format int64
     */
    object_id: number;
    /** The changes that have occurred as a result of the action. */
    changes: HistoryChangesStoryLink;
}
/** An action representing a Story being updated. */
export interface HistoryActionStoryUpdate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "update";
    /**
     * The application URL of the Story.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The changes that have occurred as a result of the action. */
    changes?: HistoryChangesStory;
    /** The name of the Story. */
    name: string;
    /** The type of Story; either feature, bug, or chore. */
    story_type: "feature" | "chore" | "bug";
}
/** An action representing a Task being created. */
export interface HistoryActionTaskCreate {
    /** The description of the Task. */
    description: string;
    /** The type of entity referenced. */
    entity_type: string;
    /** An array of Member IDs that represent who has been mentioned in the Task. */
    mention_ids?: string[];
    /** An array of Groups IDs that represent which have been mentioned in the Task. */
    group_mention_ids?: string[];
    /** An array of Member IDs that represent the Task's owners. */
    owner_ids?: string[];
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The action of the entity referenced. */
    action: "create";
    /** Whether or not the Task is complete. */
    complete: boolean;
    /** A timestamp that represent's the Task's deadline. */
    deadline?: string;
}
/** An action representing a Task being deleted. */
export interface HistoryActionTaskDelete {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "delete";
    /** The description of the Task being deleted. */
    description: string;
}
/** An action representing a Task being updated. */
export interface HistoryActionTaskUpdate {
    /**
     * The ID of the entity referenced.
     * @format int64
     */
    id: number;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "update";
    /** The changes that have occurred as a result of the action. */
    changes: HistoryChangesTask;
    /** Whether or not the Task is complete. */
    complete?: boolean;
    /** The description of the Task. */
    description: string;
    /**
     * The Story ID that contains the Task.
     * @format int64
     */
    story_id: number;
}
/** An action representing a bulk operation within a workspace2. */
export interface HistoryActionWorkspace2BulkUpdate {
    /**
     * The ID of the entity referenced.
     * @format uuid
     */
    id: string;
    /** The type of entity referenced. */
    entity_type: string;
    /** The action of the entity referenced. */
    action: "bulk-update";
    /** The name of the workspace2 in which the BulkUpdate occurred. */
    name: string;
}
/** The changes that have occurred as a result of the action. */
export interface HistoryChangesStory {
    /** A timestamp that represents the Story's deadline. */
    description?: StoryHistoryChangeOldNewStr;
    /** True if the Story has archived, otherwise false. */
    archived?: StoryHistoryChangeOldNewBool;
    /** True if the Story has archived, otherwise false. */
    started?: StoryHistoryChangeOldNewBool;
    /** Task IDs that have been added or removed from the Story. */
    task_ids?: StoryHistoryChangeAddsRemovesInt;
    /** Custom Field Enum Value IDs that have been added or removed from the Story. */
    mention_ids?: StoryHistoryChangeAddsRemovesUuid;
    /** A timestamp that represents the Story's deadline. */
    story_type?: StoryHistoryChangeOldNewStr;
    /** A timestamp that represents the Story's deadline. */
    name?: StoryHistoryChangeOldNewStr;
    /** True if the Story has archived, otherwise false. */
    completed?: StoryHistoryChangeOldNewBool;
    /** True if the Story has archived, otherwise false. */
    blocker?: StoryHistoryChangeOldNewBool;
    /** The estimate value for the Story */
    epic_id?: StoryHistoryChangeOldNewInt;
    /** Task IDs that have been added or removed from the Story. */
    branch_ids?: StoryHistoryChangeAddsRemovesInt;
    /** Task IDs that have been added or removed from the Story. */
    commit_ids?: StoryHistoryChangeAddsRemovesInt;
    /** The Team ID for the Story. */
    requested_by_id?: StoryHistoryChangeOldNewUuid;
    /** The estimate value for the Story */
    iteration_id?: StoryHistoryChangeOldNewInt;
    /** Task IDs that have been added or removed from the Story. */
    label_ids?: StoryHistoryChangeAddsRemovesInt;
    /** The Team ID for the Story. */
    group_id?: StoryHistoryChangeOldNewUuid;
    /** The estimate value for the Story */
    workflow_state_id?: StoryHistoryChangeOldNewInt;
    /** Task IDs that have been added or removed from the Story. */
    object_story_link_ids?: StoryHistoryChangeAddsRemovesInt;
    /** Custom Field Enum Value IDs that have been added or removed from the Story. */
    follower_ids?: StoryHistoryChangeAddsRemovesUuid;
    /** Custom Field Enum Value IDs that have been added or removed from the Story. */
    owner_ids?: StoryHistoryChangeAddsRemovesUuid;
    /** Custom Field Enum Value IDs that have been added or removed from the Story. */
    custom_field_value_ids?: StoryHistoryChangeAddsRemovesUuid;
    /** The estimate value for the Story */
    estimate?: StoryHistoryChangeOldNewInt;
    /** Task IDs that have been added or removed from the Story. */
    subject_story_link_ids?: StoryHistoryChangeAddsRemovesInt;
    /** True if the Story has archived, otherwise false. */
    blocked?: StoryHistoryChangeOldNewBool;
    /** The estimate value for the Story */
    project_id?: StoryHistoryChangeOldNewInt;
    /** A timestamp that represents the Story's deadline. */
    deadline?: StoryHistoryChangeOldNewStr;
}
/** The changes that have occurred as a result of the action. */
export interface HistoryChangesStoryLink {
    /** A timestamp that represents the Story's deadline. */
    verb?: StoryHistoryChangeOldNewStr;
    /** The estimate value for the Story */
    object_id?: StoryHistoryChangeOldNewInt;
    /** The estimate value for the Story */
    subject_id?: StoryHistoryChangeOldNewInt;
}
/** The changes that have occurred as a result of the action. */
export interface HistoryChangesTask {
    /** True if the Story has archived, otherwise false. */
    complete?: StoryHistoryChangeOldNewBool;
    /** A timestamp that represents the Story's deadline. */
    description?: StoryHistoryChangeOldNewStr;
    /** Custom Field Enum Value IDs that have been added or removed from the Story. */
    mention_ids?: StoryHistoryChangeAddsRemovesUuid;
    /** Custom Field Enum Value IDs that have been added or removed from the Story. */
    owner_ids?: StoryHistoryChangeAddsRemovesUuid;
}
/** A reference to a VCS Branch. */
export interface HistoryReferenceBranch {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /** The name of the entity referenced. */
    name: string;
    /**
     * The external URL for the Branch.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    url: string;
}
/** A reference to a VCS Commit. */
export interface HistoryReferenceCommit {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /** The message from the Commit. */
    message: string;
    /**
     * The external URL for the Branch.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    url: string;
}
/** A reference to a CustomField value asserted on a Story. */
export interface HistoryReferenceCustomFieldEnumValue {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /** The custom-field enum value as a string. */
    string_value?: string | null;
    /** Whether or not the custom-field enum value is enabled. */
    enum_value_enabled?: boolean | null;
    /**
     * The public-id of the parent custom-field of this enum value.
     * @format uuid
     */
    field_id: string;
    /** The type variety of the parent custom-field of this enum value. */
    field_type: string;
    /** The name as it is displayed to the user of the parent custom-field of this enum value. */
    field_name: string;
    /** Whether or not the custom-field is enabled. */
    field_enabled: boolean;
}
/** A reference to an Epic. */
export interface HistoryReferenceEpic {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /**
     * The application URL of the Epic.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The name of the entity referenced. */
    name: string;
}
/** A default reference for entity types that don't have extra fields. */
export interface HistoryReferenceGeneral {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /** The name of the entity referenced. */
    name: string;
}
/** A reference to a Group. */
export interface HistoryReferenceGroup {
    /**
     * The ID of the entity referenced.
     * @format uuid
     */
    id: string;
    /** The type of entity referenced. */
    entity_type: string;
    /** The name of the entity referenced. */
    name: string;
}
/** A reference to an Iteration. */
export interface HistoryReferenceIteration {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /**
     * The application URL of the Iteration.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The name of the entity referenced. */
    name: string;
}
/** A reference to an Label. */
export interface HistoryReferenceLabel {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /**
     * The application URL of the Label.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The name of the entity referenced. */
    name: string;
}
/** A reference to an Project. */
export interface HistoryReferenceProject {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /**
     * The application URL of the Project.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The name of the entity referenced. */
    name: string;
}
/** A reference to a Story. */
export interface HistoryReferenceStory {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /**
     * The application URL of the Story.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    app_url: string;
    /** The name of the entity referenced. */
    name: string;
    /** If the referenced entity is a Story, either "bug", "chore", or "feature". */
    story_type: "feature" | "chore" | "bug";
}
/** A reference to a Story Task. */
export interface HistoryReferenceStoryTask {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /** The description of the Story Task. */
    description: string;
}
/** A references to a Story Workflow State. */
export interface HistoryReferenceWorkflowState {
    /** The ID of the entity referenced. */
    id: number | string;
    /** The type of entity referenced. */
    entity_type: string;
    /** Either "backlog", "unstarted", "started", or "done". */
    type: "started" | "backlog" | "unstarted" | "done";
    /** The name of the entity referenced. */
    name: string;
}
/** Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. */
export interface Icon {
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The unique ID of the Icon.
     * @format uuid
     */
    id: string;
    /**
     * The time/date that the Icon was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The time/date that the Icon was updated.
     * @format date-time
     */
    updated_at: string;
    /** The URL of the Icon. */
    url: string;
}
/** The Identity of the VCS user that authored the Commit. */
export interface Identity {
    /** A string description of this resource. */
    entity_type: string;
    /** This is your login in VCS. */
    name?: string | null;
    /** The service this Identity is for. */
    type?: "slack" | "github" | "gitlab" | "bitbucket" | null;
}
/** An Iteration is a defined, time-boxed period of development for a collection of Stories. See https://help.shortcut.com/hc/en-us/articles/360028953452-Iterations-Overview for more information. */
export interface Iteration {
    /** The Shortcut application url for the Iteration. */
    app_url: string;
    /** The description of the iteration. */
    description: string;
    /** A string description of this resource */
    entity_type: string;
    /** An array of labels attached to the iteration. */
    labels: Label[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** An array of Member IDs that have been mentioned in the Story description. */
    member_mention_ids: string[];
    /** An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. */
    associated_groups: IterationAssociatedGroup[];
    /** The name of the iteration. */
    name: string;
    global_id: string;
    /** An array of label ids attached to the iteration. */
    label_ids: number[];
    /**
     * The instant when this iteration was last updated.
     * @format date-time
     */
    updated_at: string;
    /** An array of Group IDs that have been mentioned in the Story description. */
    group_mention_ids: string[];
    /**
     * The date this iteration ends.
     * @format date-time
     */
    end_date: string;
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids: string[];
    /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
    group_ids: string[];
    /**
     * The date this iteration begins.
     * @format date-time
     */
    start_date: string;
    /** The status of the iteration. Values are either "unstarted", "started", or "done". */
    status: string;
    /**
     * The ID of the iteration.
     * @format int64
     */
    id: number;
    /** A group of calculated values for this Iteration. */
    stats: IterationStats;
    /**
     * The instant when this iteration was created.
     * @format date-time
     */
    created_at: string;
}
export interface IterationAssociatedGroup {
    /**
     * The Group ID of the associated group.
     * @format uuid
     */
    group_id: string;
    /**
     * The number of stories this Group owns in the Iteration.
     * @format int64
     */
    associated_stories_count?: number;
}
/** The results of the Iteration search query. */
export interface IterationSearchResults {
    /**
     * The total number of matches for the search query. The first 1000 matches can be paged through via the API.
     * @format int64
     */
    total: number;
    /** A list of search results. */
    data: IterationSlim[];
    /** The URL path and query string for the next page of search results. */
    next?: string | null;
}
/** IterationSlim represents the same resource as an Iteration, but is more light-weight. Use the [Get Iteration](#Get-Iteration) endpoint to fetch the unabridged payload for an Iteration.  */
export interface IterationSlim {
    /** The Shortcut application url for the Iteration. */
    app_url: string;
    /** A string description of this resource */
    entity_type: string;
    /** An array of labels attached to the iteration. */
    labels: Label[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** An array of Member IDs that have been mentioned in the Story description. */
    member_mention_ids: string[];
    /** An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. */
    associated_groups: IterationAssociatedGroup[];
    /** The name of the iteration. */
    name: string;
    global_id: string;
    /** An array of label ids attached to the iteration. */
    label_ids: number[];
    /**
     * The instant when this iteration was last updated.
     * @format date-time
     */
    updated_at: string;
    /** An array of Group IDs that have been mentioned in the Story description. */
    group_mention_ids: string[];
    /**
     * The date this iteration ends.
     * @format date-time
     */
    end_date: string;
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids: string[];
    /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
    group_ids: string[];
    /**
     * The date this iteration begins.
     * @format date-time
     */
    start_date: string;
    /** The status of the iteration. Values are either "unstarted", "started", or "done". */
    status: string;
    /**
     * The ID of the iteration.
     * @format int64
     */
    id: number;
    /** A group of calculated values for this Iteration. */
    stats: IterationStats;
    /**
     * The instant when this iteration was created.
     * @format date-time
     */
    created_at: string;
}
/** A group of calculated values for this Iteration. */
export interface IterationStats {
    /**
     * The total number of completed points in this Iteration.
     * @format int64
     */
    num_points_done: number;
    /**
     * The total number of documents related to an Iteration
     * @format int64
     */
    num_related_documents: number;
    /**
     * The average cycle time (in seconds) of completed stories in this Iteration.
     * @format int64
     */
    average_cycle_time?: number;
    /**
     * The total number of unstarted Stories in this Iteration.
     * @format int64
     */
    num_stories_unstarted: number;
    /**
     * The total number of started points in this Iteration.
     * @format int64
     */
    num_points_started: number;
    /**
     * The total number of unstarted points in this Iteration.
     * @format int64
     */
    num_points_unstarted: number;
    /**
     * The total number of started Stories in this Iteration.
     * @format int64
     */
    num_stories_started: number;
    /**
     * The total number of Stories with no point estimate.
     * @format int64
     */
    num_stories_unestimated: number;
    /**
     * The total number of backlog Stories in this Iteration.
     * @format int64
     */
    num_stories_backlog: number;
    /**
     * The average lead time (in seconds) of completed stories in this Iteration.
     * @format int64
     */
    average_lead_time?: number;
    /**
     * The total number of backlog points in this Iteration.
     * @format int64
     */
    num_points_backlog: number;
    /**
     * The total number of points in this Iteration.
     * @format int64
     */
    num_points: number;
    /**
     * The total number of done Stories in this Iteration.
     * @format int64
     */
    num_stories_done: number;
}
export interface KeyResult {
    /**
     * The ID of the Key Result.
     * @format uuid
     */
    id: string;
    /** The name of the Key Result. */
    name: string;
    /**
     * The Objective to which this Key Result belongs.
     * @format int64
     */
    objective_id: number;
    /** The type of the Key Result (numeric, percent, or boolean). */
    type: "percent" | "boolean" | "numeric";
    /** The starting value of the Key Result. */
    initial_observed_value: KeyResultValue;
    /** The starting value of the Key Result. */
    current_observed_value: KeyResultValue;
    /** The starting value of the Key Result. */
    current_target_value: KeyResultValue;
    /**
     * The integer percentage of progress toward completion of the Key Result.
     * @format int64
     */
    progress: number;
}
/** The starting value of the Key Result. */
export interface KeyResultValue {
    /** The numeric value, as a decimal string. No more than two decimal places are allowed. */
    numeric_value?: string;
    /** The boolean value. */
    boolean_value?: boolean;
}
/** A Label can be used to associate and filter Stories and Epics, and also create new Workspaces. */
export interface Label {
    /** The Shortcut application url for the Label. */
    app_url: string;
    /** The description of the Label. */
    description?: string | null;
    /** A true/false boolean indicating if the Label has been archived. */
    archived: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The hex color to be displayed with the Label (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /** The name of the Label. */
    name: string;
    global_id: string;
    /**
     * The time/date that the Label was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Label.
     * @format int64
     */
    id: number;
    /** A group of calculated values for this Label. This is not included if the slim? flag is set to true for the List Labels endpoint. */
    stats?: LabelStats;
    /**
     * The time/date that the Label was created.
     * @format date-time
     */
    created_at?: string | null;
}
/** A Label can be used to associate and filter Stories and Epics, and also create new Workspaces. A slim Label does not include aggregate stats. Fetch the Label using the labels endpoint to retrieve them. */
export interface LabelSlim {
    /** The Shortcut application url for the Label. */
    app_url: string;
    /** The description of the Label. */
    description?: string | null;
    /** A true/false boolean indicating if the Label has been archived. */
    archived: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The hex color to be displayed with the Label (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /** The name of the Label. */
    name: string;
    global_id: string;
    /**
     * The time/date that the Label was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Label.
     * @format int64
     */
    id: number;
    /**
     * The time/date that the Label was created.
     * @format date-time
     */
    created_at?: string | null;
}
/** A group of calculated values for this Label. This is not included if the slim? flag is set to true for the List Labels endpoint. */
export interface LabelStats {
    /**
     * The total number of Documents associated this Label.
     * @format int64
     */
    num_related_documents: number;
    /**
     * The total number of Epics with this Label.
     * @format int64
     */
    num_epics: number;
    /**
     * The total number of stories unstarted Stories with this Label.
     * @format int64
     */
    num_stories_unstarted: number;
    /**
     * The total number of Stories with this Label.
     * @format int64
     */
    num_stories_total: number;
    /**
     * The number of unstarted epics associated with this label.
     * @format int64
     */
    num_epics_unstarted: number;
    /**
     * The number of in progress epics associated with this label.
     * @format int64
     */
    num_epics_in_progress: number;
    /**
     * The total number of unstarted points with this Label.
     * @format int64
     */
    num_points_unstarted: number;
    /**
     * The total number of Stories with no point estimate with this Label.
     * @format int64
     */
    num_stories_unestimated: number;
    /**
     * The total number of in-progress points with this Label.
     * @format int64
     */
    num_points_in_progress: number;
    /**
     * The total number of Epics associated with this Label.
     * @format int64
     */
    num_epics_total: number;
    /**
     * The total number of completed Stories with this Label.
     * @format int64
     */
    num_stories_completed: number;
    /**
     * The total number of completed points with this Label.
     * @format int64
     */
    num_points_completed: number;
    /**
     * The total number of stories backlog Stories with this Label.
     * @format int64
     */
    num_stories_backlog: number;
    /**
     * The total number of points with this Label.
     * @format int64
     */
    num_points_total: number;
    /**
     * The total number of in-progress Stories with this Label.
     * @format int64
     */
    num_stories_in_progress: number;
    /**
     * The total number of backlog points with this Label.
     * @format int64
     */
    num_points_backlog: number;
    /**
     * The number of completed Epics associated with this Label.
     * @format int64
     */
    num_epics_completed: number;
}
/** Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL. */
export interface LinkedFile {
    /** The description of the file. */
    description?: string | null;
    /** A string description of this resource. */
    entity_type: string;
    /** The IDs of the stories this file is attached to. */
    story_ids: number[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** The members that are mentioned in the description of the file. */
    member_mention_ids: string[];
    /** The name of the linked file. */
    name: string;
    /** The URL of the file thumbnail, if the integration provided it. */
    thumbnail_url?: string | null;
    /** The integration type (e.g. google, dropbox, box). */
    type: string;
    /**
     * The filesize, if the integration provided it.
     * @format int64
     */
    size?: number | null;
    /**
     * The UUID of the member that uploaded the file.
     * @format uuid
     */
    uploader_id: string;
    /** The content type of the image (e.g. txt/plain). */
    content_type?: string | null;
    /**
     * The time/date the LinkedFile was updated.
     * @format date-time
     */
    updated_at: string;
    /** The groups that are mentioned in the description of the file. */
    group_mention_ids: string[];
    /**
     * The unique identifier for the file.
     * @format int64
     */
    id: number;
    /** The URL of the file. */
    url: string;
    /**
     * The time/date the LinkedFile was created.
     * @format date-time
     */
    created_at: string;
}
/** Error returned when total maximum supported results have been reached. */
export interface MaxSearchResultsExceededError {
    /** The name for this type of error, `maximum-results-exceeded` */
    error: "maximum-results-exceeded";
    /** An explanatory message: "A maximum of 1000 search results are supported." */
    message: string;
    /**
     * The maximum number of search results supported, `1000`
     * @format int64
     */
    "maximum-results": 1000;
}
/** Details about an individual user within the Workspace. */
export interface Member {
    /** The Member's role in the Workspace. */
    role: string;
    /** A string description of this resource. */
    entity_type: string;
    /** True/false boolean indicating whether the Member has been disabled within the Workspace. */
    disabled: boolean;
    global_id: string;
    /** The user state, one of partial, full, disabled, or imported.  A partial user is disabled, has no means to log in, and is not an import user.  A full user is enabled and has a means to log in.  A disabled user is disabled and has a means to log in.  An import user is disabled, has no means to log in, and is marked as an import user. */
    state: "partial" | "full" | "disabled" | "imported";
    /**
     * The time/date the Member was last updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** Whether this member was created as a placeholder entity. */
    created_without_invite: boolean;
    /** The Member's group ids */
    group_ids: string[];
    /**
     * The Member's ID in Shortcut.
     * @format uuid
     */
    id: string;
    /** A group of Member profile details. */
    profile: Profile;
    /**
     * The time/date the Member was created.
     * @format date-time
     */
    created_at?: string | null;
    /**
     * The id of the member that replaces this one when merged.
     * @format uuid
     */
    replaced_by?: string;
}
export interface MemberInfo {
    /** @format uuid */
    id: string;
    name: string;
    mention_name: string;
    workspace2: BasicWorkspaceInfo;
}
/** (Deprecated) A Milestone is a collection of Epics that represent a release or some other large initiative that you are working on. Milestones have become Objectives, so you should use Objective-related API resources instead of Milestone ones. */
export interface Milestone {
    /** The Shortcut application url for the Milestone. */
    app_url: string;
    /** The Milestone's description. */
    description: string;
    /** A boolean indicating whether the Milestone has been archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Milestone has been started. */
    started: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * A manual override for the time/date the Milestone was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The time/date the Milestone was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Milestone was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** The name of the Milestone. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Milestone has been completed. */
    completed: boolean;
    /** The workflow state that the Milestone is in. */
    state: string;
    /**
     * A manual override for the time/date the Milestone was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * The time/date the Milestone was updated.
     * @format date-time
     */
    updated_at: string;
    /** An array of Categories attached to the Milestone. */
    categories: Category[];
    /**
     * The unique ID of the Milestone.
     * @format int64
     */
    id: number;
    /** The IDs of the Key Results associated with the Objective. */
    key_result_ids: string[];
    /**
     * A number representing the position of the Milestone in relation to every other Milestone within the Workspace.
     * @format int64
     */
    position: number;
    /** A group of calculated values for this Milestone. */
    stats: MilestoneStats;
    /**
     * The time/date the Milestone was created.
     * @format date-time
     */
    created_at: string;
}
/** A group of calculated values for this Milestone. */
export interface MilestoneStats {
    /**
     * The average cycle time (in seconds) of completed stories in this Milestone.
     * @format int64
     */
    average_cycle_time?: number;
    /**
     * The average lead time (in seconds) of completed stories in this Milestone.
     * @format int64
     */
    average_lead_time?: number;
    /**
     * The number of related documents to this Milestone.
     * @format int64
     */
    num_related_documents: number;
}
/** An Objective is a collection of Epics that represent a release or some other large initiative that you are working on. */
export interface Objective {
    /** The Shortcut application url for the Objective. */
    app_url: string;
    /** The Objective's description. */
    description: string;
    /** A boolean indicating whether the Objective has been archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Objective has been started. */
    started: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * A manual override for the time/date the Objective was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The time/date the Objective was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Objective was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** The name of the Objective. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Objectivehas been completed. */
    completed: boolean;
    /** The workflow state that the Objective is in. */
    state: string;
    /**
     * A manual override for the time/date the Objective was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * The time/date the Objective was updated.
     * @format date-time
     */
    updated_at: string;
    /** An array of Categories attached to the Objective. */
    categories: Category[];
    /**
     * The unique ID of the Objective.
     * @format int64
     */
    id: number;
    /** The IDs of the Key Results associated with the Objective. */
    key_result_ids: string[];
    /**
     * A number representing the position of the Objective in relation to every other Objective within the Workspace.
     * @format int64
     */
    position: number;
    /** A group of calculated values for this Objective. */
    stats: ObjectiveStats;
    /**
     * The time/date the Objective was created.
     * @format date-time
     */
    created_at: string;
}
/** A Milestone in search results. This is typed differently from Milestone because the details=slim search argument will omit some fields. */
export interface ObjectiveSearchResult {
    /** The Shortcut application url for the Milestone. */
    app_url: string;
    /** The Milestone's description. */
    description?: string;
    /** A boolean indicating whether the Milestone has been archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Milestone has been started. */
    started: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * A manual override for the time/date the Milestone was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The time/date the Milestone was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Milestone was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** The name of the Milestone. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Milestone has been completed. */
    completed: boolean;
    /** The workflow state that the Milestone is in. */
    state: string;
    /**
     * A manual override for the time/date the Milestone was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * The time/date the Milestone was updated.
     * @format date-time
     */
    updated_at: string;
    /** An array of Categories attached to the Milestone. */
    categories: Category[];
    /**
     * The unique ID of the Milestone.
     * @format int64
     */
    id: number;
    /** The IDs of the Key Results associated with the Objective. */
    key_result_ids: string[];
    /**
     * A number representing the position of the Milestone in relation to every other Milestone within the Workspace.
     * @format int64
     */
    position: number;
    /** A group of calculated values for this Milestone. */
    stats: MilestoneStats;
    /**
     * The time/date the Milestone was created.
     * @format date-time
     */
    created_at: string;
}
/** The results of the Objective search query. */
export interface ObjectiveSearchResults {
    /**
     * The total number of matches for the search query. The first 1000 matches can be paged through via the API.
     * @format int64
     */
    total: number;
    /** A list of search results. */
    data: ObjectiveSearchResult[];
    /** The URL path and query string for the next page of search results. */
    next?: string | null;
}
/** A group of calculated values for this Objective. */
export interface ObjectiveStats {
    /**
     * The average cycle time (in seconds) of completed stories in this Objective.
     * @format int64
     */
    average_cycle_time?: number;
    /**
     * The average lead time (in seconds) of completed stories in this Objective.
     * @format int64
     */
    average_lead_time?: number;
    /**
     * The number of related documents to this Objective.
     * @format int64
     */
    num_related_documents: number;
}
/** A group of Member profile details. */
export interface Profile {
    /** A string description of this resource. */
    entity_type: string;
    /** A true/false boolean indicating whether the Member has been deactivated within Shortcut. */
    deactivated: boolean;
    /** If Two Factor Authentication is activated for this User. */
    two_factor_auth_activated?: boolean;
    /** The Member's username within the Organization. */
    mention_name: string;
    /** The Member's name within the Organization. */
    name?: string | null;
    /** This is the gravatar hash associated with email_address. */
    gravatar_hash?: string | null;
    /**
     * The unique identifier of the profile.
     * @format uuid
     */
    id: string;
    /** Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. */
    display_icon: Icon | null;
    /** A boolean indicating whether this profile is an owner at their associated organization. */
    is_owner: boolean;
    /** The primary email address of the Member with the Organization. */
    email_address?: string | null;
}
/** Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative. */
export interface Project {
    /** The Shortcut application url for the Project. */
    app_url: string;
    /** The description of the Project. */
    description?: string | null;
    /** True/false boolean indicating whether the Project is in an Archived state. */
    archived: boolean;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The number of days before the thermometer appears in the Story summary.
     * @format int64
     */
    days_to_thermometer: number;
    /**
     * The color associated with the Project in the Shortcut member interface.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /**
     * The ID of the workflow the project belongs to.
     * @format int64
     */
    workflow_id: number;
    /** The name of the Project */
    name: string;
    /** The Global ID of the Project. */
    global_id: string;
    /**
     * The date at which the Project was started.
     * @format date-time
     */
    start_time: string;
    /**
     * The time/date that the Project was last updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids: string[];
    /** This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Project.
     * @format int64
     */
    id: number;
    /** Configuration to enable or disable thermometers in the Story summary. */
    show_thermometer: boolean;
    /**
     * The ID of the team the project belongs to.
     * @format int64
     */
    team_id: number;
    /**
     * The number of weeks per iteration in this Project.
     * @format int64
     */
    iteration_length: number;
    /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
    abbreviation?: string | null;
    /** A group of calculated values for this Project. */
    stats: ProjectStats;
    /**
     * The time/date that the Project was created.
     * @format date-time
     */
    created_at?: string | null;
}
/** A group of calculated values for this Project. */
export interface ProjectStats {
    /**
     * The total number of stories in this Project.
     * @format int64
     */
    num_stories: number;
    /**
     * The total number of points in this Project.
     * @format int64
     */
    num_points: number;
    /**
     * The total number of documents related to this Project
     * @format int64
     */
    num_related_documents: number;
}
/** Corresponds to a VCS Pull Request attached to a Shortcut story. */
export interface PullRequest {
    /** A string description of this resource. */
    entity_type: string;
    /** True/False boolean indicating whether the VCS pull request has been closed. */
    closed: boolean;
    /** True/False boolean indicating whether the VCS pull request has been merged. */
    merged: boolean;
    /**
     * Number of lines added in the pull request, according to VCS.
     * @format int64
     */
    num_added: number;
    /**
     * The ID of the branch for the particular pull request.
     * @format int64
     */
    branch_id: number;
    /** An array of Story ids that have Pull Requests that change at least one of the same lines this Pull Request changes. */
    overlapping_stories?: number[];
    /**
     * The pull request's unique number ID in VCS.
     * @format int64
     */
    number: number;
    /** The name of the branch for the particular pull request. */
    branch_name: string;
    /** The name of the target branch for the particular pull request. */
    target_branch_name: string;
    /**
     * The number of commits on the pull request.
     * @format int64
     */
    num_commits?: number | null;
    /** The title of the pull request. */
    title: string;
    /**
     * The time/date the pull request was created.
     * @format date-time
     */
    updated_at: string;
    /** Boolean indicating that the Pull Request has Stories that have Pull Requests that change at least one of the same lines this Pull Request changes. */
    has_overlapping_stories: boolean;
    /** True/False boolean indicating whether the VCS pull request is in the draft state. */
    draft: boolean;
    /**
     * The unique ID associated with the pull request in Shortcut.
     * @format int64
     */
    id: number;
    /** An array of PullRequestLabels attached to the PullRequest. */
    vcs_labels?: PullRequestLabel[] | null;
    /** The URL for the pull request. */
    url: string;
    /**
     * Number of lines removed in the pull request, according to VCS.
     * @format int64
     */
    num_removed: number;
    /** The status of the review for the pull request. */
    review_status?: string;
    /**
     * Number of lines modified in the pull request, according to VCS.
     * @format int64
     */
    num_modified?: number | null;
    /** The status of the Continuous Integration workflow for the pull request. */
    build_status?: string;
    /**
     * The ID of the target branch for the particular pull request.
     * @format int64
     */
    target_branch_id: number;
    /**
     * The ID of the repository for the particular pull request.
     * @format int64
     */
    repository_id: number;
    /**
     * The time/date the pull request was created.
     * @format date-time
     */
    created_at: string;
}
/** Corresponds to a VCS Label associated with a Pull Request. */
export interface PullRequestLabel {
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The unique ID of the VCS Label.
     * @format int64
     */
    id: number;
    /**
     * The color of the VCS label.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color: string;
    /** The description of the VCS label. */
    description?: string | null;
    /** The name of the VCS label. */
    name: string;
}
export interface RemoveCustomFieldParams {
    /**
     * The unique public ID for the CustomField.
     * @format uuid
     */
    field_id: string;
}
/** Request parameters for removing a Label from a Shortcut Story. */
export interface RemoveLabelParams {
    /**
     * The name of the new Label to remove.
     * @minLength 1
     * @maxLength 128
     */
    name: string;
}
/** Repository refers to a VCS repository. */
export interface Repository {
    /** A string description of this resource. */
    entity_type: string;
    /** The shorthand name of the VCS repository. */
    name?: string | null;
    /** The VCS provider for the Repository. */
    type: "github" | "gitlab" | "bitbucket";
    /**
     * The time/date the Repository was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** The VCS unique identifier for the Repository. */
    external_id?: string | null;
    /**
     * The ID associated to the VCS repository in Shortcut.
     * @format int64
     */
    id?: number | null;
    /** The URL of the Repository. */
    url?: string | null;
    /** The full name of the VCS repository. */
    full_name?: string | null;
    /**
     * The time/date the Repository was created.
     * @format date-time
     */
    created_at?: string | null;
}
/** The results of the multi-entity search query. */
export interface SearchResults {
    /** The results of the Epic search query. */
    epics?: EpicSearchResults;
    /** The results of the Story search query. */
    stories?: StorySearchResults;
    /** The results of the Iteration search query. */
    iterations?: IterationSearchResults;
    /** The results of the Objective search query. */
    milestones?: ObjectiveSearchResults;
}
export interface SearchStories {
    /** A true/false boolean indicating whether the Story is in archived state. */
    archived?: boolean;
    /**
     * An array of UUIDs for any Users who may be Owners of the Stories.
     * @format uuid
     */
    owner_id?: string | null;
    /** The type of Stories that you want returned. */
    story_type?: "feature" | "chore" | "bug";
    /**
     * The Epic IDs that may be associated with the Stories.
     * @uniqueItems true
     */
    epic_ids?: number[];
    /**
     * The IDs for the Projects the Stories may be assigned to.
     * @uniqueItems true
     */
    project_ids?: (number | null)[];
    /**
     * Stories should have been updated on or before this date.
     * @format date-time
     */
    updated_at_end?: string;
    /**
     * Stories should have been completed on or before this date.
     * @format date-time
     */
    completed_at_end?: string;
    /** The type of Workflow State the Stories may be in. */
    workflow_state_types?: ("started" | "backlog" | "unstarted" | "done")[];
    /**
     * Stories should have a deadline on or before this date.
     * @format date-time
     */
    deadline_end?: string;
    /**
     * Stories should have been created on or after this date.
     * @format date-time
     */
    created_at_start?: string;
    /**
     * The Epic IDs that may be associated with the Stories.
     * @format int64
     */
    epic_id?: number | null;
    /**
     * The name of any associated Labels.
     * @minLength 1
     */
    label_name?: string;
    /**
     * The UUID of any Users who may have requested the Stories.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The Iteration ID that may be associated with the Stories.
     * @format int64
     */
    iteration_id?: number | null;
    /**
     * The Label IDs that may be associated with the Stories.
     * @uniqueItems true
     */
    label_ids?: number[];
    /**
     * The Group ID that is associated with the Stories
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The unique IDs of the specific Workflow States that the Stories should be in.
     * @format int64
     */
    workflow_state_id?: number;
    /**
     * The Iteration IDs that may be associated with the Stories.
     * @uniqueItems true
     */
    iteration_ids?: number[];
    /**
     * Stories should have been created on or before this date.
     * @format date-time
     */
    created_at_end?: string;
    /**
     * Stories should have a deadline on or after this date.
     * @format date-time
     */
    deadline_start?: string;
    /**
     * The Group IDs that are associated with the Stories
     * @uniqueItems true
     */
    group_ids?: string[];
    /**
     * An array of UUIDs for any Users who may be Owners of the Stories.
     * @uniqueItems true
     */
    owner_ids?: string[];
    /**
     * An ID or URL that references an external resource. Useful during imports.
     * @maxLength 1024
     */
    external_id?: string;
    /** Whether to include the story description in the response. */
    includes_description?: boolean;
    /**
     * The number of estimate points associate with the Stories.
     * @format int64
     */
    estimate?: number;
    /**
     * The IDs for the Projects the Stories may be assigned to.
     * @format int64
     */
    project_id?: number | null;
    /**
     * Stories should have been completed on or after this date.
     * @format date-time
     */
    completed_at_start?: string;
    /**
     * Stories should have been updated on or after this date.
     * @format date-time
     */
    updated_at_start?: string;
}
/** Stories are the standard unit of work in Shortcut and represent individual features, bugs, and chores. */
export interface Story {
    /** The Shortcut application url for the Story. */
    app_url: string;
    /** The description of the story. */
    description: string;
    /** True if the story has been archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Story has been started. */
    started: boolean;
    /** An array of story links attached to the Story. */
    story_links: TypedStoryLink[];
    /** A string description of this resource. */
    entity_type: string;
    /** An array of labels attached to the story. */
    labels: LabelSlim[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** The synced item for the story. */
    synced_item?: SyncedItem;
    /** An array of Member IDs that have been mentioned in the Story description. */
    member_mention_ids: string[];
    /** The type of story (feature, bug, chore). */
    story_type: string;
    /** An array of CustomField value assertions for the story. */
    custom_fields?: StoryCustomField[];
    /** An array of linked files attached to the story. */
    linked_files: LinkedFile[];
    /**
     * The ID of the workflow the story belongs to.
     * @format int64
     */
    workflow_id: number;
    /**
     * A manual override for the time/date the Story was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The time/date the Story was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Story was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** The name of the story. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Story has been completed. */
    completed: boolean;
    /** An array of comments attached to the story. */
    comments: StoryComment[];
    /** A true/false boolean indicating if the Story is currently a blocker of another story. */
    blocker: boolean;
    /** An array of Git branches attached to the story. */
    branches: Branch[];
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number | null;
    /**
     * The ID of the story template used to create this story, or null if not created using a template.
     * @format uuid
     */
    story_template_id?: string | null;
    /** An array of external links (strings) associated with a Story */
    external_links: string[];
    /** The IDs of the iteration the story belongs to. */
    previous_iteration_ids: number[];
    /**
     * The ID of the Member that requested the story.
     * @format uuid
     */
    requested_by_id: string;
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number | null;
    sub_task_story_ids: number[];
    /** An array of tasks connected to the story. */
    tasks: Task[];
    /** An array of label ids attached to the story. */
    label_ids: number[];
    /**
     * A manual override for the time/date the Story was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * The ID of the group associated with the story.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state the story is currently in.
     * @format int64
     */
    workflow_state_id: number;
    /**
     * The time/date the Story was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of Pull/Merge Requests attached to the story. */
    pull_requests: PullRequest[];
    /** An array of Group IDs that have been mentioned in the Story description. */
    group_mention_ids: string[];
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids: string[];
    /** An array of UUIDs of the owners of this story. */
    owner_ids: string[];
    /** This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Story.
     * @format int64
     */
    id: number;
    /**
     * The lead time (in seconds) of this story when complete.
     * @format int64
     */
    lead_time?: number;
    /** @format int64 */
    parent_story_id?: number | null;
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number | null;
    /** An array of commits attached to the story. */
    commits: Commit[];
    /** An array of files attached to the story. */
    files: UploadedFile[];
    /**
     * A number representing the position of the story in relation to every other story in the current project.
     * @format int64
     */
    position: number;
    /** A true/false boolean indicating if the Story is currently blocked. */
    blocked: boolean;
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number | null;
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
    /** The stats object for Stories */
    stats: StoryStats;
    /**
     * The cycle time (in seconds) of this story when complete.
     * @format int64
     */
    cycle_time?: number;
    /**
     * The time/date the Story was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The time/date the Story was last changed workflow-state.
     * @format date-time
     */
    moved_at?: string | null;
}
/** A Comment is any note added within the Comment field of a Story. */
export interface StoryComment {
    /** The Shortcut application url for the Comment. */
    app_url: string;
    /** A string description of this resource. */
    entity_type: string;
    /** True/false boolean indicating whether the Comment has been deleted. */
    deleted: boolean;
    /**
     * The ID of the Story on which the Comment appears.
     * @format int64
     */
    story_id: number;
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /**
     * The unique ID of the Member who is the Comment's author.
     * @format uuid
     */
    author_id?: string | null;
    /** The unique IDs of the Member who are mentioned in the Comment. */
    member_mention_ids: string[];
    /** Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. Can only be used on a top-level comment. */
    blocker?: boolean;
    /** Whether the Comment is currently the root of a thread that is linked to Slack. */
    linked_to_slack: boolean;
    /**
     * The time/date when the Comment was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** The unique IDs of the Group who are mentioned in the Comment. */
    group_mention_ids: string[];
    /** This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The ID of the parent Comment this Comment is threaded under.
     * @format int64
     */
    parent_id?: number | null;
    /**
     * The unique ID of the Comment.
     * @format int64
     */
    id: number;
    /**
     * The Comments numerical position in the list from oldest to newest.
     * @format int64
     */
    position: number;
    /** Marks the comment as an unblocker to its  blocker parent. Can only be set on a threaded comment who has a parent with `blocker` set. */
    unblocks_parent?: boolean;
    /** A set of Reactions to this Comment. */
    reactions: StoryReaction[];
    /**
     * The time/date when the Comment was created.
     * @format date-time
     */
    created_at: string;
    /** The text of the Comment. In the case that the Comment has been deleted, this field can be set to nil. */
    text?: string | null;
}
/** A container entity for the attributes this template should populate. */
export interface StoryContents {
    /** The description of the story. */
    description?: string;
    /** A string description of this resource. */
    entity_type?: string;
    /** An array of labels attached to the story. */
    labels?: LabelSlim[];
    /** The type of story (feature, bug, chore). */
    story_type?: string;
    /** An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields?: CustomFieldValueParams[];
    /** An array of linked files attached to the story. */
    linked_files?: LinkedFile[];
    /** The name of the story. */
    name?: string;
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number;
    /** An array of external links connected to the story. */
    external_links?: string[];
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number;
    /** An array of tasks connected to the story. */
    tasks?: StoryContentsTask[];
    /** An array of label ids attached to the story. */
    label_ids?: number[];
    /**
     * The ID of the group to which the story is assigned.
     * @format uuid
     */
    group_id?: string;
    /**
     * The ID of the workflow state the story is currently in.
     * @format int64
     */
    workflow_state_id?: number;
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids?: string[];
    /** An array of UUIDs of the owners of this story. */
    owner_ids?: string[];
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number;
    /** An array of files attached to the story. */
    files?: UploadedFile[];
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number;
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string;
}
export interface StoryContentsTask {
    /** Full text of the Task. */
    description: string;
    /**
     * The number corresponding to the Task's position within a list of Tasks on a Story.
     * @format int64
     */
    position?: number;
    /** True/false boolean indicating whether the Task has been completed. */
    complete?: boolean;
    /** An array of UUIDs of the Owners of this Task. */
    owner_ids?: string[];
    /** This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
}
export interface StoryCustomField {
    /**
     * The unique public ID for a CustomField.
     * @format uuid
     */
    field_id: string;
    /**
     * The unique public ID for a CustomFieldEnumValue.
     * @format uuid
     */
    value_id: string;
    /** A string representation of the value, if applicable. */
    value: string;
}
/** Task IDs that have been added or removed from the Story. */
export interface StoryHistoryChangeAddsRemovesInt {
    /** The values that have been added. */
    adds?: number[];
    /** The values that have been removed */
    removes?: number[];
}
/** Custom Field Enum Value IDs that have been added or removed from the Story. */
export interface StoryHistoryChangeAddsRemovesUuid {
    /** The values that have been added. */
    adds?: string[];
    /** The values that have been removed */
    removes?: string[];
}
/** True if the Story has archived, otherwise false. */
export interface StoryHistoryChangeOldNewBool {
    /** The old value. */
    old?: boolean;
    /** The new value. */
    new?: boolean;
}
/** The estimate value for the Story */
export interface StoryHistoryChangeOldNewInt {
    /**
     * The old value.
     * @format int64
     */
    old?: number;
    /**
     * The new value.
     * @format int64
     */
    new?: number;
}
/** A timestamp that represents the Story's deadline. */
export interface StoryHistoryChangeOldNewStr {
    /** The old value. */
    old?: string | null;
    /** The new value. */
    new?: string;
}
/** The Team ID for the Story. */
export interface StoryHistoryChangeOldNewUuid {
    /**
     * The old value.
     * @format uuid
     */
    old?: string;
    /**
     * The new value.
     * @format uuid
     */
    new?: string;
}
/** Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example "story 5 blocks story 6". */
export interface StoryLink {
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The unique identifier of the Story Link.
     * @format int64
     */
    id: number;
    /**
     * The ID of the subject Story.
     * @format int64
     */
    subject_id: number;
    /**
     * The workflow state of the "subject" story.
     * @format int64
     */
    subject_workflow_state_id: number;
    /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
    verb: string;
    /**
     * The ID of the object Story.
     * @format int64
     */
    object_id: number;
    /**
     * The time/date when the Story Link was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The time/date when the Story Link was last updated.
     * @format date-time
     */
    updated_at: string;
}
/** Emoji reaction on a comment. */
export interface StoryReaction {
    /** Emoji text of the reaction. */
    emoji: string;
    /** Permissions who have reacted with this. */
    permission_ids: string[];
}
/** A Story in search results. This is typed differently from Story because the details=slim search argument will omit some fields. */
export interface StorySearchResult {
    /** The Shortcut application url for the Story. */
    app_url: string;
    /** The description of the story. */
    description?: string;
    /** True if the story has been archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Story has been started. */
    started: boolean;
    /** An array of story links attached to the Story. */
    story_links: TypedStoryLink[];
    /** A string description of this resource. */
    entity_type: string;
    /** An array of labels attached to the story. */
    labels: LabelSlim[];
    /** An array of IDs of Tasks attached to the story. */
    task_ids?: number[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** The synced item for the story. */
    synced_item?: SyncedItem;
    /** An array of Member IDs that have been mentioned in the Story description. */
    member_mention_ids: string[];
    /** The type of story (feature, bug, chore). */
    story_type: string;
    /** An array of CustomField value assertions for the story. */
    custom_fields?: StoryCustomField[];
    /** An array of linked files attached to the story. */
    linked_files?: LinkedFile[];
    /** An array of IDs of Files attached to the story. */
    file_ids?: number[];
    /**
     * The number of tasks on the story which are complete.
     * @format int64
     */
    num_tasks_completed?: number;
    /**
     * The ID of the workflow the story belongs to.
     * @format int64
     */
    workflow_id: number;
    /**
     * A manual override for the time/date the Story was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The time/date the Story was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Story was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** The name of the story. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Story has been completed. */
    completed: boolean;
    /** An array of comments attached to the story. */
    comments?: StoryComment[];
    /** A true/false boolean indicating if the Story is currently a blocker of another story. */
    blocker: boolean;
    /** An array of Git branches attached to the story. */
    branches?: Branch[];
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number | null;
    /**
     * The ID of the story template used to create this story, or null if not created using a template.
     * @format uuid
     */
    story_template_id?: string | null;
    /** An array of external links (strings) associated with a Story */
    external_links: string[];
    /** The IDs of the iteration the story belongs to. */
    previous_iteration_ids: number[];
    /**
     * The ID of the Member that requested the story.
     * @format uuid
     */
    requested_by_id: string;
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number | null;
    sub_task_story_ids: number[];
    /** An array of tasks connected to the story. */
    tasks?: Task[];
    /** An array of label ids attached to the story. */
    label_ids: number[];
    /**
     * A manual override for the time/date the Story was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * The ID of the group associated with the story.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state the story is currently in.
     * @format int64
     */
    workflow_state_id: number;
    /**
     * The time/date the Story was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of Pull/Merge Requests attached to the story. */
    pull_requests?: PullRequest[];
    /** An array of Group IDs that have been mentioned in the Story description. */
    group_mention_ids: string[];
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids: string[];
    /** An array of UUIDs of the owners of this story. */
    owner_ids: string[];
    /** This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Story.
     * @format int64
     */
    id: number;
    /**
     * The lead time (in seconds) of this story when complete.
     * @format int64
     */
    lead_time?: number;
    /** @format int64 */
    parent_story_id?: number | null;
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number | null;
    /** An array of commits attached to the story. */
    commits?: Commit[];
    /** An array of files attached to the story. */
    files?: UploadedFile[];
    /**
     * A number representing the position of the story in relation to every other story in the current project.
     * @format int64
     */
    position: number;
    /** A true/false boolean indicating if the Story is currently blocked. */
    blocked: boolean;
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number | null;
    /** An array of IDs of LinkedFiles attached to the story. */
    linked_file_ids?: number[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
    /** The stats object for Stories */
    stats: StoryStats;
    /** An array of IDs of Comments attached to the story. */
    comment_ids?: number[];
    /**
     * The cycle time (in seconds) of this story when complete.
     * @format int64
     */
    cycle_time?: number;
    /**
     * The time/date the Story was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The time/date the Story was last changed workflow-state.
     * @format date-time
     */
    moved_at?: string | null;
}
/** The results of the Story search query. */
export interface StorySearchResults {
    /**
     * The total number of matches for the search query. The first 1000 matches can be paged through via the API.
     * @format int64
     */
    total: number;
    /** A list of search results. */
    data: StorySearchResult[];
    /** The URL path and query string for the next page of search results. */
    next?: string | null;
}
/** StorySlim represents the same resource as a Story, but is more light-weight. For certain fields it provides ids rather than full resources (e.g., `comment_ids` and `file_ids`) and it also excludes certain aggregate values (e.g., `cycle_time`). The `description` field can be optionally included. Use the [Get Story](#Get-Story) endpoint to fetch the unabridged payload for a Story. */
export interface StorySlim {
    /** The Shortcut application url for the Story. */
    app_url: string;
    /** The description of the Story. */
    description?: string;
    /** True if the story has been archived or not. */
    archived: boolean;
    /** A true/false boolean indicating if the Story has been started. */
    started: boolean;
    /** An array of story links attached to the Story. */
    story_links: TypedStoryLink[];
    /** A string description of this resource. */
    entity_type: string;
    /** An array of labels attached to the story. */
    labels: LabelSlim[];
    /** An array of IDs of Tasks attached to the story. */
    task_ids: number[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** The synced item for the story. */
    synced_item?: SyncedItem;
    /** An array of Member IDs that have been mentioned in the Story description. */
    member_mention_ids: string[];
    /** The type of story (feature, bug, chore). */
    story_type: string;
    /** An array of CustomField value assertions for the story. */
    custom_fields?: StoryCustomField[];
    /** An array of IDs of Files attached to the story. */
    file_ids: number[];
    /**
     * The number of tasks on the story which are complete.
     * @format int64
     */
    num_tasks_completed: number;
    /**
     * The ID of the workflow the story belongs to.
     * @format int64
     */
    workflow_id: number;
    /**
     * A manual override for the time/date the Story was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The time/date the Story was started.
     * @format date-time
     */
    started_at?: string | null;
    /**
     * The time/date the Story was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /** The name of the story. */
    name: string;
    global_id: string;
    /** A true/false boolean indicating if the Story has been completed. */
    completed: boolean;
    /** A true/false boolean indicating if the Story is currently a blocker of another story. */
    blocker: boolean;
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number | null;
    /**
     * The ID of the story template used to create this story, or null if not created using a template.
     * @format uuid
     */
    story_template_id?: string | null;
    /** An array of external links (strings) associated with a Story */
    external_links: string[];
    /** The IDs of the iteration the story belongs to. */
    previous_iteration_ids: number[];
    /**
     * The ID of the Member that requested the story.
     * @format uuid
     */
    requested_by_id: string;
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number | null;
    sub_task_story_ids: number[];
    /** An array of label ids attached to the story. */
    label_ids: number[];
    /**
     * A manual override for the time/date the Story was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * The ID of the group associated with the story.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state the story is currently in.
     * @format int64
     */
    workflow_state_id: number;
    /**
     * The time/date the Story was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of Group IDs that have been mentioned in the Story description. */
    group_mention_ids: string[];
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids: string[];
    /** An array of UUIDs of the owners of this story. */
    owner_ids: string[];
    /** This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Story.
     * @format int64
     */
    id: number;
    /**
     * The lead time (in seconds) of this story when complete.
     * @format int64
     */
    lead_time?: number;
    /** @format int64 */
    parent_story_id?: number | null;
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number | null;
    /**
     * A number representing the position of the story in relation to every other story in the current project.
     * @format int64
     */
    position: number;
    /** A true/false boolean indicating if the Story is currently blocked. */
    blocked: boolean;
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number | null;
    /** An array of IDs of LinkedFiles attached to the story. */
    linked_file_ids: number[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
    /** The stats object for Stories */
    stats: StoryStats;
    /** An array of IDs of Comments attached to the story. */
    comment_ids: number[];
    /**
     * The cycle time (in seconds) of this story when complete.
     * @format int64
     */
    cycle_time?: number;
    /**
     * The time/date the Story was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The time/date the Story was last changed workflow-state.
     * @format date-time
     */
    moved_at?: string | null;
}
/** The stats object for Stories */
export interface StoryStats {
    /**
     * The number of documents related to this Story.
     * @format int64
     */
    num_related_documents: number;
}
/** The synced item for the story. */
export interface SyncedItem {
    /** The id used to reference an external entity. */
    external_id: string;
    /** The url to the external entity. */
    url: string;
}
/** A Task on a Story. */
export interface Task {
    /** Full text of the Task. */
    description: string;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The unique identifier of the parent Story.
     * @format int64
     */
    story_id: number;
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** An array of UUIDs of Members mentioned in this Task. */
    member_mention_ids: string[];
    /**
     * The time/date the Task was completed.
     * @format date-time
     */
    completed_at?: string | null;
    /**
     * The time/date the Task was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** An array of UUIDs of Groups mentioned in this Task. */
    group_mention_ids: string[];
    /** An array of UUIDs of the Owners of this Task. */
    owner_ids: string[];
    /** This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Task.
     * @format int64
     */
    id: number;
    /**
     * The number corresponding to the Task's position within a list of Tasks on a Story.
     * @format int64
     */
    position: number;
    /** True/false boolean indicating whether the Task has been completed. */
    complete: boolean;
    /**
     * The time/date the Task was created.
     * @format date-time
     */
    created_at: string;
}
/** Comments associated with Epic Discussions. */
export interface ThreadedComment {
    /** The Shortcut application url for the Comment. */
    app_url: string;
    /** A string description of this resource. */
    entity_type: string;
    /** True/false boolean indicating whether the Comment is deleted. */
    deleted: boolean;
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /**
     * The unique ID of the Member that authored the Comment.
     * @format uuid
     */
    author_id: string;
    /** An array of Member IDs that have been mentioned in this Comment. */
    member_mention_ids: string[];
    /** A nested array of threaded comments. */
    comments: ThreadedComment[];
    /**
     * The time/date the Comment was updated.
     * @format date-time
     */
    updated_at: string;
    /** An array of Group IDs that have been mentioned in this Comment. */
    group_mention_ids: string[];
    /** This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID of the Comment.
     * @format int64
     */
    id: number;
    /**
     * The time/date the Comment was created.
     * @format date-time
     */
    created_at: string;
    /** The text of the Comment. */
    text: string;
}
/** The type of Story Link. The string can be subject or object.  */
export interface TypedStoryLink {
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The ID of the object Story.
     * @format int64
     */
    object_id: number;
    /** How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to". */
    verb: string;
    /** This indicates whether the Story is the subject or object in the Story Link. */
    type: string;
    /**
     * The time/date when the Story Link was last updated.
     * @format date-time
     */
    updated_at: string;
    /**
     * The unique identifier of the Story Link.
     * @format int64
     */
    id: number;
    /**
     * The ID of the subject Story.
     * @format int64
     */
    subject_id: number;
    /**
     * The workflow state of the "subject" story.
     * @format int64
     */
    subject_workflow_state_id: number;
    /**
     * The time/date when the Story Link was created.
     * @format date-time
     */
    created_at: string;
}
export interface UnusableEntitlementError {
    /** The tag for violating an entitlement action. */
    reason_tag: "entitlement-violation";
    /**
     * Short tag describing the unusable entitlement action taken by the user.
     * @minLength 1
     * @maxLength 63
     */
    entitlement_tag: string;
    /**
     * Message displayed to the user on why their action failed.
     * @minLength 1
     * @maxLength 256
     */
    message: string;
}
export interface UpdateCategory {
    /**
     * The new name of the Category.
     * @minLength 1
     */
    name?: string;
    /**
     * The hex color to be displayed with the Category (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /** A true/false boolean indicating if the Category has been archived. */
    archived?: boolean;
}
export interface UpdateComment {
    /** The updated comment text. */
    text: string;
}
export interface UpdateCustomField {
    /** Indicates whether the Field is enabled for the Workspace. Only enabled fields can be applied to Stories. */
    enabled?: boolean;
    /**
     * A collection of objects representing reporting periods for years.
     * @minLength 1
     * @maxLength 63
     */
    name?: string;
    /** A collection of EnumValue objects representing the values in the domain of some Custom Field. */
    values?: UpdateCustomFieldEnumValue[];
    /**
     * A frontend-controlled string that represents the icon for this custom field.
     * @minLength 1
     * @maxLength 63
     */
    icon_set_identifier?: string;
    /** A description of the purpose of this field. */
    description?: string;
    /**
     * The ID of the CustomField we want to move this CustomField before.
     * @format uuid
     */
    before_id?: string;
    /**
     * The ID of the CustomField we want to move this CustomField after.
     * @format uuid
     */
    after_id?: string;
}
export interface UpdateCustomFieldEnumValue {
    /**
     * The unique ID of an existing EnumValue within the CustomField's domain.
     * @format uuid
     */
    id?: string;
    /**
     * A string value within the domain of this Custom Field.
     * @minLength 1
     * @maxLength 63
     */
    value?: string;
    /** A color key associated with this EnumValue within the CustomField's domain. */
    color_key?: string | null;
    /** Whether this EnumValue is enabled for its CustomField or not. Leaving this key out of the request leaves the current enabled state untouched. */
    enabled?: boolean;
}
/**
 * Request parameters for changing either a template's name or any of
 *   the attributes it is designed to pre-populate.
 */
export interface UpdateEntityTemplate {
    /**
     * The updated template name.
     * @minLength 1
     * @maxLength 128
     */
    name?: string;
    /** Updated attributes for the template to populate. */
    story_contents?: UpdateStoryContents;
}
export interface UpdateEpic {
    /**
     * The Epic's description.
     * @maxLength 100000
     */
    description?: string;
    /** A true/false boolean indicating whether the Epic is in archived state. */
    archived?: boolean;
    /** An array of Labels attached to the Epic. */
    labels?: CreateLabelParams[];
    /**
     * A manual override for the time/date the Epic was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /** An array of IDs for Objectives to which this Epic is related. */
    objective_ids?: number[];
    /**
     * The Epic's name.
     * @minLength 1
     * @maxLength 256
     */
    name?: string;
    /**
     * The Epic's planned start date.
     * @format date-time
     */
    planned_start_date?: string | null;
    /** `Deprecated` The Epic's state (to do, in progress, or done); will be ignored when `epic_state_id` is set. */
    state?: "in progress" | "to do" | "done";
    /**
     * `Deprecated` The ID of the Milestone this Epic is related to. Use `objective_ids`.
     * @format int64
     */
    milestone_id?: number | null;
    /**
     * The ID of the member that requested the epic.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The ID of the Epic State.
     * @format int64
     */
    epic_state_id?: number;
    /**
     * A manual override for the time/date the Epic was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * `Deprecated` The ID of the group to associate with the epic. Use `group_ids`.
     * @format uuid
     */
    group_id?: string | null;
    /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
    follower_ids?: string[];
    /** An array of UUIDS for Groups to which this Epic is related. */
    group_ids?: string[];
    /** An array of UUIDs for any members you want to add as Owners on this Epic. */
    owner_ids?: string[];
    /**
     * This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here.
     * @maxLength 128
     */
    external_id?: string;
    /**
     * The ID of the Epic we want to move this Epic before.
     * @format int64
     */
    before_id?: number;
    /**
     * The ID of the Epic we want to move this Epic after.
     * @format int64
     */
    after_id?: number;
    /**
     * The Epic's deadline.
     * @format date-time
     */
    deadline?: string | null;
}
export interface UpdateFile {
    /**
     * The description of the file.
     * @maxLength 4096
     */
    description?: string;
    /**
     * The time/date that the file was uploaded.
     * @format date-time
     */
    created_at?: string;
    /**
     * The time/date that the file was last updated.
     * @format date-time
     */
    updated_at?: string;
    /**
     * The name of the file.
     * @minLength 1
     * @maxLength 1024
     */
    name?: string;
    /**
     * The unique ID assigned to the Member who uploaded the file to Shortcut.
     * @format uuid
     */
    uploader_id?: string;
    /**
     * An additional ID that you may wish to assign to the file.
     * @maxLength 128
     */
    external_id?: string;
}
export interface UpdateGroup {
    /**
     * The description of this Group.
     * @maxLength 4096
     */
    description?: string;
    /** Whether or not this Group is archived. */
    archived?: boolean | null;
    /**
     * The color you wish to use for the Group in the system.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /**
     * The Icon id for the avatar of this Group.
     * @format uuid
     */
    display_icon_id?: string | null;
    /**
     * The mention name of this Group.
     * @minLength 1
     * @maxLength 63
     */
    mention_name?: string;
    /**
     * The name of this Group.
     * @minLength 1
     * @maxLength 63
     */
    name?: string;
    /** The color key you wish to use for the Group in the system. */
    color_key?: "blue" | "purple" | "midnight-blue" | "orange" | "yellow-green" | "brass" | "gray" | "fuchsia" | "yellow" | "pink" | "sky-blue" | "green" | "red" | "black" | "slate" | "turquoise";
    /**
     * The Member ids to add to this Group.
     * @uniqueItems true
     */
    member_ids?: string[];
    /** The Workflow ids to add to the Group. */
    workflow_ids?: number[];
}
export interface UpdateIteration {
    /** An array of UUIDs for any Members you want to add as Followers. */
    follower_ids?: string[];
    /** An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI. */
    group_ids?: string[];
    /** An array of Labels attached to the Iteration. */
    labels?: CreateLabelParams[];
    /**
     * The description of the Iteration.
     * @maxLength 100000
     */
    description?: string;
    /**
     * The name of this Iteration
     * @minLength 1
     * @maxLength 256
     */
    name?: string;
    /**
     * The date this Iteration begins, e.g. 2019-07-01
     * @minLength 1
     */
    start_date?: string;
    /**
     * The date this Iteration ends, e.g. 2019-07-05.
     * @minLength 1
     */
    end_date?: string;
}
export interface UpdateKeyResult {
    /**
     * The name of the Key Result.
     * @maxLength 1024
     */
    name?: string;
    /** The starting value of the Key Result. */
    initial_observed_value?: KeyResultValue;
    /** The starting value of the Key Result. */
    observed_value?: KeyResultValue;
    /** The starting value of the Key Result. */
    target_value?: KeyResultValue;
}
export interface UpdateLabel {
    /**
     * The new name of the label.
     * @minLength 1
     * @maxLength 128
     */
    name?: string;
    /**
     * The new description of the label.
     * @maxLength 1024
     */
    description?: string;
    /**
     * The hex color to be displayed with the Label (for example, "#ff0000").
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string | null;
    /** A true/false boolean indicating if the Label has been archived. */
    archived?: boolean;
}
export interface UpdateLinkedFile {
    /**
     * The description of the file.
     * @maxLength 512
     */
    description?: string;
    /**
     * The ID of the linked story.
     * @format int64
     */
    story_id?: number;
    /**
     * The name of the file.
     * @minLength 1
     */
    name?: string;
    /**
     * The URL of the thumbnail, if the integration provided it.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    thumbnail_url?: string;
    /** The integration type of the file (e.g. google, dropbox, box). */
    type?: "google" | "url" | "dropbox" | "box" | "onedrive";
    /**
     * The filesize, if the integration provided it.
     * @format int64
     */
    size?: number;
    /**
     * The UUID of the member that uploaded the file.
     * @format uuid
     */
    uploader_id?: string;
    /**
     * The URL of linked file.
     * @maxLength 2048
     * @pattern ^https?://.+$
     */
    url?: string;
}
export interface UpdateMilestone {
    /**
     * The Milestone's description.
     * @maxLength 100000
     */
    description?: string;
    /** A boolean indicating whether the Milestone is archived or not */
    archived?: boolean;
    /**
     * A manual override for the time/date the Milestone was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The name of the Milestone.
     * @minLength 1
     * @maxLength 256
     */
    name?: string;
    /** The workflow state that the Milestone is in. */
    state?: "in progress" | "to do" | "done";
    /**
     * A manual override for the time/date the Milestone was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /** An array of IDs of Categories attached to the Milestone. */
    categories?: CreateCategoryParams[];
    /**
     * The ID of the Milestone we want to move this Milestone before.
     * @format int64
     */
    before_id?: number;
    /**
     * The ID of the Milestone we want to move this Milestone after.
     * @format int64
     */
    after_id?: number;
}
export interface UpdateObjective {
    /**
     * The Objective's description.
     * @maxLength 100000
     */
    description?: string;
    /** A boolean indicating whether the Objective is archived or not */
    archived?: boolean;
    /**
     * A manual override for the time/date the Objective was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The name of the Objective.
     * @minLength 1
     * @maxLength 256
     */
    name?: string;
    /** The workflow state that the Objective is in. */
    state?: "in progress" | "to do" | "done";
    /**
     * A manual override for the time/date the Objective was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /** An array of IDs of Categories attached to the Objective. */
    categories?: CreateCategoryParams[];
    /**
     * The ID of the Objective we want to move this Objective before.
     * @format int64
     */
    before_id?: number;
    /**
     * The ID of the Objective we want to move this Objective after.
     * @format int64
     */
    after_id?: number;
}
export interface UpdateProject {
    /**
     * The Project's description.
     * @maxLength 100000
     */
    description?: string;
    /** A true/false boolean indicating whether the Story is in archived state. */
    archived?: boolean;
    /**
     * The number of days before the thermometer appears in the Story summary.
     * @format int64
     */
    days_to_thermometer?: number;
    /**
     * The color that represents the Project in the UI.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /**
     * The Project's name.
     * @minLength 1
     * @maxLength 128
     */
    name?: string;
    /** An array of UUIDs for any Members you want to add as Followers. */
    follower_ids?: string[];
    /** Configuration to enable or disable thermometers in the Story summary. */
    show_thermometer?: boolean;
    /**
     * The ID of the team the project belongs to.
     * @format int64
     */
    team_id?: number;
    /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
    abbreviation?: string;
}
export interface UpdateStories {
    /** If the Stories should be archived or not. */
    archived?: boolean;
    /**
     * The Ids of the Stories you wish to update.
     * @uniqueItems true
     */
    story_ids: number[];
    /** The type of story (feature, bug, chore). */
    story_type?: "feature" | "chore" | "bug";
    /** One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state. */
    move_to?: "last" | "first";
    /**
     * The UUIDs of the new followers to be added.
     * @uniqueItems true
     */
    follower_ids_add?: string[];
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number | null;
    /** An array of External Links associated with this story. */
    external_links?: string[];
    /**
     * The UUIDs of the followers to be removed.
     * @uniqueItems true
     */
    follower_ids_remove?: string[];
    /**
     * The ID of the member that requested the story.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number | null;
    /** A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields_remove?: CustomFieldValueParams[];
    /** An array of labels to be added. */
    labels_add?: CreateLabelParams[];
    /**
     * The Id of the Group the Stories should belong to.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state to put the stories in.
     * @format int64
     */
    workflow_state_id?: number;
    /**
     * The ID of the story that the stories are to be moved before.
     * @format int64
     */
    before_id?: number;
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number | null;
    /**
     * The ID of the story that the stories are to be moved below.
     * @format int64
     */
    after_id?: number;
    /**
     * The UUIDs of the owners to be removed.
     * @uniqueItems true
     */
    owner_ids_remove?: string[];
    /** A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields_add?: CustomFieldValueParams[];
    /**
     * The ID of the Project the Stories should belong to.
     * @format int64
     */
    project_id?: number | null;
    /** An array of labels to be removed. */
    labels_remove?: CreateLabelParams[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
    /**
     * The UUIDs of the new owners to be added.
     * @uniqueItems true
     */
    owner_ids_add?: string[];
}
export interface UpdateStory {
    /**
     * The description of the story.
     * @maxLength 100000
     */
    description?: string;
    /** True if the story is archived, otherwise false. */
    archived?: boolean;
    /** An array of labels attached to the story. */
    labels?: CreateLabelParams[];
    /**
     * An array of IDs of Pull/Merge Requests attached to the story.
     * @uniqueItems true
     */
    pull_request_ids?: number[];
    /** The type of story (feature, bug, chore). */
    story_type?: "feature" | "chore" | "bug";
    /** A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields?: CustomFieldValueParams[];
    /** One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state. */
    move_to?: "last" | "first";
    /**
     * An array of IDs of files attached to the story.
     * @uniqueItems true
     */
    file_ids?: number[];
    /**
     * A manual override for the time/date the Story was completed.
     * @format date-time
     */
    completed_at_override?: string | null;
    /**
     * The title of the story.
     * @minLength 1
     * @maxLength 512
     */
    name?: string;
    /**
     * The ID of the epic the story belongs to.
     * @format int64
     */
    epic_id?: number | null;
    /** An array of External Links associated with this story. */
    external_links?: string[];
    /**
     * An array of IDs of Branches attached to the story.
     * @uniqueItems true
     */
    branch_ids?: number[];
    /**
     * An array of IDs of Commits attached to the story.
     * @uniqueItems true
     */
    commit_ids?: number[];
    /**
     * The ID of the member that requested the story.
     * @format uuid
     */
    requested_by_id?: string;
    /**
     * The ID of the iteration the story belongs to.
     * @format int64
     */
    iteration_id?: number | null;
    /**
     * A manual override for the time/date the Story was started.
     * @format date-time
     */
    started_at_override?: string | null;
    /**
     * The ID of the group to associate with this story
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state to put the story in.
     * @format int64
     */
    workflow_state_id?: number;
    /**
     * An array of UUIDs of the followers of this story.
     * @uniqueItems true
     */
    follower_ids?: string[];
    /**
     * An array of UUIDs of the owners of this story.
     * @uniqueItems true
     */
    owner_ids?: string[];
    /**
     * The ID of the story we want to move this story before.
     * @format int64
     */
    before_id?: number;
    /**
     * The numeric point estimate of the story. Can also be null, which means unestimated.
     * @format int64
     */
    estimate?: number | null;
    /**
     * The ID of the story we want to move this story after.
     * @format int64
     */
    after_id?: number;
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number | null;
    /**
     * An array of IDs of linked files attached to the story.
     * @uniqueItems true
     */
    linked_file_ids?: number[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
}
export interface UpdateStoryComment {
    /**
     * The updated comment text.
     * @maxLength 100000
     */
    text: string;
}
/** Updated attributes for the template to populate. */
export interface UpdateStoryContents {
    /** The description of the story. */
    description?: string;
    /** An array of labels to be populated by the template. */
    labels?: CreateLabelParams[];
    /** The type of story (feature, bug, chore). */
    story_type?: string;
    /** An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. */
    custom_fields?: CustomFieldValueParams[];
    /**
     * An array of the attached file IDs to be populated.
     * @uniqueItems true
     */
    file_ids?: number[];
    /** The name of the story. */
    name?: string;
    /**
     * The ID of the epic the to be populated.
     * @format int64
     */
    epic_id?: number | null;
    /** An array of external links to be populated. */
    external_links?: string[];
    /**
     * The ID of the iteration the to be populated.
     * @format int64
     */
    iteration_id?: number | null;
    /** An array of tasks to be populated by the template. */
    tasks?: BaseTaskParams[];
    /**
     * The ID of the group to be populated.
     * @format uuid
     */
    group_id?: string | null;
    /**
     * The ID of the workflow state to be populated.
     * @format int64
     */
    workflow_state_id?: number | null;
    /** An array of UUIDs for any Members listed as Followers. */
    follower_ids?: string[];
    /** An array of UUIDs of the owners of this story. */
    owner_ids?: string[];
    /**
     * The numeric point estimate to be populated.
     * @format int64
     */
    estimate?: number | null;
    /**
     * The ID of the project the story belongs to.
     * @format int64
     */
    project_id?: number | null;
    /**
     * An array of the linked file IDs to be populated.
     * @uniqueItems true
     */
    linked_file_ids?: number[];
    /**
     * The due date of the story.
     * @format date-time
     */
    deadline?: string | null;
}
export interface UpdateStoryLink {
    /** The type of link. */
    verb?: "blocks" | "duplicates" | "relates to";
    /**
     * The ID of the subject Story.
     * @format int64
     */
    subject_id?: number;
    /**
     * The ID of the object Story.
     * @format int64
     */
    object_id?: number;
}
export interface UpdateTask {
    /**
     * The Task's description.
     * @minLength 1
     * @maxLength 2048
     */
    description?: string;
    /** An array of UUIDs of the owners of this story. */
    owner_ids?: string[];
    /** A true/false boolean indicating whether the task is complete. */
    complete?: boolean;
    /**
     * Move task before this task ID.
     * @format int64
     */
    before_id?: number;
    /**
     * Move task after this task ID.
     * @format int64
     */
    after_id?: number;
}
/** An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint. */
export interface UploadedFile {
    /** The description of the file. */
    description?: string | null;
    /** A string description of this resource. */
    entity_type: string;
    /** The unique IDs of the Stories associated with this file. */
    story_ids: number[];
    /** `Deprecated:` use `member_mention_ids`. */
    mention_ids: string[];
    /** The unique IDs of the Members who are mentioned in the file description. */
    member_mention_ids: string[];
    /** The optional User-specified name of the file. */
    name: string;
    /** The url where the thumbnail of the file can be found in Shortcut. */
    thumbnail_url?: string | null;
    /**
     * The size of the file.
     * @format int64
     */
    size: number;
    /**
     * The unique ID of the Member who uploaded the file.
     * @format uuid
     */
    uploader_id: string;
    /** Free form string corresponding to a text or image file. */
    content_type: string;
    /**
     * The time/date that the file was updated.
     * @format date-time
     */
    updated_at?: string | null;
    /** The name assigned to the file in Shortcut upon upload. */
    filename: string;
    /** The unique IDs of the Groups who are mentioned in the file description. */
    group_mention_ids: string[];
    /** This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here. */
    external_id?: string | null;
    /**
     * The unique ID for the file.
     * @format int64
     */
    id: number;
    /** The URL for the file. */
    url?: string | null;
    /**
     * The time/date that the file was created.
     * @format date-time
     */
    created_at: string;
}
/** Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in the Shortcut UI.  */
export interface Workflow {
    /** A description of the workflow. */
    description: string;
    /** A string description of this resource. */
    entity_type: string;
    /** An array of IDs of projects within the Workflow. */
    project_ids: number[];
    /** A map of the states in this Workflow. */
    states: WorkflowState[];
    /** The name of the workflow. */
    name: string;
    /**
     * The date the Workflow was updated.
     * @format date-time
     */
    updated_at: string;
    /** Indicates if an owner is automatically assigned when an unowned story is started. */
    auto_assign_owner: boolean;
    /**
     * The unique ID of the Workflow.
     * @format int64
     */
    id: number;
    /**
     * The ID of the team the workflow belongs to.
     * @format int64
     */
    team_id: number;
    /**
     * The date the Workflow was created.
     * @format date-time
     */
    created_at: string;
    /**
     * The unique ID of the default state that new Stories are entered into.
     * @format int64
     */
    default_state_id: number;
}
/** Workflow State is any of the at least 3 columns. Workflow States correspond to one of 3 types: Unstarted, Started, or Done. */
export interface WorkflowState {
    /** The description of what sort of Stories belong in that Workflow state. */
    description: string;
    /** A string description of this resource. */
    entity_type: string;
    /**
     * The hex color for this Workflow State.
     * @format css-color
     * @minLength 1
     * @pattern ^#[a-fA-F0-9]{6}$
     */
    color?: string;
    /** The verb that triggers a move to that Workflow State when making VCS commits. */
    verb?: string | null;
    /** The Workflow State's name. */
    name: string;
    global_id: string;
    /**
     * The number of Stories currently in that Workflow State.
     * @format int64
     */
    num_stories: number;
    /** The type of Workflow State (Unstarted, Started, or Finished) */
    type: string;
    /**
     * When the Workflow State was last updated.
     * @format date-time
     */
    updated_at: string;
    /**
     * The unique ID of the Workflow State.
     * @format int64
     */
    id: number;
    /**
     * The number of Story Templates associated with that Workflow State.
     * @format int64
     */
    num_story_templates: number;
    /**
     * The position that the Workflow State is in, starting with 0 at the left.
     * @format int64
     */
    position: number;
    /**
     * The time/date the Workflow State was created.
     * @format date-time
     */
    created_at: string;
}
export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected encodeQueryParam(key: string, value: any): string;
    protected addQueryParam(query: QueryParamsType, key: string): string;
    protected addArrayQueryParam(query: QueryParamsType, key: string): any;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
    protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title Shortcut API
 * @version 3.0
 * @baseUrl https://api.app.shortcut.com
 *
 * Shortcut API
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    api: {
        /**
         * @description List Categories returns a list of all Categories and their attributes.
         *
         * @name ListCategories
         * @summary List Categories
         * @request GET:/api/v3/categories
         * @secure
         */
        listCategories: (params?: RequestParams) => Promise<HttpResponse<Category[], void>>;
        /**
         * @description Create Category allows you to create a new Category in Shortcut.
         *
         * @name CreateCategory
         * @summary Create Category
         * @request POST:/api/v3/categories
         * @secure
         */
        createCategory: (CreateCategory: CreateCategory, params?: RequestParams) => Promise<HttpResponse<Category, void>>;
        /**
         * @description Get Category returns information about the selected Category.
         *
         * @name GetCategory
         * @summary Get Category
         * @request GET:/api/v3/categories/{category-public-id}
         * @secure
         */
        getCategory: (categoryPublicId: number, params?: RequestParams) => Promise<HttpResponse<Category, void>>;
        /**
         * @description Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
         *
         * @name UpdateCategory
         * @summary Update Category
         * @request PUT:/api/v3/categories/{category-public-id}
         * @secure
         */
        updateCategory: (categoryPublicId: number, UpdateCategory: UpdateCategory, params?: RequestParams) => Promise<HttpResponse<Category, void>>;
        /**
         * @description Delete Category can be used to delete any Category.
         *
         * @name DeleteCategory
         * @summary Delete Category
         * @request DELETE:/api/v3/categories/{category-public-id}
         * @secure
         */
        deleteCategory: (categoryPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description List Category Milestones returns a list of all Milestones with the Category.
         *
         * @name ListCategoryMilestones
         * @summary List Category Milestones
         * @request GET:/api/v3/categories/{category-public-id}/milestones
         * @secure
         */
        listCategoryMilestones: (categoryPublicId: number, params?: RequestParams) => Promise<HttpResponse<Milestone[], void>>;
        /**
         * @description Returns a list of all Objectives with the Category.
         *
         * @name ListCategoryObjectives
         * @summary List Category Objectives
         * @request GET:/api/v3/categories/{category-public-id}/objectives
         * @secure
         */
        listCategoryObjectives: (categoryPublicId: number, params?: RequestParams) => Promise<HttpResponse<Milestone[], void>>;
        /**
         * No description
         *
         * @name ListCustomFields
         * @summary List Custom Fields
         * @request GET:/api/v3/custom-fields
         * @secure
         */
        listCustomFields: (params?: RequestParams) => Promise<HttpResponse<CustomField[], void>>;
        /**
         * No description
         *
         * @name GetCustomField
         * @summary Get Custom Field
         * @request GET:/api/v3/custom-fields/{custom-field-public-id}
         * @secure
         */
        getCustomField: (customFieldPublicId: string, params?: RequestParams) => Promise<HttpResponse<CustomField, void>>;
        /**
         * @description Update Custom Field can be used to update the definition of a Custom Field. The order of items in the 'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the 'values' collection. New enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).
         *
         * @name UpdateCustomField
         * @summary Update Custom Field
         * @request PUT:/api/v3/custom-fields/{custom-field-public-id}
         * @secure
         */
        updateCustomField: (customFieldPublicId: string, UpdateCustomField: UpdateCustomField, params?: RequestParams) => Promise<HttpResponse<CustomField, void | DataConflictError>>;
        /**
         * No description
         *
         * @name DeleteCustomField
         * @summary Delete Custom Field
         * @request DELETE:/api/v3/custom-fields/{custom-field-public-id}
         * @secure
         */
        deleteCustomField: (customFieldPublicId: string, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description List all the entity templates for the Workspace.
         *
         * @name ListEntityTemplates
         * @summary List Entity Templates
         * @request GET:/api/v3/entity-templates
         * @secure
         */
        listEntityTemplates: (params?: RequestParams) => Promise<HttpResponse<EntityTemplate[], void>>;
        /**
         * @description Create a new entity template for the Workspace.
         *
         * @name CreateEntityTemplate
         * @summary Create Entity Template
         * @request POST:/api/v3/entity-templates
         * @secure
         */
        createEntityTemplate: (CreateEntityTemplate: CreateEntityTemplate, params?: RequestParams) => Promise<HttpResponse<EntityTemplate, void>>;
        /**
         * @description Disables the Story Template feature for the Workspace.
         *
         * @name DisableStoryTemplates
         * @summary Disable Story Templates
         * @request PUT:/api/v3/entity-templates/disable
         * @secure
         */
        disableStoryTemplates: (params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Enables the Story Template feature for the Workspace.
         *
         * @name EnableStoryTemplates
         * @summary Enable Story Templates
         * @request PUT:/api/v3/entity-templates/enable
         * @secure
         */
        enableStoryTemplates: (params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Get Entity Template returns information about a given entity template.
         *
         * @name GetEntityTemplate
         * @summary Get Entity Template
         * @request GET:/api/v3/entity-templates/{entity-template-public-id}
         * @secure
         */
        getEntityTemplate: (entityTemplatePublicId: string, params?: RequestParams) => Promise<HttpResponse<EntityTemplate, void>>;
        /**
         * @description Update an entity template's name or its contents.
         *
         * @name UpdateEntityTemplate
         * @summary Update Entity Template
         * @request PUT:/api/v3/entity-templates/{entity-template-public-id}
         * @secure
         */
        updateEntityTemplate: (entityTemplatePublicId: string, UpdateEntityTemplate: UpdateEntityTemplate, params?: RequestParams) => Promise<HttpResponse<EntityTemplate, void>>;
        /**
         * No description
         *
         * @name DeleteEntityTemplate
         * @summary Delete Entity Template
         * @request DELETE:/api/v3/entity-templates/{entity-template-public-id}
         * @secure
         */
        deleteEntityTemplate: (entityTemplatePublicId: string, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Returns the Epic Workflow for the Workspace.
         *
         * @name GetEpicWorkflow
         * @summary Get Epic Workflow
         * @request GET:/api/v3/epic-workflow
         * @secure
         */
        getEpicWorkflow: (params?: RequestParams) => Promise<HttpResponse<EpicWorkflow, void>>;
        /**
         * @description List Epics returns a list of all Epics and their attributes.
         *
         * @name ListEpics
         * @summary List Epics
         * @request GET:/api/v3/epics
         * @secure
         */
        listEpics: (query?: {
            /** A true/false boolean indicating whether to return Epics with their descriptions. */
            includes_description?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<EpicSlim[], void>>;
        /**
         * @description Create Epic allows you to create a new Epic in Shortcut.
         *
         * @name CreateEpic
         * @summary Create Epic
         * @request POST:/api/v3/epics
         * @secure
         */
        createEpic: (CreateEpic: CreateEpic, params?: RequestParams) => Promise<HttpResponse<Epic, void>>;
        /**
         * @description Get Epic returns information about the selected Epic.
         *
         * @name GetEpic
         * @summary Get Epic
         * @request GET:/api/v3/epics/{epic-public-id}
         * @secure
         */
        getEpic: (epicPublicId: number, params?: RequestParams) => Promise<HttpResponse<Epic, void>>;
        /**
         * @description Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
         *
         * @name UpdateEpic
         * @summary Update Epic
         * @request PUT:/api/v3/epics/{epic-public-id}
         * @secure
         */
        updateEpic: (epicPublicId: number, UpdateEpic: UpdateEpic, params?: RequestParams) => Promise<HttpResponse<Epic, void>>;
        /**
         * @description Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
         *
         * @name DeleteEpic
         * @summary Delete Epic
         * @request DELETE:/api/v3/epics/{epic-public-id}
         * @secure
         */
        deleteEpic: (epicPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Get a list of all Comments on an Epic.
         *
         * @name ListEpicComments
         * @summary List Epic Comments
         * @request GET:/api/v3/epics/{epic-public-id}/comments
         * @secure
         */
        listEpicComments: (epicPublicId: number, params?: RequestParams) => Promise<HttpResponse<ThreadedComment[], void>>;
        /**
         * @description This endpoint allows you to create a threaded Comment on an Epic.
         *
         * @name CreateEpicComment
         * @summary Create Epic Comment
         * @request POST:/api/v3/epics/{epic-public-id}/comments
         * @secure
         */
        createEpicComment: (epicPublicId: number, CreateEpicComment: CreateEpicComment, params?: RequestParams) => Promise<HttpResponse<ThreadedComment, void>>;
        /**
         * @description This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
         *
         * @name CreateEpicCommentComment
         * @summary Create Epic Comment Comment
         * @request POST:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        createEpicCommentComment: (epicPublicId: number, commentPublicId: number, CreateCommentComment: CreateCommentComment, params?: RequestParams) => Promise<HttpResponse<ThreadedComment, void>>;
        /**
         * @description This endpoint returns information about the selected Epic Comment.
         *
         * @name GetEpicComment
         * @summary Get Epic Comment
         * @request GET:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        getEpicComment: (epicPublicId: number, commentPublicId: number, params?: RequestParams) => Promise<HttpResponse<ThreadedComment, void>>;
        /**
         * @description This endpoint allows you to update a threaded Comment on an Epic.
         *
         * @name UpdateEpicComment
         * @summary Update Epic Comment
         * @request PUT:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        updateEpicComment: (epicPublicId: number, commentPublicId: number, UpdateComment: UpdateComment, params?: RequestParams) => Promise<HttpResponse<ThreadedComment, void>>;
        /**
         * @description This endpoint allows you to delete a Comment from an Epic.
         *
         * @name DeleteEpicComment
         * @summary Delete Epic Comment
         * @request DELETE:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        deleteEpicComment: (epicPublicId: number, commentPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Get a list of all Stories in an Epic.
         *
         * @name ListEpicStories
         * @summary List Epic Stories
         * @request GET:/api/v3/epics/{epic-public-id}/stories
         * @secure
         */
        listEpicStories: (epicPublicId: number, query?: {
            /** A true/false boolean indicating whether to return Stories with their descriptions. */
            includes_description?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description This endpoint allows you to unlink a productboard epic.
         *
         * @name UnlinkProductboardFromEpic
         * @summary Unlink Productboard from Epic
         * @request POST:/api/v3/epics/{epic-public-id}/unlink-productboard
         * @secure
         */
        unlinkProductboardFromEpic: (epicPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Get Stories which have a given External Link associated with them.
         *
         * @name GetExternalLinkStories
         * @summary Get External Link Stories
         * @request GET:/api/v3/external-link/stories
         * @secure
         */
        getExternalLinkStories: (query: {
            /**
             * The external link associated with one or more stories.
             * @maxLength 2048
             * @pattern ^https?://.+$
             */
            external_link: string;
        }, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description List Files returns a list of all UploadedFiles in the workspace.
         *
         * @name ListFiles
         * @summary List Files
         * @request GET:/api/v3/files
         * @secure
         */
        listFiles: (params?: RequestParams) => Promise<HttpResponse<UploadedFile[], void>>;
        /**
         * @description Upload Files uploads one or many files and optionally associates them with a story. Use the multipart/form-data content-type to upload. Each `file` key should contain a separate file. Each UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.
         *
         * @name UploadFiles
         * @summary Upload Files
         * @request POST:/api/v3/files
         * @secure
         */
        uploadFiles: (data: {
            /**
             * The story ID that these files will be associated with.
             * @format int64
             */
            story_id?: number;
            /**
             * A file upload. At least one is required.
             * @format binary
             */
            file0: File;
            /**
             * Optional additional files.
             * @format binary
             */
            file1?: File;
            /**
             * Optional additional files.
             * @format binary
             */
            file2?: File;
            /**
             * Optional additional files.
             * @format binary
             */
            file3?: File;
        }, params?: RequestParams) => Promise<HttpResponse<UploadedFile[], void>>;
        /**
         * @description Get File returns information about the selected UploadedFile.
         *
         * @name GetFile
         * @summary Get File
         * @request GET:/api/v3/files/{file-public-id}
         * @secure
         */
        getFile: (filePublicId: number, params?: RequestParams) => Promise<HttpResponse<UploadedFile, void>>;
        /**
         * @description Update File updates the properties of an UploadedFile (but not its content).
         *
         * @name UpdateFile
         * @summary Update File
         * @request PUT:/api/v3/files/{file-public-id}
         * @secure
         */
        updateFile: (filePublicId: number, UpdateFile: UpdateFile, params?: RequestParams) => Promise<HttpResponse<UploadedFile, void>>;
        /**
         * @description Delete File deletes a previously uploaded file.
         *
         * @name DeleteFile
         * @summary Delete File
         * @request DELETE:/api/v3/files/{file-public-id}
         * @secure
         */
        deleteFile: (filePublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
         *
         * @name ListGroups
         * @summary List Groups
         * @request GET:/api/v3/groups
         * @secure
         */
        listGroups: (params?: RequestParams) => Promise<HttpResponse<Group[], void>>;
        /**
         * No description
         *
         * @name CreateGroup
         * @summary Create Group
         * @request POST:/api/v3/groups
         * @secure
         */
        createGroup: (CreateGroup: CreateGroup, params?: RequestParams) => Promise<HttpResponse<Group, void | UnusableEntitlementError>>;
        /**
         * No description
         *
         * @name GetGroup
         * @summary Get Group
         * @request GET:/api/v3/groups/{group-public-id}
         * @secure
         */
        getGroup: (groupPublicId: string, params?: RequestParams) => Promise<HttpResponse<Group, void>>;
        /**
         * No description
         *
         * @name UpdateGroup
         * @summary Update Group
         * @request PUT:/api/v3/groups/{group-public-id}
         * @secure
         */
        updateGroup: (groupPublicId: string, UpdateGroup: UpdateGroup, params?: RequestParams) => Promise<HttpResponse<Group, void | UnusableEntitlementError>>;
        /**
         * @description List the Stories assigned to the Group. (By default, limited to 1,000).
         *
         * @name ListGroupStories
         * @summary List Group Stories
         * @request GET:/api/v3/groups/{group-public-id}/stories
         * @secure
         */
        listGroupStories: (groupPublicId: string, query?: {
            /**
             * The maximum number of results to return. (Defaults to 1000, max 1000)
             * @format int64
             */
            limit?: number;
            /**
             * The offset at which to begin returning results. (Defaults to 0)
             * @format int64
             */
            offset?: number;
        }, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * No description
         *
         * @name ListIterations
         * @summary List Iterations
         * @request GET:/api/v3/iterations
         * @secure
         */
        listIterations: (params?: RequestParams) => Promise<HttpResponse<IterationSlim[], void>>;
        /**
         * No description
         *
         * @name CreateIteration
         * @summary Create Iteration
         * @request POST:/api/v3/iterations
         * @secure
         */
        createIteration: (CreateIteration: CreateIteration, params?: RequestParams) => Promise<HttpResponse<Iteration, void>>;
        /**
         * @description Disables Iterations for the current workspace
         *
         * @name DisableIterations
         * @summary Disable Iterations
         * @request PUT:/api/v3/iterations/disable
         * @secure
         */
        disableIterations: (params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Enables Iterations for the current workspace
         *
         * @name EnableIterations
         * @summary Enable Iterations
         * @request PUT:/api/v3/iterations/enable
         * @secure
         */
        enableIterations: (params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * No description
         *
         * @name GetIteration
         * @summary Get Iteration
         * @request GET:/api/v3/iterations/{iteration-public-id}
         * @secure
         */
        getIteration: (iterationPublicId: number, params?: RequestParams) => Promise<HttpResponse<Iteration, void>>;
        /**
         * No description
         *
         * @name UpdateIteration
         * @summary Update Iteration
         * @request PUT:/api/v3/iterations/{iteration-public-id}
         * @secure
         */
        updateIteration: (iterationPublicId: number, UpdateIteration: UpdateIteration, params?: RequestParams) => Promise<HttpResponse<Iteration, void>>;
        /**
         * No description
         *
         * @name DeleteIteration
         * @summary Delete Iteration
         * @request DELETE:/api/v3/iterations/{iteration-public-id}
         * @secure
         */
        deleteIteration: (iterationPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Get a list of all Stories in an Iteration.
         *
         * @name ListIterationStories
         * @summary List Iteration Stories
         * @request GET:/api/v3/iterations/{iteration-public-id}/stories
         * @secure
         */
        listIterationStories: (iterationPublicId: number, query?: {
            /** A true/false boolean indicating whether to return Stories with their descriptions. */
            includes_description?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description Get Key Result returns information about a chosen Key Result.
         *
         * @name GetKeyResult
         * @summary Get Key Result
         * @request GET:/api/v3/key-results/{key-result-public-id}
         * @secure
         */
        getKeyResult: (keyResultPublicId: string, params?: RequestParams) => Promise<HttpResponse<KeyResult, void>>;
        /**
         * @description Update Key Result allows updating a Key Result's name or initial, observed, or target values.
         *
         * @name UpdateKeyResult
         * @summary Update Key Result
         * @request PUT:/api/v3/key-results/{key-result-public-id}
         * @secure
         */
        updateKeyResult: (keyResultPublicId: string, UpdateKeyResult: UpdateKeyResult, params?: RequestParams) => Promise<HttpResponse<KeyResult, void>>;
        /**
         * @description List Labels returns a list of all Labels and their attributes.
         *
         * @name ListLabels
         * @summary List Labels
         * @request GET:/api/v3/labels
         * @secure
         */
        listLabels: (query?: {
            /** A true/false boolean indicating if the slim versions of the Label should be returned. */
            slim?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<Label[], void>>;
        /**
         * @description Create Label allows you to create a new Label in Shortcut.
         *
         * @name CreateLabel
         * @summary Create Label
         * @request POST:/api/v3/labels
         * @secure
         */
        createLabel: (CreateLabelParams: CreateLabelParams, params?: RequestParams) => Promise<HttpResponse<Label, void>>;
        /**
         * @description Get Label returns information about the selected Label.
         *
         * @name GetLabel
         * @summary Get Label
         * @request GET:/api/v3/labels/{label-public-id}
         * @secure
         */
        getLabel: (labelPublicId: number, params?: RequestParams) => Promise<HttpResponse<Label, void>>;
        /**
         * @description Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
         *
         * @name UpdateLabel
         * @summary Update Label
         * @request PUT:/api/v3/labels/{label-public-id}
         * @secure
         */
        updateLabel: (labelPublicId: number, UpdateLabel: UpdateLabel, params?: RequestParams) => Promise<HttpResponse<Label, void>>;
        /**
         * @description Delete Label can be used to delete any Label.
         *
         * @name DeleteLabel
         * @summary Delete Label
         * @request DELETE:/api/v3/labels/{label-public-id}
         * @secure
         */
        deleteLabel: (labelPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description List all of the Epics with the Label.
         *
         * @name ListLabelEpics
         * @summary List Label Epics
         * @request GET:/api/v3/labels/{label-public-id}/epics
         * @secure
         */
        listLabelEpics: (labelPublicId: number, params?: RequestParams) => Promise<HttpResponse<EpicSlim[], void>>;
        /**
         * @description List all of the Stories with the Label.
         *
         * @name ListLabelStories
         * @summary List Label Stories
         * @request GET:/api/v3/labels/{label-public-id}/stories
         * @secure
         */
        listLabelStories: (labelPublicId: number, query?: {
            /** A true/false boolean indicating whether to return Stories with their descriptions. */
            includes_description?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description List Linked Files returns a list of all Linked-Files and their attributes.
         *
         * @name ListLinkedFiles
         * @summary List Linked Files
         * @request GET:/api/v3/linked-files
         * @secure
         */
        listLinkedFiles: (params?: RequestParams) => Promise<HttpResponse<LinkedFile[], void>>;
        /**
         * @description Create Linked File allows you to create a new Linked File in Shortcut.
         *
         * @name CreateLinkedFile
         * @summary Create Linked File
         * @request POST:/api/v3/linked-files
         * @secure
         */
        createLinkedFile: (CreateLinkedFile: CreateLinkedFile, params?: RequestParams) => Promise<HttpResponse<LinkedFile, void>>;
        /**
         * @description Get File returns information about the selected Linked File.
         *
         * @name GetLinkedFile
         * @summary Get Linked File
         * @request GET:/api/v3/linked-files/{linked-file-public-id}
         * @secure
         */
        getLinkedFile: (linkedFilePublicId: number, params?: RequestParams) => Promise<HttpResponse<LinkedFile, void>>;
        /**
         * @description Updated Linked File allows you to update properties of a previously attached Linked-File.
         *
         * @name UpdateLinkedFile
         * @summary Update Linked File
         * @request PUT:/api/v3/linked-files/{linked-file-public-id}
         * @secure
         */
        updateLinkedFile: (linkedFilePublicId: number, UpdateLinkedFile: UpdateLinkedFile, params?: RequestParams) => Promise<HttpResponse<LinkedFile, void>>;
        /**
         * @description Delete Linked File can be used to delete any previously attached Linked-File.
         *
         * @name DeleteLinkedFile
         * @summary Delete Linked File
         * @request DELETE:/api/v3/linked-files/{linked-file-public-id}
         * @secure
         */
        deleteLinkedFile: (linkedFilePublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Returns information about the authenticated member.
         *
         * @name GetCurrentMemberInfo
         * @summary Get Current Member Info
         * @request GET:/api/v3/member
         * @secure
         */
        getCurrentMemberInfo: (params?: RequestParams) => Promise<HttpResponse<MemberInfo, void>>;
        /**
         * @description Returns information about members of the Workspace.
         *
         * @name ListMembers
         * @summary List Members
         * @request GET:/api/v3/members
         * @secure
         */
        listMembers: (query?: {
            /**
             * The unique ID of the Organization to limit the list to.
             * @format uuid
             */
            "org-public-id"?: string;
        }, params?: RequestParams) => Promise<HttpResponse<Member[], void>>;
        /**
         * @description Returns information about a Member.
         *
         * @name GetMember
         * @summary Get Member
         * @request GET:/api/v3/members/{member-public-id}
         * @secure
         */
        getMember: (memberPublicId: string, query?: {
            /**
             * The unique ID of the Organization to limit the lookup to.
             * @format uuid
             */
            "org-public-id"?: string;
        }, params?: RequestParams) => Promise<HttpResponse<Member, void>>;
        /**
         * @description (Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.
         *
         * @name ListMilestones
         * @summary List Milestones
         * @request GET:/api/v3/milestones
         * @secure
         */
        listMilestones: (params?: RequestParams) => Promise<HttpResponse<Milestone[], void>>;
        /**
         * @description (Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.
         *
         * @name CreateMilestone
         * @summary Create Milestone
         * @request POST:/api/v3/milestones
         * @secure
         */
        createMilestone: (CreateMilestone: CreateMilestone, params?: RequestParams) => Promise<HttpResponse<Milestone, void | UnusableEntitlementError>>;
        /**
         * @description (Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.
         *
         * @name GetMilestone
         * @summary Get Milestone
         * @request GET:/api/v3/milestones/{milestone-public-id}
         * @secure
         */
        getMilestone: (milestonePublicId: number, params?: RequestParams) => Promise<HttpResponse<Milestone, void>>;
        /**
         * @description (Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.
         *
         * @name UpdateMilestone
         * @summary Update Milestone
         * @request PUT:/api/v3/milestones/{milestone-public-id}
         * @secure
         */
        updateMilestone: (milestonePublicId: number, UpdateMilestone: UpdateMilestone, params?: RequestParams) => Promise<HttpResponse<Milestone, void>>;
        /**
         * @description (Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.
         *
         * @name DeleteMilestone
         * @summary Delete Milestone
         * @request DELETE:/api/v3/milestones/{milestone-public-id}
         * @secure
         */
        deleteMilestone: (milestonePublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description (Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.
         *
         * @name ListMilestoneEpics
         * @summary List Milestone Epics
         * @request GET:/api/v3/milestones/{milestone-public-id}/epics
         * @secure
         */
        listMilestoneEpics: (milestonePublicId: number, params?: RequestParams) => Promise<HttpResponse<EpicSlim[], void>>;
        /**
         * @description List Objectives returns a list of all Objectives and their attributes.
         *
         * @name ListObjectives
         * @summary List Objectives
         * @request GET:/api/v3/objectives
         * @secure
         */
        listObjectives: (params?: RequestParams) => Promise<HttpResponse<Objective[], void>>;
        /**
         * @description Create Objective allows you to create a new Objective in Shortcut.
         *
         * @name CreateObjective
         * @summary Create Objective
         * @request POST:/api/v3/objectives
         * @secure
         */
        createObjective: (CreateObjective: CreateObjective, params?: RequestParams) => Promise<HttpResponse<Objective, void | UnusableEntitlementError>>;
        /**
         * @description Get Objective returns information about a chosen Objective.
         *
         * @name GetObjective
         * @summary Get Objective
         * @request GET:/api/v3/objectives/{objective-public-id}
         * @secure
         */
        getObjective: (objectivePublicId: number, params?: RequestParams) => Promise<HttpResponse<Objective, void>>;
        /**
         * @description Update Objective can be used to update Objective properties.
         *
         * @name UpdateObjective
         * @summary Update Objective
         * @request PUT:/api/v3/objectives/{objective-public-id}
         * @secure
         */
        updateObjective: (objectivePublicId: number, UpdateObjective: UpdateObjective, params?: RequestParams) => Promise<HttpResponse<Objective, void>>;
        /**
         * @description Delete Objective can be used to delete any Objective.
         *
         * @name DeleteObjective
         * @summary Delete Objective
         * @request DELETE:/api/v3/objectives/{objective-public-id}
         * @secure
         */
        deleteObjective: (objectivePublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description List all of the Epics within the Objective.
         *
         * @name ListObjectiveEpics
         * @summary List Objective Epics
         * @request GET:/api/v3/objectives/{objective-public-id}/epics
         * @secure
         */
        listObjectiveEpics: (objectivePublicId: number, params?: RequestParams) => Promise<HttpResponse<EpicSlim[], void>>;
        /**
         * @description List Projects returns a list of all Projects and their attributes.
         *
         * @name ListProjects
         * @summary List Projects
         * @request GET:/api/v3/projects
         * @secure
         */
        listProjects: (params?: RequestParams) => Promise<HttpResponse<Project[], void>>;
        /**
         * @description Create Project is used to create a new Shortcut Project.
         *
         * @name CreateProject
         * @summary Create Project
         * @request POST:/api/v3/projects
         * @secure
         */
        createProject: (CreateProject: CreateProject, params?: RequestParams) => Promise<HttpResponse<Project, void>>;
        /**
         * @description Get Project returns information about the selected Project.
         *
         * @name GetProject
         * @summary Get Project
         * @request GET:/api/v3/projects/{project-public-id}
         * @secure
         */
        getProject: (projectPublicId: number, params?: RequestParams) => Promise<HttpResponse<Project, void>>;
        /**
         * @description Update Project can be used to change properties of a Project.
         *
         * @name UpdateProject
         * @summary Update Project
         * @request PUT:/api/v3/projects/{project-public-id}
         * @secure
         */
        updateProject: (projectPublicId: number, UpdateProject: UpdateProject, params?: RequestParams) => Promise<HttpResponse<Project, void>>;
        /**
         * @description Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
         *
         * @name DeleteProject
         * @summary Delete Project
         * @request DELETE:/api/v3/projects/{project-public-id}
         * @secure
         */
        deleteProject: (projectPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description List Stories returns a list of all Stories in a selected Project and their attributes.
         *
         * @name ListStories
         * @summary List Stories
         * @request GET:/api/v3/projects/{project-public-id}/stories
         * @secure
         */
        listStories: (projectPublicId: number, query?: {
            /** A true/false boolean indicating whether to return Stories with their descriptions. */
            includes_description?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description List Repositories returns a list of all Repositories and their attributes.
         *
         * @name ListRepositories
         * @summary List Repositories
         * @request GET:/api/v3/repositories
         * @secure
         */
        listRepositories: (params?: RequestParams) => Promise<HttpResponse<Repository[], void>>;
        /**
         * @description Get Repository returns information about the selected Repository.
         *
         * @name GetRepository
         * @summary Get Repository
         * @request GET:/api/v3/repositories/{repo-public-id}
         * @secure
         */
        getRepository: (repoPublicId: number, params?: RequestParams) => Promise<HttpResponse<Repository, void>>;
        /**
         * @description Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name Search
         * @summary Search
         * @request GET:/api/v3/search
         * @secure
         */
        search: (query: {
            /**
             * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
             * @minLength 1
             */
            query: string;
            /**
             * The number of search results to include in a page. Minimum of 1 and maximum of 25.
             * @format int64
             */
            page_size?: number;
            /**
             * The amount of detail included in each result item.
             *    "full" will include all descriptions and comments and more fields on
             *    related items such as pull requests, branches and tasks.
             *    "slim" omits larger fulltext fields such as descriptions and comments
             *    and only references related items by id.
             *    The default is "full".
             */
            detail?: "full" | "slim";
            /** The next page token. */
            next?: string;
            /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
            entity_types?: ("story" | "milestone" | "epic" | "iteration" | "objective")[];
        }, params?: RequestParams) => Promise<HttpResponse<SearchResults, void | MaxSearchResultsExceededError>>;
        /**
         * @description Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchEpics
         * @summary Search Epics
         * @request GET:/api/v3/search/epics
         * @secure
         */
        searchEpics: (query: {
            /**
             * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
             * @minLength 1
             */
            query: string;
            /**
             * The number of search results to include in a page. Minimum of 1 and maximum of 25.
             * @format int64
             */
            page_size?: number;
            /**
             * The amount of detail included in each result item.
             *    "full" will include all descriptions and comments and more fields on
             *    related items such as pull requests, branches and tasks.
             *    "slim" omits larger fulltext fields such as descriptions and comments
             *    and only references related items by id.
             *    The default is "full".
             */
            detail?: "full" | "slim";
            /** The next page token. */
            next?: string;
            /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
            entity_types?: ("story" | "milestone" | "epic" | "iteration" | "objective")[];
        }, params?: RequestParams) => Promise<HttpResponse<EpicSearchResults, void | MaxSearchResultsExceededError>>;
        /**
         * @description Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchIterations
         * @summary Search Iterations
         * @request GET:/api/v3/search/iterations
         * @secure
         */
        searchIterations: (query: {
            /**
             * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
             * @minLength 1
             */
            query: string;
            /**
             * The number of search results to include in a page. Minimum of 1 and maximum of 25.
             * @format int64
             */
            page_size?: number;
            /**
             * The amount of detail included in each result item.
             *    "full" will include all descriptions and comments and more fields on
             *    related items such as pull requests, branches and tasks.
             *    "slim" omits larger fulltext fields such as descriptions and comments
             *    and only references related items by id.
             *    The default is "full".
             */
            detail?: "full" | "slim";
            /** The next page token. */
            next?: string;
            /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
            entity_types?: ("story" | "milestone" | "epic" | "iteration" | "objective")[];
        }, params?: RequestParams) => Promise<HttpResponse<IterationSearchResults, void | MaxSearchResultsExceededError>>;
        /**
         * @description Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchMilestones
         * @summary Search Milestones
         * @request GET:/api/v3/search/milestones
         * @secure
         */
        searchMilestones: (query: {
            /**
             * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
             * @minLength 1
             */
            query: string;
            /**
             * The number of search results to include in a page. Minimum of 1 and maximum of 25.
             * @format int64
             */
            page_size?: number;
            /**
             * The amount of detail included in each result item.
             *    "full" will include all descriptions and comments and more fields on
             *    related items such as pull requests, branches and tasks.
             *    "slim" omits larger fulltext fields such as descriptions and comments
             *    and only references related items by id.
             *    The default is "full".
             */
            detail?: "full" | "slim";
            /** The next page token. */
            next?: string;
            /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
            entity_types?: ("story" | "milestone" | "epic" | "iteration" | "objective")[];
        }, params?: RequestParams) => Promise<HttpResponse<ObjectiveSearchResults, void | MaxSearchResultsExceededError>>;
        /**
         * @description Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchObjectives
         * @summary Search Objectives
         * @request GET:/api/v3/search/objectives
         * @secure
         */
        searchObjectives: (query: {
            /**
             * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
             * @minLength 1
             */
            query: string;
            /**
             * The number of search results to include in a page. Minimum of 1 and maximum of 25.
             * @format int64
             */
            page_size?: number;
            /**
             * The amount of detail included in each result item.
             *    "full" will include all descriptions and comments and more fields on
             *    related items such as pull requests, branches and tasks.
             *    "slim" omits larger fulltext fields such as descriptions and comments
             *    and only references related items by id.
             *    The default is "full".
             */
            detail?: "full" | "slim";
            /** The next page token. */
            next?: string;
            /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
            entity_types?: ("story" | "milestone" | "epic" | "iteration" | "objective")[];
        }, params?: RequestParams) => Promise<HttpResponse<ObjectiveSearchResults, void | MaxSearchResultsExceededError>>;
        /**
         * @description Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchStories
         * @summary Search Stories
         * @request GET:/api/v3/search/stories
         * @secure
         */
        searchStories: (query: {
            /**
             * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
             * @minLength 1
             */
            query: string;
            /**
             * The number of search results to include in a page. Minimum of 1 and maximum of 25.
             * @format int64
             */
            page_size?: number;
            /**
             * The amount of detail included in each result item.
             *    "full" will include all descriptions and comments and more fields on
             *    related items such as pull requests, branches and tasks.
             *    "slim" omits larger fulltext fields such as descriptions and comments
             *    and only references related items by id.
             *    The default is "full".
             */
            detail?: "full" | "slim";
            /** The next page token. */
            next?: string;
            /** A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. */
            entity_types?: ("story" | "milestone" | "epic" | "iteration" | "objective")[];
        }, params?: RequestParams) => Promise<HttpResponse<StorySearchResults, void | MaxSearchResultsExceededError>>;
        /**
         * @description Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
         *
         * @name CreateStory
         * @summary Create Story
         * @request POST:/api/v3/stories
         * @secure
         */
        createStory: (CreateStoryParams: CreateStoryParams, params?: RequestParams) => Promise<HttpResponse<Story, void>>;
        /**
         * @description Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
         *
         * @name CreateMultipleStories
         * @summary Create Multiple Stories
         * @request POST:/api/v3/stories/bulk
         * @secure
         */
        createMultipleStories: (CreateStories: CreateStories, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description Update Multiple Stories allows you to make changes to numerous stories at once.
         *
         * @name UpdateMultipleStories
         * @summary Update Multiple Stories
         * @request PUT:/api/v3/stories/bulk
         * @secure
         */
        updateMultipleStories: (UpdateStories: UpdateStories, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description Delete Multiple Stories allows you to delete multiple archived stories at once.
         *
         * @name DeleteMultipleStories
         * @summary Delete Multiple Stories
         * @request DELETE:/api/v3/stories/bulk
         * @secure
         */
        deleteMultipleStories: (DeleteStories: DeleteStories, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
         *
         * @name CreateStoryFromTemplate
         * @summary Create Story From Template
         * @request POST:/api/v3/stories/from-template
         * @secure
         */
        createStoryFromTemplate: (CreateStoryFromTemplateParams: CreateStoryFromTemplateParams, params?: RequestParams) => Promise<HttpResponse<Story, void>>;
        /**
         * @description Search Stories lets you search Stories based on desired parameters.
         *
         * @name SearchStoriesOld
         * @summary Search Stories (Old)
         * @request POST:/api/v3/stories/search
         * @secure
         */
        searchStoriesOld: (SearchStories: SearchStories, params?: RequestParams) => Promise<HttpResponse<StorySlim[], void>>;
        /**
         * @description Get Story returns information about a chosen Story.
         *
         * @name GetStory
         * @summary Get Story
         * @request GET:/api/v3/stories/{story-public-id}
         * @secure
         */
        getStory: (storyPublicId: number, params?: RequestParams) => Promise<HttpResponse<Story, void>>;
        /**
         * @description Update Story can be used to update Story properties.
         *
         * @name UpdateStory
         * @summary Update Story
         * @request PUT:/api/v3/stories/{story-public-id}
         * @secure
         */
        updateStory: (storyPublicId: number, UpdateStory: UpdateStory, params?: RequestParams) => Promise<HttpResponse<Story, void>>;
        /**
         * @description Delete Story can be used to delete any Story.
         *
         * @name DeleteStory
         * @summary Delete Story
         * @request DELETE:/api/v3/stories/{story-public-id}
         * @secure
         */
        deleteStory: (storyPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Lists Comments associated with a Story
         *
         * @name ListStoryComment
         * @summary List Story Comment
         * @request GET:/api/v3/stories/{story-public-id}/comments
         * @secure
         */
        listStoryComment: (storyPublicId: number, params?: RequestParams) => Promise<HttpResponse<StoryComment[], void>>;
        /**
         * @description Create Comment allows you to create a Comment on any Story.
         *
         * @name CreateStoryComment
         * @summary Create Story Comment
         * @request POST:/api/v3/stories/{story-public-id}/comments
         * @secure
         */
        createStoryComment: (storyPublicId: number, CreateStoryComment: CreateStoryComment, params?: RequestParams) => Promise<HttpResponse<StoryComment, void>>;
        /**
         * @description Get Comment is used to get Comment information.
         *
         * @name GetStoryComment
         * @summary Get Story Comment
         * @request GET:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
         * @secure
         */
        getStoryComment: (storyPublicId: number, commentPublicId: number, params?: RequestParams) => Promise<HttpResponse<StoryComment, void>>;
        /**
         * @description Update Comment replaces the text of the existing Comment.
         *
         * @name UpdateStoryComment
         * @summary Update Story Comment
         * @request PUT:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
         * @secure
         */
        updateStoryComment: (storyPublicId: number, commentPublicId: number, UpdateStoryComment: UpdateStoryComment, params?: RequestParams) => Promise<HttpResponse<StoryComment, void>>;
        /**
         * @description Delete a Comment from any story.
         *
         * @name DeleteStoryComment
         * @summary Delete Story Comment
         * @request DELETE:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
         * @secure
         */
        deleteStoryComment: (storyPublicId: number, commentPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Create a reaction to a story comment.
         *
         * @name CreateStoryReaction
         * @summary Create Story Reaction
         * @request POST:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions
         * @secure
         */
        createStoryReaction: (storyPublicId: number, commentPublicId: number, CreateOrDeleteStoryReaction: CreateOrDeleteStoryReaction, params?: RequestParams) => Promise<HttpResponse<StoryReaction[], void>>;
        /**
         * @description Delete a reaction from any story comment.
         *
         * @name DeleteStoryReaction
         * @summary Delete Story Reaction
         * @request DELETE:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions
         * @secure
         */
        deleteStoryReaction: (storyPublicId: number, commentPublicId: number, CreateOrDeleteStoryReaction: CreateOrDeleteStoryReaction, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
         *
         * @name UnlinkCommentThreadFromSlack
         * @summary Unlink Comment thread from Slack
         * @request POST:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack
         * @secure
         */
        unlinkCommentThreadFromSlack: (storyPublicId: number, commentPublicId: number, params?: RequestParams) => Promise<HttpResponse<StoryComment, void>>;
        /**
         * No description
         *
         * @name StoryHistory
         * @summary Story History
         * @request GET:/api/v3/stories/{story-public-id}/history
         * @secure
         */
        storyHistory: (storyPublicId: number, params?: RequestParams) => Promise<HttpResponse<History[], void>>;
        /**
         * @description Create Task is used to create a new task in a Story.
         *
         * @name CreateTask
         * @summary Create Task
         * @request POST:/api/v3/stories/{story-public-id}/tasks
         * @secure
         */
        createTask: (storyPublicId: number, CreateTask: CreateTask, params?: RequestParams) => Promise<HttpResponse<Task, void>>;
        /**
         * @description Returns information about a chosen Task.
         *
         * @name GetTask
         * @summary Get Task
         * @request GET:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
         * @secure
         */
        getTask: (storyPublicId: number, taskPublicId: number, params?: RequestParams) => Promise<HttpResponse<Task, void>>;
        /**
         * @description Update Task can be used to update Task properties.
         *
         * @name UpdateTask
         * @summary Update Task
         * @request PUT:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
         * @secure
         */
        updateTask: (storyPublicId: number, taskPublicId: number, UpdateTask: UpdateTask, params?: RequestParams) => Promise<HttpResponse<Task, void>>;
        /**
         * @description Delete Task can be used to delete any previously created Task on a Story.
         *
         * @name DeleteTask
         * @summary Delete Task
         * @request DELETE:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
         * @secure
         */
        deleteTask: (storyPublicId: number, taskPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object. The subject story acts on the object Story; the object story is the direct object of the sentence. The subject story "blocks", "duplicates", or "relates to" the object story.  Examples: - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state. - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - "story 7 relates to story 3”
         *
         * @name CreateStoryLink
         * @summary Create Story Link
         * @request POST:/api/v3/story-links
         * @secure
         */
        createStoryLink: (CreateStoryLink: CreateStoryLink, params?: RequestParams) => Promise<HttpResponse<StoryLink, void>>;
        /**
         * @description Returns the stories and their relationship for the given Story Link.
         *
         * @name GetStoryLink
         * @summary Get Story Link
         * @request GET:/api/v3/story-links/{story-link-public-id}
         * @secure
         */
        getStoryLink: (storyLinkPublicId: number, params?: RequestParams) => Promise<HttpResponse<StoryLink, void>>;
        /**
         * @description Updates the stories and/or the relationship for the given Story Link.
         *
         * @name UpdateStoryLink
         * @summary Update Story Link
         * @request PUT:/api/v3/story-links/{story-link-public-id}
         * @secure
         */
        updateStoryLink: (storyLinkPublicId: number, UpdateStoryLink: UpdateStoryLink, params?: RequestParams) => Promise<HttpResponse<StoryLink, void>>;
        /**
         * @description Removes the relationship between the stories for the given Story Link.
         *
         * @name DeleteStoryLink
         * @summary Delete Story Link
         * @request DELETE:/api/v3/story-links/{story-link-public-id}
         * @secure
         */
        deleteStoryLink: (storyLinkPublicId: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Returns a list of all Workflows in the Workspace.
         *
         * @name ListWorkflows
         * @summary List Workflows
         * @request GET:/api/v3/workflows
         * @secure
         */
        listWorkflows: (params?: RequestParams) => Promise<HttpResponse<Workflow[], void>>;
        /**
         * @description Get Workflow returns information about a chosen Workflow.
         *
         * @name GetWorkflow
         * @summary Get Workflow
         * @request GET:/api/v3/workflows/{workflow-public-id}
         * @secure
         */
        getWorkflow: (workflowPublicId: number, params?: RequestParams) => Promise<HttpResponse<Workflow, void>>;
    };
}
export {};
