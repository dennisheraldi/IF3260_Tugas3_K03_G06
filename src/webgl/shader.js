// Vertex shader and fragement shader if shading is OFF
const vertexShaderText = `
    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    attribute vec4 a_color;

    // uniform mat4 u_matrix;
    uniform mat4 u_model;
    uniform mat4 u_view;
    uniform mat4 u_projection;

    // varying highp vec2 v_texCoord;
    varying highp vec4 v_color;
    
    void main() {
        gl_Position = u_projection * u_view * u_model * a_position;
        // v_texCoord = a_texCoord;
        v_color = a_color;
    }
`;

const fragmentShaderText = `
    precision mediump float;
    // varying highp vec2 v_texCoord;
    // uniform sampler2D uSampler;

    // Passed in from the vertex shader.
    varying vec4 v_color;

    void main() {
        gl_FragColor = v_color;
        // gl_FragColor = texture2D(uSampler, v_texCoord);
    }
`;

// Vertex shader and fragement shader if shading is ON
const vertexShaderTextShading = `
    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    attribute vec3 a_normal;
    attribute vec4 a_color;

    // uniform mat4 u_matrix;
    uniform mat4 u_model;
    uniform mat4 u_view;
    uniform mat4 u_projection;
    uniform mat4 u_color;
    uniform mat4 u_normal;

    varying highp vec2 v_texCoord;
    varying highp vec3 v_shading;
    varying vec4 v_color;

    void main() {
        gl_Position = u_projection * u_view * u_model * a_position;
        // v_texCoord = a_texCoord;
        
        v_color = a_color;

        // Apply lighting effect
  
        highp vec3 ambientLight = vec3(0.2, 0.2, 0.2);
        highp vec3 directionalLightColor = vec3(1, 1, 1);
        highp vec3 directionalVector = normalize(vec3(0.8, 0.0, 1.0));
  
        highp vec4 transformedNormal = u_normal * vec4(a_normal, 1.0);
  
        highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
        v_shading = ambientLight + (directionalLightColor * directional);
    }
`;

const fragmentShaderTextShading = `
    precision mediump float;

    varying vec4 v_color;
    varying vec3 v_shading;

    void main() {
        gl_FragColor = v_color * vec4(v_shading, 1.0);
    }
`;
