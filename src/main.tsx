import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FeedbackProvider } from './context/FeedbackContext.tsx';
import { InterviewProvider } from './context/InterviewContext.tsx';

import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <InterviewProvider>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    </InterviewProvider>
  </ClerkProvider>
);
