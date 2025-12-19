//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var howManyBalls = req.session.data['how-many-balls']
  
    // Check whether the variable matches a condition
    if (howManyBalls == "3 or more"){
      // Send user to next page
      res.redirect('/juggling-trick')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  
  })

// router.get('/sprint-development/multicase/tabs-pattern/multicase-finances', function (req, res, next) {   
  //   res.locals.tab = '2';   
  //   next(); });
/////////-------------------------
  router.get('/sprint-development/1716/tabs-pattern/multicase-finances', function (req, res, next) {   
    // Check if a 'tab' query parameter exists in the URL (e.g., ?tab=1 or ?tab=2)
    const activeTab = req.query.selectedTab;

    if (activeTab) {
      // If found in the URL, use that value for the Nunjucks variable
      res.locals.selectedTab = activeTab;
    } else {
      // Otherwise, default to '2' (or your preferred default)
      res.locals.selectedTab = 'none';
    }
    
    // Continue processing the request and rendering the Nunjucks template
    next(); 
});
router.get('/sprint-development/1716/tabs-pattern/multicase-statements', function (req, res, next) {   
    // Check if a 'tab' query parameter exists in the URL (e.g., ?tab=1 or ?tab=2)
    const activeTab = req.query.selectedTab;

    if (activeTab) {
      // If found in the URL, use that value for the Nunjucks variable
      res.locals.selectedTab = activeTab;
    } else {
      // Otherwise, default to '2' (or your preferred default)
      res.locals.selectedTab = 'none';
    }
    
    // Continue processing the request and rendering the Nunjucks template
    next(); 
});
// router.get('/sprint-development/multicase/tabs-pattern/multicase-finances', function (req, res, next) {   
//     // Read the value from the cookies sent by the browser
//     const tabFromCookie = req.cookies.selectedTabCookie;

//     if (tabFromCookie) {
//       res.locals.tab = tabFromCookie;
//     } else {
//       res.locals.tab = '0'; // Default value if the cookie isn't set
//     }

//     next(); 
// });
// router.get('/sprint-development/multicase/tabs-pattern/multicase-statements', function (req, res, next) {   
//     // Read the value from the cookies sent by the browser
//     const tabFromCookie = req.cookies.selectedTabCookie;

//     if (tabFromCookie) {
//       res.locals.tab = tabFromCookie;
//     } else {
//       res.locals.tab = '0'; // Default value if the cookie isn't set
//     }

//     next(); 
// });