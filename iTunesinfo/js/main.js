$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
  	let searchText = $('#searchText').val();
  	getMusic(searchText);
    e.preventDefaut();
  });	
});

function getMusic(searchText){
   axios.get('https://itunes.apple.com/search?parameterkeyvalue');
}