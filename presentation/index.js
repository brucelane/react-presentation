// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// codeslide from https://github.com/thejameskyle/spectacle-code-slide
import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  webgl: require("../assets/webgl.jpg"),
  vdlogo: require("../assets/videodromm-logo.jpg"),
  neo: require("../assets/neo.jpg"),
  circle: require("../assets/circle.jpg"),
  formidablelogo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#857D41",
  secondary: "#540804"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Creative Coding
            </Heading>
            <Heading size={1} fit caps>
              WebGL fragment shaders
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>By Bruce LANE</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Fragment shaders</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Runs on GPU
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  C-style syntax
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/example.frag")}
            ranges={[
              { loc: [0, 1968], title: "Shader source example" },
              { loc: [0, 1], title: "Variable: iResolution" },
              { loc: [0, 1], note: "Viewport resolution: vec3(1280.0, 720.0, 0)" },
              { loc: [1, 2], title: "Variable: time from start" },
              { loc: [1, 2], note: "shader playback time (in seconds)" },
              { loc: [3, 4], title: "main entry point" },
              { loc: [3, 4], note: "in: coordinates, out: color" },
              { loc: [5, 6], title: "normalize the drawing area" },
              { loc: [5, 6], note: "uv.x and uv.y from 0.0 to 1.0" },
              { loc: [7, 8], title: "color animation" },
              { loc: [7, 8], image: images.webgl },
              { loc: [7, 8], image: images.neo }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/circle.frag")}
            ranges={[
              { loc: [0, 1968], title: "Circle example" },
              { loc: [4, 5], title: "center the drawing" },
              { loc: [4, 5], note: "uv.x and uv.y now from -0.5 to 0.5" },
              { loc: [5, 6], title: "length = distance from center" },
              { loc: [5, 6], note: "circ = 4.0 in the center, 0.0 on the sides" },
              { loc: [6, 7], note: "red and green computed from circ" },
              { loc: [6, 7], image: images.circle },
              { loc: [7, 8], image: images.neo }
            ]}
          />

          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Videodromm open source project
            </Heading>
            <Link target="_new" href="https://github.com/videodromm">
              <Text bold caps textColor="tertiary">View on Github</Text>
              <Image width="70%" src={images.vdlogo}/>
            </Link>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with Spectacle from
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.formidablelogo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
