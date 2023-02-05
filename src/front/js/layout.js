import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ContactForm from "./component/ContactForm";
import SupplierRegister from "./component/SupplierRegister";
import UserRegister from "./component/UserRegister";
import Registers from "./component/Registers";
import LogIn from "./component/logIn";
import PrivateAreaUser from "./component/PrivateAreaUser";
import PrivateAreaSupplier from "./component/PrivateAreaSupplier";
import OfferList from "./component/OfferList";
import EditForm from "./component/EditForm";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<OfferList />} path="/ofertas/:id" />
                        <Route element={<ContactForm/>} path="/contacta-con-nosotros"/>  
                        <Route element={<LogIn/>} path="/inicio-sesion"/>
                        <Route element={<PrivateAreaUser/>} path="/area-privada-usuario"/>
                        <Route element={<PrivateAreaSupplier/>} path="/area-privada-proveedor"/>
                        <Route element={<Registers/>} path="/registro"/>
                        <Route element={<SupplierRegister/>} path ="/registro-proveedor"/> 
                        <Route element={<UserRegister/>} path ="/registro-usuario"/>
                         </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
