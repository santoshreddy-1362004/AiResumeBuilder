# Professional AI Resume Builder

A modern, AI-powered resume and cover letter builder with ATS optimization capabilities.

## Features

- 🤖 AI-powered resume optimization using Google Gemini
- 📝 Professional cover letter generation
- 🎯 ATS (Applicant Tracking System) compatibility analysis
- 🔍 Keyword matching and analysis
- 📊 Resume scoring and recommendations
- 📱 Fully responsive design
- 🎨 Professional, corporate-grade UI

## Live Demo

Deploy this application to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/AiResumeBuilder)

## Deployment Instructions

### Deploy to Vercel

1. **Fork/Clone this repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select the `resume` folder as your project root

3. **Set Environment Variables in Vercel:**
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add the following variable:
     ```
     VITE_GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Get Google Gemini API Key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key and add it to Vercel environment variables

5. **Deploy:**
   - Vercel will automatically deploy your application
   - Your app will be available at `https://your-app-name.vercel.app`

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd AiResumeBuilder/resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your Gemini API key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## Technology Stack

- **Frontend:** React 19, Vite
- **Styling:** Bootstrap 5, Custom CSS
- **AI Integration:** Google Gemini API
- **Deployment:** Vercel
- **Build Tool:** Vite

## Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build configuration
- `.env.example` - Environment variables template
- `package.json` - Dependencies and scripts

## Security

- API keys are handled through environment variables
- No sensitive data is exposed in the client-side code
- Proper error handling for API failures

## Support

For issues or questions, please create an issue in the GitHub repository.

## License

This project is licensed under the MIT License.