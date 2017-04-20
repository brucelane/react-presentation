float a = 1.0;
float b = 1.0;
float radius = 0.5;

float ellipse(vec2 p)
{
    return smoothstep(abs(length( p )-radius),0.46,0.49);
}
void main() {
    
	vec2 uv = (gl_FragCoord.xy / resolution.xy ) - 0.5;
    uv.y *= resolution.y/resolution.x;
    
    float k = 1.0-ellipse(uv);
    vec2 sz = vec2(1.0, 2.4);

    float g = 0.6;
    float h = 0.59;
    float i = 0.6;
    float j = 0.554;

    float r0 = length(uv*20. ) ;
    float e0 =  r0;
    
    float r1 = length(uv*3. * sz) ;
    float e1 = smoothstep( r1, g, h ) - smoothstep( r1, i, j );
    uv = rotate(uv,vec2(0),PI/1.5);
    float r2 = length(uv*3. * sz);
    float e2 = smoothstep( r2, g, h ) - smoothstep( r2, i, j );
    uv = rotate(uv,vec2(0),PI/1.5);
    float r3 = length(uv*3. * sz);
    float e3 = smoothstep( r3, g, h ) - smoothstep( r3, i, j );
    float m = mix(k, e1+e2+e3, mouse.x/resolution.x/2.0);//(e1+e2+e3)
	gl_FragColor = vec4(vec3( e1,e2,e3 ),1.);
}