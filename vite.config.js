import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: "src/assets/fonts/**/*.{ttf,woff,woff2}",
					dest: "assets/fonts",
				},

				{
					src: "src/assets/img/**/*.{jpeg,jpg,png,webp,gif}",
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
					src: "src/assets/video/**/*.{mp4,webm}",
					dest: "assets/video",
				},
			],
		}),
	],
});
