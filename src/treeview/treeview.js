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
}

var treeview = new Treeview(".treeview");
treeview.on("select", (event) => {
    var node = event.target;
    var data = node.dataset;
    data = JSON.parse(JSON.stringify(data));
    display.innerHTML = `<div class="label">Selected Component: <br> ${data.label}</div>`;
    if (data.object != null) {
        data.object = JSON.parse(data.object.replace(/'/g, '"'));
    }
    console.log(data);
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
    for (var i = 0; i < object.children.length; i++) {
        appendDataFromObject(object.children[i].object, key);
    }
}

appendDataFromObject(state.model.object, "root");
treeview.select("root");
