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

  'multicase': {
    'total_cases': '5',
    'cases': [
      {
        'case_index': '0',
        'case_status': 'Active',
        'case_id': '1-2345999',
        'case_type': 'Collect and pay',
        'effective_from': '7 October 2021',
        'role': 'Paying parent',
        'other_parent': 'Daria Oblonskaya',
        'qualifying_children': [
          {
            'child_name': 'Lily Oblonskaya',
            'dob': '7 October 2021',
            'overnight_stays': '1',
            'local_auth_stays': '0'
          },
            {
            'child_name': 'Tatiana Oblonskaya',
            'dob': '21 November 2022',
            'overnight_stays': '0',
            'local_auth_stays': '0'
          }
        ]

      },
      {
        'case_index': '1',
        'case_status': 'Active',
        'case_id': '1-2245868',
        'case_type': 'Collect and pay – Arrears only',
        'effective_from': '21 November 2022',
        'role': 'Paying parent',
        'other_parent': 'Ruth Slater',
        'qualifying_children': [
          {
            'child_name': 'Olivia Slater',
            'dob': '21 Nov 2022',
            'overnight_stays': '0',
            'local_auth_stays': '0'
          }
        ]
      },
      {
        'case_index': '2',
        'case_status': 'Active',
        'case_id': '1-2245868',
        'effective_from': '28 June 2024',
        'role': 'Receiving parent',
        'other_parent': 'Ruth Slater',
        'qualifying_children': [
          {
            'child_name': 'Olivia Slater',
            'dob': '10 Sep 2023',
            'overnight_stays': '0',
            'local_auth_stays': '0'
          }
        ]
      },
      {
        'case_index': '3',
        'case_status': 'Closed',
        'date_closed': '20 Nov 2025',
        'case_id': '1-2348743',
        'other_parent': 'Ruth Slater'
      },
      {
        'case_index': '4',
        'case_status': 'Closed',
        'date_closed': '3 Jun 2020',
        'case_id': '1-2311178',
        'other_parent': 'Ruth Slater'
      }
    ]
  }
}