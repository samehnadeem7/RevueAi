# Deploying Revue.Ai to Vercel

This project is built with Vite and React. It is configured for easy deployment on Vercel.

## Prerequisities

1. A [Vercel account](https://vercel.com/signup).
2. The project code pushed to a GitHub, GitLab, or Bitbucket repository.

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Log in** to your Vercel Dashboard.
2. Click **"Add New..."** -> **"Project"**.
3. **Import** your Git repository where this code is pushed.
4. Vercel will automatically detect `Vite`.
5. **Configure Environment Variables**:
   Expand the "Environment Variables" section and add the following keys with your specific values (you can find these in your local `.env` file or n8n dashboard):

   | Key                            | Value                                                         |
   | ------------------------------ | ------------------------------------------------------------- |
   | `REACT_APP_N8N_CHATBOT_URL`    | `https://sydaslam.app.n8n.cloud/webhook/chatbot-webhook`      |
   | `REACT_APP_N8N_REVUE_URL`      | `https://sydaslam.app.n8n.cloud/webhook/revue`                |
   | `REACT_APP_N8N_NEWSLETTER_URL` | `https://sydaslam.app.n8n.cloud/webhook/newsletter-subscribe` |

6. Click **Deploy**.

### Option 2: Vercel CLI

If you have the Vercel CLI installed (`npm i -g vercel`), you can deploy from your terminal:

1. Run the deploy command:
   ```bash
   vercel
   ```
2. Follow the prompts to set up the project.
3. When asked "Want to modify these settings?", answer **No** (the defaults are usually correct for Vite).
4. After the first deployment, go to the Vercel Dashboard for this project, navigate to **Settings > Environment Variables**, and add the variables listed above.
5. Redeploy using:
   ```bash
   vercel --prod
   ```

## Configuration

A `vercel.json` file has been added to the project root to handle Single Page Application (SPA) routing. This ensures that refreshing a page like `/company/about` works correctly without a 404 error.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
