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

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

async function animate() {
    // request another frame

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > 500) {
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % 500);

        // Put your drawing code here
        nextFrame = anim[frameIdx];

        state.model.object = nextFrame.object;
        treeview.select("root");
        treeview.destroy();
        treeview.replaceData(root);
        appendDataFromObject(state.model.object, "root");
        treeview.select("root");

        frameIdx = (frameIdx + 1) % anim.length;

        drawScene();
    }
    console.log("Update animation ID:" + animationID);
    animationID = requestAnimationFrame(animate);
}

const toggleSwitchAnimation = document.getElementById("switch-animation");
toggleSwitchAnimation.addEventListener("change", function () {
    if (this.checked) {
        // do something when the switch is on
        document.getElementById("on-off-label-animation").innerHTML = "ON";
        anim = state.model.animation;
        startAnimating(2);
    } else {
        // do something when the switch is off
        document.getElementById("on-off-label-animation").innerHTML = "OFF";
        console.log("Cancel animation ID:" + animationID);
        cancelAnimationFrame(animationID);
    }

    drawScene();
});
