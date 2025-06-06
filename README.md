# PoS Subgraph Clients

This repository contains subgraph implementations for Polygon (PoS), supporting both mainnet and Amoy testnet deployments.

## Overview

The repository includes:

- **mainnet-subgraph-polygon/**: Subgraph for Polygon Mainnet
- **amoy-subgraph-polygon/**: Subgraph for Polygon Amoy testnet

Both subgraphs index key PoS contracts including:

- StakingInfo
- StateSender
- RootChainProxy

## Prerequisites

- Node.js (v24.0.2 recommended)
- nvm (Node Version Manager)
- Docker and Docker Compose
- Yarn package manager
- The Graph CLI

## Installation

1. Clone the repository:

```bash
git clone https://github.com/kamuikatsurgi/pos-subgraphs
cd pos-subgraphs
```

2. Set the correct Node.js version:

```bash
nvm use v24.0.2
```

3. Navigate to the desired subgraph directory and install dependencies:

```bash
# For mainnet
cd mainnet-subgraph-polygon
yarn install

# For Amoy testnet
cd amoy-subgraph-polygon
yarn install
```

## Local Development Setup

### Important Configuration Notes

Before running locally, you **must** update the following configurations:

1. **Ethereum RPC Endpoint**: Update the `ethereum` environment variable in `docker-compose.yml`:

   ```yaml
   environment:
     ethereum: "mainnet:http://host.docker.internal:8545"
   ```

   Replace `http://host.docker.internal:8545` with your actual Ethereum RPC endpoint.

2. **Contract Addresses**: Update contract addresses in `networks.json` if needed:
   - For mainnet: Check addresses in `mainnet-subgraph-polygon/networks.json`
   - For Amoy: Check addresses in `amoy-subgraph-polygon/networks.json`

### Local Deployment Commands

1. **Start the Graph Node infrastructure**:

```bash
docker compose up -d
```

2. **Create the subgraph locally**:

```bash
yarn create-local
```

3. **Deploy to local Graph Node**:

```bash
yarn deploy-local
```

### Complete Local Setup Flow

```bash
# Set Node version
nvm use v24.0.2

# Start infrastructure
docker compose up -d

# Create and deploy subgraph
yarn create-local
yarn deploy-local
```

## Network Deployment (Amoy/Mainnet)

### Prerequisites for Network Deployment

1. **Authentication**: You need to authenticate with The Graph Studio:

```bash
graph auth <YOUR_API_KEY>
```

Replace `<YOUR_API_KEY>` with your actual Graph Studio API key.

### Deployment Commands

```bash
# Set Node version
nvm use v24.0.2

# Authenticate (replace with your API key)
graph auth <YOUR_API_KEY>

# Generate code and build
graph codegen && graph build

# Deploy to network
graph deploy pos-amoy-subgraph
```

## Project Structure

```
pos-subgraphs/
├── mainnet-subgraph-polygon/
│   ├── src/                    # TypeScript mappings
│   ├── abis/                   # Contract ABIs
│   ├── schema.graphql          # GraphQL schema
│   ├── subgraph.yaml           # Subgraph manifest
│   ├── networks.json           # Network configurations
│   ├── docker-compose.yml      # Local Graph Node setup
│   └── package.json            # Dependencies and scripts
└── amoy-subgraph-polygon/
    ├── src/                    # TypeScript mappings
    ├── abis/                   # Contract ABIs
    ├── schema.graphql          # GraphQL schema
    ├── subgraph.yaml           # Subgraph manifest
    ├── networks.json           # Network configurations
    ├── docker-compose.yml      # Local Graph Node setup
    └── package.json            # Dependencies and scripts
```

## Available Scripts

Each subgraph directory contains the following npm scripts:

- `yarn codegen`: Generate TypeScript types from GraphQL schema
- `yarn build`: Build the subgraph
- `yarn deploy`: Deploy to The Graph Studio
- `yarn create-local`: Create subgraph on local Graph Node
- `yarn deploy-local`: Deploy to local Graph Node
- `yarn remove-local`: Remove subgraph from local Graph Node

## Contract Addresses

### Mainnet (Polygon)

- **StakingInfo**: `0xa59C847Bd5aC0172Ff4FE912C5d29E5A71A7512B`
- **StateSender**: `0x28e4F3a7f651294B9564800b2D01f35189A5bFbE`
- **RootChainProxy**: `0x86E4Dc95c7FBdBf52e33D563BbDB00823894C287`

### Amoy Testnet (Sepolia)

- **StakingInfo**: `0x5E3111a5d928D24718c1A7897261D0B9087002ed`
- **StateSender**: `0x49E307Fa5a58ff1834E0F8a60eB2a9609E6A5F50`
- **RootChainProxy**: `0xbd07D7E1E93c8d4b2a261327F3C28a8EA7167209`

## Troubleshooting

### Common Issues

1. **Docker compose fails to start**:

   - Ensure Docker is running
   - Check if ports 8000, 8001, 8020, 5001, 5432 are available
   - Verify the Ethereum RPC endpoint is accessible

2. **Deployment fails**:

   - Verify Node.js version (use `nvm use v24.0.2`)
   - Check authentication with The Graph Studio
   - Ensure contract addresses are correct in `networks.json`

3. **Local Graph Node connection issues**:
   - Verify Graph Node is running: `docker compose ps`
   - Check logs: `docker compose logs graph-node`
   - Ensure RPC endpoint is properly configured in `docker-compose.yml`

### Useful Commands

- View Graph Node logs: `docker compose logs -f graph-node`
- Stop local infrastructure: `docker compose down`
- Reset local data: `docker compose down -v` (removes volumes)
- Check subgraph status: Visit `http://localhost:8000/subgraphs/name/<subgraph-name>`

## Development Workflow

1. Make changes to mappings in `src/`
2. Update schema in `schema.graphql` if needed
3. Run `yarn codegen` to regenerate types
4. Run `yarn build` to compile
5. Deploy locally with `yarn deploy-local` for testing
6. Deploy to network with `yarn deploy` when ready
