document.addEventListener("DOMContentLoaded", () => {
  const proje = document.querySelector(".proje");  

  for (x of projects) {
    proje.innerHTML += 
    `
    <div class="element-item pro ${x.tech}">
      <p class="name">${x.name}</p>
      <p class="symbol" style="color:${x.color}"><i class="${x.icon}"></i></p>
      <p class="weight"><a href="${x.code}" target="_blank">code</a></p>    
      <p class="number"><a href="${x.linkx}" target="_blank">go</a></p>
      <p class="info tooltip"><i class="fas fa-info"></i><span class="tooltiptext">${x.inspire}</span></p> 
    </div>`
  }
  //   <img class="img-fluid" src="${x.img}"/>

   var $grid2 = $(".grid2").isotope({
    // itemSelector: ".element-item",
    // layoutMode: "fitRows",
    // getSortData: {},
    itemSelector: ".element-item",
    masonry: {
      columnWidth : 1,
      isFitWidth: true
    }
  });

  // filter functions
  var filterFns = {};

  // bind filter button click
  $("#filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid2.isotope({ filter: filterValue });

    $(this).siblings().removeClass('activex')
    $(this).addClass('activex');
  });
});
