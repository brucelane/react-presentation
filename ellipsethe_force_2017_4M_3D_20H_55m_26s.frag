/* Watch fullscreen with F11 key, move the mouse! Editor by Shawn Lawson.
 .--. .-.             .-.              .--.    .-..-.             _              .---.        .-.      .-.                      
: .--': :             : :             : .; ;   : `' :            :_;         _   : .; :      .' `.     : :                      
`. `. : `-.  .--.   .-' : .--. .--.    ;  '_   : .. :.-..-. .--. .-. .--.   :_:  :   .' .--. `. .'.--. : `-.  .--.   .--.  .--. 
 _`, :: .. :' .; ; ' .; :' '_.': ..'  : :;` ;  : :; :: :; :`._-.': :'  ..'   _   : .; :' .; ; : :'  ..': .. :' .; ; `._-.'`._-.'
`.__.':_;:_;`.__,_;`.__.'`.__.':_;    `.__._;  :_;:_;`.__.'`.__.':_;`.__.'  :_;  :___.'`.__,_;:_;`.__.':_;:_;`.__,_;`.__.'`.__.'
*/

float a = 1.0;
float b = 1.6;
float radius = 0.96;

float ellipse(vec2 p)
{
    return smoothstep(abs(length( p*vec2(a,b) )-radius*bands.y),0.56,0.64);
}
void main(  ) {
    vec2 st = uv();
    vec3 c= vec3(0.0);
    //st = rotate(st, vec2(0.), bands.z);
	float r  = ellipse(st); 

    st = rotate(st, vec2(0.), PI/3.0);
    float g =ellipse(st);
    
    st = rotate(st, vec2(0.), PI/3.0);
    float b = ellipse(st);

    float circ=1.0-circle(0.,0.,0.65,0.3/bands.y);
 
    c = vec3(r,g,b)*circ;
    //c = vec3(circ);c = vec3(max(max(r,b),g));
    if (bands.x<0.97) c=1.0 - c;

    gl_FragColor = vec4(c, 1.0);
    
} 