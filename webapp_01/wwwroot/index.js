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

    // var buttonDelete = document.getElementById("button-delete");
    // var buttonDeleteCancel = document.getElementById("button-delete-cancel");

    var buttonInsert = document.getElementById("button-insert");
    var buttonInsertCancel = document.getElementById("button-insert-cancel");

    //Add event listeners

    buttonSearch.addEventListener("click", searchArtifacts);
    buttonSearchClear.addEventListener("click", searchClear);

    buttonUpdate.addEventListener("click", updateArtifact);
    buttonUpdateCancel.addEventListener("click", updateArtifactCancel);

    // buttonDelete.addEventListener("click", deleteEmployee);
    // buttonDeleteCancel.addEventListener("click", deleteEmployeeCancel);

    buttonInsert.addEventListener("click", insertArtifact);
    buttonInsertCancel.addEventListener("click", insertEmployeeCancel);

    //Functions

    function searchArtifacts() {

        var url = 'http://localhost:5008/SearchArtifacts?search=' + textSearch.value;

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

    //For the Inserting Selects

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

    //For the Updating Selects

    function getProvenienceDataForUpdate() {

        var url = "http://localhost:5008/GetProvenienceData";

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


    function showArtifacts(artifacts) {
        var artifactTableText = '<table class="table table-striped table-sm"><thead><tr><th scope="col"Artifact Id</th><th scope="col"Project Number</th><th scope="col">Site Number</th><th scope="col">Accession Number</th><th scope="col">FSN</th><th scope="col">Unit</th><th scope="col">Depth (cmbd)</th><th scope="col">Excavation Date</th><th scope="col">Period</th><th scope="col">Level 1 Id</th><th scope="col">Level 1</th><th scope="col">Level 2 Id</th><th scope="col">Level 2</th><th scope="col">Level 3 Id</th><th scope="col">Level 3</th><th scope="col">Level 4 Id</th><th scope="col">Level 4</th><th scope="col">Additional Description</th><th scope="col">Artifact Count</th><th scope="col">Weight (g)</th><th scope="col">Analyzer</th><th scope="col">Date Analyzed</th><th scope="col">Provenience Id</th><th></th></tr></thead><tbody>';
        //<td><div class='row g-2'><div class='col-auto'><button type='button' data-artifact-id='" + artifact.artifactId = "' class='btn btn-outline-primary btn-sm btn-artifact-table-update'>Update</button></div><div class='col-auto'><button type='button' data-artifact-id='" + artifact.artifactId = "' class='btn btn-outline-primary btn-sm btn-artifact-table-delete'>Delete</button></div></div>
        for (var i = 0; i < artifacts.length; i++) {
            var artifact = artifacts[i];

            artifactTableText = artifactTableText + '<tr><th scope="row">' + artifact.artifactId + '</th><td>' + artifact.projectNumber + '</td><td>' + artifact.siteNumber + '</td><td>' + artifact.accessionNumber + '</td><td>' + artifact.fieldSerialNumber + '</td><td>' + artifact.unitNumber + '</td><td>' + artifact.depth + '</td><td>' + artifact.excavationDate + '</td><td>' + artifact.periodName + '</td><td>' + artifact.level1Id + '</td><td>' + artifact.level1Name + '</td><td>' + artifact.level2Id + '</td><td>' + artifact.level2Name + '</td><td>' + artifact.level3Id + '</td><td>' + artifact.level3Name + '</td><td>' + artifact.level4Id + '</td><td>' + artifact.level4Name + '</td><td>' + artifact.additionalDescription + '</td><td>' + artifact.artifactCount + '</td><td>' + artifact.artifactWeight + '</td><td>' + artifact.labTechInitials + '</td><td>' + artifact.dateAnalyzed + '</td><td>' + artifact.provenienceId + '</td><td><div class="row g-2"><div class="col-auto"><button type="button" data-artifact-id="' + artifact.artifactId + '" class="btn btn-outline-primary btn-sm btn-artifact-table-delete">Delete</button></div></div></td></tr>';
        }

        artifactTableText = artifactTableText + '</tbody></table>';

        artifactTable.innerHTML = artifactTableText;

        //For Deleting on the row
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


    function showProvenienceData(provenienceData) {
        var provenienceSelectText = "<div class='row mb-2'><select id='select-provenience-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Select a Provenience for the Artifact(s)</option>";

        for (var i = 0; i < provenienceData.length; i++) {
            var provenience = provenienceData[i];
            provenienceSelectText = provenienceSelectText + "<option value='" + provenience.provenienceId + "'>" + "Test Unit Number: " + provenience.unitNumber + " at Depth: " + provenience.depth + " cmbd" + "</option>";
        }

        provenienceSelectText = provenienceSelectText + "</select></div>";

        selectProvenience.innerHTML = provenienceSelectText;
        updateProvenience.innerHTML = selectProvenience.innerHTML;
    }

    function showLevel1Names(level1Names) {
        var level1NameSelectText = "<div class='row mb-2'><select id='select-level1-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 1 - Pick a Base Material</option>";

        for (var i = 0; i < level1Names.length; i++) {
            var level1Name = level1Names[i];
            level1NameSelectText = level1NameSelectText + "<option value='" + level1Name.level1Id + "'>" + level1Name.level1Name + "</option>";
        }

        level1NameSelectText = level1NameSelectText + "</select></div>";

        selectLevel1.innerHTML = level1NameSelectText;
        updateLevel1.innerHTML = selectLevel1.innerHTML;
    }

    function showLevel2Names(level2Names) {
        var level2NameSelectText = "<div class='row mb-2'><select id='select-level2-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 2 - Pick a Material/Type ID</option>";

        for (var i = 0; i < level2Names.length; i++) {
            var level2Name = level2Names[i];
            level2NameSelectText = level2NameSelectText + "<option value='" + level2Name.level2Id + "'>" + level2Name.level2Name + "</option>";
        }

        level2NameSelectText = level2NameSelectText + "</select></div>";

        selectLevel2.innerHTML = level2NameSelectText;
        updateLevel2.innerHTML = selectLevel2.innerHTML;
    }

    function showLevel3Names(level3Names) {
        var level3NameSelectText = "<div class='row mb-2'><select id='select-level3-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 3 - Pick a Manufacture or Material Type/Style</option>";

        for (var i = 0; i < level3Names.length; i++) {
            var level3Name = level3Names[i];
            level3NameSelectText = level3NameSelectText + "<option value='" + level3Name.level3Id + "'>" + level3Name.level3Name + "</option>";
        }

        level3NameSelectText = level3NameSelectText + "</select></div>";

        selectLevel3.innerHTML = level3NameSelectText;
        updateLevel3.innerHTML = selectLevel3.innerHTML;
    }

    function showLevel4Names(level4Names) {
        var level4NameSelectText = "<div class='row mb-2'><select id='select-level4-innerHTML' class='form-select form-select-sm'><option selected='' value='0'>Level 4 (if applicable) - Pick a Decoration or Style Type</option>";

        for (var i = 0; i < level4Names.length; i++) {
            var level4Name = level4Names[i];
            level4NameSelectText = level4NameSelectText + "<option value='" + level4Name.level4Id + "'>" + level4Name.level4Name + "</option>";
        }

        level4NameSelectText = level4NameSelectText + "</select></div>";

        selectLevel4.innerHTML = level4NameSelectText;
        updateLevel4.innerHTML = selectLevel4.innerHTML;
    }


    function searchClear() {
        textSearch.value = "";
        searchArtifacts();
    }

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
        var textDateAnalyzed = document.getElementById("text-insert-date-analyzed");
        var selectProvenienceInnerHTML = document.getElementById("select-provenience-innerHTML");

        var url = 'http://localhost:5008/InsertArtifact?periodName=' + selectPeriod.value + '&level1Id=' + selectLevel1InnerHTML.value + '&level2Id=' + selectLevel2InnerHTML.value + '&level3Id=' + selectLevel3InnerHTML.value + '&level4Id=' + selectLevel4InnerHTML.value + '&additionalDescription=' + textAdditionalDescription.value + '&artifactCount=' + textArtifactCount.value + '&artifactWeight=' + textArtifactWeight.value + '&labTechInitials=' + textLabTechInitials.value + '&dateAnalyzed=' + textDateAnalyzed.value + '&provenienceId=' + selectProvenienceInnerHTML.value;
            //http://localhost:5008/InsertArtifact?periodName=Post-Contact&level1Id=6&level2Id=6&level3Id=6&level4Id=6&additionalDescription=AnotherTestPost&artifactCount=6&artifactWeight=6.66&labTechInitials=LOL&dateAnalyzed=2023-04-22T10:34:23.666&provenienceId=6
            //2023-04-22T10:34:23.666

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
        textDateAnalyzed.value = "";
        selectProvenienceInnerHTML.value = 0;

    };

    function insertEmployeeCancel() {

        var selectPeriod = document.getElementById("select-period");
        var selectLevel1InnerHTML = document.getElementById("select-level1-innerHTML");
        var selectLevel2InnerHTML = document.getElementById("select-level2-innerHTML");
        var selectLevel3InnerHTML = document.getElementById("select-level3-innerHTML");
        var selectLevel4InnerHTML = document.getElementById("select-level4-innerHTML");        
        var textAdditionalDescription = document.getElementById("text-insert-additional-description");
        var textArtifactCount = document.getElementById("text-insert-artifact-count");
        var textArtifactWeight = document.getElementById("text-insert-artifact-weight");
        var textLabTechInitials = document.getElementById("text-insert-lab-tech-initials");
        var textDateAnalyzed = document.getElementById("text-insert-date-analyzed");
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
        textDateAnalyzed.value = "";
        selectProvenienceInnerHTML.value = 0;

    }

    // //Update functions go here.
    function updateArtifact() {

        var textArtifactId = document.getElementById("text-update-artifact-id");
        var selectPeriod = document.getElementById("update-period");
        var selectLevel1InnerHTML = document.getElementById("select-level1-innerHTML");
        var selectLevel2InnerHTML = document.getElementById("select-level2-innerHTML");
        var selectLevel3InnerHTML = document.getElementById("select-level3-innerHTML");
        var selectLevel4InnerHTML = document.getElementById("select-level4-innerHTML");        
        var textAdditionalDescription = document.getElementById("text-update-additional-description");
        var textArtifactCount = document.getElementById("text-update-artifact-count");
        var textArtifactWeight = document.getElementById("text-update-artifact-weight");
        var textLabTechInitials = document.getElementById("text-update-lab-tech-initials");
        var textDateAnalyzed = document.getElementById("text-update-date-analyzed");
        var selectProvenienceInnerHTML = document.getElementById("select-provenience-innerHTML");

        var url = 'http://localhost:5008/UpdateArtifact?artifactId=' + textArtifactId.value + '&periodName=' + selectPeriod.value + '&level1Id=' + selectLevel1InnerHTML.value + '&level2Id=' + selectLevel2InnerHTML.value + '&level3Id=' + selectLevel3InnerHTML.value + '&level4Id=' + selectLevel4InnerHTML.value + '&additionalDescription=' + textAdditionalDescription.value + '&artifactCount=' + textArtifactCount.value + '&artifactWeight=' + textArtifactWeight.value + '&labTechInitials=' + textLabTechInitials.value + '&dateAnalyzed=' + textDateAnalyzed.value + '&provenienceId=' + selectProvenienceInnerHTML.value; 

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
        selectPeriod.value = 0;
        selectLevel1InnerHTML.value = 0;
        selectLevel2InnerHTML.value = 0;
        selectLevel3InnerHTML.value = 0;
        selectLevel4InnerHTML.value = 0;
        textAdditionalDescription.value = "";
        textArtifactCount.value = "";
        textArtifactWeight.value = "";
        textLabTechInitials.value = "";
        textDateAnalyzed.value = "";
        selectProvenienceInnerHTML.value = 0;

    };

    function updateArtifactCancel() {

        var textArtifactId = document.getElementById("text-update-artifact-id");
        var selectPeriod = document.getElementById("update-period");
        var selectLevel1InnerHTML = document.getElementById("select-level1-innerHTML");
        var selectLevel2InnerHTML = document.getElementById("select-level2-innerHTML");
        var selectLevel3InnerHTML = document.getElementById("select-level3-innerHTML");
        var selectLevel4InnerHTML = document.getElementById("select-level4-innerHTML");        
        var textAdditionalDescription = document.getElementById("text-update-additional-description");
        var textArtifactCount = document.getElementById("text-update-artifact-count");
        var textArtifactWeight = document.getElementById("text-update-artifact-weight");
        var textLabTechInitials = document.getElementById("text-update-lab-tech-initials");
        var textDateAnalyzed = document.getElementById("text-update-date-analyzed");
        var selectProvenienceInnerHTML = document.getElementById("select-provenience-innerHTML");

        textArtifactId.value = "";
        selectPeriod.value = 0;
        selectLevel1InnerHTML.value = 0;
        selectLevel2InnerHTML.value = 0;
        selectLevel3InnerHTML.value = 0;
        selectLevel4InnerHTML.value = 0;
        textAdditionalDescription.value = "";
        textArtifactCount.value = "";
        textArtifactWeight.value = "";
        textLabTechInitials.value = "";
        textDateAnalyzed.value = "";
        selectProvenienceInnerHTML.value = 0;

    }

    //Delete functions go here.
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

    // function deleteEmployeeCancel() {
    //     var textEmployeeId = document.getElementById("text-delete-employee-id");
    //     textEmployeeId.value = "";
    // }

    //Invoke searchEmployees() on load
    searchArtifacts();
    getProvenienceData()
    getLevel1Names();
    getLevel2Names();
    getLevel3Names();
    getLevel4Names();
}

webapp_02();

