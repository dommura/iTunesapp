const ITUNES_URI = 'https://itunes.apple.com/search?country=NL'

function receiveData(data) {
  const mike = getElementById('music') 
  console.log(data)
}

function searchForTerm(term) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return
    receiveData(JSON.parse(xhr.response))
  }

  xhr.open('GET', ITUNES_URI + '&term=' + term)
  xhr.send()
}

function doSearch(event) {
  if (event.charCode === 13) {
    event.preventDefault()
    searchForTerm(event.target.value)
  }
}

function init() {
  const inputBox = document.getElementById('searchText')
  inputBox.addEventListener('keypress', doSearch, false)
}

init()