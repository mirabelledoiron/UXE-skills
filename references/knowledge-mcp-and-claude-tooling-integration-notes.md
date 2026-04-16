# MCP + Claude integration — what the sources explicitly say

## Source basis
- `references/source-01-what-is-the-model-context-protocol-mcp-model-con.md`
- `references/source-02-building-with-claude-claude-api-docs.md`

## Model Context Protocol (MCP)
- MCP (Model Context Protocol) is an **open-source standard** for connecting AI applications to external systems.
- MCP enables AI apps (e.g., **Claude** or **ChatGPT**) to connect to:
  - data sources (e.g., local files, databases)
  - tools (e.g., search engines, calculators)
  - workflows (e.g., specialized prompts)
  so they can access information and perform tasks.
- MCP is likened to a **USB-C port** for AI applications: standardized connection to external systems.

## What MCP enables (examples listed in excerpt)
- Agents can access tools like **Google Calendar** and **Notion**.
- Claude Code can generate an entire web app using a **Figma design**.
- Enterprise chatbots can connect to multiple databases across an organization.
- AI models can create 3D designs on **Blender** and print them using a 3D printer.

## Why MCP matters (from excerpt)
- For developers: reduces development time/complexity when building or integrating with an AI app/agent.
- For AI apps/agents: access to ecosystem of data sources/tools/apps.
- For end-users: more capable AI apps/agents that can access data and take actions.

## Ecosystem support (from excerpt)
- MCP is supported across a **wide range of clients and servers**.
- AI assistants and dev tools mentioned as supporting MCP include: **Claude/ChatGPT**, **VS Code**, **Cursor**, **MCPJam**, etc.

## Claude API docs — key integration concepts mentioned
- Claude is a family of highly performant AI models built by Anthropic.
- The overview excerpt highlights:
  - tool use / “function calling” style integration: Claude can interact with external client-side tools/functions by generating structured outputs through API calls.
- The “Building with Claude” flow is described at a high level (from excerpt):
  1. Scope use case and define requirements (features/performance/cost)
  2. Design integration (select capabilities and models; choose deployment method such as Claude API, AWS Bedrock, or Vertex AI)
  3. Prepare data for Claude’s context
  4. Develop prompts and iterate with test results
  5. Implement Claude and integrate with your systems (APIs, databases, UIs) and define human-in-the-loop requirements
  6. Test (red teaming and A/B test improvements)
  7. Deploy to production
  8. Monitor and improve

## MCP connector / “Remote MCP servers” pointer (only as listed)
- The Claude docs navigation text includes references to:
  - “MCP Remote MCP servers”
  - “MCP connector”
- (The excerpt does not provide further technical details beyond the presence of these topics.)

## Agent-safe integration takeaway
- Treat MCP as the standardized external-connector interface for AI apps.
- Treat Claude tool use as the mechanism to invoke external actions via structured outputs/APIs, and look for the dedicated MCP connector/remote MCP server docs when implementing MCP-to-Claude workflows.