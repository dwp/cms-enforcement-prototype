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
'cases': [
      {
        'case_index': '0',
        'case_status': 'active',
        'parent_id': '121000111232',
        'case_id': '1-2345943',
        'service_type': 'Direct pay',
        'sub_status': 'Arrears only',
        'effective_from': '7 July 2021',
        'next_annual_review': '7 July 2026',
        'role': 'paying',
        'other_parent': 'Grace Adebayo',
        'qualifying_children': [
          {
            'child_name': 'Omar Adebayo',
            'dob': '2 March 2019',
            'overnight_stays': '1',
            'local_auth_stays': '0'
          },
            {
            'child_name': 'Amira Adebayo',
            'dob': '1 January 2025',
            'overnight_stays': '0',
            'local_auth_stays': '0'
          }
        ],
        'child_maintenance_expected': '2998.98',
        'expected_CSA_debt_parent': '123.45',
        'child_maintenance_paid': '852.23',
        'charges_debt_expected': '120.00',
        'charges_debt_paid': '20.00',
      },
      {
        'case_index': '1',
        'case_status': 'active',
        'parent_id': '121000111991',
        'case_id': '1-2245821',
        'service_type': 'Collect and pay',
        'sub_status': 'Perform Calculation',
        'effective_from': '21 December 2021',
        'next_annual_review': '21 December 2024',
        'role': 'paying',
        'other_parent': 'Kerry Williams',
        'qualifying_children': [
          {
            'child_name': 'George Williams',
            'dob': '21 Nov 2022',
            'overnight_stays': '0',
            'local_auth_stays': '0'
          }
        ],
        'child_maintenance_expected': '2300.70',
        'expected_CSA_debt_parent': '98.62',
        'child_maintenance_paid': '426.11',
        'charges_debt_expected': '300.00',
        'charges_debt_paid': '23.30',
      },
      {
        'case_index': '2',
        'case_status': 'active',
        'parent_id': '121000111223',
        'case_id': '1-2245868',
        'service_type': 'Collect and pay',
        'sub_status': 'Arrears only',
        'effective_from': '28 June 2024',
        'next_annual_review': '28 June 2026',
        'role': 'receiving',
        'other_parent': 'Kerry Williams',
        'qualifying_children': [
          {
            'child_name': 'George Williams',
            'dob': '10 Sep 2023',
            'overnight_stays': '0',
            'local_auth_stays': '0'
          }
        ]
      },
      {
        'case_index': '3',
        'case_status': 'closed',
        'date_closed': '20 Nov 2025',
        'parent_id': '121000111223',
        'case_id': '1-2348743',
        'other_parent': 'Karen Kirk'
      }
    ]
  }