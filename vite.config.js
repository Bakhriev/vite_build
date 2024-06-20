import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: "src/assets/fonts/**/*",
					dest: "assets/fonts",
				},

				{
					src: "src/assets/img/**/*.{jpeg,jpg,png,webp,gif,avif}",
					dest: "assets/img",
				},

				{
					src: "src/assets/img/**/*.svg",
					dest: "assets/img/svg",
				},

				{
					src: "src/assets/vendors/**/*.{css,js}",
					dest: "assets/vendors",
				},

				{
					src: "src/assets/video/**/*",
					dest: "assets/video",
				},
			],
		}),
	],
});
