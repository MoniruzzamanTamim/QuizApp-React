import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";   // ✅ Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";  //✅Bootstrap ICON
import "@fortawesome/fontawesome-free/css/all.min.css"; //✅Font Awesome ICON
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Bootstrap JS
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
