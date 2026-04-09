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
      'benefits_type': 'None',
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
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '515,47',
      'benefits_type': 'None',
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
      'perform_date': '26 Dec 24',
      'effective_from': '12 Feb 24',
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
      'benefits_type': 'None',
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
      'calc_reason': 'Shared care',
      'perform_date': '19 Oct 24',
      'effective_from': '21 Nov 23',
      'effective_to': '11 Feb 24',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '35.11',
      'total_weekly_charge': '7.02',
      'total_daily_liability': '5.01',
      'total_daily_charge': '1.00',
      'weekly_gross_income': '470.80',
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '470.80',
      'benefits_type': 'None',
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
          'overnight_stays': '2',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '4',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 23',
      'effective_from': '19 Oct 23',
      'effective_to': '20 Nov 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '41.02',
      'total_weekly_charge': '8.20',
      'total_daily_liability': '5.86',
      'total_daily_charge': '1.17',
      'weekly_gross_income': '470.80',
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '470.80',
      'benefits_type': 'None',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '5',
      'calc_reason': 'Service type changed',
      'perform_date': '25 Jul 23',
      'effective_from': '2 Jul 23',
      'effective_to': '18 Oct 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '44.77',
      'total_weekly_charge': '8.95',
      'total_daily_liability': '6.39',
      'total_daily_charge': '1.27',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2022 - 5 April 2023',
      'income_info_source': 'Current',
      'assessable_weekly_income': '479.45',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '6',
      'calc_reason': 'Income increased',
      'perform_date': '10 Mar 23',
      'effective_from': '5 Feb 23',
      'effective_to': '1 Jul 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2021 - 5 April 2022',
      'income_info_source': 'Current',
      'assessable_weekly_income': '479.45',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '7',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 22',
      'effective_from': '19 Oct 22',
      'effective_to': '4 Feb 23',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '421.92',
      'tax_year_hmrc': '6 April 2020 - 5 April 2021',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '421.92',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '8',
      'calc_reason': 'Off benefit',
      'perform_date': '6 Mar 22',
      'effective_from': '4 Mar 22',
      'effective_to': '18 Oct 22',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2020 - 5 April 2021',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '613.70',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '9',
      'calc_reason': 'Shared care',
      'perform_date': '14 Dec 21',
      'effective_from': '11 Dec 21',
      'effective_to': '3 Mar 22',
      'rate_applied_name': 'Flat',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2019 - 5 April 2020',
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
        }
      ]
    },
    {
      'reason_index': '10',
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
      'tax_year_hmrc': '6 April 2019 - 5 April 2020',
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
        }
      ]
    },
    {
      'reason_index': '11',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 21',
      'effective_from': '19 Oct 21',
      'effective_to': '1 Dec 21',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2019 - 5 April 2020',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '613.70',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '12',
      'calc_reason': 'Shared care',
      'perform_date': '1 Mar 21',
      'effective_from': '3 Jan 21',
      'effective_to': '18 Oct 21',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2019 - 5 April 2020',
      'income_info_source': 'Current',
      'assessable_weekly_income': '536.99',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '13',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 20',
      'effective_from': '19 Oct 20',
      'effective_to': '2 Jan 20',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '515.47',
      'tax_year_hmrc': '6 April 2019 - 5 April 2020',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '515,47',
      'benefits_type': 'None',
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
      'reason_index': '14',
      'calc_reason': 'Shared care',
      'perform_date': '16 Jun 21',
      'effective_from': '8 Jun 20',
      'effective_to': '18 Oct 20',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '470.80',
      'tax_year_hmrc': '6 April 2019 - 5 April 2020',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '470.80',
      'benefits_type': 'None',
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
      'reason_index': '15',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 19',
      'effective_from': '19 Oct 19',
      'effective_to': '7 Jun 20',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '470.80',
      'tax_year_hmrc': '6 April 2018 - 5 April 2019',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '470.80',
      'benefits_type': 'None',
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
          'overnight_stays': '2',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '16',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 18',
      'effective_from': '19 Oct 18',
      'effective_to': '18 Oct 19',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '470.80',
      'tax_year_hmrc': '6 April 2017 - 5 April 2018',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '470.80',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '17',
      'calc_reason': 'Service type changed',
      'perform_date': '25 Jul 18',
      'effective_from': '2 Jul 18',
      'effective_to': '18 Oct 18',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '698.45',
      'tax_year_hmrc': '6 April 2017 - 5 April 2018',
      'income_info_source': 'Current',
      'assessable_weekly_income': '698.45',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,110.00',
      'pension_info_source': 'HMRC/Current',
      'annual_gross_income': '34,000.00',
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
        }
      ]
    },
    {
      'reason_index': '18',
      'calc_reason': 'Income increased',
      'perform_date': '10 Mar 18',
      'effective_from': '5 Feb 18',
      'effective_to': '1 Jul 18',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '44.77',
      'total_weekly_charge': '8.95',
      'total_daily_liability': '6.39',
      'total_daily_charge': '1.27',
      'weekly_gross_income': '698.45',
      'tax_year_hmrc': '6 April 2016 - 5 April 2017',
      'income_info_source': 'Current',
      'assessable_weekly_income': '698.45',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,110.00',
      'pension_info_source': 'HMRC/Current',
      'annual_gross_income': '34,000.00',
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
        }
      ]
    },
    {
      'reason_index': '19',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 17',
      'effective_from': '19 Oct 17',
      'effective_to': '4 Feb 18',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '66.63',
      'total_weekly_charge': '13.32',
      'total_daily_liability': '9.51',
      'total_daily_charge': '1.90',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2016 - 5 April 2017',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '671.23',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,050.00',
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
        }
      ]
    },
    {
      'reason_index': '20',
      'calc_reason': 'Off benefit',
      'perform_date': '26 Aug 17',
      'effective_from': '4 Aug 17',
      'effective_to': '18 Oct 17',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '66.63',
      'total_weekly_charge': '13.32',
      'total_daily_liability': '9.51',
      'total_daily_charge': '1.90',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2016 - 5 April 2017',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '613.70',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,050.00',
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
        }
      ]
    },
    {
      'reason_index': '21',
      'calc_reason': 'Shared care',
      'perform_date': '11 May 17',
      'effective_from': '11 May 17',
      'effective_to': '3 Aug 17',
      'rate_applied_name': 'Flat',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '0.00',
      'tax_year_hmrc': '6 April 2016 - 5 April 2017',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '0.00',
      'benefits_type': 'Universal Credit Full Service',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '0.00',
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
      'reason_index': '22',
      'calc_reason': 'On benefit',
      'perform_date': '19 Apr 17',
      'effective_from': '5 Apr 17',
      'effective_to': '10 May 17',
      'rate_applied_name': 'Flat',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '0.00',
      'total_weekly_charge': '0.00',
      'total_daily_liability': '0.00',
      'total_daily_charge': '0.00',
      'weekly_gross_income': '0.00',
      'tax_year_hmrc': '6 April 2015 - 5 April 2016',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '0.00',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '0.00',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '23',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 16',
      'effective_from': '19 Oct 16',
      'effective_to': '4 Apr 17',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '66.63',
      'total_weekly_charge': '13.32',
      'total_daily_liability': '9.51',
      'total_daily_charge': '1.90',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2015 - 5 April 16',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '613.70',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,050.00',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '24',
      'calc_reason': 'Shared care',
      'perform_date': '1 Mar 15',
      'effective_from': '13 Feb 15',
      'effective_to': '19 Oct 16',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '58.30',
      'total_weekly_charge': '11.66',
      'total_daily_liability': '8.32',
      'total_daily_charge': '1.66',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2013 - 5 April 2014',
      'income_info_source': 'Current',
      'assessable_weekly_income': '536.99',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,050.00',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '25',
      'calc_reason': 'Income increased',
      'perform_date': '28 Dec 15',
      'effective_from': '16 Dec 15',
      'effective_to': '12 Feb 15',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '16%',
      'total_weekly_liability': '63.12',
      'total_weekly_charge': '12.62',
      'total_daily_liability': '9.01',
      'total_daily_charge': '1.80',
      'weekly_gross_income': '536.99',
      'tax_year_hmrc': '6 April 2014 - 5 April 2015',
      'income_info_source': 'Current',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'assessable_weekly_income': '536.99',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '26',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 15',
      'effective_from': '19 Oct 15',
      'effective_to': '15 Dec 15',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '66.63',
      'total_weekly_charge': '13.32',
      'total_daily_liability': '9.51',
      'total_daily_charge': '1.90',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2014 - 5 April 15',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '613.70',
      'benefits_type': 'None',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '27',
      'calc_reason': 'Shared care',
      'perform_date': '28 Sep 15',
      'effective_from': '2 Sep 15',
      'effective_to': '18 Oct 15',
      'rate_applied_name': 'Flat',
      'rate_applied_percentage': '0%',
      'total_weekly_liability': '52.60',
      'total_weekly_charge': '10.52',
      'total_daily_liability': '7.51',
      'total_daily_charge': '1.50',
      'weekly_gross_income': '671.23',
      'tax_year_hmrc': '6 April 2014 - 5 April 2015',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },{
      'reason_index': '28',
      'calc_reason': 'Income increased',
      'perform_date': '28 Nov 14',
      'effective_from': '26 Nov 14',
      'effective_to': '1 Sep 15',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '16%',
      'total_weekly_liability': '61.02',
      'total_weekly_charge': '12.20',
      'total_daily_liability': '8.71',
      'total_daily_charge': '1.74',
      'weekly_gross_income': '513.56',
      'tax_year_hmrc': '6 April 2013 - 5 April 2014',
      'income_info_source': 'Current',
      'annual_pension_contrib': '3,020.00',
      'pension_info_source': 'HMRC',
      'assessable_weekly_income': '513.56',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_gross_income': '31,000.00',
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
        }
      ]
    },
    {
      'reason_index': '29',
      'calc_reason': 'Annual review',
      'perform_date': '19 Oct 13',
      'effective_from': '19 Oct 13',
      'effective_to': '25 Nov 14',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '52.60',
      'total_weekly_charge': '10.52',
      'total_daily_liability': '7.51',
      'total_daily_charge': '1.50',
      'weekly_gross_income': '483.56',
      'tax_year_hmrc': '6 April 2012 - 5 April 13',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '483.56',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '3,000.00',
      'pension_info_source': 'HMRC',
      'annual_gross_income': '30,000.00',
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
        }
      ]
    },
    {
      'reason_index': '30',
      'calc_reason': 'Shared care',
      'perform_date': '1 Mar 14',
      'effective_from': '23 May 13',
      'effective_to': '18 Oct 13',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '52.60',
      'total_weekly_charge': '10.52',
      'total_daily_liability': '7.51',
      'total_daily_charge': '1.50',
      'weekly_gross_income': '483.56',
      'tax_year_hmrc': '6 April 2012 - 5 April 2013',
      'income_info_source': 'Current',
      'assessable_weekly_income': '483.56',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC/Current',
      'annual_gross_income': '30,000.00',
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
        }
      ]
    },
    {
      'reason_index': '31',
      'calc_reason': 'Income increased',
      'perform_date': '19 Feb 13',
      'effective_from': '19 Feb 13',
      'effective_to': '22 May 13',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '16%',
      'total_weekly_liability': '62.60',
      'total_weekly_charge': '12.52',
      'total_daily_liability': '8.94',
      'total_daily_charge': '1.78',
      'annual_pension_contrib': '4,000.00',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '483.56',
      'tax_year_hmrc': '6 April 2011 - 5 April 2012',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '',
      'benefits_type': 'None',
      'partner_household:': 'No',
      'annual_gross_income': '30,000.00',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '32',
      'calc_reason': 'Shared care',
      'perform_date': '11 Dec 12',
      'effective_from': '4 Dec 12',
      'effective_to': '18 Feb 13',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '19%',
      'total_weekly_liability': '58.30',
      'total_weekly_charge': '11.66',
      'total_daily_liability': '8.32',
      'total_daily_charge': '1.66',
      'weekly_gross_income': '436.99',
      'tax_year_hmrc': '6 April 2011 - 5 April 2012',
      'income_info_source': 'Current',
      'assessable_weekly_income': '436.99',
      'benefits_type': 'None',
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
          'overnight_stays': '1',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '33',
      'calc_reason': 'Income increased',
      'perform_date': '26 Nov 12',
      'effective_from': '26 Nov 12',
      'effective_to': '3 Dec 12',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '16%',
      'total_weekly_liability': '63.12',
      'total_weekly_charge': '12.62',
      'total_daily_liability': '9.01',
      'total_daily_charge': '1.80',
      'weekly_gross_income': '436.99',
      'tax_year_hmrc': '6 April 2011 - 5 April 2012',
      'income_info_source': 'Current',
      'annual_pension_contrib': '0.00',
      'pension_info_source': 'HMRC',
      'assessable_weekly_income': '436.99',
      'benefits_type': 'None',
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
        }
      ]
    },
    {
      'reason_index': '34',
      'calc_reason': 'Initial',
      'perform_date': '19 Oct 12',
      'effective_from': '19 Oct 12',
      'effective_to': '25 Nov 12',
      'rate_applied_name': 'Basic',
      'rate_applied_percentage': '16%',
      'total_weekly_liability': '52.60',
      'total_weekly_charge': '10.52',
      'total_daily_liability': '7.518',
      'total_daily_charge': '1.50',
      'annual_pension_contrib': '4,000.00',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '6 April 2011 - 5 April 2012',
      'income_info_source': 'HMRC',
      'assessable_weekly_income': '',
      'benefits_type': 'None',
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

