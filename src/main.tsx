import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)