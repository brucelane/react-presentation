uniform vec3      iResolution;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy - 0.5;
	float circ = 1.0 - length( uv * 4. );
	fragColor = vec4( circ, circ, 0.0, 1.0 );
}
