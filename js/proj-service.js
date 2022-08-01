'use strict'
var gProjects = []

_createProjs()


function _createProjs() {

    var projects = [
        _createProj('minesweeper','minesweeper','Sweepin\' mines'),
        _createProj('ball-board'),
        _createProj()
    ]
    gProjects = projects
}

function _createProj(pId = 'Project name', pTitle = 'project title', strDesc = 'project desc') {
    const project =
    {
        id: pId,
        name: pId.charAt(0).toUpperCase() + pId.slice(1),
        title: pTitle,
        desc: strDesc,
        url: `img/portfolio/${pId}-thumbnail.jpg`,
        publishedAt: getTimeCreated(),
        labels: ["Label1", "Label2"]
    }
    return project
}


// { id: "sokoban", name: "Sokoban", title: "Better push those boxes", desc: "lorem ipsum lorem ipsum lorem ipsum", url: "projs/sokoban", publishedAt: 1448693940000, labels: ("Matrixes", "keyboard events"], 1, 
