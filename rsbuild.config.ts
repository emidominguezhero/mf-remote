import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

const port = 3001;

export default defineConfig({
	server: {
		port
	},
	dev: {
		assetPrefix: `http://localhost:${port}`
	},
	output: {
		assetPrefix: "https://mf-remote-coral.vercel.app"
	},
	tools: {
		rspack: (config, { appendPlugins }) => {
			config.output!.uniqueName = "remote";

			appendPlugins([
				new ModuleFederationPlugin({
					name: "remote",
					exposes: {
						"./Button": "./src/Button"
					},
					shared: ["react", "react-dom"]
				})
			]);
		}
	},
	plugins: [pluginReact()]
});
