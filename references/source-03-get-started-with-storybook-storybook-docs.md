# Source 3: Get started with Storybook | Storybook docs

- Type: url
- URL: https://storybook.js.org/docs
- Note: Raw extracted source material preserved during generation.

Get started with Storybook | Storybook docsJoin live: What's next for Storybook & AI?DocsAIAddonsShowcaseBlogVisual TestEnterprise89,673Search docsDocs Get StartedDocumentationAPITutorialsAddonsChangelogVersion 10.3Get StartedWhy Storybook?InstallFrameworksWhat's a story?Browse storiesSetupConclusionStoriesArgsParametersDecoratorsPlay functionLoadersTagsNaming components and hierarchyMocking data and modulesBuilding pages and screensStories for multiple componentsWriting stories in TypeScriptTestingInteraction testsAccessibility testsVisual testsSnapshot testsTest coverageIn CIIntegrationsDocsAutodocsMDXDoc blocksCode panelPreview and build docsAIMCP serverBest practicesManifestsSharingPublishEmbedDesign integrationsCompositionPackage CompositionEssentialsActionsBackgroundsControlsHighlightMeasure & outlineToolbars & globalsViewportAddonsInstallWriteConfigure addonsWrite a presetAdd to catalogTypes of addonsKnowledge baseAddon APIMigrate addons to 10.0ConfigureStyling and CSSTelemetryIntegrationStory renderingStory layoutUser InterfaceEnvironment variablesBuildersViteWebpackAPIAPImain.js|ts configurationComponent Story Format (CSF)ArgTypesParametersDoc BlocksPortable StoriesFrameworksCLI optionsReleasesMigrate to Storybook 10Migrate from 8 to 9UpgradingFeature LifecycleRoadmapContributeRFC processCodeDocumentationFrameworksReproduceFAQGet started with StorybookStorybook is a frontend workshop for building UI components and pages in isolation. It helps you develop and share hard-to-reach states and edge cases without needing to run your whole app. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.
Install Storybook
Run this command to install Storybook into an existing project or create a new one from scratch:
 npm Copynpm create storybook@latest
Want to know more about installing Storybook? Check out the installation guide.
Supported frameworks
Next.jsNext.jswith ViteReactwith ViteReactwith WebpackReact Native Webwith Vite (in browser)React Nativeon devicePreactwith ViteVuewith ViteAngularSvelteKitSveltewith ViteWeb Componentswith Vite
Community-maintained frameworks
Storybook includes an active community that supports additional frameworks and libraries. These community-maintained frameworks are actively developed and maintained by community contributors.
Analogwith ViteNuxtwith ViteSolidJSwith ViteReactwith Rspack / RsbuildVuewith Rspack / RsbuildWeb Componentswith Rspack / Rsbuild
Main concepts
Storybook is a powerful tool that can help you with many aspects of your UI development workflow. Here are some of the main concepts to get you started.
StoriesA story captures the rendered state of a UI component. Each component can have multiple stories, where each story describes a different component state.DocsStorybook can analyze your components to automatically create documentation alongside your stories. This automatic documentation makes it easier for you to create UI library usage guidelines, design system sites, and more.TestingStories are a pragmatic starting point for your UI testing strategy. You already write stories as a natural part of UI development, so testing those stories is a low-effort way to prevent UI bugs over time.SharingPublishing your Storybook allows you to share your work with others. You can also embed your stories in places like Notion or Figma.
Additional resources
Once you've learned the basics, explore these other ways to get the most out of Storybook.
Essential featuresConfigure StorybookAddons & IntegrationsShowcaseTutorialsMigrate to 10.3FAQNeed some help?Join a discussion on GitHubLatest product updatesSee changelogWas this page useful?👍👎✍️ Edit on GithubOn this pageJoin the communitySubscribe7,044 developers and countingWhyWhy StorybookComponent driven UIAIDocsGuidesTutorialsChangelogTelemetryCommunityAddonsGet involvedBlogShowcaseExploreAboutOpen source softwareMaintained byChromaticSpecial thanks to Netlify.