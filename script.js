// document.querySelector('.btn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the form from submitting
//     const searchOption = document.getElementById('search_option').value;
//     const searchQuery = document.getElementById('search_query').value;
//     console.log('Search By:', searchOption);
//     console.log('Search Query:', searchQuery);
//     // Perform your search operation here based on the selected option and query
// });
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput.value.toLowerCase();

    // Filter the auction data based on the search query
    const filteredAuctionData = auctionData.filter(item => {
        return item.title.toLowerCase().includes(searchQuery) ||
               item.artist.toLowerCase().includes(searchQuery);
    });

    // Update the auction display with the filtered data
    displayAuctionData(filteredAuctionData);
}
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    handleSearch();
});