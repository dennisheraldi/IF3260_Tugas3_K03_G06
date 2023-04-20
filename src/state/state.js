// Define the state of the app
const initialState = {
    // Initial state
    model: fox,
    model_type: "preserved",
    projection_type: "orthographic", // "orthographic" or "perspective" or "oblique"
    view_field: 90, // 0 - 180,
    f_factor: 0.5, // 0 - 1
    beta_angle: 45, // 0 - 360
    is_shading: false, // true or false
    camera_radius: 0,
    camera_angle: 0,
    center_points: [0, 0, 0],
    selected_component: "",
    object_references: {},
};

// freeze initialState
var state = JSON.parse(JSON.stringify(initialState));

function updateState() {
    state.projection_type = document.querySelector(
        'input[name="projection"]:checked'
    ).value;
    state.view_field = document.getElementById("view-field").value;
    state.f_factor = document.getElementById("f-factor").value;
    state.beta_angle = document.getElementById("beta-angle").value;
    state.is_shading = document.querySelector(
        '.toggle-switch input[type="checkbox"]'
    ).checked;
    state.object_references[state.selected_component].transform = {
        rotation: {
            x: document.getElementById("rotasi-x").value,
            y: document.getElementById("rotasi-y").value,
            z: document.getElementById("rotasi-z").value,
        },
        translation: {
            x: document.getElementById("translasi-x").value,
            y: document.getElementById("translasi-y").value,
            z: document.getElementById("translasi-z").value,
        },
        scaling: {
            x: document.getElementById("scaling-x").value,
            y: document.getElementById("scaling-y").value,
            z: document.getElementById("scaling-z").value,
        },
    };
    state.camera_radius = document.getElementById("camera-radius").value;
    state.camera_angle = document.getElementById("camera-angle").value;
    state.texture_type = document.querySelector(
        'input[name="texture"]:checked'
    ).value;
}

function resetState() {
    // set everything in state to initial state except model and object_references
    var holder = state.object_references;
    state = JSON.parse(JSON.stringify(initialState));
    state.model = JSON.parse(JSON.stringify(initial_models[current_model_index]));
    models[current_model_index] = JSON.parse(JSON.stringify(initial_models[current_model_index]));
    state.object_references = holder;
    document.getElementById("view-field").value = state.view_field;
    document.getElementById("value-view-field").innerHTML = state.view_field;
    document.getElementById("f-factor").value = state.f_factor;
    document.getElementById("value-f-factor").innerHTML = state.f_factor;
    document.getElementById("beta-angle").value = state.beta_angle;
    document.getElementById("value-beta-angle").innerHTML = state.beta_angle;
    document.getElementById("camera-radius").value = state.camera_radius;
    // document.getElementById("value-camera-radius").innerHTML = state.camera_radius;
    document.getElementById("camera-angle").value = state.camera_angle;
    document.getElementById("value-camera-angle").innerHTML =
        state.camera_angle;
    treeview.select("root");
    treeview.destroy();
    treeview.replaceData(root);
    appendDataFromObject(state.model.object, "root");
    treeview.select("root");
    drawScene();
}

// set listener to reset-btn
document.getElementById("reset-btn").addEventListener("click", (e) => {
    resetState();
});

models = [fox, human, chicken, dog];
initial_models = JSON.parse(JSON.stringify(models));
current_model_index = 0;
// set listener to model selection radio buttons
var modelSelection = document.querySelectorAll('input[name="model"]');
modelSelection.forEach((model) => {
    model.addEventListener("change", (e) => {
        state.model = models[e.target.value];
        current_model_index = e.target.value;
        state.model_type = "preserved";
        treeview.select("root");
        treeview.destroy();
        treeview.replaceData(root);
        appendDataFromObject(state.model.object, "root");
        treeview.select("root");
        drawScene();
    });
});

var textureSelection = document.querySelectorAll('input[name="texture"]');
textureSelection.forEach((texture) => {
    texture.addEventListener("change", (e) => {
        state.object_references[state.selected_component].texture_type =
            e.target.value;

        // change all texture type if root
        if (state.selected_component == "Root") {
            for (const key in state.object_references) {
                if (state.object_references.hasOwnProperty(key)) {
                    state.object_references[key].texture_type = e.target.value;
                }
            }
        }
        drawScene();
    });
});
