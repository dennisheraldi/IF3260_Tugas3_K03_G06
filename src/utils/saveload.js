var rootTemplate = {
    object: {
        name: "Root",
        position: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        color: [],
        texture_type: 0,
        texture_coords: [],
        model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        transform: {
            rotation: {
                x: 0,
                y: 0,
                z: 0,
            },
            translation: {
                x: 0,
                y: 0,
                z: 0,
            },
            scaling: {
                x: 1,
                y: 1,
                z: 1,
            },
        },
        children: [
            {
                object: {}
            }
        ]
    }
}

function save() {
    // stringify state.model and save to json
    let blob = new Blob([JSON.stringify(state.model)], {
        type: "text/plain;charset=utf-8",
    });
    let blobUrl = URL.createObjectURL(blob);
    let link = document.getElementById("downloader-link");
    link.href = blobUrl;
    link.download = "model.json";
    link.click();
}

function saveComponent() {
    // stringify stat and save to json
    let component = JSON.parse(JSON.stringify(rootTemplate))
    // for every field in component.object, assign the same field from state.model.object
    for (let field in component.object) {
        component.object[field] = state.model.object[field]
    }
    component.object.children[0].object = state.object_references[state.selected_component]
    let blob = new Blob([JSON.stringify(component)], { type: "text/plain;charset=utf-8" });
    let blobUrl = URL.createObjectURL(blob);
    let link = document.getElementById("downloader-link");
    link.href = blobUrl;
    link.download = "model.json";
    link.click();
}

async function load() {
    window.showOpenFilePicker().then(async (handle) => {
        const file = await handle[0].getFile();
        const text = await file.text();
        const model = JSON.parse(text);
        state.model = model;
        state.model_type = "loaded";
        treeview.select("root");
        treeview.destroy();
        treeview.replaceData(root);
        appendDataFromObject(state.model.object, "root");
        treeview.select("root");
        drawScene();
    });
}

document.getElementById("save-btn").addEventListener("click", save);

document.getElementById("save-component-btn").addEventListener("click", saveComponent);

document.getElementById("load-btn").addEventListener("click", load);
