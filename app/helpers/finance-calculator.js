function n(value) {
  return Number(value || 0)
}

function calculateFinanceSummary(finances, allCases) {

  // Finances figure needed for allocation
  const expectedCMFinances =
    n(finances.expected_child_maintenance)

  // Active paying cases
  const activePayingCases = allCases.filter(
    c => c.case_status === 'active' &&
      c.role === 'paying'
  )

  // Total children across all active paying cases
  const totalQualifyingChildren =
    activePayingCases.reduce(
      (sum, c) => sum + (c.qualifying_children?.length || 0),
      0
    )

  // Add allocated amount to each case
  const activePayingCasesWithAllocation =
    activePayingCases.map(c => {
      const allocatedExpectedCM =
        totalQualifyingChildren > 0
          ? (
            expectedCMFinances *
            (c.qualifying_children?.length || 0)
          ) / totalQualifyingChildren
          : 0

      const stillOwedCaseCM =
        allocatedExpectedCM -
        n(c.child_maintenance_paid)

      const stillOwedCaseCD =
        n(c.charges_debt_expected) -
        n(c.charges_debt_paid)

      return {
        ...c,

        allocatedExpectedCM,

        expectedCSADebt:
          n(c.expected_CSA_debt_parent),

        cashBalance:
          n(c.cash_balance),

        caseOverpayments:
          n(c.case_overpayments),

        caseOverpaymentsCharges:
          n(c.case_overpayments_charges),

        stillOwedCaseCM,

        stillOwedCaseCD,

        stillOwedCaseTotal:
          stillOwedCaseCM +
          stillOwedCaseCD
      }
    })

  const expectedCSADebtBreakdown =
    activePayingCasesWithAllocation
      .filter(c => n(c.expectedCSADebt) > 0)
      .map(c => ({
        caseId: c.case_id,
        otherParent: c.other_parent,
        amount: c.expectedCSADebt
  }))

  const totalCasesCashBalance =
    activePayingCasesWithAllocation.reduce(
      (sum, c) => sum + c.cashBalance,
      0
    )

  const totalCasesOverpayments =
    activePayingCasesWithAllocation.reduce(
      (sum, c) => sum + c.caseOverpayments,
      0
    )

  const totalCasesOverpaymentsCharges =
    activePayingCasesWithAllocation.reduce(
      (sum, c) => sum + c.caseOverpaymentsCharges,
      0
    )

  const totalOverpaymentsFinances =
    totalCasesOverpayments + totalCasesOverpaymentsCharges + totalCasesCashBalance

  const activePayingCount =
    activePayingCasesWithAllocation.length

  // Calculate total expected CM from from all case allocated CM
  const totalCasesExpectedCM =
    activePayingCasesWithAllocation.reduce(
      (sum, c) => sum + c.allocatedExpectedCM,
      0
    )

  const totalCasesExpectedCD = activePayingCases.reduce(
    (sum, c) => sum + n(c.charges_debt_expected),
    0
  )

  const totalCasesPaidCM = activePayingCases.reduce(
    (sum, c) => sum + n(c.child_maintenance_paid),
    0
  )

  const totalCasesPaidCD = activePayingCases.reduce(
    (sum, c) => sum + n(c.charges_debt_paid),
    0
  )

  const overpaymentsCM =
    n(finances.overpayments_child_maintenance)

  const overpaymentsCD =
    n(finances.overpayments_charges_debt)

  const totalOverpayments =
    overpaymentsCM + overpaymentsCD + totalCasesCashBalance

  const writtenOff =
    n(finances.written_off)

  const expectedCollCharges =
    n(finances.expected_collection_charges)

  const regularDeductionOrder =
    n(finances.regular_deduction_order)

  const lumpSumDeductionOrder =
    n(finances.lump_sum_deduction_order)

  const liabilityOrder =
    n(finances.liability_order)

  const deductionEarningsOrder =
    n(finances.deduction_from_earnings_order)

  const expectedEnforcementCharges =
    regularDeductionOrder +
    lumpSumDeductionOrder +
    liabilityOrder +
    deductionEarningsOrder

  const expectedEnforcementCost =
    n(finances.expected_enforcement_cost)

  // CSA debt
  const expectedCSADebtSOS =
    n(finances.expected_secretary_of_state)

  // Then calculate a total CSA amounts from cases + SOS debt
  const expectedCSADebt =
    activePayingCasesWithAllocation.reduce(
      (sum, c) => sum + c.expectedCSADebt,
      0
    ) + expectedCSADebtSOS

  const expectedDNACost =
    n(finances.expected_DNA_debt)

  const expectedSubjectAccessRequestCost =
    n(finances.expected_subject_access_request_cost)

  const expectedInterest =
    n(finances.expected_interest)

  const expectedFees =
    n(finances.expected_fees)

  const expectedJudRevCost =
    n(finances.expected_judicial_review_cost)

  const expectedAppealCost =
    n(finances.expected_appeal_cost)

  const expectedCMSAdminCost =
    n(finances.expected_cms_admin_cost)

  const expectedLiabOrderCost =
    n(finances.expected_liability_order_cost)

  const totalExpectedCDFinances =
    expectedCollCharges +
    expectedEnforcementCharges +
    expectedEnforcementCost +
    expectedCSADebt +
    expectedDNACost +
    expectedSubjectAccessRequestCost +
    expectedInterest +
    expectedFees +
    expectedJudRevCost +
    expectedAppealCost +
    expectedCMSAdminCost +
    expectedLiabOrderCost

  const totalExpectedFinances =
    expectedCMFinances + totalExpectedCDFinances + writtenOff

  const totalPaidFinances =
    totalCasesPaidCM + totalCasesPaidCD + totalCasesCashBalance

  const stillOwedCMFinances =
    expectedCMFinances - totalCasesPaidCM

  const stillOwedCDFinances =
    totalExpectedCDFinances - totalCasesPaidCD

  const stillOwedTotalFinances =
    stillOwedCMFinances + stillOwedCDFinances

  const activeCount = allCases.filter(
    c => c.case_status === 'active'
  ).length

  const closedCount = allCases.filter(
    c => c.case_status === 'closed'
  ).length


  // make variables available on the page nunjucks templates
  return {
    activeCount,
    activePayingCases: activePayingCasesWithAllocation,
    activePayingCount,
    closedCount,
    deductionEarningsOrder,
    expectedAppealCost,
    expectedCMFinances,
    expectedCMSAdminCost,
    expectedCollCharges,
    expectedCSADebt,
    expectedCSADebtBreakdown,
    expectedCSADebtSOS,
    expectedDNACost,
    expectedEnforcementCharges,
    expectedEnforcementCost,
    expectedFees,
    expectedInterest,
    expectedJudRevCost,
    expectedLiabOrderCost,
    expectedSubjectAccessRequestCost,
    liabilityOrder,
    lumpSumDeductionOrder,
    overpaymentsCM,
    overpaymentsCD,
    regularDeductionOrder,
    stillOwedCDFinances,
    stillOwedCMFinances,
    stillOwedTotalFinances,
    totalCasesCashBalance,
    totalCasesExpectedCD,
    totalCasesExpectedCM,
    totalCasesOverpayments,
    totalCasesOverpaymentsCharges,
    totalCasesPaidCD,
    totalCasesPaidCM,
    totalExpectedCDFinances,
    totalExpectedFinances,
    totalOverpayments,
    totalOverpaymentsFinances,
    totalPaidFinances,
    totalQualifyingChildren,
    writtenOff
  }
}

module.exports = calculateFinanceSummary