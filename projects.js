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
      background : "info",
      flip : "flip-left",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "full page slider",
      code: "https://github.com/kebele/full_page_slider",
      linkx: "https://sliderx.kebele.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "flip-down",
      inspire : "inspired"
    },
    {
      tech: "vue",
      name: "translator",
      code: "https://github.com/kebele/vue_ceviri",
      linkx: "https://vueceviri.netlify.app/",
      icon: "fab fa-vuejs",
      color: "#41B883",
      background : "info",
      flip : "flip-right",
      inspire : "inspired"
    },
    {
      tech: "react",
      name: "markdown preview",
      code: "https://github.com/kebele/markdown_react",
      linkx: "https://markdown-react.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary",
      flip : "flip-left",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "meal finder",
      code: "https://github.com/kebele/meal_finder",
      linkx: "https://kebelemealfinder.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "secondary",
      flip : "flip-up",
      inspire : "partially inspired"
    },
    {
      tech: "vue",
      name: "monster game",
      code: "https://github.com/kebele/vue_canavar_av-",
      linkx: "https://vuecanavar.netlify.app/",
      icon: "fab fa-vuejs",
      color: "#41B883",
      background : "info",
      flip : "zoom-in",
      inspire : "inspired"
    },   
    {
      tech: "react",
      name: "drum machine",
      code: "https://github.com/kebele/drum_machine",
      linkx: "https://drum-machinex.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary",
      flip : "fade-left",
      inspire : "inspired"
    },    
    {
      tech: "js",
      name: "todo",
      code: "https://github.com/kebele/to_do_march",
      linkx: "https://kebeletodo.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "secondary",
      flip : "flip-up",
      inspire : "inspired"
    },
    {
      tech: "react",
      name: "random quote",
      code: "https://github.com/kebele/machine-for-random-quote",
      linkx: "https://random-quote-ivory.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary",
      flip : "fade-up-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "aim & shoot",
      code: "https://github.com/kebele/kursun",
      linkx: "https://kursun.netlify.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "D3",
      name: "tree map",
      code: "https://github.com/kebele/treemap_D3",
      linkx: "https://treemap-d3.vercel.app/",
      icon: "fas fa-plus",
      color: "#e67e22",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "fcc project"
    }, 
    {
      tech: "js",
      name: "paint",
      code: "https://github.com/kebele/painty",
      linkx: "https://paintykebele.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "secondary",
      flip : "flip-up",
      inspire : "unique"
    },
    {
      tech: "js",
      name: "snake",
      code: "https://github.com/kebele/snake",
      linkx: "https://kebelesnake.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "secondary",
      flip : "flip-up",
      inspire : "mostly unique"
    },
    {
      tech: "react",
      name: "calculator",
      code: "https://github.com/kebele/calc_react",
      linkx: "https://calc-react-three.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary",
      flip : "flip-down",
      inspire : "partally inspired"
    },
    {
      tech: "js",
      name: "breakout",
      code: "https://github.com/kebele/breakout",
      linkx: "https://kebelebreakout.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "secondary",
      flip : "flip-up",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "movie seat select",
      code: "https://github.com/kebele/koltuk-secimi",
      linkx: "https://kebelekoltuksecimi.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "secondary",
      flip : "flip-up",
      inspire : "inspired"
    },
    {
      tech: "react",
      name: "pomodoro clock",
      code: "https://github.com/kebele/pomodoro",
      linkx: "https://pomodoro-dun.vercel.app/",
      icon: "fab fa-react",
      color: "#61DBFB",
      background : "primary",
      flip : "flip-up",
      inspire : "partially inspired"
    },
    {
      tech: "D3",
      name: "doping in bicycle",
      code: "https://github.com/kebele/doping-in-bicycle-sport",
      linkx: "https://doping-in-bicycle-sport.vercel.app/",
      icon: "fas fa-plus",
      color: "#e67e22",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "partially inspired"
    },
    {
      tech: "js",
      name: "wack a mole",
      code: "https://github.com/kebele/wack_a_mole",
      linkx: "https://kebelewackamole.netlify.app/",
      icon: "fab fa-js",
      color: "#2c3e50",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "weather 2",
      code: "https://github.com/kebele/weather",
      linkx: "https://kebeleweather.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "hangman",
      code: "https://github.com/kebele/adam_asmaca",
      linkx: "https://adamasma.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "exchange rates",
      code: "https://github.com/kebele/dovizkuru",
      linkx: "https://kebeledovizkuru.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "budget",
      code: "https://github.com/kebele/budget",
      linkx: "https://kebelebudget.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "music player",
      code: "https://github.com/kebele/music_player",
      linkx: "https://kebelemusicplayer.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "escape from boxes",
      code: "https://github.com/kebele/escape_the_boxes",
      linkx: "https://escapetheboxes.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "unique"
    },
    {
      tech: "js",
      name: "video player",
      code: "https://github.com/kebele/video_player",
      linkx: "https://kebelevideoplayer.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "mostly unique"
    },
    {
      tech: "js",
      name: "english sentences",
      code: "https://github.com/kebele/engSent",
      linkx: "https://engsent.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "mostly unique"
    },
    {
      tech: "js",
      name: "tap effects",
      code: "https://github.com/kebele/tapEffects",
      linkx: "https://tapeffects.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "mostly unique"
    },
    {
      tech: "js",
      name: "pong",
      code: "https://github.com/kebele/pongy",
      linkx: "https://pongy.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "english words",
      code: "https://github.com/kebele/engWords",
      linkx: "https://engwords.netlify.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "landing page x",
      code: "https://github.com/kebele/landingX",
      linkx: "https://landing-x.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "landing page y",
      code: "https://github.com/kebele/landingY",
      linkx: "https://landing-y.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "toggle sidebar",
      code: "https://github.com/kebele/toggle_sidebar",
      linkx: "https://toggle-sidebar.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "animate svg",
      code: "https://github.com/kebele/animate_svg2",
      linkx: "https://animate-svg2.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "animate svg",
      code: "https://github.com/kebele/food_inc",
      linkx: "https://food-inc.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "site w",
      code: "https://github.com/kebele/w2_bootstrap",
      linkx: "https://w2-lovat.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "site ws9",
      code: "https://github.com/kebele/ws_9",
      linkx: "https://ws-9-steel.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "vue",
      name: "kelimelik",
      code: "https://github.com/kebele/vue_kelimelik",
      linkx: "https://vue-kelimelik.vercel.app/",
      icon: "fab fa-vuejs",
      color: "#41B883",
      background : "info",
      flip : "zoom-in",
      inspire : "inspired"
    },   
    {
      tech: "vue",
      name: "vinstagram",
      code: "https://github.com/kebele/vue_instagram",
      linkx: "https://vue-instagram-k.vercel.app/",
      icon: "fab fa-vuejs",
      color: "#41B883",
      background : "info",
      flip : "zoom-in",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "jump-slide",
      code: "https://github.com/kebele/jump_slide",
      linkx: "https://jump-slide.vercel.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "inspired"
    },   
    {
      tech: "html",
      name: "4 dots",
      code: "https://github.com/kebele/4_dots",
      linkx: "https://4-dots.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "3d rotating images",
      code: "https://github.com/kebele/3D_rotating_img_glr",
      linkx: "https://3-d-rotating-img-glr.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "about progress bar",
      code: "https://github.com/kebele/about_progress",
      linkx: "https://about-progress.vercel.app/progress.html",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "D3",
      name: "choropleth map",
      code: "https://github.com/kebele/choropleth_map",
      linkx: "https://choropleth-map.vercel.app/",
      icon: "fas fa-plus",
      color: "#e67e22",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "fcc inspired"
    }, 
    {
      tech: "html",
      name: "clock",
      code: "https://github.com/kebele/clock",
      linkx: "https://clock-five.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "animated eyes",
      code: "https://github.com/kebele/animated-eyes",
      linkx: "https://animated-eyes.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "flashlight",
      code: "https://github.com/kebele/flashlight",
      linkx: "https://flashlight.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "box model",
      code: "https://github.com/kebele/resp_box_model",
      linkx: "https://resp-box-model.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "html",
      name: "rotating cube",
      code: "https://github.com/kebele/swiper_cube",
      linkx: "https://resp-box-model.vercel.app/",
      icon: "fab fa-css3",
      color: "#df4759",
      background : "danger",
      flip : "fade-down-right",
      inspire : "inspired"
    },
    {
      tech: "js",
      name: "dino game",
      code: "https://github.com/kebele/dino_game",
      linkx: "https://jump-slide.vercel.app/",
      icon: "fab fa-js",
      color: "#34495e",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "partially inspired"
    },
    {
      tech: "D3",
      name: "bar chart",
      code: "https://github.com/kebele/d3_vis_data",
      linkx: "https://d3-vis-data.vercel.app/",
      icon: "fas fa-plus",
      color: "#e67e22",
      background : "warning",
      flip : "zoom-in-down",
      inspire : "fcc project"
    }, 

  ];

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
