let counterChange = document.querySelector('h1#counter')
let count = parseInt(counterChange.textContent)
const getMinusButton = document.querySelector('button#minus')
const getPlusButton = document.querySelector('button#plus')
const getCommentSection = document.querySelector('div')
const getCommentAppended = getCommentSection.querySelector('div#list')
const getHeartButton = document.querySelector('button#heart')
const getPauseButton = document.querySelector('button#pause')




function getMinus() {
  getMinusButton.addEventListener('click', function () {
    counterChange.textContent = parseInt(counterChange.textContent) - 1
    count = parseInt(counterChange.textContent)
  })
}

function getPlus() {

  getPlusButton.addEventListener('click', function () {
    counterChange.textContent = parseInt(counterChange.textContent) + 1
    count = parseInt(counterChange.textContent)
  })
}

function counter() {
  count += 1
  counterChange.textContent = count
}


function getComment() {
  let getCommentInput = document.querySelector('form')
  getCommentSection.addEventListener('submit', function (e) {
    let getNewSubmission = getCommentSection.querySelector('input#comment-input')
    e.preventDefault()
    const p = document.createElement('p')
    p.textContent = getNewSubmission.value
    p.style.fontStyle = 'normal'
    getCommentAppended.appendChild(p)
    getCommentInput.reset()

  }
  )
}

function getHeart() {
  let liked = 0
  countClick = {
    "counter": count,
    "likes": liked
  }

  getHeartButton.addEventListener('click', function (e) {

    if (count === countClick["counter"]) {
      countClick["likes"] += 1
    } else {
      countClick["counter"] = count
      countClick["likes"] = 1
    }
    newPostBlurb = `${countClick["counter"]} has been liked ${countClick["likes"]} times`
    newUl = document.createElement('ul')
    likesSection = document.querySelector('ul.likes')
    newUl.textContent = newPostBlurb
    likesSection.appendChild(newUl)

  })
}




function getPause() {
  let t = setInterval(counter, 1000)

  getPauseButton.addEventListener('click', function (e) {

    if (getPlusButton.disabled !== false) {
      getPlusButton.disabled = false
      getMinusButton.disabled = false
      getHeartButton.disabled = false
      getPauseButton.textContent = 'pause'
      t = setInterval(counter, 1000)


    } else if (getPlusButton.disabled === false) {
      clearTimeout(t)
      getPlusButton.disabled = true
      getMinusButton.disabled = true
      getHeartButton.disabled = true
      getPauseButton.textContent = 'play'


    }
  })
}


function main() {
  getPlus()
  getMinus()
  getComment()
  getPause()
  getHeart()
}

main()