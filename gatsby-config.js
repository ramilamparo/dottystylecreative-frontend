module.exports = {
	pathPrefix: "/ramilamparo/dottystylecreative-frontend",
	siteMetadata: {
		title: "Ramil Amparo",
		description:
			"This is my simple portfolio site to show off my skills and experience.",
		author: "Ramil Amparo"
	},
	plugins: [
		/**
		 * Webapp manifest part of the progressive web app specification.
		 * Allows user to add the site to their home screen on most mobile browsers.
		 */
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "The Whitsundays",
				short_name: "Whitsundays",
				start_url: "/",
				background_color: "#070707",
				theme_color: "#070707",
				display: "standalone",
				icons: [
					{
						src: "public/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "public/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		},
		/** Make google fonts with Roboto font and material icons available. */
		{
			resolve: "gatsby-plugin-google-fonts",
			options: {
				fonts: ["material icons", "Open Sans: 300, 400, 500, 800"]
			}
		},
		/**
		 * Enables components which lives above pages
		 * and persists on page changes.
		 */ {
			resolve: "gatsby-plugin-layout",
			options: {
				component: require.resolve("./src/components/utils/PageContainer.tsx")
			}
		},
		"gatsby-plugin-eslint",
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-typescript",
		"gatsby-plugin-styled-components"
	]
};
