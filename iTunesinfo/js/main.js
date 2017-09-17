$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
  	let searchText = $('#searchText').val();
  	getMusic(searchText);
    e.preventDefaut();
  });	
});

function getMusic(searchText){
   const COINDESK_URI = 'https://api.coindesk.com/v1/bpi/currentprice.json'

function receiveData(data) {
  const conversionData = data.bpi
  const coinData = document.getElementById('coin-data')

  for (const currency in conversionData) {
    const node = document.createElement('li')
    node.innerText = 'One bitcoin buys you ' + conversionData[currency].code + ' ' + conversionData[currency].rate
    coinData.append(node)
  }
}

function grabData() {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return
    console.log(JSON.parse(xhr.response))
  }

  xhr.open('GET', COINDESK_URI)
  xhr.send()
}

function init() {
  grabData()
}

init()
}