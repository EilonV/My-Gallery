'use strict'
var gStrProjects = ''

console.log('Starting up');
renderPortfolio()

function renderPortfolio() {
    gProjects.forEach(proj => {
        gStrProjects += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x ${proj.id}"></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.url}" alt="${proj.id}.img">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.desc}</p>
        </div>
      </div>`
    })
    $('.portfolio-projects').html(gStrProjects)
}


// (
//   `<div class="col-md-4 col-sm-6 portfolio-item">
//     <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
//       <div class="portfolio-hover">
//         <div class="portfolio-hover-content">
//           <i class="fa fa-plus fa-3x"></i>
//         </div>
//       </div>
//       <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
//     </a>
//     <div class="portfolio-caption">
//       <h4>Threads</h4>
//       <p class="text-muted">Illustration</p>
//     </div>
//   </div>`
  
// )
    
