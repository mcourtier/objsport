// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-studio"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  studio: {
    // Studio admin route (default: '/_studio')
    route: "/_studio",

    // Git repository configuration (owner and repo are required)
    repository: {
      provider: "github", // 'github' or 'gitlab'
      owner: "mcourtier", // your GitHub/GitLab username or organization
      repo: "objsport", // your repository name
      branch: "main", // the branch to commit to (default: main)
    },
  },
  compatibilityDate: "2024-04-03",
});
