'use strict'
var gStrProjects = ''
var gStrProjModal = ''
var gEmailDetails = ''
console.log('Starting up');



function initPage() {
    createProjs()
    renderPortfolio()
}

function renderPortfolio() {
    gProjects.forEach(proj => {
        gStrProjects += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a id="${proj.id}" class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal(this.id)">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x ${proj.id}"></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.url}" alt="${proj.id}.img">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`
    })
    $('.portfolio-projects').html(gStrProjects)
}


function renderModal(projName) {

    var projModal2Change = getProjById(projName)
    gStrProjModal = `
    <div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${projModal2Change.name}</h2>
                <p class="item-intro text-muted">${projModal2Change.title}</p>
                <img class="img-fluid d-block mx-auto" src="${projModal2Change.urlFull}" alt="${projModal2Change.name}.img">
                <p>${projModal2Change.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${formatDate(projModal2Change.publishedAt)}</li>
                  <li>Client: Explore</li>
                  <li>Category: ${projModal2Change.labels}</li>
                </ul>
                <div>
                <a href="https://eilonv.github.io/${projModal2Change.name}/" target="_blank">
                <button class="btn redirect" type="button">Check it out!</button>
                </a>
                </div>
                
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    $('.dynamic-portoflio-modal').html(gStrProjModal)
}

function getEmail(ev) {
    ev.preventDefault()
    var email = $('#email').val()
    var subject = $('#subject').val()
    var message = $('#message').val()
    var emailArr = [subject,message,email]
    gEmailDetails = emailArr
}

function sendEmail(ev){
    ev.preventDefault()
    getEmail(ev)
    console.log(gEmailDetails)
    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=nttbms@gmail.com&su=${gEmailDetails[0]}&body=${gEmailDetails[1]}&bcc=${gEmailDetails[2]}&tf=cm`)
    var form = $('form')
}