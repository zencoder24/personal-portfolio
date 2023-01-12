const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = vec3(0.0);
    vec3 c2 = vec3(0.984,0.573,0.235);
    vec3 c1 = vec3(0.984,0.443,0.522);
    color += mix(c1, c2, vUv.x);
    gl_FragColor = vec4(color, 3.0);
}




`;

export default fragmentShader;
