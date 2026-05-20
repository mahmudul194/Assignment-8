# SunCart – Summer Essentials Store

**Live URL**: [https://suncart-demo.vercel.app](https://suncart-demo.vercel.app) *(Placeholder)*

## Purpose
SunCart is a modern, responsive summer eCommerce platform built as an assignment demonstration. Users can explore summer products, view detailed information, and manage their profile securely after authentication.

## Key Features
- **Modern Summer Theme**: Vibrant UI designed with Tailwind CSS, DaisyUI (`lemonade` theme), and the `Outfit` font for a fresh look.
- **Authentication**: Secure login and registration flows powered by BetterAuth.
- **Responsive Layout**: fully functional on mobile, tablet, and desktop.
- **Static Data Integration**: Popular summer items displayed from a static JSON file.
- **Profile Management**: Protected route allowing users to view and update their name and photo URL.
- **Animations**: Integrated `Animate.css` for smooth component entries and hover effects.

## Technologies & NPM Packages Used
- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS v4**
- **DaisyUI v5**: For UI components (`npm install daisyui`)
- **BetterAuth**: For authentication (`npm install better-auth`)
- **Animate.css**: For animations (`npm install animate.css`)
- **Lucide React**: For icons (`npm install lucide-react`)

## Environment Variables
To run the app, you will need to add the following to your `.env` file at the root of the project:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_super_secret_key
MONGODB_URI=mongodb://localhost:27017/suncart
```
