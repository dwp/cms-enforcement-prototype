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
  'finances': {
      'still_owed_child_maintenance': '31545.95',
      'still_owed_charges_debt': '3000.00',
      'overpayments_child_maintenance': '0',
      'overpayments_charges_debt': '0',
      'cash_balance': '30.61',
      'payments_made_child_maintenance': '1113.20',
      'payments_made_charges_debt': '1000.00',
      'written_off': '10.00',
      'expected_child_maintenance': '1206.34',
      'expected_collection_charges': '575.85',
      'expected_enforcement_charges': '300.00',
      'regular_deduction_order': '21.00',
      'lump_sum_deduction_order': '100.00',
      'liability_order': '150.00',
      'deduction_from_earnings_order': '30.00',
      'expected_enforcement_cost': '122.41',
      'expected_CSA_debt': '63.45',
      'expected_DNA_debt': '87.23',
      'expected_subject_access_request_cost': '19.00',
      'expected_interest': '30.67',
      'expected_fees': '22.87',
      'expected_judicial_review_cost': '107.89',
      'expected_appeal_cost': '43.45',
      'expected_cms_admin_cost': '26.00',
      'expected_liability_order_cost': '54.00'
    }
  }
