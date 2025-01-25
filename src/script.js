document.getElementById('cropForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cropName = document.getElementById('cropName').value;
    const cropQuantity = document.getElementById('cropQuantity').value;

    if (cropName && cropQuantity) {
        addCropToList(cropName, cropQuantity);

        document.getElementById('cropForm').reset();
    }
});

function searchSite() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let content = document.getElementById('content').getElementsByTagName('p');

    for (let i = 0; i < content.length; i++) {
        let paragraph = content[i];
        if (paragraph.innerHTML.toLowerCase().includes(input)) {
            paragraph.style.display = "";
        } else {
            paragraph.style.display = "none";
        }
    }
}
