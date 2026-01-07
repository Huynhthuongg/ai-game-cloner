# AI Game Cloner

A Next.js application that enables AI-powered game cloning and creation with integrated Vercel Web Analytics for tracking user engagement and analytics.

## Getting Started

### Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- Node.js 18.17 or later
- npm, pnpm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Huynhthuongg/ai-game-cloner.git
cd ai-game-cloner
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Web Analytics Setup

This project includes Vercel Web Analytics integration to track visitor engagement and page views.

### Enable Web Analytics in Vercel

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to enable Web Analytics

> **Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

### Analytics Integration

The `@vercel/analytics` package is already installed and integrated into this project. The Analytics component is automatically injected into the root layout (`app/layout.tsx`) to track:

- Visitor statistics
- Page views and routing
- User interactions
- Performance metrics

### Deploying to Vercel

Deploy your app using the Vercel CLI or by connecting your Git repository:

```bash
vercel deploy
```

For better workflow, we recommend [connecting your Git repository](https://vercel.com/docs/git) to Vercel, which will automatically deploy your latest commits.

### Viewing Analytics Data

Once your app is deployed and receives visitors:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. View and filter your analytics data

After a few days of visitor traffic, you can start exploring your data more deeply and [filter](https://vercel.com/docs/analytics/filtering) the panels.

### Custom Events

Users on Pro and Enterprise plans can also add [custom events](https://vercel.com/docs/analytics/custom-events) to track specific user interactions such as:
- Button clicks
- Form submissions
- Game starts/completions
- Feature usage

## Learn More

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Next.js Documentation](https://nextjs.org/docs)
- [@vercel/analytics Package](https://www.npmjs.com/package/@vercel/analytics)

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.
