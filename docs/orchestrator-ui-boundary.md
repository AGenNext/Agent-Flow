# Agent-Flow orchestrator UI

Agent-Flow is the visual orchestration UI for AGenNext workflows.

## Decision

Agent-Flow owns the workflow/orchestration user experience.

It is distinct from Agent-Chat and Agent-Dashboard.

## Boundary

| Component | Responsibility |
|---|---|
| Agent-Flow | Visual workflow builder, orchestration UI, graph run control |
| Agent-Chat | Conversational interface |
| Agent-Dashboard | Operator/admin runtime dashboard |
| Agent-Graph | Graph contracts and workflow topology |
| Agent-Runtime | Executes workflow runs |
| Agent-Frameworks | Framework adapters such as LangGraph |
| Agent-Traces | Execution/audit timelines |

## Agent-Flow owns

- visual workflow builder
- AgentGraph plan editor
- node/edge editing
- workflow templates
- run controls
- retry/pause/resume UX
- approval step visualization
- workflow status visualization
- graph execution timeline integration

## Agent-Flow does not own

- runtime execution
- framework adapters
- Kubernetes operations
- cloud provider adapters
- identity verification
- memory storage

## Flow

```txt
User builds or edits workflow
  ↓
Agent-Flow exports AgentGraph-compatible plan
  ↓
Agent-Runtime executes plan
  ↓
Agent-Traces records timeline
  ↓
Agent-Flow displays run state and graph progress
```

## Cloud agent use case

```txt
Deploy k8smicro on Kimsufi
  ↓
Agent-Flow shows nodes:
  - verify identity
  - security preflight
  - harden node
  - install k3s
  - deploy SurrealDB
  - deploy runtime workers
  - run health checks
```
