# Source 2: Building with Claude - Claude API Docs

- Type: url
- URL: https://docs.anthropic.com/en/docs/overview
- Note: Raw extracted source material preserved during generation.

Building with Claude - Claude API DocsCookie settingsWe use cookies to deliver and improve our services, analyze site usage, and if you agree, to customize or personalize your experience and market our services to you. You can read our Cookie Policy here.CustomizeCustomize Cookie SettingsRejectReject All CookiesAcceptAccept All CookiesLoading...MessagesBuildAdminModels & pricingClient SDKsAPI ReferenceEnglishLog inSearch...⌘KFirst stepsIntro to ClaudeQuickstartBuilding with ClaudeFeatures overviewUsing the Messages APIHandling stop reasonsModel capabilitiesExtended thinkingAdaptive thinkingEffortFast mode (beta: research preview)Structured outputsCitationsStreaming MessagesBatch processingSearch resultsStreaming refusalsMultilingual supportEmbeddingsToolsOverviewHow tool use worksWeb search toolWeb fetch toolCode execution toolAdvisor toolMemory toolBash toolComputer use toolText editor toolTool infrastructureTool referenceTool searchProgrammatic tool callingFine-grained tool streamingContext managementContext windowsCompactionContext editingPrompt cachingToken countingWorking with filesFiles APIPDF supportImages and visionSkillsOverviewQuickstartBest practicesSkills for enterpriseSkills in the APIMCPRemote MCP serversMCP connectorPrompt engineeringOverviewPrompting best practicesConsole prompting toolsTest and evaluateDefine success and build evaluationsUsing the Evaluation Tool in ConsoleReducing latencyStrengthen guardrailsReduce hallucinationsIncrease output consistencyMitigate jailbreaksReduce prompt leakResourcesGlossaryUse casesRelease notesClaude PlatformConsoleLog inDocumentationPageLoading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...SolutionsAI agentsCode modernizationCodingCustomer supportEducationFinancial servicesGovernmentLife sciencesPartnersAmazon BedrockGoogle Cloud's Vertex AILearnBlogCoursesUse casesConnectorsCustomer storiesEngineering at AnthropicEventsPowered by ClaudeService partnersStartups programCompanyAnthropicCareersEconomic FuturesResearchNewsResponsible Scaling PolicySecurity and complianceTransparencyLearnBlogCoursesUse casesConnectorsCustomer storiesEngineering at AnthropicEventsPowered by ClaudeService partnersStartups programHelp and securityAvailabilityStatusSupportDiscordTerms and policiesPrivacy policyResponsible disclosure policyTerms of service: CommercialTerms of service: ConsumerUsage policyDocumentationBuilding with ClaudeCopy pageClaude is a family of highly performant and intelligent AI models built by Anthropic. While Claude is powerful and extensible, it's also the most trustworthy and reliable AI available. It follows critical protocols, makes fewer mistakes, and is resistant to jailbreaks—allowing enterprise customers to build the safest AI-powered applications at scale.Copy pageWas this page helpful?What you can do with ClaudeEnterprise considerationsImplementing ClaudeStart building with ClaudeThis guide introduces Claude's enterprise capabilities, the end-to-end flow for developing with Claude, and how to start building.
What you can do with Claude
Claude is designed to empower enterprises at scale with strong performance across benchmark evaluations for reasoning, math, coding, and fluency in English and non-English languages.
Here's a non-exhaustive list of Claude's capabilities and common uses.
CapabilityEnables you to...Text and code generationAdhere to brand voice for excellent customer-facing experiences such as copywriting and chatbotsCreate production-level code and operate (in-line code generation, debugging, and conversational querying) within complex codebasesBuild automatic translation features between languagesConduct complex financial forecastsSupport legal use cases that require high-quality technical analysis, long context windows for processing detailed documents, and fast outputsVisionProcess and analyze visual input, such as extracting insights from charts and graphsGenerate code from images with code snippets or templates based on diagramsDescribe an image for a user with low visionTool useInteract with external client-side tools and functions, allowing Claude to reason, plan, and execute actions by generating structured outputs through API calls
Enterprise considerations
Along with an extensive set of features, tools, and capabilities, Claude is also built to be secure, trustworthy, and scalable for wide-reaching enterprise needs.
FeatureDescriptionSecureEnterprise-grade security and data handling for APISOC II Type 2 certified, HIPAA-ready options for APIAccessible through AWS, GCP, and AzureTrustworthyResistant to jailbreaks and misuse. We continuously monitor prompts and outputs for harmful, malicious use cases that violate our AUP.Copyright indemnity protections for paid commercial servicesUniquely positioned to serve high trust industries that process large volumes of sensitive user dataCapableLarge context window (1M tokens) for processing large documents, extensive codebases, and long conversationsTool use, also known as function calling, which allows seamless integration of Claude into specialized applications and custom workflowsMultimodal input capabilities with text output, allowing you to upload images (such as tables, graphs, and photos) along with text prompts for richer context and complex use casesDeveloper Console with Workbench and prompt generation tool for easier, more powerful prompting and experimentationSDKs and APIs to expedite and enhance developmentReliableVery low hallucination ratesAccurate over long documents
Implementing Claude

Start building with Claude
When you're ready, start building with Claude:

Follow the Quickstart to make your first API call
Check out the API Reference
Experiment and start building with the Workbench
Check out the Claude Cookbook for working code examples
GlobalGreat for coding tasks and fluency in English and non-English languages like Spanish and JapaneseEnables use cases like translation services and broader global utilityCost consciousFamily of models balances cost, performance, and intelligence1Scope your use case
Identify a problem to solve or tasks to automate with Claude.
Define requirements: features, performance, and cost.
2Design your integration
Select Claude's capabilities (e.g., vision, tool use) and models (Opus, Sonnet, Haiku) based on needs.
Choose a deployment method, such as the Claude API, AWS Bedrock, or Vertex AI.
3Prepare your data
Identify and clean relevant data (databases, code repos, knowledge bases) for Claude's context.
4Develop your prompts
Use Workbench to create evals, draft prompts, and iteratively refine based on test results.
Deploy polished prompts and monitor real-world performance for further refinement.
5Implement Claude
Set up your environment, integrate Claude with your systems (APIs, databases, UIs), and define human-in-the-loop requirements.
6Test your system
Conduct red teaming for potential misuse and A/B test improvements.
7Deploy to production
Once your application runs smoothly end-to-end, deploy to production.
8Monitor and improve
Monitor performance and effectiveness to make ongoing improvements.