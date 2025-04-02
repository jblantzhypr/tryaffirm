# HYPR Affirm Demo - Glitch Deployment

This is the deployment version of the HYPR Affirm Demo application for Glitch.

## Deployment Instructions

1. Create a new project on Glitch
2. Upload all files from this directory to your Glitch project
3. Glitch will automatically detect the Node.js project and install dependencies
4. The application will be available at your Glitch project URL

## Environment Variables

Make sure to set up the following environment variables in your Glitch project:
- `REACT_APP_API_URL`: https://affirm-creator.glitch.me
- `HYPR_API_KEY`: Your HYPR API key
- `HYPR_API_URL`: https://hyprdemo.gethypr.com/cc/api/idv/user

## Project Structure

```
├── src/                # Source code
├── public/            # Static files
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── .env              # Environment variables
```

## Development

The application is built with:
- React 18
- TypeScript
- Create React App

## API Endpoints

The application communicates with:
- HYPR Demo API: https://hyprdemo.gethypr.com
- Verification Types: /cc/api/idv/verification/types
- Verification Submit: /cc/api/idv/verification 