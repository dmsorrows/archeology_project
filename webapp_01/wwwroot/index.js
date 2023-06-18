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

    // var buttonUpdate = document.getElementById("button-update");
    // var buttonUpdateCancel = document.getElementById("button-update-cancel");

    // var buttonDelete = document.getElementById("button-delete");
    // var buttonDeleteCancel = document.getElementById("button-delete-cancel");

    // var buttonInsert = document.getElementById("button-insert");
    // var buttonInsertCancel = document.getElementById("button-insert-cancel");

    //Add event listeners

    buttonSearch.addEventListener("click", searchArtifacts);
    buttonSearchClear.addEventListener("click", searchClear);

    // buttonUpdate.addEventListener("click", updateEmployee);
    // buttonUpdateCancel.addEventListener("click", updateEmployeeCancel);

    // buttonDelete.addEventListener("click", deleteEmployee);
    // buttonDeleteCancel.addEventListener("click", deleteEmployeeCancel);

    // buttonInsert.addEventListener("click", insertEmployee);
    // buttonInsertCancel.addEventListener("click", insertEmployeeCancel);

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

    function showArtifacts(artifacts) {
        var artifactTableText = '<table class="table table-striped table-sm"><thead><tr><th scope="col"Artifact Id</th><th scope="col"Project Number</th><th scope="col">Site Number</th><th scope="col">Accession Number</th><th scope="col">FSN</th><th scope="col">Unit</th><th scope="col">Depth (cmbd)</th><th scope="col">Excavation Date</th><th scope="col">Period</th><th scope="col">Level 1 Id</th><th scope="col">Level 1</th><th scope="col">Level 2 Id</th><th scope="col">Level 2</th><th scope="col">Level 3 Id</th><th scope="col">Level 3</th><th scope="col">Level 4 Id</th><th scope="col">Level 4</th><th scope="col">Additional Description</th><th scope="col">Artifact Count</th><th scope="col">Weight (g)</th><th scope="col">Analyzer</th><th scope="col">Date Analyzed</th><th scope="col">Provenience Id</th></tr></thead><tbody>';

        for (var i = 0; i < artifacts.length; i++) {
            var artifact = artifacts[i];

            artifactTableText = artifactTableText + '<tr><th scope="row">' + artifact.artifactId + '</th><td>' + artifact.projectNumber + '</td><td>' + artifact.siteNumber + '</td><td>' + artifact.accessionNumber + '</td><td>' + artifact.fieldSerialNumber + '</td><td>' + artifact.unitNumber + '</td><td>' + artifact.depth + '</td><td>' + artifact.excavationDate + '</td><td>' + artifact.periodName + '</td><td>' + artifact.level1Id + '</td><td>' + artifact.level1Name + '</td><td>' + artifact.level2Id + '</td><td>' + artifact.level2Name + '</td><td>' + artifact.level3Id + '</td><td>' + artifact.level3Name + '</td><td>' + artifact.level4Id + '</td><td>' + artifact.level4Name + '</td><td>' + artifact.additionalDescription + '</td><td>' + artifact.artifactCount + '</td><td>' + artifact.artifactWeight + '</td><td>' + artifact.labTechInitials + '</td><td>' + artifact.dateAnalyzed + '</td><td>' + artifact.provenienceId + '</td></tr>';
        }

        artifactTableText = artifactTableText + '</tbody></table>';

        artifactTable.innerHTML = artifactTableText;
    }


    function showProvenienceData(provenienceData) {
        var provenienceSelectText = "<div class='row mb-2'><select id='select-provenience' class='form-select form-select-sm'><option selected='' value='0'>Select a Provenience for the Artifact(s)</option>";

        for (var i = 0; i < provenienceData.length; i++) {
            var provenience = provenienceData[i];
            provenienceSelectText = provenienceSelectText + "<option value='" + provenience.provenienceId + "'>" + "Test Unit Number: " + provenience.unitNumber + " at Depth: " + provenience.depth + " cmbd" + "</option>";
        }

        provenienceSelectText = provenienceSelectText + "</select></div>";

        selectProvenience.innerHTML = provenienceSelectText;
    }

    function showLevel1Names(level1Names) {
        var level1NameSelectText = "<div class='row mb-2'><select id='select-level1' class='form-select form-select-sm'><option selected='' value='0'>Level 1 - Pick a Base Material</option>";

        for (var i = 0; i < level1Names.length; i++) {
            var level1Name = level1Names[i];
            level1NameSelectText = level1NameSelectText + "<option value='" + level1Name.level1Id + "'>" + level1Name.level1Name + "</option>";
        }

        level1NameSelectText = level1NameSelectText + "</select></div>";

        selectLevel1.innerHTML = level1NameSelectText;
    }

    function showLevel2Names(level2Names) {
        var level2NameSelectText = "<div class='row mb-2'><select id='select-level2' class='form-select form-select-sm'><option selected='' value='0'>Level 2 - Pick a Material/Type ID</option>";

        for (var i = 0; i < level2Names.length; i++) {
            var level2Name = level2Names[i];
            level2NameSelectText = level2NameSelectText + "<option value='" + level2Name.level2Id + "'>" + level2Name.level2Name + "</option>";
        }

        level2NameSelectText = level2NameSelectText + "</select></div>";

        selectLevel2.innerHTML = level2NameSelectText;
    }

    function showLevel3Names(level3Names) {
        var level3NameSelectText = "<div class='row mb-2'><select id='select-level3' class='form-select form-select-sm'><option selected='' value='0'>Level 3 - Pick a Manufacture or Material Type/Style</option>";

        for (var i = 0; i < level3Names.length; i++) {
            var level3Name = level3Names[i];
            level3NameSelectText = level3NameSelectText + "<option value='" + level3Name.level3Id + "'>" + level3Name.level3Name + "</option>";
        }

        level3NameSelectText = level3NameSelectText + "</select></div>";

        selectLevel3.innerHTML = level3NameSelectText;
    }

    function showLevel4Names(level4Names) {
        var level4NameSelectText = "<div class='row mb-2'><select id='select-level4' class='form-select form-select-sm'><option selected='' value='0'>Level 4 (if applicable) - Pick a Decoration or Style Type</option>";

        for (var i = 0; i < level4Names.length; i++) {
            var level4Name = level4Names[i];
            level4NameSelectText = level4NameSelectText + "<option value='" + level4Name.level4Id + "'>" + level4Name.level4Name + "</option>";
        }

        level4NameSelectText = level4NameSelectText + "</select></div>";

        selectLevel4.innerHTML = level4NameSelectText;
    }


    function searchClear() {
        textSearch.value = "";
        searchArtifacts();
    }

    // function insertEmployee() {

    //     var textFirstName = document.getElementById("text-insert-first-name");
    //     var textLastName = document.getElementById("text-insert-last-name");
    //     var textSalary = document.getElementById("text-insert-salary");

    //     var url = 'http://localhost:5120/InsertEmployee?lastName=' + textLastName.value + '&firstName=' + textFirstName.value + '&salary=' + textSalary.value;

    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = doAfterInsertEmployee;
    //     xhr.open('GET', url);
    //     xhr.send(null);

    //     function doAfterInsertEmployee() {
    //         var DONE = 4; // readyState 4 means the request is done.
    //         var OK = 200; // status 200 is a successful return.
    //         if (xhr.readyState === DONE) {
    //             if (xhr.status === OK) {

    //                 var response = JSON.parse(xhr.responseText);

    //                 if (response.result === "success") {
    //                     showEmployees(response.employees);
    //                 } else {
    //                     alert("API Error: " + response.message);
    //                 }
    //             } else {
    //                 alert("Server Error: " + xhr.status + " " + xhr.statusText);
    //             }
    //         }
    //     };

    //     textFirstName.value = "";
    //     textLastName.value = "";
    //     textSalary.value = "";

    // };

    // function insertEmployeeCancel() {

    //     var textFirstName = document.getElementById("text-insert-first-name");
    //     var textLastName = document.getElementById("text-insert-last-name");
    //     var textSalary = document.getElementById("text-insert-salary");

    //     textFirstName.value = "";
    //     textLastName.value = "";
    //     textSalary.value = "";

    // }

    // //Update functions go here.
    // function updateEmployee() {

    //     var textEmployeeId = document.getElementById("text-update-employee-id");
    //     var textFirstName = document.getElementById("text-update-first-name");
    //     var textLastName = document.getElementById("text-update-last-name");
    //     var textSalary = document.getElementById("text-update-salary");

    //     var url = 'http://localhost:5120/UpdateEmployee?employeeId=' + textEmployeeId.value + '&lastName=' + textLastName.value + '&firstName=' + textFirstName.value + '&salary=' + textSalary.value;   //An exercise for the reader...

    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = doAfterUpdateEmployee;
    //     xhr.open('GET', url);
    //     xhr.send(null);

    //     function doAfterUpdateEmployee() {
    //         var DONE = 4; // readyState 4 means the request is done.
    //         var OK = 200; // status 200 is a successful return.
    //         if (xhr.readyState === DONE) {
    //             if (xhr.status === OK) {

    //                 var response = JSON.parse(xhr.responseText);

    //                 if (response.result === "success") {
    //                     showEmployees(response.employees);
    //                 } else {
    //                     alert("API Error: " + response.message);
    //                 }
    //             } else {
    //                 alert("Server Error: " + xhr.status + " " + xhr.statusText);
    //             }
    //         }
    //     };

    //     textEmployeeId.value = "";
    //     textFirstName.value = "";
    //     textLastName.value = "";
    //     textSalary.value = "";

    // };

    // function updateEmployeeCancel() {

    //     var textEmployeeId = document.getElementById("text-update-employee-id");
    //     var textFirstName = document.getElementById("text-update-first-name");
    //     var textLastName = document.getElementById("text-update-last-name");
    //     var textSalary = document.getElementById("text-update-salary");

    //     textEmployeeId.value = "";
    //     textFirstName.value = "";
    //     textLastName.value = "";
    //     textSalary.value = "";

    // }

    // //Delete functions go here.
    // function deleteEmployee() {

    //     var textEmployeeId = document.getElementById("text-delete-employee-id");

    //     var url = 'http://localhost:5120/DeleteEmployee?employeeid=' + textEmployeeId.value;

    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = doAfterDeleteEmployee;
    //     xhr.open('GET', url);
    //     xhr.send(null);

    //     function doAfterDeleteEmployee() {
    //         var DONE = 4; // readyState 4 means the request is done.
    //         var OK = 200; // status 200 is a successful return.
    //         if (xhr.readyState === DONE) {
    //             if (xhr.status === OK) {

    //                 var response = JSON.parse(xhr.responseText);

    //                 if (response.result === "success") {
    //                     showEmployees(response.employees);
    //                 } else {
    //                     alert("API Error: " + response.message);
    //                 }
    //             } else {
    //                 alert("Server Error: " + xhr.status + " " + xhr.statusText);
    //             }
    //         }
    //     };

    //     textEmployeeId.value = "";

    // };

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

