let lastTime = 0;
let forward_x = true;
let forward_y = true;
let animationID;

// store the animation data frame by frame
let anim = [];

// store animation object reference
let anim_obj_ref = [];

// find the animation object reference

function assignAnimObjectReference() {
    for (let index = 0; index < anim.length; index++) {
        const element = anim[index].object;
        anim_obj_ref.push({});
        appendObject(element, index);
    }
}

function appendObject(object, index) {
    anim_obj_ref[index][object.name.replace(/\s/g, "")] = object;
    for (let i = 0; i < object.children.length; i++) {
        appendObject(object.children[i].object, index);
    }
}

let frameIdx = 0;

assignAnimObjectReference();

async function animate() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    nextFrame = anim[frameIdx];

    state.model = nextFrame;
    treeview.select("root");
    treeview.destroy();
    treeview.replaceData(root);
    appendDataFromObject(state.model.object, "root");
    treeview.select("root");

    frameIdx = (frameIdx + 1) % anim.length;

    drawScene();

    animationID = requestAnimationFrame(animate);
    console.log("Update animation ID:" + animationID);
}

const toggleSwitchAnimation = document.getElementById("switch-animation");
toggleSwitchAnimation.addEventListener("change", function () {
    if (this.checked) {
        // do something when the switch is on
        document.getElementById("on-off-label-animation").innerHTML = "ON";
        anim = state.model.animation;
        animationID = requestAnimationFrame(animate);
    } else {
        // do something when the switch is off
        document.getElementById("on-off-label-animation").innerHTML = "OFF";
        console.log("Cancel animation ID:" + animationID);
        cancelAnimationFrame(animationID);
    }

    drawScene();
});
