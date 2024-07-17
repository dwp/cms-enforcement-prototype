//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.0.2/dist/js/coreui.bundle.min.js" integrity="sha384-/lLdeDXcg75fFKvNaXc6K+P80Jk8U+1mKJUYqkLSxqr18HIUvJYVN42+m23Zbw4b" crossorigin="anonymous"></script>
})
const myDateRangePickerCustomRanges = document.getElementById('myDateRangePickerCustomRanges')
if (myDateRangePickerCustomRanges) {
  const optionsCustomRanges = {
    locale: 'en-US',
    ranges: {
      Today: [new Date(), new Date()],
      Yesterday: [
        new Date(new Date().setDate(new Date().getDate() - 1)),
        new Date(new Date().setDate(new Date().getDate() - 1))
      ],
      'Last 7 Days': [
        new Date(new Date().setDate(new Date().getDate() - 6)),
        new Date(new Date())
      ],
      'Last 30 Days': [
        new Date(new Date().setDate(new Date().getDate() - 29)),
        new Date(new Date())
      ],
      'This Month': [
        new Date(new Date().setDate(1)),
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
      ],
      'Last Month': [
        new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
        new Date(new Date().getFullYear(), new Date().getMonth(), 0)
      ]
    }
  }

  new coreui.DateRangePicker(myDateRangePickerCustomRanges, optionsCustomRanges)
}