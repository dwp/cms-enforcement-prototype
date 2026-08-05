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

router.get('/sprint-development/1716/tabs-pattern/multicase-statement', function (req, res, next) {   
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

// Count the number of cases in VPF multicase. Then use in page template as {{ activeCount }}, {{ closedCount }}, {{ payingCount }}, {{ receivingCount }} and {{ activePayingCount }}.
router.get('/sprint-development/2149/multicase-finances-multiline-tabs', function (req, res) {

  // look inside the current session data and retrieves a list of cases inside multicase.
  const allCases = req.session.data.multicase.cases
// put them in allCases and available to any pages
  res.locals.allCases = allCases
// count how many cases have a 'case.status' of 'active' and put them in 'activeCount'
  res.locals.activeCount =
    allCases.filter(c => c.case_status === 'active').length
// count closed cases and store as 'closedCount', etc
  res.locals.closedCount =
    allCases.filter(c => c.case_status === 'closed').length

  res.locals.payingCount =
    allCases.filter(c => c.role === 'paying').length

  res.locals.receivingCount =
    allCases.filter(c => c.role === 'receiving').length

  res.locals.activePayingCount =
    allCases.filter(
      c => c.case_status === 'active' &&
           c.role === 'paying'
    ).length

  res.render('sprint-development/2149/multicase-finances-multiline-tabs')
})