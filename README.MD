# Azure Worker Function App

A common Azure Function App designed to run scheduled background jobs and perform automated tasks.

## Overview

This repository contains a shared Azure Function App (`func-worker-common-prod-cin`) that hosts multiple functions for various background operations. Each function within this app may be related or entirely independent of the others, serving different purposes within the organization's workflow automation.

## Function App Details

| Property | Value |
|----------|-------|
| **Function App Name** | `func-worker-common-prod-cin` |
| **Environment** | Production |
| **Region** | Central India (cin) |

## Project Structure

```
AzureFunctions/
├── README.MD
└── worker/
    ├── host.json
    ├── local.settings.json
    ├── package.json
    └── src/
        └── functions/
            └── [ServiceName]-[FunctionName].js
```

## Naming Convention

Functions follow the naming pattern: **`[ServiceName]-[FunctionName]`**

Examples:
- `Billing-GenerateInvoices`
- `Notifications-SendReminders`
- `Reports-DailyExport`

## Features

- **Scheduled Execution**: Functions are timer-triggered, running on configurable CRON schedules
- **Background Processing**: Designed for long-running or periodic background tasks
- **Shared Resources**: All functions share the same function app resources and configuration
- **Modular Design**: Each function is self-contained and operates independently

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local)
- [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli)

### Local Development

1. Clone this repository
2. Navigate to the worker folder: `cd worker`
3. Install dependencies: `npm install`
4. Copy `local.settings.json.example` to `local.settings.json` and configure your settings
5. Run `func start` to start the function app locally

### Deployment

Deploy to Azure using:

```bash
func azure functionapp publish func-worker-common-prod-cin
```

Or via Azure DevOps / GitHub Actions CI/CD pipelines.

## Functions

| Function Name | Description | Schedule |
|---------------|-------------|----------|
| Health-Check | Logs function app health status with timestamp, memory usage, and runtime info | Every 10 minutes |

## Adding a New Function

1. Create a new file in `worker/src/functions/` following the naming convention: `[ServiceName]-[FunctionName].js`
2. Use the Azure Functions v4 programming model
3. Update this README with function details
4. Test locally before deploying

## License

[Add your license information here]
