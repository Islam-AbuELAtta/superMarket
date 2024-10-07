
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContextProvider from './Context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

    <AuthContextProvider>
        <QueryClientProvider client={queryClient} >
            <ToastContainer 
            
            ></ToastContainer>
            <App />
        </QueryClientProvider>
    </AuthContextProvider>


)