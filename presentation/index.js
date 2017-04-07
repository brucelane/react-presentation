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
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/example.frag")}
            ranges={[
              { loc: [0, 1968], title: "Shader source example" },
              { loc: [1, 2], title: "variable: iResolution" },
              { loc: [1, 2], note: "vec3(1280.0, 720.0, 0)" },
              { loc: [2, 3], title: "variable: time from start" },
              { loc: [2, 3], note: "0.0 to the end of times" },
              { loc: [4, 7], image: images.webgl },
              { loc: [8, 10] }
              // ...
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Creative Coding
            </Heading>
            <Heading size={1} fit caps>
              WebGL fragment shaders
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>By Bruce LANE</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="What is webGL?">
            <Image src={images.neo.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Shaders?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>C-style</li><li>uniforms</li></ul>">
            <CodePane
              lang="glsl"
              source={require("raw!../assets/example.frag")}
              margin="20px auto"
            />
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
                  C-style
                </Heading>
              </Fill>
            </Layout>
          </Slide>
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
