precision mediump float;

// Varyings

varying float v_lighting;

// Main

void main()
{
    css_MixColor = vec4(v_lighting, v_lighting, v_lighting, 1.0);
}