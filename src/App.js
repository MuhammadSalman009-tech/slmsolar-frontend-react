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
import TestimonialIndex from './screens/admin/testimonials/TestimonialIndex'
import TestimonialCreate from './screens/admin/testimonials/TestimonialCreate'
import TestimonialEdit from './screens/admin/testimonials/TestimonialEdit'
import ProjectIndex from './screens/admin/projects/ProjectIndex'
import ProjectCreate from './screens/admin/projects/ProjectCreate'
import ProjectEdit from './screens/admin/projects/ProjectEdit'
import GalleriesEdit from './screens/admin/projects/ProjectEdit'
import GalleriesCreate from './screens/admin/galleries/GalleriesCreate'
import GalleriesIndex from './screens/admin/galleries/GalleriesIndex'
import Profile from './screens/auth/Profile'

function App() {
    return (
        <Router>
            <div className='vh-100'>
                <div className='w-100 text-light bg-info text-center'>
                    We are 100% Covid Free
                </div>
                <Navbar />
                <Switch>
                    {/* dashboard routes */}
                    <Route exact path={'/login'} component={Login} />
                    <Route
                        exact
                        path={'/admin/profile/:id'}
                        component={Profile}
                    />
                    <Route
                        exact
                        path={'/admin/dashboard'}
                        component={Dashboard}
                    />
                    {/*dashboard testimonial routes */}
                    <Route
                        exact
                        path={'/admin/testimonials'}
                        component={TestimonialIndex}
                    />
                    <Route
                        exact
                        path={'/admin/testimonials/create'}
                        component={TestimonialCreate}
                    />
                    <Route
                        exact
                        path={'/admin/testimonials/:id/edit'}
                        component={TestimonialEdit}
                    />
                    {/* dashboard project routes */}
                    <Route
                        exact
                        path={'/admin/projects'}
                        component={ProjectIndex}
                    />
                    <Route
                        exact
                        path={'/admin/projects/create'}
                        component={ProjectCreate}
                    />
                    <Route
                        exact
                        path={'/admin/projects/:id/edit'}
                        component={ProjectEdit}
                    />
                    {/* dashboard gallery routes */}
                    <Route
                        exact
                        path={'/admin/galleries'}
                        component={GalleriesIndex}
                    />
                    <Route
                        exact
                        path={'/admin/galleries/create'}
                        component={GalleriesCreate}
                    />
                    <Route
                        exact
                        path={'/admin/galleries/:id/edit'}
                        component={GalleriesEdit}
                    />
                    {/* frontend routes */}
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
