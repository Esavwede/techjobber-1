const express = require('express')
const router = express.Router() 

// Controllers 
const user = require('../../controllers/user/user.controller')
const  { getDashboard  } = require('../../controllers/user/userDashboard.controller')


const { getProfile, updateBioDetailsHandler, addExperienceHandler, 
    getExperiencesHandler, updateExperienceHandler, removeExperienceHandler,
 addItemToPortfolioHandler, getPortfolioHandler, updatePortfolioItemHandler,
removePortfolioItemHandler } = require('../../controllers/user/profile.controller')

module.exports = function(app)
    {
        try 
        {

            console.log(' Building User routes ') 


            // signup 
            router.post('/signup', user.SignupHandler )
            router.get('/signup', user.getSignupPage )

            
            // signin 
            router.get('/signin', user.signinPageHandler ) 
            router.post('/signin', user.signinHandler ) 


            // Dashboard 
            router.get('/dashboard', getDashboard )


            // profile 
            router.get('/dashboard/profile', getProfile )
            router.patch('/dashboard/profile', updateBioDetailsHandler )
            router.post('/dashboard/profile/experience', addExperienceHandler )
            router.get('/dashboard/profile/experience', getExperiencesHandler )
            router.patch('/dashboard/profile/experience', updateExperienceHandler )
            router.delete('/dashboard/profile/experience', removeExperienceHandler )

       
            // Portfolio 
            router.post('/dashboard/profile/portfolio', addItemToPortfolioHandler ) 
            router.get('/dashboard/profile/portfolio', getPortfolioHandler ) 
            router.patch('/dashboard/profile/portfolio', updatePortfolioItemHandler ) 
            router.delete('/dashboard/profile/portfolio', removePortfolioItemHandler ) 

            
            // ASSIGN ROUTES TO APP 
            app.use('/api/v1', router )
            console.log(' User Routes Built ')
        }
        catch(e)
        {
            console.log(' Error occured while building user routes ')
            console.log( e ) 
        }
    }