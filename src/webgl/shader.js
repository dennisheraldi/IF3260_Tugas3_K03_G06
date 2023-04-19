// Vertex shader and fragement shader if shading is OFF
const vertexShaderText = `
    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    attribute vec4 a_color;
    attribute vec3 a_normal;

    // uniform mat4 u_matrix;
    uniform mat4 u_model;
    uniform mat4 u_view;
    uniform mat4 u_projection;
    uniform mat4 u_normal;
    uniform mat4 u_color;
    uniform int u_textureMode;
    uniform bool useShading;

    varying highp vec2 v_texCoord;
    varying highp vec4 v_color;
    varying highp vec3 v_shading;
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    varying highp vec3 v_normal;
    
    void main() {
        gl_Position = u_projection * u_view * u_model * a_position;

        v_texCoord = a_texCoord;
        v_color = vec4(0.3, 0.6, 0.7, 1.0);


        v_worldPosition = (u_model * a_position).xyz;
        v_worldNormal = mat3(u_model) * a_normal;
    }
`;

const fragmentShaderText = `
    const int ImageTexture = 1;
    const int EnvironmentTexture = 2;
    const int BumpTexture = 3;

    uniform bool useShading;
    uniform int u_textureMode;

    precision mediump float;
    varying highp vec2 v_texCoord;

    // Passed in from the vertex shader.
    varying vec4 v_color;

    // Environment
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    uniform vec3 u_worldCameraPosition;

    varying vec3 v_shading;

    uniform sampler2D u_samplerImage;
    uniform samplerCube u_samplerEnvironment;

    varying highp vec3 v_normal;

    void main() {
        vec4 v_colorModified = v_color;

        if (u_textureMode == ImageTexture) {
            v_colorModified = texture2D(u_samplerImage, v_texCoord);
        } else if (u_textureMode == EnvironmentTexture) {
            vec3 worldNormal = normalize(v_worldNormal);
            vec3 eyeToSurfaceDir = normalize(v_worldPosition - u_worldCameraPosition);
            vec3 direction = reflect(eyeToSurfaceDir, worldNormal);
    
            v_colorModified = textureCube(u_samplerEnvironment, direction);
        } else if (u_textureMode == BumpTexture) {
            // TODO
        }

        if (useShading) {
            vec3 normal = normalize(v_worldNormal);
            float directional = max(dot(normal, vec3(1.0, 0.0, 1.0)), 0.0);
            vec3 ambientLight = vec3(0.3, 0.3, 0.3);
            vec3 light = ambientLight + directional;

            v_colorModified.rgb *= light;
        };

        gl_FragColor = v_colorModified;
    }
`;

// Vertex shader and fragement shader if shading is ON
// const vertexShaderTextShading = `
//     attribute vec4 a_position;
//     attribute vec2 a_texCoord;
//     attribute vec3 a_normal;
//     attribute vec4 a_color;

//     uniform mat4 u_model;
//     uniform mat4 u_view;
//     uniform mat4 u_projection;
//     uniform mat4 u_color;
//     uniform mat4 u_normal;

//     varying highp vec2 v_texCoord;
//     varying highp vec3 v_shading;
//     varying vec4 v_color;

//     void main() {
//         gl_Position = u_projection * u_view * u_model * a_position;
//         v_texCoord = a_texCoord;
        
//         // v_color = a_color;

//         // Apply lighting effect
  
//         highp vec3 ambientLight = vec3(0.2, 0.2, 0.2);
//         highp vec3 directionalLightColor = vec3(1, 1, 1);
//         highp vec3 directionalVector = normalize(vec3(0.8, 0.0, 1.0));
  
//         highp vec4 transformedNormal = u_normal * vec4(a_normal, 1.0);
  
//         highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
//         v_shading = ambientLight + (directionalLightColor * directional);
//     }
// `;

// const fragmentShaderTextShading = `
//     precision mediump float;

//     uniform sampler2D uSampler;

//     varying vec4 v_color;
//     varying vec3 v_shading;
//     varying highp vec2 v_texCoord;

//     void main() {
//         // gl_FragColor = v_color * vec4(v_shading, 1.0);
//         gl_FragColor = texture2D(uSampler, v_texCoord) * vec4(v_shading, 1.0);
//     }
// `;
