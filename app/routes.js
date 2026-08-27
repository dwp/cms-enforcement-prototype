//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'juggling-balls-answer'
// router.post('/juggling-balls-answer', function (req, res) {

//     // Make a variable and give it the value from 'how-many-balls'
//     var howManyBalls = req.session.data['how-many-balls']

//     // Check whether the variable matches a condition
//     if (howManyBalls == "3 or more"){
//       // Send user to next page
//       res.redirect('/juggling-trick')
//     } else {
//       // Send user to ineligible page
//       res.redirect('/ineligible')
//     }

//   })

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

// Use the finance-calculator.js helper to count the number of cases in VPF multicase. Then make results available to page template as {{ financeSummary.activeCount }}, {{ financeSummary.closedCount }}, etc.
const calculateFinanceSummary =
  require('./helpers/finance-calculator')

// Add middleware function so the helper is available to other folders
  function addFinanceSummary(req, res, next) {
  const allCases =
    req.session.data.multicase?.cases || []

  const finances =
    req.session.data['finances-3']?.finances || []

  res.locals.financeSummary =
    calculateFinanceSummary(finances, allCases)

  res.locals.allCases = allCases

  next()
}

// Set which folders the middleware applies to

router.use(
  [
    '/sprint-development/2149',
    '/sprint-development/2175'
  ],
  addFinanceSummary
)
// 2149 routes
router.get(
  '/sprint-development/2149/multicase-finances-multiline-tabs',
  (req, res) => {
    res.render(
      'sprint-development/2149/multicase-finances-multiline-tabs'
    )
  }
)
// 2175 routes
router.get(
  '/sprint-development/2175/multicase-finances-multiline-tabs',
  (req, res) => {
    res.render(
      'sprint-development/2175/multicase-finances-multiline-tabs'
    )
  }
)
