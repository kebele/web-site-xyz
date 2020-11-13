document.addEventListener("DOMContentLoaded", () => {
  const proje = document.querySelector(".proje");

  let projects = [
    {
      tech: "vue",
      name: "weather app",
      code: "https://github.com/kebele/vue-weather",
      linkx: "https://vuehava.netlify.app/",
      icon: "fab fa-vuejs",
      color: "#41B883",
      background : "info"
    },
    {
      tech: "html",
      name: "full page slider",
      code: "https://github.com/kebele/full_page_slider",
      linkx: "https://sliderx.kebele.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger"
    },
    {
      tech: "vue",
      name: "translator",
      code: "https://github.com/kebele/vue_ceviri",
      linkx: "https://vueceviri.netlify.app/",
      icon: "fab fa-vuejs",
      color: "#41B883",
      background : "info"
    },
    {
      tech: "react",
      name: "markdown preview",
      code: "https://github.com/kebele/markdown_react",
      linkx: "https://markdown-react.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary"
    },
    {
      tech: "js",
      name: "meal finder",
      code: "https://github.com/kebele/meal_finder",
      linkx: "https://kebelemealfinder.netlify.app/",
      icon: "fab fa-js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "vue",
      name: "monster game",
      code: "https://github.com/kebele/vue_canavar_av-",
      linkx: "https://vuecanavar.netlify.app/",
      icon: "fab fa-vuejs",
      color: "#41B883",
      background : "info"
    },   
    {
      tech: "react",
      name: "drum machine",
      code: "https://github.com/kebele/drum_machine",
      linkx: "https://drum-machinex.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary"
    },    
    {
      tech: "js",
      name: "todo with category",
      code: "https://github.com/kebele/to_do_march",
      linkx: "https://kebeletodo.netlify.app/",
      icon: "fab fa-js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "react",
      name: "random quote machine",
      code: "https://github.com/kebele/machine-for-random-quote",
      linkx: "https://random-quote-ivory.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary"
    },
    {
      tech: "html",
      name: "aim & shoot",
      code: "https://github.com/kebele/kursun",
      linkx: "https://kursun.netlify.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger"
    },
    {
      tech: "js",
      name: "paint",
      code: "https://github.com/kebele/painty",
      linkx: "https://paintykebele.netlify.app/",
      icon: "fab fa-js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "js",
      name: "snake",
      code: "https://github.com/kebele/snake",
      linkx: "https://kebelesnake.netlify.app/",
      icon: "fab fa-js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "react",
      name: "calculator",
      code: "https://github.com/kebele/calc_react",
      linkx: "https://calc-react-three.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary"
    },
    {
      tech: "js",
      name: "breakout",
      code: "https://github.com/kebele/breakout",
      linkx: "https://kebelebreakout.netlify.app/",
      icon: "fab fa-js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "js",
      name: "movie seat select",
      code: "https://github.com/kebele/koltuk-secimi",
      linkx: "https://kebelekoltuksecimi.netlify.app/",
      icon: "fab fa-js",
      color: "#f0db4f",
      background : "secondary"
    },
    {
      tech: "react",
      name: "pomodoro clock",
      code: "https://github.com/kebele/pomodoro",
      linkx: "https://pomodoro-dun.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary"
    },
    {
      tech: "d3",
      name: "doping in bicycle",
      code: "https://github.com/kebele/doping-in-bicycle-sport",
      linkx: "https://doping-in-bicycle-sport.vercel.app/",
      icon: "fas fa-plus",
      color: "#ffc107",
      background : "warning"
    },
    
  ];

  for (x of projects) {
    proje.innerHTML += `
    <div class="element-item ${x.tech} mx-auto col-md-4 col-sm-6 col-xs-6 m-1">
    <div class="column card text-center text-dark ">
      <div class="card-header" style="background : ${x.color}">${x.name}</div>
        <div class="card-body">
          <div class="mb-2"><span style="color:${x.color}"><i class="${x.icon} fa-4x"></i></span></div>
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
