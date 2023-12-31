function webapp_02() {

//Get elements

    var textSearch = document.getElementById("text-search");

    var selectProvenience = document.getElementById("select-provenience");
    var selectLevel1 = document.getElementById("select-level1");
    var selectLevel2 = document.getElementById("select-level2");
    var selectLevel3 = document.getElementById("select-level3");
    var selectLevel4 = document.getElementById("select-level4");
    
    var buttonSearch = document.getElementById("button-search");
    var buttonSearchClear = document.getElementById("button-search-clear");

    var artifactTable = document.getElementById("artifact-table");

    var updateProvenience = document.getElementById("update-provenience");
    var updateLevel1 = document.getElementById("update-level1");
    var updateLevel2 = document.getElementById("update-level2");
    var updateLevel3 = document.getElementById("update-level3");
    var updateLevel4 = document.getElementById("update-level4");

    var buttonUpdate = document.getElementById("button-update");
    var buttonUpdateCancel = document.getElementById("button-update-cancel");

    var buttonPagePrev = document.getElementById("button-page-prev");
    var textPage = document.getElementById("text-page");
    var buttonPageNext = document.getElementById("button-page-next");

    var buttonInsert = document.getElementById("button-insert");
    var buttonInsertCancel = document.getElementById("button-insert-cancel");

//Add event listeners

    buttonSearch.addEventListener("click", searchArtifacts);
    buttonSearchClear.addEventListener("click", searchClear);

    buttonUpdate.addEventListener("click", updateArtifact);
    buttonUpdateCancel.addEventListener("click", updateArtifactCancel);

    buttonPagePrev.addEventListener("click", handleButtonPagePrevClick);
    buttonPageNext.addEventListener("click", handleButtonPageNextClick);

    buttonInsert.addEventListener("click", insertArtifact);
    buttonInsertCancel.addEventListener("click", insertArtifactCancel);

//Functions

//For Searching Artifact Catalog

    function searchArtifacts() {

        var url = 'http://localhost:5008/SearchArtifacts?search=' + textSearch.value + "&pageNumber=" + textPage.value;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterSearchArtifacts;
        xhr.open('GET', url);
        xhr.send(null);

        function doAfterSearchArtifacts() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showArtifacts(response.artifacts);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        };
    };

    function handleButtonPagePrevClick(e) {
        if (Number(textPage.value) > 1) {
            textPage.value = Number(textPage.value) - 1;
            searchArtifacts();
        }
    }

    function handleButtonPageNextClick(e) {
        textPage.value = Number(textPage.value) + 1;
        searchArtifacts();
    }

//Associated with dynamic selects - Insert Form begin

    function getProvenienceData() {

        var url = "http://localhost:5008/GetProvenienceData";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetProvenienceData;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetProvenienceData() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showProvenienceData(response.provenienceData);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel1Names() {

        var url = "http://localhost:5008/GetLevel1Names";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel1Names;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel1Names() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel1Names(response.level1Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel2Names() {

        var url = "http://localhost:5008/GetLevel2Names";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel2Names;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel2Names() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel2Names(response.level2Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel3Names() {

        var url = "http://localhost:5008/GetLevel3Names";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel3Names;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel3Names() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel3Names(response.level3Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel4Names() {

        var url = "http://localhost:5008/GetLevel4Names";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel4Names;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel4Names() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel4Names(response.level4Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

//Associated with dynamic selects - Insert Form end

//Associated with dynamic selects - Update Form begin

    function getProvenienceDataForUpdate() {

        var url = "http://localhost:5008/GetProvenienceDataForUpdate";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetProvenienceDataForUpdate;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetProvenienceDataForUpdate() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showProvenienceDataForUpdate(response.provenienceData);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel1NamesForUpdate() {

        var url = "http://localhost:5008/GetLevel1NamesForUpdate";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel1NamesForUpdate;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel1NamesForUpdate() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel1NamesForUpdate(response.level1Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel2NamesForUpdate() {

        var url = "http://localhost:5008/GetLevel2NamesForUpdate";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel2NamesForUpdate;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel2NamesForUpdate() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel2NamesForUpdate(response.level2Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel3NamesForUpdate() {

        var url = "http://localhost:5008/GetLevel3NamesForUpdate";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel3NamesForUpdate;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel3NamesForUpdate() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel3NamesForUpdate(response.level3Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

    function getLevel4NamesForUpdate() {

        var url = "http://localhost:5008/GetLevel4NamesForUpdate";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterGetLevel4NamesForUpdate;
        xhr.open("GET", url);

        xhr.send(null);

        function doAfterGetLevel4NamesForUpdate() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showLevel4NamesForUpdate(response.level4Names);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        }
    }

//Associated with dynamic selects - Update Form end

//Function for dynamic artifact catalog table begin

    function showArtifacts(artifacts) {
        var artifactTableText = '<table class="table table-striped table-sm table-bordered table-hover table-responsive" id="show-artifacts-innerHTML"><thead class="table-dark"><tr><th scope="col">Artifact Id</th><th scope="col">Project<br>Number</th><th scope="col">Site Number</th><th scope="col">Accession<br>Number</th><th scope="col">FSN</th><th scope="col">Unit</th><th scope="col">Depth<br>(cmbd)</th><th scope="col">Excavation Date</th><th scope="col">Period</th><th scope="col">Level 1</th><th scope="col">Level 2</th><th scope="col">Level 3</th><th scope="col">Level 4</th><th scope="col">Additional Description</th><th scope="col">Artifact<br>Count</th><th scope="col">Weight (g)</th><th scope="col">Analyzer</th><th scope="col">Date Analyzed</th><th></th></tr></thead><tbody>';
        for (var i = 0; i < artifacts.length; i++) {
            var artifact = artifacts[i];

            artifactTableText = artifactTableText + '<tr><th scope="row">' + artifact.artifactId + '</th><td>' + artifact.projectNumber + '</td><td>' + artifact.siteNumber + '</td><td>' + artifact.accessionNumber + '</td><td>' + artifact.fieldSerialNumber + '</td><td>' + artifact.unitNumber + '</td><td>' + artifact.depth + '</td><td>' + artifact.excavationDate.split('T')[0] + '</td><td>' + artifact.periodName + '</td><td>' + artifact.level1Name + '</td><td>' + artifact.level2Name + '</td><td>' + artifact.level3Name + '</td><td>' + artifact.level4Name + '</td><td>' + artifact.additionalDescription + '</td><td>' + artifact.artifactCount + '</td><td>' + artifact.artifactWeight + '</td><td>' + artifact.labTechInitials + '</td><td>' + artifact.dateAnalyzed.split('T')[0] + '</td><td><div class="row g-2"><div class="col-auto"><button type="button" data-artifact-id="' + artifact.artifactId + '" class="btn btn-outline-danger btn-sm btn-artifact-table-delete">Delete</button></div></div></td></tr>';
        }

        artifactTableText = artifactTableText + '</tbody></table>';

        artifactTable.innerHTML = artifactTableText;

//Function for dynamic artifact catalog table end

//Associated with Deleting on the dynamic row

        var deleteButtons = document.getElementsByClassName("btn-artifact-table-delete");

        for (var i = 0; i < deleteButtons.length; i++) {
            var deleteButton = deleteButtons[i];
            deleteButton.addEventListener("click", handleArtifactTableDeleteClick);
        }

        function handleArtifactTableDeleteClick(e) {
            var artifactId = e.target.getAttribute("data-artifact-id");
            deleteArtifact(artifactId);
        }
    }

//Functions for dynamic selects - Insert Form begin

    function showProvenienceData(provenienceData) {
        var provenienceSelectText = "<div class='row mb-2'><select id='select-provenience-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Select a Provenience for the Artifact(s)</option>";

        for (var i = 0; i < provenienceData.length; i++) {
            var provenience = provenienceData[i];
            provenienceSelectText = provenienceSelectText + "<option value='" + provenience.provenienceId + "'>" + "Test Unit: " + provenience.unitNumber + " at Depth: " + provenience.depth + " cmbd" + "</option>";
        }

        provenienceSelectText = provenienceSelectText + "</select></div>";

        selectProvenience.innerHTML = provenienceSelectText;
    }

    function showLevel1Names(level1Names) {
        var level1NameSelectText = "<div class='row mb-2'><select id='select-level1-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 1 - Pick a Base Material</option>";

        for (var i = 0; i < level1Names.length; i++) {
            var level1Name = level1Names[i];
            level1NameSelectText = level1NameSelectText + "<option value='" + level1Name.level1Id + "'>" + level1Name.level1Name + "</option>";
        }

        level1NameSelectText = level1NameSelectText + "</select></div>";

        selectLevel1.innerHTML = level1NameSelectText;
    }

    function showLevel2Names(level2Names) {
        var level2NameSelectText = "<div class='row mb-2'><select id='select-level2-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 2 - Pick a Material/Type ID</option>";

        for (var i = 0; i < level2Names.length; i++) {
            var level2Name = level2Names[i];
            level2NameSelectText = level2NameSelectText + "<option value='" + level2Name.level2Id + "'>" + level2Name.level2Name + "</option>";
        }

        level2NameSelectText = level2NameSelectText + "</select></div>";

        selectLevel2.innerHTML = level2NameSelectText;
    }

    function showLevel3Names(level3Names) {
        var level3NameSelectText = "<div class='row mb-2'><select id='select-level3-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 3 - Pick a Manufacture or Material Type/Style</option>";

        for (var i = 0; i < level3Names.length; i++) {
            var level3Name = level3Names[i];
            level3NameSelectText = level3NameSelectText + "<option value='" + level3Name.level3Id + "'>" + level3Name.level3Name + "</option>";
        }

        level3NameSelectText = level3NameSelectText + "</select></div>";

        selectLevel3.innerHTML = level3NameSelectText;
    }

    function showLevel4Names(level4Names) {
        var level4NameSelectText = "<div class='row mb-2'><select id='select-level4-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 4 (if applicable) - Pick a Decoration or Style Type</option>";

        for (var i = 0; i < level4Names.length; i++) {
            var level4Name = level4Names[i];
            level4NameSelectText = level4NameSelectText + "<option value='" + level4Name.level4Id + "'>" + level4Name.level4Name + "</option>";
        }

        level4NameSelectText = level4NameSelectText + "</select></div>";

        selectLevel4.innerHTML = level4NameSelectText;
    }

//Functions for dynamic selects - Insert Form end

//Functions for dynamic selects - Update Form begin

    function showProvenienceDataForUpdate(provenienceData) {
        var provenienceSelectText = "<div class='row mb-2'><select id='update-select-provenience-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Select a Provenience for the Artifact(s)</option>";

        for (var i = 0; i < provenienceData.length; i++) {
            var provenience = provenienceData[i];
            provenienceSelectText = provenienceSelectText + "<option value='" + provenience.provenienceId + "'>" + "Test Unit: " + provenience.unitNumber + " at Depth: " + provenience.depth + " cmbd" + "</option>";
        }

        provenienceSelectText = provenienceSelectText + "</select></div>";

        updateProvenience.innerHTML = provenienceSelectText;
    }

    function showLevel1NamesForUpdate(level1Names) {
        var level1NameSelectText = "<div class='row mb-2'><select id='update-select-level1-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 1 - Pick a Base Material</option>";

        for (var i = 0; i < level1Names.length; i++) {
            var level1Name = level1Names[i];
            level1NameSelectText = level1NameSelectText + "<option value='" + level1Name.level1Id + "'>" + level1Name.level1Name + "</option>";
        }

        level1NameSelectText = level1NameSelectText + "</select></div>";

        updateLevel1.innerHTML = level1NameSelectText;
    }

    function showLevel2NamesForUpdate(level2Names) {
        var level2NameSelectText = "<div class='row mb-2'><select id='update-select-level2-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 2 - Pick a Material/Type ID</option>";

        for (var i = 0; i < level2Names.length; i++) {
            var level2Name = level2Names[i];
            level2NameSelectText = level2NameSelectText + "<option value='" + level2Name.level2Id + "'>" + level2Name.level2Name + "</option>";
        }

        level2NameSelectText = level2NameSelectText + "</select></div>";

        updateLevel2.innerHTML = level2NameSelectText;
    }

    function showLevel3NamesForUpdate(level3Names) {
        var level3NameSelectText = "<div class='row mb-2'><select id='update-select-level3-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 3 - Pick a Manufacture or Material Type/Style</option>";

        for (var i = 0; i < level3Names.length; i++) {
            var level3Name = level3Names[i];
            level3NameSelectText = level3NameSelectText + "<option value='" + level3Name.level3Id + "'>" + level3Name.level3Name + "</option>";
        }

        level3NameSelectText = level3NameSelectText + "</select></div>";

        updateLevel3.innerHTML = level3NameSelectText;
    }

    function showLevel4NamesForUpdate(level4Names) {
        var level4NameSelectText = "<div class='row mb-2'><select id='update-select-level4-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 4 (if applicable) - Pick a Decoration or Style Type</option>";

        for (var i = 0; i < level4Names.length; i++) {
            var level4Name = level4Names[i];
            level4NameSelectText = level4NameSelectText + "<option value='" + level4Name.level4Id + "'>" + level4Name.level4Name + "</option>";
        }

        level4NameSelectText = level4NameSelectText + "</select></div>";

        updateLevel4.innerHTML = level4NameSelectText;
    }

//Functions for dynamic selects - Update Form end

    function searchClear() {
        textSearch.value = "";
        searchArtifacts();
    }

//Insert function begin

    function insertArtifact() {

        var selectPeriod = document.getElementById("select-period");
        var selectLevel1InnerHTML = document.getElementById("select-level1-innerHTML");
        var selectLevel2InnerHTML = document.getElementById("select-level2-innerHTML");
        var selectLevel3InnerHTML = document.getElementById("select-level3-innerHTML");
        var selectLevel4InnerHTML = document.getElementById("select-level4-innerHTML");        
        var textAdditionalDescription = document.getElementById("text-insert-additional-description");
        var textArtifactCount = document.getElementById("text-insert-artifact-count");
        var textArtifactWeight = document.getElementById("text-insert-artifact-weight");
        var textLabTechInitials = document.getElementById("text-insert-lab-tech-initials");
        var selectProvenienceInnerHTML = document.getElementById("select-provenience-innerHTML");

        //Form validation begin

        var errorString = "";

        if (selectProvenienceInnerHTML.value === '0' || selectProvenienceInnerHTML.value === null) {
            errorString += "Select a Provenience!"
            selectProvenienceInnerHTML.classList.add("error_field");
        } else {
            selectProvenienceInnerHTML.classList.remove("error_field");
        }

        if (selectPeriod.value === '0' || selectPeriod.value === null) {
            errorString += "\n";
            errorString += "Select a Time Period!"
            selectPeriod.classList.add("error_field");
        } else {
            selectPeriod.classList.remove("error_field");
        }

        if (selectLevel1InnerHTML.value === '0' || selectLevel1InnerHTML.value === null) {
            errorString += "\n";
            errorString += "Select a Level 1 Name!"
            selectLevel1InnerHTML.classList.add("error_field");
        } else {
            selectLevel1InnerHTML.classList.remove("error_field");
        }

        if (selectLevel2InnerHTML.value === '0' || selectLevel2InnerHTML.value === null) {
            errorString += "\n";
            errorString += "Select a Level 2 Name!"
            selectLevel2InnerHTML.classList.add("error_field");
        } else {
            selectLevel2InnerHTML.classList.remove("error_field");
        }

        if (selectLevel3InnerHTML.value === '0' || selectLevel3InnerHTML.value === null) {
            errorString += "\n";
            errorString += "Select a Level 3 Name!"
            selectLevel3InnerHTML.classList.add("error_field");
        } else {
            selectLevel3InnerHTML.classList.remove("error_field");
        }

        if (textArtifactCount.value === '' || textArtifactCount.value === null) {
            errorString += "\n";
            errorString += "Fill in Count!"
            textArtifactCount.classList.add("error_field");
        } else if (isNaN(textArtifactCount.value)) {
            errorString += "\n";
            errorString += "Only numbers can go into the Count input!"
            textArtifactCount.classList.add("error_field");
        } else {
            textArtifactCount.classList.remove("error_field");
        }

        if (textArtifactWeight.value === '' || textArtifactWeight.value === null) {
            errorString += "\n";
            errorString += "Fill in Weight!"
            textArtifactWeight.classList.add("error_field");
        } else if (isNaN(textArtifactWeight.value)) {
            errorString += "\n";
            errorString += "Only numbers can go into the Weight input!"
            textArtifactWeight.classList.add("error_field");
        } else {
            textArtifactWeight.classList.remove("error_field");
        }

        if (textLabTechInitials.value === '' || textLabTechInitials.value === null) {
            errorString += "\n";
            errorString += "Fill in Analyzer Initials!"
            textLabTechInitials.classList.add("error_field");
        } else if (/[^a-zA-Z]+$/.test(textLabTechInitials.value)) {
            errorString += "\n";
            errorString += "Only letters can go into the Analyzer input!"
            textLabTechInitials.classList.add("error_field");
        } else if (textLabTechInitials.value.length != 3) {
            errorString += "\n";
            errorString += "Analyzer initials input must only contain initials for a first, middle, and last name!"
            textLabTechInitials.classList.add("error_field");
        } else {
            textLabTechInitials.classList.remove("error_field");
        }

        if (errorString.length != 0 || errorString !== "") {
            alert(errorString);
            return;
        }

        //Form validation end

        var url = 'http://localhost:5008/InsertArtifact?periodName=' + selectPeriod.value + '&level1Id=' + selectLevel1InnerHTML.value + '&level2Id=' + selectLevel2InnerHTML.value + '&level3Id=' + selectLevel3InnerHTML.value + '&level4Id=' + selectLevel4InnerHTML.value + '&additionalDescription=' + textAdditionalDescription.value + '&artifactCount=' + textArtifactCount.value + '&artifactWeight=' + textArtifactWeight.value + '&labTechInitials=' + textLabTechInitials.value + '&provenienceId=' + selectProvenienceInnerHTML.value;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterInsertArtifact;
        xhr.open('GET', url);
        xhr.send(null);

        function doAfterInsertArtifact() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showArtifacts(response.artifacts);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        };

        selectPeriod.value = 0;
        selectLevel1InnerHTML.value = 0;
        selectLevel2InnerHTML.value = 0;
        selectLevel3InnerHTML.value = 0;
        selectLevel4InnerHTML.value = 0;
        textAdditionalDescription.value = "";
        textArtifactCount.value = "";
        textArtifactWeight.value = "";
        textLabTechInitials.value = "";
        selectProvenienceInnerHTML.value = 0;

    };

    function insertArtifactCancel() {

        var selectPeriod = document.getElementById("select-period");
        var selectLevel1InnerHTML = document.getElementById("select-level1-innerHTML");
        var selectLevel2InnerHTML = document.getElementById("select-level2-innerHTML");
        var selectLevel3InnerHTML = document.getElementById("select-level3-innerHTML");
        var selectLevel4InnerHTML = document.getElementById("select-level4-innerHTML");        
        var textAdditionalDescription = document.getElementById("text-insert-additional-description");
        var textArtifactCount = document.getElementById("text-insert-artifact-count");
        var textArtifactWeight = document.getElementById("text-insert-artifact-weight");
        var textLabTechInitials = document.getElementById("text-insert-lab-tech-initials");
        var selectProvenienceInnerHTML = document.getElementById("select-provenience-innerHTML");

        selectPeriod.value = 0;
        selectLevel1InnerHTML.value = 0;
        selectLevel2InnerHTML.value = 0;
        selectLevel3InnerHTML.value = 0;
        selectLevel4InnerHTML.value = 0;
        textAdditionalDescription.value = "";
        textArtifactCount.value = "";
        textArtifactWeight.value = "";
        textLabTechInitials.value = "";
        selectProvenienceInnerHTML.value = 0;
        
        selectProvenienceInnerHTML.classList.remove("error_field");
        selectPeriod.classList.remove("error_field");
        selectLevel1InnerHTML.classList.remove("error_field");
        selectLevel2InnerHTML.classList.remove("error_field");
        selectLevel3InnerHTML.classList.remove("error_field");
        textArtifactCount.classList.remove("error_field");
        textArtifactWeight.classList.remove("error_field");
        textLabTechInitials.classList.remove("error_field");

    }

//Insert function end
//Update function begin

    function updateArtifact() {

        var textArtifactId = document.getElementById("text-update-artifact-id");
        var updatePeriod = document.getElementById("update-period");
        var updateSelectLevel1InnerHTML = document.getElementById("update-select-level1-innerHTML");
        var updateSelectLevel2InnerHTML = document.getElementById("update-select-level2-innerHTML");
        var updateSelectLevel3InnerHTML = document.getElementById("update-select-level3-innerHTML");
        var updateSelectLevel4InnerHTML = document.getElementById("update-select-level4-innerHTML");        
        var textAdditionalDescription = document.getElementById("text-update-additional-description");
        var textArtifactCount = document.getElementById("text-update-artifact-count");
        var textArtifactWeight = document.getElementById("text-update-artifact-weight");
        var textLabTechInitials = document.getElementById("text-update-lab-tech-initials");
        var updateSelectProvenienceInnerHTML = document.getElementById("update-select-provenience-innerHTML");
       
        //Form validation begin
        
        var errorString = "";

        if (textArtifactId.value === '' || textArtifactId.value === null) {
            errorString += "Fill in Artifact Id!"
            textArtifactId.classList.add("error_field");
        } else if (isNaN(textArtifactId.value)) {
            errorString += "\n";
            errorString += "Only numbers can go into the Artifact Id input!"
            textArtifactId.classList.add("error_field");
        } else {
            textArtifactId.classList.remove("error_field");
        }

        if (updateSelectProvenienceInnerHTML.value === '0' || updateSelectProvenienceInnerHTML.value === null) {
            errorString += "\n";
            errorString += "Select a Provenience!"
            updateSelectProvenienceInnerHTML.classList.add("error_field");
        } else {
            updateSelectProvenienceInnerHTML.classList.remove("error_field");
        }

        if (updatePeriod.value === '0' || updatePeriod.value === null) {
            errorString += "\n";
            errorString += "Select a Time Period!"
            updatePeriod.classList.add("error_field");
        } else {
            updatePeriod.classList.remove("error_field");
        }

        if (updateSelectLevel1InnerHTML.value === '0' || updateSelectLevel1InnerHTML.value === null) {
            errorString += "\n";
            errorString += "Select a Level 1 Name!"
            updateSelectLevel1InnerHTML.classList.add("error_field");
        } else {
            updateSelectLevel1InnerHTML.classList.remove("error_field");
        }

        if (updateSelectLevel2InnerHTML.value === '0' || updateSelectLevel2InnerHTML.value === null) {
            errorString += "\n";
            errorString += "Select a Level 2 Name!"
            updateSelectLevel2InnerHTML.classList.add("error_field");
        } else {
            updateSelectLevel2InnerHTML.classList.remove("error_field");
        }

        if (updateSelectLevel3InnerHTML.value === '0' || updateSelectLevel3InnerHTML.value === null) {
            errorString += "\n";
            errorString += "Select a Level 3 Name!"
            updateSelectLevel3InnerHTML.classList.add("error_field");
        } else {
            updateSelectLevel3InnerHTML.classList.remove("error_field");
        }

        if (textArtifactCount.value === '' || textArtifactCount.value === null) {
            errorString += "\n";
            errorString += "Fill in Count!"
            textArtifactCount.classList.add("error_field");
        } else if (isNaN(textArtifactCount.value)) {
            errorString += "\n";
            errorString += "Only numbers can go into the Count input!"
            textArtifactCount.classList.add("error_field");
        } else {
            textArtifactCount.classList.remove("error_field");
        }

        if (textArtifactWeight.value === '' || textArtifactWeight.value === null) {
            errorString += "\n";
            errorString += "Fill in Weight!"
            textArtifactWeight.classList.add("error_field");
        } else if (isNaN(textArtifactWeight.value)) {
            errorString += "\n";
            errorString += "Only numbers can go into the Weight input!"
            textArtifactWeight.classList.add("error_field");
        } else {
            textArtifactWeight.classList.remove("error_field");
        }

        if (textLabTechInitials.value === '' || textLabTechInitials.value === null) {
            errorString += "\n";
            errorString += "Fill in Analyzer Initials!"
            textLabTechInitials.classList.add("error_field");
        } else if (/[^a-zA-Z]+$/.test(textLabTechInitials.value)) {
            errorString += "\n";
            errorString += "Only letters can go into the Analyzer input!"
            textLabTechInitials.classList.add("error_field");
        } else if (textLabTechInitials.value.length != 3) {
            errorString += "\n";
            errorString += "Analyzer initials input must only contain initials for a first, middle, and last name!"
            textLabTechInitials.classList.add("error_field");
        } else {
            textLabTechInitials.classList.remove("error_field");
        }

        if (errorString.length != 0 || errorString !== "") {
            alert(errorString);
            return;
        }

        //Form validation end

        var url = 'http://localhost:5008/UpdateArtifact?artifactId=' + textArtifactId.value + '&periodName=' + updatePeriod.value + '&level1Id=' + updateSelectLevel1InnerHTML.value + '&level2Id=' + updateSelectLevel2InnerHTML.value + '&level3Id=' + updateSelectLevel3InnerHTML.value + '&level4Id=' + updateSelectLevel4InnerHTML.value + '&additionalDescription=' + textAdditionalDescription.value + '&artifactCount=' + textArtifactCount.value + '&artifactWeight=' + textArtifactWeight.value + '&labTechInitials=' + textLabTechInitials.value + '&provenienceId=' + updateSelectProvenienceInnerHTML.value; 

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterUpdateArtifact;
        xhr.open('GET', url);
        xhr.send(null);

        function doAfterUpdateArtifact() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showArtifacts(response.artifacts);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        };

        textArtifactId.value = "";
        updatePeriod.value = 0;
        updateSelectLevel1InnerHTML.value = 0;
        updateSelectLevel2InnerHTML.value = 0;
        updateSelectLevel3InnerHTML.value = 0;
        updateSelectLevel4InnerHTML.value = 0;
        textAdditionalDescription.value = "";
        textArtifactCount.value = "";
        textArtifactWeight.value = "";
        textLabTechInitials.value = "";
        updateSelectProvenienceInnerHTML.value = 0;

    };

    function updateArtifactCancel() {

        var textArtifactId = document.getElementById("text-update-artifact-id");
        var updatePeriod = document.getElementById("update-period");
        var updateSelectLevel1InnerHTML = document.getElementById("update-select-level1-innerHTML");
        var updateSelectLevel2InnerHTML = document.getElementById("update-select-level2-innerHTML");
        var updateSelectLevel3InnerHTML = document.getElementById("update-select-level3-innerHTML");
        var updateSelectLevel4InnerHTML = document.getElementById("update-select-level4-innerHTML");        
        var textAdditionalDescription = document.getElementById("text-update-additional-description");
        var textArtifactCount = document.getElementById("text-update-artifact-count");
        var textArtifactWeight = document.getElementById("text-update-artifact-weight");
        var textLabTechInitials = document.getElementById("text-update-lab-tech-initials");
        var updateSelectProvenienceInnerHTML = document.getElementById("update-select-provenience-innerHTML");

        textArtifactId.value = "";
        updatePeriod.value = 0;
        updateSelectLevel1InnerHTML.value = 0;
        updateSelectLevel2InnerHTML.value = 0;
        updateSelectLevel3InnerHTML.value = 0;
        updateSelectLevel4InnerHTML.value = 0;
        textAdditionalDescription.value = "";
        textArtifactCount.value = "";
        textArtifactWeight.value = "";
        textLabTechInitials.value = "";
        updateSelectProvenienceInnerHTML.value = 0;

        textArtifactId.classList.remove("error_field");
        updateSelectProvenienceInnerHTML.classList.remove("error_field");
        updatePeriod.classList.remove("error_field");
        updateSelectLevel1InnerHTML.classList.remove("error_field");
        updateSelectLevel2InnerHTML.classList.remove("error_field");
        updateSelectLevel3InnerHTML.classList.remove("error_field");
        textArtifactCount.classList.remove("error_field");
        textArtifactWeight.classList.remove("error_field");
        textLabTechInitials.classList.remove("error_field");

    }
//Update function end
//Delete function begin

    function deleteArtifact(artifactId) {

        var url = 'http://localhost:5008/DeleteArtifact?artifactid=' + artifactId;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = doAfterDeleteArtifact;
        xhr.open('GET', url);
        xhr.send(null);

        function doAfterDeleteArtifact() {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {

                    var response = JSON.parse(xhr.responseText);

                    if (response.result === "success") {
                        showArtifacts(response.artifacts);
                    } else {
                        alert("API Error: " + response.message);
                    }
                } else {
                    alert("Server Error: " + xhr.status + " " + xhr.statusText);
                }
            }
        };
    };

//Delete function end

    searchArtifacts();
    getProvenienceData()
    getLevel1Names();
    getLevel2Names();
    getLevel3Names();
    getLevel4Names();
    getProvenienceDataForUpdate()
    getLevel1NamesForUpdate();
    getLevel2NamesForUpdate();
    getLevel3NamesForUpdate();
    getLevel4NamesForUpdate();
}

webapp_02();
