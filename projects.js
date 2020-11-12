document.addEventListener("DOMContentLoaded", () => {
  const proje = document.querySelector(".proje");

  let projects = [
    {
      tech: "vue",
      name: "weather app",
      code: "https://github.com/kebele/vue-weather",
      linkx: "https://vuehava.netlify.app/",
      icon: "vuejs",
      color: "#41B883",
      background : "info"
    },
    {
      tech: "html",
      name: "full page slider",
      code: "https://github.com/kebele/full_page_slider",
      linkx: "https://sliderx.kebele.vercel.app/",
      icon: "css3",
      color: "#00B2FF",
      background : "danger"
    },
    {
      tech: "vue",
      name: "translator",
      code: "https://github.com/kebele/vue_ceviri",
      linkx: "https://vueceviri.netlify.app/",
      icon: "vuejs",
      color: "#41B883",
      background : "info"
    },
    {
      tech: "js",
      name: "meal finder",
      code: "https://github.com/kebele/meal_finder",
      linkx: "https://kebelemealfinder.netlify.app/",
      icon: "js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "vue",
      name: "monster game",
      code: "https://github.com/kebele/vue_canavar_av-",
      linkx: "https://vuecanavar.netlify.app/",
      icon: "vuejs",
      color: "#41B883",
      background : "info"
    },   
    {
      tech: "react",
      name: "raul",
      code: "https://github.com/kebele/vue-weather",
      linkx: "https://vuehava.netlify.app/",
      icon: "react",
      color: "#61DBFB",
      background : "primary"
    },    
    {
      tech: "js",
      name: "todo with category",
      code: "https://github.com/kebele/to_do_march",
      linkx: "https://kebeletodo.netlify.app/",
      icon: "js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "react",
      name: "raul",
      code: "https://github.com/kebele/vue-weather",
      linkx: "https://vuehava.netlify.app/",
      icon: "react",
      color: "#61DBFB",
      background : "primary"
    },
    {
      tech: "html",
      name: "aim & shoot",
      code: "https://github.com/kebele/kursun",
      linkx: "https://kursun.netlify.app/",
      icon: "css3",
      color: "#00B2FF",
      background : "danger"
    },
    {
      tech: "js",
      name: "paint",
      code: "https://github.com/kebele/painty",
      linkx: "https://paintykebele.netlify.app/",
      icon: "js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "js",
      name: "snake",
      code: "https://github.com/kebele/snake",
      linkx: "https://kebelesnake.netlify.app/",
      icon: "js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "js",
      name: "breakout",
      code: "https://github.com/kebele/breakout",
      linkx: "https://kebelebreakout.netlify.app/",
      icon: "js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "js",
      name: "movie seat select",
      code: "https://github.com/kebele/koltuk-secimi",
      linkx: "https://kebelekoltuksecimi.netlify.app/",
      icon: "js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "react",
      name: "raul",
      code: "https://github.com/kebele/vue-weather",
      linkx: "https://vuehava.netlify.app/",
      icon: "react",
      color: "#61DBFB",
      background : "primary"
    },
    
  ];

  for (x of projects) {
    proje.innerHTML += `
    <div class="element-item ${x.tech} mx-auto col-sm-6 col-md-4 m-1 style="max-width : 18rem" >
    <div class="column card text-center text-dark ">
      <div class="card-header" style="background : ${x.color}">${x.name}</div>
        <div class="card-body">
          <div class="mb-2"><span style="color:${x.color}"><i class="fab fa-${x.icon} fa-4x"></i></span></div>
    <a class="btn btn-outline-info" href=${x.linkx} target="_blank"><i class="fas fa-external-link-alt"></i> see</a>
    <a class="btn btn-outline-success" href=${x.code} target="_blank"><i class="fab fa-github-alt"></i> code</a>
    </div>      
    </div>
    </div>
  </div>`;
  }
  //   <img class="img-fluid" src="${x.img}"/>

  var $grid2 = $(".grid2").isotope({
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
    $grid2.isotope({ filter: filterValue });
  });
});
