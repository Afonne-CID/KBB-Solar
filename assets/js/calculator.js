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

(function () {

  var cnt = 1;
  var res = 0;

  var selectedAppliance = document.getElementById(`appliance${cnt}`);
  var selectedCount = document.getElementById(`appliance${cnt}Count`);
  var addNew = document.getElementById("addNew");
  var submit = document.getElementById("form-submit");

  var countIndex = 0;
  var applianceIndex = 0;

  selectedAppliance.setAttribute("id", `appliance${cnt}`);
  selectedCount.setAttribute("id", `appliance${cnt}Count`)

  // When an option is selected
  selectedAppliance.addEventListener("change", function () {
      applianceIndex = selectedAppliance.selectedIndex;
      document.getElementById("res").style.display = "none";
  })
  
  selectedCount.addEventListener("change", function () {
      countIndex = selectedCount.selectedIndex;
      document.getElementById("res").style.display = "none";
  })
  
  // Add new input form fields to DOM
  addNew.addEventListener("click", function () {
      if (countIndex !== 0 && applianceIndex !== 0) {
        document.getElementById("res").style.display = "none";
        addInput();
      }
  }.bind(this));

  // Validate input and submit
  submit.addEventListener("click", function () {
      if (applianceIndex > 0 && countIndex === 0) {
              selectedCount.options[selectedCount.selectedIndex].value = "";
              selectedCount.setAttribute('required', '');
      } else if (countIndex > 0 && applianceIndex === 0) {
          selectedAppliance.options[selectedAppliance.selectedIndex].value = "";
          selectedAppliance.setAttribute('required', '');
      } else if (countIndex === 0 && applianceIndex === 0) {
          selectedAppliance.options[selectedAppliance.selectedIndex].value = "";
          selectedAppliance.setAttribute('required', '');

          selectedCount.options[selectedCount.selectedIndex].value = "";
          selectedCount.setAttribute('required', '');
      } else {
          for (let i = 1; i <= cnt; i++) {
            selectedAppliance = document.getElementById(`appliance${i}`);
            selectedCount = document.getElementById(`appliance${i}Count`);
            var value = selectedAppliance.options[selectedAppliance.selectedIndex].value.toLowerCase();
            var count = selectedCount.options[selectedCount.selectedIndex].value;
            res += properties[value] * count;
          }

          if (res > 0) {
            res /= 1000;
            res = res.toFixed(3);
            console.log(res);
            document.getElementById("res").innerHTML = `
              <div class="card-body">
                <h5 class="card-title">${res}KVA</h5>
                <small>It should be noted that the calculator uses the worst-case scenario for the estimate which means your load may be far less than estimated.<br />If you need a more accurate estimation or have equipment which are not considered on our list, please chart with our technicians who are available 24/7.</small>
                <a href="#setup-guide" class="btn btn-purple">Check Our Installation Cost and Setup Guide</a>
              </div>`;

              document.getElementById("res").style.display = "block";
          }
          res = 0;
      }
  })


  // Function to create new form fields
  var addInput = function () {
      if (applianceIndex != 0) {

          cnt++;

          var form = document.getElementById("addHere");

          // Create div elements
          var theDiv1 = document.createElement("div");
          var theDiv2 = document.createElement("div");

          // Add class to div elements
          theDiv1.className = "col-lg-6";
          theDiv2.className = "col-lg-6";

          // Create fieldsets
          var fieldsetCount = document.createElement("fieldset");
          var fieldsetAppliance = document.createElement("fieldset");
          
          fieldsetAppliance.innerHTML = `
          <select name="Appliance" class="form-select" aria-label="Default select example" id="appliance${cnt}">
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
              <select name="Count" class="form-select" aria-label="Default select example" id="appliance${cnt}Count">
              <option selected>Choose an Option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              </select>
          `
          theDiv1.appendChild(fieldsetAppliance);
          theDiv2.appendChild(fieldsetCount);
          form.appendChild(theDiv1);
          form.appendChild(theDiv2);
      }
  }
}
)();






/*
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

var cnt = 1;

var selectedAppliance = document.getElementById(`appliance${cnt}`);
var selectedCount = document.getElementById(`appliance${cnt}Count`);
var addNew = document.getElementById("addNew");
var submit = document.getElementById("form-submit");

var countIndex = 0;
var applianceIndex = 0;

selectedAppliance.setAttribute("id", `appliance${cnt}`);
selectedCount.setAttribute("id", `appliance${cnt}Count`)

// When an option is selected
selectedAppliance.addEventListener("change", function () {
    applianceIndex = selectedAppliance.selectedIndex;
  })
  
selectedCount.addEventListener("change", function () {
  countIndex = selectedCount.selectedIndex;
})
  
// Add new input form fields to DOM
addNew.addEventListener("click", function () {
  if (countIndex !== 0 && applianceIndex !== 0) {
    addInput();
  }

}.bind(this));

// Validate input and submit
submit.addEventListener("click", function () {
  if (applianceIndex > 0 && countIndex === 0) {
        selectedCount.options[selectedCount.selectedIndex].value = "";
        selectedCount.setAttribute('required', '');
  }

  if (countIndex > 0 && applianceIndex === 0) {
      selectedAppliance.options[selectedAppliance.selectedIndex].value = "";
      selectedAppliance.setAttribute('required', '');
  };
    
  if (countIndex === 0 && applianceIndex === 0) {
    selectedAppliance.options[selectedAppliance.selectedIndex].value = "";
    selectedAppliance.setAttribute('required', '');

    selectedCount.options[selectedCount.selectedIndex].value = "";
    selectedCount.setAttribute('required', '');
  }
})


// Function to create new form fields
var addInput = function () {
  if (applianceIndex != 0) {

    cnt++;

    var form = document.getElementById("addHere");

    // Create div elements
    var theDiv1 = document.createElement("div");
    var theDiv2 = document.createElement("div");

    // Add class to div elements
    theDiv1.className = "col-lg-6";
    theDiv2.className = "col-lg-6";

    // Create fieldsets
    var fieldsetCount = document.createElement("fieldset");
    var fieldsetAppliance = document.createElement("fieldset");
    
    fieldsetAppliance.innerHTML = `
      <select name="Appliance" class="form-select" aria-label="Default select example" id="appliance${cnt}">
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
        <select name="Count" class="form-select" aria-label="Default select example" id="appliance${cnt}Count">
          <option selected>Choose an Option</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </select>
    `
    theDiv1.appendChild(fieldsetAppliance);
    theDiv2.appendChild(fieldsetCount);
    form.appendChild(theDiv1);
    form.appendChild(theDiv2);
    console.log(form);
  }
}
*/