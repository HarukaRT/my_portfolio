(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const selectList = document.getElementById('selectList')

    selectList.addEventListener("change", (event) => {
      console.log(event);
      window.location.hash='page-intro';
    })

    let radio = []
    let panel = []
    for(let i=0; i<3; i++){
      radio[i] = $('.state').eq(i);
      panel[i] = $('.panel').eq(i);
    }

  });



})();


$('.state').change(function () {
    $(this).parent().find('.state').each(function () {
        if (this.checked) {
            $(this).attr('aria-selected', 'true');

        } else {
            $(this).removeAttr('aria-selected');
        }
    });
});
