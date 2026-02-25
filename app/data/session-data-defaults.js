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
  'calc_details': [
    {
      'reason_index': '0',
      'reason': 'Annual review',
      'perform_date': '19 Oct 2024',
      'effective_from': '19 Oct 2024',
      'effective_to': '19 Oct 2025',
      'rate_applied_name': 'Basic Plus',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '241.36',
      'total_weekly_charge': '36.61',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '1,342.47',
      'benefits_type': 'None',
      'partner_household:': 'None',
      'annual_pension_contrib': '110.00',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '6 April 2023 - 5 April 2024',
      'annual_gross_income': '20,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'John Oblonsky',
          'dob': '3 May 2016',
          'overnight_stays': '1',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'James Oblonsky',
          'dob': '6 Aug 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '1',
      'reason': 'Number of overnight stays increased',
      'perform_date': '20 Dec 23',
      'effective_from': '11 Dec 23',
      'effective_to': '18 Oct 24',
      'rate_applied_name': '383.56',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '127.02',
      'total_weekly_charge': '25.40',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '1,342.47',
      'benefits_type': 'Jobseekers allowance',
      'partner_household:': 'No',
      'annual_pension_contrib': '120.00',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '20,000.00',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '1',
      'qualifying_children': [
        {
          'child_name': 'John Oblonsky',
          'dob': '3 May 2016',
          'overnight_stays': '1',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'James Oblonsky',
          'dob': '6 Aug 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '2',
      'reason': 'Annual review',
      'perform_date': '27 Oct 23',
      'effective_from': '19 Oct 23',
      'effective_to': '10 Dec 23',
      'rate_applied_name': 'Basic Plus',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '136.79',
      'total_weekly_charge': '27.36',
      'total_daily_liability': '19.54',
      'total_daily_charge': '3.90',
      'assessable_weekly_income': '911.93',
      'benefits_type': 'Universal credit',
      'partner_household:': 'Yes',
      'annual_pension_contrib': '90.00',
      'income_info_source': 'NRP',
      'weekly_gross_income': '303.80',
      'tax_year_hmrc': '',
      'annual_gross_income': '15,841',
      'foreign_exchange_cost': '0.00',
      'special_circs': 'None',
      'roc': '2',
      'cifba': '0',
      'qualifying_children': [
        {
          'child_name': 'John Oblonsky',
          'dob': '3 May 2016',
          'overnight_stays': '1',
          'local_auth_stays': '0'
        },
        {
          'child_name': 'James Oblonsky',
          'dob': '6 Aug 2022',
          'overnight_stays': '0',
          'local_auth_stays': '0'
        }
      ]
    },
    {
      'reason_index': '3',
      'reason': 'Service type changed',
      'perform_date': '27 Oct 23',
      'effective_from': '2 Jul 23',
      'effective_to': '18 Oct 23',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '133.49',
      'total_weekly_charge': '26.70',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '345.21',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '4',
      'reason': 'Income increased',
      'perform_date': '25 Oct 24',
      'effective_from': '05 Feb 23',
      'effective_to': '01 Jul 23',
      'rate_applied_name': 'Basic Plus',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '133.49',
      'total_weekly_charge': '26.77',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '345.21',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '5',
      'reason': 'Annual review',
      'perform_date': '20 Oct 24',
      'effective_from': '19 Oct 22',
      'effective_to': '04 Feb 23',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '128.54',
      'total_weekly_charge': '24.79',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '287.67',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '6',
      'reason': 'Off benefit',
      'perform_date': '06 march 24',
      'effective_from': '04 Mar 22',
      'effective_to': '18 Oct 22',
      'rate_applied_name': 'Basic Plus',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '7',
      'reason': 'Number of children living with you increased',
      'perform_date': '14 Dec 21',
      'effective_from': '11 Dec 21',
      'effective_to': '03 Mar 22',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '8',
      'reason': 'on benefit',
      'perform_date': '12 Dec 22',
      'effective_from': '02 Dec 21',
      'effective_to': '10 Dec 21',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '9',
      'reason': 'Annual review',
      'perform_date': '20 Oct 21',
      'effective_from': '19 Oct 21',
      'effective_to': '01 Dec 21',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '10',
      'reason': 'Variation increased',
      'perform_date': '19 Oct 21',
      'effective_from': '03 Jan 21',
      'effective_to': '18 Oct 21',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '11',
      'reason': 'Variation increased',
      'perform_date': '19 Oct 21',
      'effective_from': '03 Jan 21',
      'effective_to': '18 Oct 21',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '12',
      'reason': 'Income increased',
      'perform_date': '28 Nov 20',
      'effective_from': '26 Nov 20',
      'effective_to': '02 Jan 21',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    },
    {
      'reason_index': '13',
      'reason': 'First calculation',
      'perform_date': '25 Oct 20',
      'effective_from': '19 Oct 20',
      'effective_to': '25 Nov 20',
      'rate_applied_name': '',
      'rate_applied_percentage': '15%',
      'total_weekly_liability': '',
      'total_weekly_charge': '',
      'total_daily_liability': '34.48',
      'total_daily_charge': '5.23',
      'assessable_weekly_income': '',
      'benefits_type': '',
      'partner_household:': '',
      'annual_pension_contrib': '',
      'income_info_source': 'HMRC',
      'pension_info_source': 'HMRC',
      'weekly_gross_income': '383.56',
      'tax_year_hmrc': '',
      'annual_gross_income': '',
      'foreign_exchange_cost': '',
      'special_circs': '',
      'roc': '',
      'cifba': '',
      'qualifying_children': [
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        },
        {
          'child_name': '',
          'dob': '',
          'overnight_stays': '',
          'local_auth_stays': ''
        }
      ]
    }
  ],
'multicase': {
  'all_cases': '5'
},
'receiving_parent_1': {

  'other_parent': 'false',
    'case_id': 'false',
      'case_type': 'false',
        'effective_from': '8 December 2014',
          'effective_to': 'false'
},
'receiving_parent_2': {
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
'receiving_parent_3': {
  'other_parent': 'Ruth Slater',
    'case_id': '1-2345703',
      'case_type': 'Arrears only',
        'effective_from': '21 December 2016',
          'effective_to': '6 May 2025'
}
};

