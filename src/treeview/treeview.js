class Treeview {
    constructor(treeviewId) {
        this.treeviewId = treeviewId;
        this.selected = null;
    }
    on(eventName, fn) {
        var me = this;
        switch (eventName) {
            case "select": {
                document
                    .querySelector(this.treeviewId)
                    .addEventListener("click", (event) => {
                        if (event.target.nodeName == "SUMMARY") {
                            if (me.selected != null) {
                                document
                                    .getElementById(me.selected)
                                    .removeAttribute("selected");
                            }
                            document
                                .getElementById(event.target.id)
                                .setAttribute("selected", "true");
                            // console.log(event.target.id);
                            me.selected = event.target.id;
                            event.target.setAttribute(
                                "open",
                                !event.target.parentNode.hasAttribute("open")
                            );
                            fn(event);
                        }
                    });
                break;
            }
        }
    }
    appendData(data, targetId) {
        document.getElementById(targetId).parentNode.innerHTML +=
            this.walkData(data);
    }
    replaceData(data, targetId) {
        if (targetId != null) {
            var target = document.getElementById(targetId);
            target.outerHTML = this.walkData(data);
        } else {
            var target = document.querySelector(this.treeviewId);
            target.innerHTML = this.walkData(data);
        }
    }
    walkData(data) {
        var me = this;
        var buf = Object.keys(data).map(
            (key) => `<details><summary  id="${key}" ${Object.keys(data[key])
                .map((subkey) => {
                    return subkey != "children"
                        ? `data-${subkey}="${data[key][subkey]}"`
                        : " ";
                })
                .join(" ")}>${data[key].label}</summary>
       ${data[key].children ? me.walkData(data[key].children) : ""}</details>`
        );
        return buf.join("\n");
    }
    open(id) {
        var node = document.getElementById(id);
        while (node.parentNode.nodeName == "DETAILS") {
            node = node.parentNode;
            node.setAttribute("open", "true");
        }
    }
    close(id) {
        var node = document.getElementById(id).parentNode;
        node.removeAttribute("open");
        var detailNodes = node.querySelectorAll("DETAILS");
        console.log(detailNodes);
        detailNodes.forEach((node) => node.removeAttribute("open"));
    }
    select(id) {
        this.open(id);
        document.getElementById(id).focus();
        document.getElementById(id).click();
    }
    destroy() {
        document.querySelector(this.treeviewId).innerHTML = "";
    }
}

var selectedComponent = "";

var treeview = new Treeview(".treeview");
treeview.on("select", (event) => {
    var node = event.target;
    var data = node.dataset;
    data = JSON.parse(JSON.stringify(data));
    display.innerHTML = `<div class="label">Selected Component: <br> ${data.label}</div>`;
    if (data.object != null) {
        data.object = JSON.parse(data.object.replace(/'/g, '"'));
    }
    state.selected_component = data.label.replace(/\s/g, "");
    // console.log(state.selected_component);
    // console.log(state.object_references[data.label.replace(/\s/g, "")]);
    document.getElementById("rotasi-x").value =
        state.object_references[state.selected_component].transform.rotation.x;
    document.getElementById("value-rotasi-x").innerHTML =
        state.object_references[state.selected_component].transform.rotation.x;
    document.getElementById("rotasi-y").value =
        state.object_references[state.selected_component].transform.rotation.y;
    document.getElementById("value-rotasi-y").innerHTML =
        state.object_references[state.selected_component].transform.rotation.y;
    document.getElementById("rotasi-z").value =
        state.object_references[state.selected_component].transform.rotation.z;
    document.getElementById("value-rotasi-z").innerHTML =
        state.object_references[state.selected_component].transform.rotation.z;
    document.getElementById("translasi-x").value =
        state.object_references[
            state.selected_component
        ].transform.translation.x;
    document.getElementById("value-translasi-x").innerHTML =
        state.object_references[
            state.selected_component
        ].transform.translation.x;
    document.getElementById("translasi-y").value =
        state.object_references[
            state.selected_component
        ].transform.translation.y;
    document.getElementById("value-translasi-y").innerHTML =
        state.object_references[
            state.selected_component
        ].transform.translation.y;
    document.getElementById("translasi-z").value =
        state.object_references[
            state.selected_component
        ].transform.translation.z;
    document.getElementById("value-translasi-z").innerHTML =
        state.object_references[
            state.selected_component
        ].transform.translation.z;
    document.getElementById("scaling-x").value =
        state.object_references[state.selected_component].transform.scaling.x;
    document.getElementById("value-scaling-x").innerHTML =
        state.object_references[state.selected_component].transform.scaling.x;
    document.getElementById("scaling-y").value =
        state.object_references[state.selected_component].transform.scaling.y;
    document.getElementById("value-scaling-y").innerHTML =
        state.object_references[state.selected_component].transform.scaling.y;
    document.getElementById("scaling-z").value =
        state.object_references[state.selected_component].transform.scaling.z;
    document.getElementById("value-scaling-z").innerHTML =
        state.object_references[state.selected_component].transform.scaling.z;

    centerPoints = centerOfMass(
        state.object_references[state.selected_component].position
    );
});

var root = {
    root: {
        label: "Root",
    },
};

treeview.replaceData(root);

function appendDataFromObject(object, parentId) {
    var key = "class:" + object.name.replace(/\s/g, "");
    var obj = {};
    obj[key] = {
        label: object.name,
        object: JSON.stringify(object).replace(/"/g, "'"),
    };
    treeview.appendData(obj, parentId);

    state.object_references[object.name.replace(/\s/g, "")] = object;
    for (var i = 0; i < object.children.length; i++) {
        appendDataFromObject(object.children[i].object, key);
    }
}

appendDataFromObject(state.model.object, "root");
treeview.select("root");
