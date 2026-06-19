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
        'case_id': '1-2345999',
        'service_type': 'Collect and pay',
        'sub_status': 'Perform Calculation',
        'effective_from': '7 October 2021',
        'next_annual_review': '7 October 2026',
        'role': 'paying',
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
        ],
        'child_maintenance_expected': '1200.00',
        'child_maintenance_paid': '1050.06',
        'charges_debt_expected': '120.00',
        'charges_debt_paid': '20.00',
      },
      {
        'case_index': '1',
        'case_status': 'active',
        'case_id': '1-2245868',
        'service_type': 'Collect and pay',
        'sub_status': 'Perform Calculation',
        'effective_from': '21 November 2022',
        'next_annual_review': '21 November 2026',
        'role': 'paying',
        'other_parent': 'Ruth Slater',
        'qualifying_children': [
          {
            'child_name': 'Olivia Slater',
            'dob': '21 Nov 2022',
            'overnight_stays': '0',
            'local_auth_stays': '0'
          }
        ],
        'child_maintenance_expected': '3000.00',
        'child_maintenance_paid': '2604.00',
        'charges_debt_expected': '300.00',
        'charges_debt_paid': '23.30',
      },
      {
        'case_index': '2',
        'case_status': 'active',
        'case_id': '1-2245868',
        'service_type': 'Collect and pay',
        'sub_status': 'Arrears only',
        'effective_from': '28 June 2024',
        'next_annual_review': '28 June 2026',
        'role': 'receiving',
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
        'case_status': 'closed',
        'date_closed': '20 Nov 2025',
        'case_id': '1-2348743',
        'other_parent': 'Ruth Slater'
      },
      {
        'case_index': '4',
        'case_status': 'closed',
        'date_closed': '3 Jun 2020',
        'case_id': '1-2311178',
        'other_parent': 'Ruth Slater'
      },
      {
        'case_index': '5',
        'case_status': 'closed',
        'date_closed': '3 Jun 2026',
        'case_id': '1-2245772',
        'service_type': 'Collect and pay',
        'sub_status': 'Arrears only',
        'effective_from': '2 May 2012',
        'next_annual_review': '2 May 2026',
        'role': 'paying',
        'other_parent': 'Zara Fleetwood',
        'qualifying_children': [
          {
            'child_name': 'Thomas Fleetwood-Oblonsky',
            'dob': '14 Aug 2010',
            'overnight_stays': '2',
            'local_auth_stays': '0'
          }
        ],
        'child_maintenance_expected': '1000.00',
        'child_maintenance_paid': '200.00',
        'charges_debt_expected': '100.00',
        'charges_debt_paid': '20.00',
      }
    ]
  }