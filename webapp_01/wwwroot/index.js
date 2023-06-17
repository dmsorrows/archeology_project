function webapp_02() {

    //Get elements

    var textSearch = document.getElementById("text-search");

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

    function showArtifacts(artifacts) {
        var artifactTableText = '<table class="table table-striped table-sm"><thead><tr><th scope="col"Artifact Id</th><th scope="col"Project Number</th><th scope="col">Site Number</th><th scope="col">Accession Number</th><th scope="col">FSN</th><th scope="col">Unit</th><th scope="col">Depth (cmbd)</th><th scope="col">Excavation Date</th><th scope="col">Period</th><th scope="col">Level 1 Id</th><th scope="col">Level 1</th><th scope="col">Level 2 Id</th><th scope="col">Level 2</th><th scope="col">Level 3 Id</th><th scope="col">Level 3</th><th scope="col">Level 4 Id</th><th scope="col">Level 4</th><th scope="col">Additional Description</th><th scope="col">Artifact Count</th><th scope="col">Weight (g)</th><th scope="col">Analyzer</th><th scope="col">Date Analyzed</th><th scope="col">Provenience Id</th></tr></thead><tbody>';

        for (var i = 0; i < artifacts.length; i++) {
            var artifact = artifacts[i];

            artifactTableText = artifactTableText + '<tr><th scope="row">' + artifact.artifactId + '</th><td>' + artifact.projectNumber + '</td><td>' + artifact.siteNumber + '</td><td>' + artifact.accessionNumber + '</td><td>' + artifact.fieldSerialNumber + '</td><td>' + artifact.unitNumber + '</td><td>' + artifact.depth + '</td><td>' + artifact.excavationDate + '</td><td>' + artifact.periodName + '</td><td>' + artifact.level1Id + '</td><td>' + artifact.level1Name + '</td><td>' + artifact.level2Id + '</td><td>' + artifact.level2Name + '</td><td>' + artifact.level3Id + '</td><td>' + artifact.level3Name + '</td><td>' + artifact.level4Id + '</td><td>' + artifact.level4Name + '</td><td>' + artifact.additionalDescription + '</td><td>' + artifact.artifactCount + '</td><td>' + artifact.artifactWeight + '</td><td>' + artifact.labTechInitials + '</td><td>' + artifact.dateAnalyzed + '</td><td>' + artifact.provenienceId + '</td></tr>';
        }

        artifactTableText = artifactTableText + '</tbody></table>';

        artifactTable.innerHTML = artifactTableText;
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
}

webapp_02();

