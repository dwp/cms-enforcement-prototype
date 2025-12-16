/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  multicase: [
    {
      'other_parent': 'false',
      'case_id': 'false',
      'case_type': 'false',
      'effective_from': '8 December 2014',
      'effective_to': 'false'

    },
    {
      'other_parent': 'Daria Oblonskaya',
      'case_id': '1-2345999',
      'case_type': 'Pay and collect',
      'effective_from': '8 December 2014',
      'effective_to': '6 May 2025'
    },
    {
      'other_parent': 'Ruth Slater',
      'case_id': '1-2345703',
      'case_type': 'Arrears only',
      'effective_from': '21 December 2016',
      'effective_to': '6 May 2025'
    }
  ]
}

