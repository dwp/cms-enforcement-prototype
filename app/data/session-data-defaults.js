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
  multicase: {
    'all_cases': '5',
  },
  receiving_parent_1: {
    'other_parent': 'false',
    'case_id': 'false',
    'case_type': 'false',
    'effective_from': '8 December 2014',
    'effective_to': 'false'
  },
  receiving_parent_2: {
    'other_parent': 'Daria Oblonskaya',
    'case_id': '1-2345999',
    'case_type': 'Pay and collect',
    'effective_from': '8 December 2014',
    'effective_to': '6 May 2025',
    'collection_charges': '5,444.55',
    'regular_deduction_order': '20.00',
    'lump_sum_deduction_order': '100.00',
    'liability_order': '200.00',
    'deduction_from_earning_order_or_request': '30.00',
    'enforcements_cost': '160.00',
    'csa_debt': '63.45',
    'dna_cost': '87.23',
    'subject_access_request_cost': '19.00',
    'interest': '30.67',
    'fees': '22.87',
    'judicial_review_costs': '107.89',
    'appeal_costs': '43.45',
    'cms_admin_costs': '26.89',
    'liability_order_admin_cost': '54.00',
    'child_maintenance_expected': '10,070.52',
    'amount_written_off': '0.00',
    'cash_balance': '330.61',
    'child_maintenance_payments_made': '7,387.06',
    'charges_and_debt_payments_made': '76.91'
  },
  receiving_parent_3: {
    'other_parent': 'Ruth Slater',
    'case_id': '1-2345703',
    'case_type': 'Arrears only',
    'effective_from': '21 December 2016',
    'effective_to': '6 May 2025'
  }
}

