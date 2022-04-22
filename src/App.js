import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Home from './screens/home/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import Contact from './screens/contact/Contact'
import Services from './screens/services/Services'
import Offers from './screens/offers/Offers'
import Products from './screens/products/Products'
import TandC from './screens/TandC'
import ReferUs from './screens/ReferUs'
import Gallery from './screens/Gallery'
import ChatPopup from './screens/home/ChatPopup'
import Whatsapp from './screens/home/Whatsapp'
import Login from './screens/auth/Login'
import Dashboard from './screens/admin/Dashboard'
import Create from './screens/admin/testimonials/Create'
import Index from './screens/admin/testimonials/Index'

function App() {
    return (
        <Router>
            <div className='vh-100'>
                <div className='w-100 text-light bg-info text-center'>
                    We are 100% Covid Free
                </div>
                <Navbar />
                <Switch>
                    <Route exact path={'/login'} component={Login} />
                    <Route
                        exact
                        path={'/admin/dashboard'}
                        component={Dashboard}
                    />
                    <Route
                        exact
                        path={'/admin/testimonials'}
                        component={Index}
                    />
                    <Route
                        exact
                        path={'/admin/testimonials/create'}
                        component={Create}
                    />

                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route exact path='/services/:v?' component={Services} />
                    <Route exact path='/products/:v?' component={Products} />

                    <Route path='/offers'>
                        <Offers />
                    </Route>
                    <Route path='/terms-and-conditions'>
                        <TandC />
                    </Route>
                    <Route path='/refer-us'>
                        <ReferUs />
                    </Route>
                    <Route path='/gallery'>
                        <Gallery />
                    </Route>
                    <Redirect from='/' to='/home' />
                </Switch>

                <Footer />
                <Whatsapp />
                <ChatPopup />
            </div>
        </Router>
    )
}

export default App
