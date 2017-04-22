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
    float n = 0.6;
    float j = 0.554;

    float r0 = length(uv*20. ) ;
    float e0 =  r0;
    
    float r1 = length(uv*3. * sz) ;
    float e1 = smoothstep( r1, g, h ) - smoothstep( r1, n, j );
    uv = rotate(uv,vec2(0),PI/1.5);
    float r2 = length(uv*3. * sz);
    float e2 = smoothstep( r2, g, h ) - smoothstep( r2, n, j );
    uv = rotate(uv,vec2(0),PI/1.5);
    float r3 = length(uv*3. * sz);
    float e3 = smoothstep( r3, g, h ) - smoothstep( r3, n, j );
    vec3 kl = vec3(0.);
    float globalR = length(uv);
    float globalA = atan(uv.y, uv.x) + time*0.5;
    for (int i = 0; i<50; i++) {
        float r = mod(float(i)*345.1, 0.7);
        float a = bands.x*float(i+2) - bands.y*float(i+1);
        a *= 10.;
        //a = a + 0.1 * sin( globalA * 8. + globalR * 9.);

        vec2 center = vec2(cos(a), sin(a))*r*2.*float(i);
        float dist = length(uv - center);
        float brightness = 1./pow(0.001 + dist*100., 2.);
        brightness *= 1. + 0.9*sin(length(center)*7.01 - time);
        vec3 col = vec3(1.,.5,0.1) * brightness * bands.x*1.;
    
        kl += col;
    }
    
    
    
    vec3 m = mix(kl, vec3(e1,e2,e3*e0), (mouse.x/resolution.x)/2.0);//(e1+e2+e3)
	gl_FragColor = vec4(m,1.0);
}