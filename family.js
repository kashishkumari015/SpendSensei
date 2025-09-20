document.addEventListener("DOMContentLoaded", loadFamily);

function addFamilyMember() {
    let name = document.getElementById("name").value;
    let relation = document.getElementById("relation").value;
    let age = document.getElementById("age").value;
    let contact = document.getElementById("contact").value;

    if (!name || !relation || !age) {
        alert("Name, Relation, and Age are required!");
        return;
    }

    let member = { name, relation, age, contact };

    let family = JSON.parse(localStorage.getItem("family")) || [];
    family.push(member);
    localStorage.setItem("family", JSON.stringify(family));

    loadFamily();

    document.getElementById("name").value = "";
    document.getElementById("relation").value = "";
    document.getElementById("age").value = "";
    document.getElementById("contact").value = "";
}

function loadFamily() {
    let family = JSON.parse(localStorage.getItem("family")) || [];
    let familyList = document.getElementById("family-list");
    let familyTree = document.getElementById("family-tree");
    
    familyList.innerHTML = "";
    familyTree.innerHTML = "";

    family.forEach((member, index) => {
        let row = `<tr>
            <td>${member.name}</td>
            <td>${member.relation}</td>
            <td>${member.age}</td>
            <td>${member.contact || "N/A"}</td>
            <td><button onclick="deleteMember(${index})">Delete</button></td>
        </tr>`;
        
        familyList.innerHTML += row;

        let treeNode = document.createElement("div");
        treeNode.className = "tree-node";
        treeNode.innerText = `${member.relation}: ${member.name} (${member.age} yrs)`;
        familyTree.appendChild(treeNode);
    });
}

function deleteMember(index) {
    let family = JSON.parse(localStorage.getItem("family")) || [];
    family.splice(index, 1);
    localStorage.setItem("family", JSON.stringify(family));
    loadFamily();
}
