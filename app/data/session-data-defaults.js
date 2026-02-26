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

  // Require other data store files

  'multicase': require('./multicase.js'),
  'children': require('./children.js'),

  // Insert values here

  'calc_details': [
    {
      'reason_index': '0',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 25',
      'effective_from': '19 Oct 25',
      'effective_to': '18 Oct 26',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '40.11',
      'total_weekly_charge': '8.02',
      'total_daily_liability': '5.73',
      'total_daily_charge': '1.15',
      'weekly_gross_income': '515.47',
      'tax_year_hmrc': '6 April 2023 - 5 April 2024',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '515.47',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '26,878.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '1',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 24',
      'effective_from': '19 Oct 24',
      'effective_to': '18 Oct 25',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '40.11',
      'total_weekly_charge': '8.02',
      'total_daily_liability': '5.73',
      'total_daily_charge': '1.15',
      'weekly_gross_income': '515.47',
      'tax_year_hmrc': '6 April 2023 - 5 April 2024',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '515,47',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '26,878.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '2',
      'calc_reason': 'Shared care',
      'perform_date': '26 Dec 23',
      'effective_from': '12 Dec 23',
      'effective_to': '18 Oct 24',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '36.63',
      'total_weekly_charge': '7.33',
      'total_daily_liability': '5.23',
      'total_daily_charge': '1.05',
      'weekly_gross_income': '470.80',
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '470.80',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'annual_gross_income': '24,549.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '3',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 23',
      'effective_from': '19 Oct 23',
      'effective_to': '10 Dec 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '43.96',
      'total_weekly_charge': '8.79',
      'total_daily_liability': '6.28',
      'total_daily_charge': '1.26',
      'weekly_gross_income': '470.80',
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '470.80',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '24,549.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '4',
      'calc_reason': 'Service type changed',
      'perform_date': '25 Jul 23',
      'effective_from': '2 Jul 23',
      'effective_to': '18 Oct 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '44.77',
      'total_weekly_charge': '8.95',
      'total_daily_liability': '6.40',
      'total_daily_charge': '1.28',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'Current',
      'assessable_weekly_income': '479.45',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,000.00',
      'pension_info_source': 'HMRC/Current',
      'annual_gross_income': '25,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '5',
      'calc_reason': 'Income increased',
      'perform_date': '10 Mar 23',
      'effective_from': '5 Feb 23',
      'effective_to': '1 Jul 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '44.77',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '6.40',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'Current',
      'assessable_weekly_income': '479.45',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,000.00',
      'pension_info_source': 'HMRC/Current',
      'annual_gross_income': '25,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '6',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 22',
      'effective_from': '19 Oct 22',
      'effective_to': '4 Feb 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '39.40',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '5.63',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '421.92',
      'tax_year_hmrc': '6 April 2021 - 5 April 2022',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '421.92',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '22,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '7',
      'calc_reason': 'Off benefit',
      'perform_date': '6 Mar 22',
      'effective_from': '4 Mar 22',
      'effective_to': '18 Oct 22',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '57.30',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '8.19',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2020 - 5 April 2021',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '613.70',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,000.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '32,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '8',
      'calc_reason': 'Number of overnight stays increased',
      'perform_date': '14 Dec 21',
      'effective_from': '11 Dec 21',
      'effective_to': '03 Mar 22',
      'rate_applied_name': 'Flat',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2020 - 5 April 2021',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '0.00',
      'benefits_type': 'Universal Credit Full Service',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,000.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '32,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '9',
      'calc_reason': 'On benefit',
      'perform_date': '12 Dec 21',
      'effective_from': '2 Dec 21',
      'effective_to': '10 Dec 21',
      'rate_applied_name': 'Flat',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2020 - 5 April 2021',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '0.00',
      'benefits_type': 'Universal Credit Full Service',
      'partner_household:': 'No',
      'annual_pension_contrib': '3000.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '32,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '0',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '10',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 21',
      'effective_from': '19 Oct 21',
      'effective_to': '1 Dec 21',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '66.63',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '9.52',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2020 - 5 April 21',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '613.70',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,000.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '32,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '0',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '11',
      'calc_reason': 'Number of overnight stays increased',
      'perform_date': '1 Mar 21',
      'effective_from': '3 Jan 21',
      'effective_to': '18 Oct 21',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '58.30',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '8.33',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2020 - 5 April 2021',
      'income_info_source': 'Current',
      'assessable_weekly_income': '536.99',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC/Current',
      'annual_gross_income': '28,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '0',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '12',
      'calc_reason': 'Income increased',
      'calc_reason': 'Income increased',
      'perform_date': '28 Nov 20',
      'effective_from': '26 Nov 20',
      'effective_to': '2 Jan 21',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '16%',
      'total_weekly_liability': '63.12',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '9.02',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2020 - 5 April 2021',
      'income_info_source': 'Current',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'assessable_weekly_income': '536.99',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_gross_income': '28,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '0',
      'cifba': '0',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
          'child_name': 'Tatiana Oblonskaya',
          'dob': '21 Nov 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '12',
      'calc_reason': 'Initial',
      'perform_date': '25 Oct 20',
      'effective_from': '19 Oct 20',
      'effective_to': '25 Nov 20',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '16%',
      'total_weekly_liability': '52.60',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'annual_pension_contrib': '4,000.00',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '6 April 2019 - 5 April 2020',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '',
      'benefits_type': 'N/A',
      'partner_household:': 'No',
      'annual_gross_income': '20,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '0',
      'cifba': '0',
      'qualifying_children': [
        {
          'child_name': 'Lily Oblonskaya',
          'dob': '3 May 2016',
          'overnight_stays': '2',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'Tatiana Oblonskaya',
          'dob': '6 Aug 2020',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    }
  ]
};

