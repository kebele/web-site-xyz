document.addEventListener("DOMContentLoaded", () => {
    const certificate = document.querySelector(".certificate");
  
    let certificates = [
      {
          name : "111",
          img : "certs/responsive_web_design.png",
      },
      {
          name : "111",
          img : "certs/javascript_algorithms_n_data_structures.png",
      },
      {
          name : "111",
          img : "certs/front_end_libraries.png",
      },
      {
          name : "111",
          img : "certs/20_web_projects_kebele.jpg",
      },
      {
          name : "111",
          img : "certs/data_visualization.png",
      },
      {
          name : "111",
          img : "certs/vuejs_certificate_kebele.jpg",
      },
      {
          name : "111",
          img : "certs/nuxtjs.jpg",
      },
      
    ];
  
    for (x of certificates) {
      certificate.innerHTML += 
      `
      <div class="col-md-4 col-sm-6 col-xs-12 web">
      
          
              <img src="${x.img}" class="card-img-top" alt="xxx">
          
          
      
  </div>
      `;
    }
    //   <img class="img-fluid" src="${x.img}"/>
  
    var $certi = $(".certi").isotope({
      itemSelector: ".element-item",
      layoutMode: "fitRows",
      getSortData: {},
    });
  
    // filter functions
    var filterFns = {};
  
    // bind filter button click
    $("#filters").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $certi.isotope({ filter: filterValue });
    });
  });
  