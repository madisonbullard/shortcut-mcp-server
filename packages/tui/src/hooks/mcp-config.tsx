import fs from "node:fs";
import path from "node:path";
import { useEffect, useState } from "react";
import which from "which";

type McpConfig<K extends string> = {
	mcpServers: Record<
		string,
		{ command: string; args: string[]; env?: Record<K, string> }
	>;
};

export function useWriteMcpConfig<K extends string>({
	env,
	command,
	args,
	configFilePath,
	mcpServerName,
	createIfNotExists,
	supportsEnvObject,
}: {
	command: string;
	args: string[];
	env: Record<K, string>;
	configFilePath: string;
	mcpServerName: string;
	createIfNotExists: boolean;
	supportsEnvObject: boolean;
}) {
	const [newConfig, setNewConfig] = useState<McpConfig<K> | undefined>(
		undefined,
	);
	const [existingConfig, setExistingConfig] = useState<
		McpConfig<K> | null | undefined
	>(undefined);

	const [error, setError] = useState<Error | undefined>(undefined);

	useEffect(
		function writeClaudeMCPConfig() {
			async function createMcpConfigObject() {
				const cmd = (await which(command)).trim();
				return {
					command: supportsEnvObject
						? cmd
						: `env ${Object.entries(env)
								.map(([key, value]) => `${key}=${value}`)
								.join(" ")} ${cmd}`,
					args,
					...(supportsEnvObject ? { env } : {}),
				};
			}

			createMcpConfigObject()
				.then((mcpConfigObject) => {
					const configDirExists = fs.existsSync(path.dirname(configFilePath));

					let existingConfig: McpConfig<K> | null = null;

					if (!configDirExists) {
						createIfNotExists &&
							fs.mkdirSync(path.dirname(configFilePath), { recursive: true });
						existingConfig = null;
					}

					existingConfig = (
						configDirExists && fs.existsSync(configFilePath)
							? JSON.parse(fs.readFileSync(configFilePath, "utf8"))
							: null
					) as McpConfig<K> | null;

					setExistingConfig(existingConfig);

					const newConfig: McpConfig<K> = {
						...existingConfig,
						mcpServers: {
							...existingConfig?.mcpServers,
							[mcpServerName]: mcpConfigObject,
						},
					};

					setNewConfig(newConfig);

					if (existingConfig || createIfNotExists) {
						fs.writeFileSync(
							configFilePath,
							JSON.stringify(newConfig, null, 2),
						);
					}
				})
				.catch((error) => {
					setError(error);
				});
		},
		[
			env,
			command,
			args,
			configFilePath,
			mcpServerName,
			createIfNotExists,
			supportsEnvObject,
		],
	);

	return { newConfig, existingConfig, error };
}
