const properties = {
    fridge: 1875,
    tv: 1250,
    ac: 2500,
    freezer: 2500,
    fans: 625,
    printer: 625,
    laptop: 625,
    lights: 125,
    microwave: 4375
};

var selectedAppliance = document.getElementById("chooseAppliance");
var selectedCount = document.getElementById("chooseCount");
var submit = document.getElementById("form-submit");

var count = 0;
var applianceIndex = 0;

// When an option is selected
selectedAppliance.addEventListener("change", function () {
    applianceIndex = selectedAppliance.selectedIndex;
    count = selectedCount.selectedIndex;
})
  
submit.addEventListener("click", function () {
  if (applianceIndex > 0 && count === 0) {
        selectedCount.options[selectedCount.selectedIndex].value = "";
        selectedCount.setAttribute('required', '');
  }

  if (count > 0 && applianceIndex === 0) {
      selectedAppliance.options[selectedAppliance.selectedIndex].value = "";
      selectedAppliance.setAttribute('required', '');
  };
    
  if (count === 0 && applianceIndex === 0) {
    selectedAppliance.options[selectedAppliance.selectedIndex].value = "";
    selectedAppliance.setAttribute('required', '');

    selectedCount.options[selectedCount.selectedIndex].value = "";
    selectedCount.setAttribute('required', '');
  }
})

var cnt = 1;

var addInput = function () {
  if (applianceIndex != 0) {

    selectedAppliance.setAttribute("id", `appliance${toString(cnt)}`);
    selectedCount.setAttribute("id", `appliance${toString(cnt)}Count`)

    var form = document.getElementById("calculate");
    var theDiv = document.createElement("div");
    theDiv.className = "col-lg-6";
    var fieldsetCount = document.createElement("fieldset");
    var fieldsetAppliance = document.createElement("fieldset");
    
    fieldsetAppliance.innerHTML = `
      <select name="Appliance" class="form-select" aria-label="Default select example" id="chooseAppliance">
        <option selected>Choose an Option</option>
        <option value="Fridge">Fridge</option>
        <option value="TV">TV</option>
        <option value="AC">AC</option>
        <option value="Freezer">Freezer</option>
        <option value="Fans">Fans</option>
        <option value="Printer">Printer</option>
        <option value="Lights">Lights</option>
        <option value="Laptop">Laptop</option>
        <option value="Microwave">Microwave</option>
      </select>
      `

      fieldsetCount.innerHTML = `
        <select name="Count" class="form-select" aria-label="Default select example" id="chooseCount">
          <option selected>Choose an Option</option>
          <option onselect="addInput;">1</option>
          <option onselect="addInput;">2</option>
          <option onselect="addInput;">3</option>
          <option onselect="addInput;">4</option>
          <option onselect="addInput;">5</option>
          <option onselect="addInput;">6</option>
          <option onselect="addInput;">7</option>
          <option onselect="addInput;">8</option>
          <option onselect="addInput;">9</option>
          <option onselect="addInput;">10</option>
          <option onselect="addInput;">11</option>
          <option onselect="addInput;">12</option>
          <option onselect="addInput;">13</option>
          <option onselect="addInput;">14</option>
          <option onselect="addInput;">15</option>
          <option onselect="addInput;">16</option>
          <option onselect="addInput;">17</option>
          <option onselect="addInput;">18</option>
          <option onselect="addInput;">19</option>
          <option onselect="addInput;">20</option>
        </select>
    `
    theDiv.appendChild(fieldsetAppliance);
    theDiv.appendChild(fieldsetCount);
    form.appendChild(theDiv);
  }
  cnt++;
}