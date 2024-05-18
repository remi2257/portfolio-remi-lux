# Portfolio

## Setup

### Global Setup

1. Install Node: version 20 (^20.11.1) (use NVM)
2. Install Yarn (^1.22.19) : `yarn set version stable`
3. Install the node modules simply with the command `yarn` at project's root.

### Mail Setup (Optional)

This project use Resend to send mail directly for server actions.

1. Create a Resend account and get your API key
2. Copy the `.env.template` to `.env` and fill the variables

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

### Why is the ResumeDisplay.tsx file so huge

In order to trigger re-render, I was forced to put everything there instead of splitting
with multilple files
