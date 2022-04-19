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

function App() {
    return (
        <Router>
            <div className='vh-100'>
                <div className='w-100 text-light bg-info text-center'>
                    We are 100% Covid Free
                </div>
                <Navbar />
                <Switch>
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
