let downloadBtn = document.getElementById('downloadBtn'),
    videoLink = document.getElementById('videoLink'),
    showType = document.getElementById('showType'),
    options = document.getElementById('options'),
    errMsg = ['LINK KOI?','LINK DE!','SUDHU SUDHU KI DOWNLOAD KORBI?','MAAR KHABI!','NET SESH KORCHIS KENO!','KAAJ KOR!']

showType.src = './NULL.gif'

// videoLink.addEventListener('paste', () => {
//     if(videoLink.value == '') showType.src = './NULL.gif'
//     else showType.src = './SOME.gif'
// })

videoLink.addEventListener('keyup', () => {
    if(videoLink.value == '') showType.src = './NULL.gif'
    else showType.src = './SOME.gif'
})

downloadBtn.addEventListener('click',showOptions)

function showOptions(){
    if(videoLink.value == ''){
        let length = errMsg.length
        videoLink.setCustomValidity(errMsg[Math.floor(Math.random()*length)])
        videoLink.reportValidity()
        return
    }
    else{
        console.log(options.childElementCount)
        if(options.childElementCount == 0) showType.src = './SEARCH.gif'
        else showType.src = './NULL.gif'
    }
}