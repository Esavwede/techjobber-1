const userRoutes = require('./user/user.route') 
const landingPageRoutes = require('./landingPage/index.route')
const talentRoutes = require('./talent/talent.route') 

module.exports = function(app)
    {
        try 
        {

            console.log(' Building User Routes ')

            // Building User Routes 
            userRoutes(app) 

            // Building Landing Page Routes 
            landingPageRoutes(app) 

            // talent route 
            talentRoutes(app) 
            

            console.log(' Application Routes Built ')
        }
        catch(e)
        {
            console.log(' Error occured while building application routes ')
            console.log(e)
        }
    }