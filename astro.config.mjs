// @ts-check
import { defineConfig } from 'astro/config';
// 图标
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    site: 'https://www.mtueih.com',
    trailingSlash: 'always',


	// 插件
	integrations: [
		icon({
			include: {
				lucide: ['*'],
			}
		})
	]
});
