# Stampy Website Deployment Guide

This guide provides detailed instructions for deploying your Stampy website using GitHub Pages, Netlify, or Vercel.

## Option 1: GitHub Pages (Recommended for beginners)

GitHub Pages is a free hosting service that lets you publish your website directly from a GitHub repository.

### Prerequisites
- A GitHub account
- Git installed on your computer

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `my-react-website` (or whatever name you prefer)
4. Set the repository to Public
5. Click "Create repository"

### Step 2: Initialize Git in your project
Open your terminal/command prompt in your project directory and run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YourUsername/my-react-website.git
git push -u origin main
```

Replace `YourUsername` with your actual GitHub username.

### Step 3: Update package.json
Update the "homepage" field in your package.json file to match your GitHub username:
```json
"homepage": "https://YourUsername.github.io/my-react-website"
```

### Step 4: Deploy to GitHub Pages
Run these commands in your terminal:
```bash
npm run deploy
```

This will create a `gh-pages` branch in your repository and publish your website.

### Step 5: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" > "Pages"
3. Under "Source", select the "gh-pages" branch
4. Click "Save"

Your website will be available at `https://YourUsername.github.io/my-react-website`.

## Option 2: Netlify (Best for advanced features)

Netlify offers more advanced features like form handling, serverless functions, and custom domains.

### Step 1: Create a Netlify Account
1. Go to [Netlify](https://www.netlify.com/) and sign up for a free account
2. Verify your email address

### Step 2: Deploy via Drag-and-Drop (Easiest)
1. Run `npm run build` in your project directory
2. Drag and drop the entire "build" folder onto Netlify's dashboard
3. Netlify will automatically deploy your site and give you a URL

### Step 3: Deploy via GitHub (Recommended for continuous deployment)
1. Push your code to GitHub using the steps from Option 1
2. In Netlify dashboard, click "New site from Git"
3. Select GitHub and authenticate
4. Choose your repository
5. Set build command to `npm run build`
6. Set publish directory to `build`
7. Click "Deploy site"

### Step 4: Configure Custom Domain (Optional)
1. In your site settings on Netlify, go to "Domain management"
2. Click "Add custom domain" and follow the instructions

## Option 3: Vercel (Best for React projects)

Vercel is optimized for React projects and offers excellent performance and analytics.

### Step 1: Create a Vercel Account
1. Go to [Vercel](https://vercel.com/) and sign up for a free account
2. Verify your email address

### Step 2: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 3: Deploy Your Site
1. In your project directory, run:
```bash
vercel login
```
2. Follow the authentication process
3. Then run:
```bash
vercel
```
4. Follow the prompts to configure your project

### Step 4: Configure Continuous Deployment
1. Push your code to GitHub
2. In Vercel dashboard, click "Import Project"
3. Select your repository
4. Configure build settings (usually detected automatically)
5. Click "Deploy"

## Troubleshooting

### Images or CSS not loading
- Make sure all asset paths are relative
- For GitHub Pages, update paths to include `process.env.PUBLIC_URL` like: `${process.env.PUBLIC_URL}/images/logo.png`

### Navigation errors on refresh
- Add a `404.html` file that redirects to `index.html`
- Use `HashRouter` instead of `BrowserRouter` for GitHub Pages

### For more help
Contact support at support@stampy.no 