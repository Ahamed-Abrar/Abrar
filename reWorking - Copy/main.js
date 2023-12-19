const architectList = document.getElementById("architect-list");

function updateArchitectList(architects) {
  architectList.innerHTML = "";
  for (const architect of architects) {
    // Dynamically build HTML elements for each architect based on sorted data
    architectList.innerHTML += `
      <div class="architect">
        <h3>${architect.name}</h3>
        <p>${architect.description}</p>
      </div>
    `;
  }
}







function sortByNationality(architects) {
    return architects.sort((a, b) => a.nationality.localeCompare(b.nationality));
  }
  
  function sortByStyle(architects) {
    return architects.sort((modern, contemporary) => modern.style.localeCompare(contemporary.style));
  }
  
  function sortByPeriod(architects) {
    // Adapt based on desired sorting format (e.g., year range)
    return architects.sort((a, b) => parseInt(a.period.split("-")[0]) - parseInt(b.period.split("-")[0]));
  }
  