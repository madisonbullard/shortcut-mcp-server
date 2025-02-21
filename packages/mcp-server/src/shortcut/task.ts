import type { RequestParams } from "@shortcut-mcp-server/shortcut-api-client";
import { client } from "./client.js";

export async function getTask(
	storyId: number,
	taskId: number,
	params?: RequestParams,
) {
	const res = await client.api.getTask(storyId, taskId, params);

	if (!res.ok || res.error) {
		return `<Task id={${taskId}}>Failed to retrieve task: ${res.status} error.</Task>`;
	}

	const task = res.data;

	return `${task.complete ? "[X]" : "[ ]"} ${task.description}`;
}
