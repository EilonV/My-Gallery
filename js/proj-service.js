'use strict'
var gProjects = []




function createProjs() {

    var projects = [
        _createProj('minesweeper', 'Minesweeper','Minesweeper game', 'Classic Minesweeper game made from scratch with a fresh design'),
        _createProj('ball-board','Ball-Board','Collect game','Collect all the appearing balls on the board to win the game'),
        _createProj('touch-numbers','Touch-Nums','Clear all the numbers','Touch all the numbers in an ascending order to win')
    ]
    gProjects = projects
}

function _createProj(pId = 'Project name',pName = 'Project name', pTitle = 'project title', strDesc = 'project desc') {
    const project =
    {
        id: pId,
        name: pName,
        title: pTitle,
        desc: strDesc,
        url: `img/portfolio/${pId}-thumbnail.jpg`,
        urlFull: `img/portfolio/${pId}-full.jpg`,
        publishedAt: getTimeCreated(),
        labels: ["Label1", " Label2"]
    }
    return project
}

function getProjById(projId) {
    var foundProj = gProjects.find(proj => proj.id == projId)
    return foundProj
}
