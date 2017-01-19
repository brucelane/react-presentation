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

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  webgl: require("../assets/webgl.jpg"),
  vdlogo: require("../assets/videodromm-logo.png"),
  formidablelogo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#857D41",
  secondary: "#BA714A"
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
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.webgl.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Shaders?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="glsl"
              source={require("raw!../assets/example.frag")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
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
