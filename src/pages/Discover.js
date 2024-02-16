import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import p1 from "../images/1.jpg";
import p2 from "../images/2.jpg";
import p3 from "../images/3.jpeg";
import p4 from "../images/4.jpg";
import p5 from "../images/5.jpeg";
import p6 from "../images/6.jpeg";
import p7 from "../images/7.jpeg";
import p8 from "../images/8.jpeg";
import p9 from "../images/9.jpeg";
import jan from "../images/jan.jpeg";
import feb from "../images/feb.jpg";
import march from "../images/march.jpg";
import april from "../images/april.jpg";
import may from "../images/may.jpg";
import june from "../images/june.jpg";
import july from "../images/july.jpg";
import aug from "../images/aug.jpg";
import sept from "../images/sept.jpg";
import oct from "../images/oct.jpg";
import nov from "../images/nov.jpg";
import dec from "../images/dec.jpg";
import bhubaneshwar from "../images/bhubaneshwar.jpg";
import delhi from "../images/DELHI.jpg";
import goa from "../images/goa.jpeg";
import jaipur from "../images/jaipur.jpg";
import ladakh from "../images/ladakh.jpg";
import mumbai from "../images/mumbai.jpg";
import ooty from "../images/ooty.jpeg";
import Last from "../components/Last";

const Discover = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="">
        <div className=" w-[] h-[] bg-orange-100"></div>

        <div className="-mt-[12px]">
          <div className="text-[20px] text-center rounded-md bg-black mt-60 text-white font-bold h-[150px]">
            <p className="text-center ">
              Epic escapes made easy - Your gateway to unforgettable
              experiences!
              <p className="text-center">
                Planning your next vacation? Try one of these exotic and
                comfortable travel ideas to make your holiday memorable. Whether
                a romantic beach vacation, a relaxing family holiday, an
                adventurous trek or a heritage walk, plan the most appropriate
                itinerary within your budget.
              </p>
            </p>
          </div>
        </div>
        <hr></hr>

        <div className="bg-slate-300 flex flex-wrap">
          <div className="display flex">
            <Card ml="60px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p1}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">1) Hills & Mountains</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card ml="20px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p2}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm"> 2) Ancestral Attractions</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card ml="20px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p3}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm"> 3) Sacred Destinations</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>

          <div className="display flex">
            <Card ml="60px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p4}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">4) Weekend Escapes</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card ml="20px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p5}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm"> 5) Adventure Friendly</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card ml="20px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p6}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm"> 6) Taste Bud Fantasies</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>

          <div className="display flex">
            <Card ml="60px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p7}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">7)Relaxation at peak</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card ml="20px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p2}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm"> 8) Affectionate Havens</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card ml="20px" mt="40px">
              <CardBody width="450px" height="200px">
                <Image
                  height="300px"
                  width="500px"
                  sizes="lg"
                  src={p9}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm"> 9)Hiker's Delight</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit asperiores explicabo deleniti facilis quae similique
                    nobis voluptates ullam soluta sint!
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Dive Through
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-slate-300 py-10">
        <div className="ml-[60px] mb-[30px] mt-[30px] text-black font-bold text-[30px]">
          Top Picks For You
        </div>
        <Carousel responsive={responsive}>
          <div className="border-4 w-[300px] h-[350px] ml-[50px] rounded-3xl">
            <div className="relative">
              <img src={goa} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Mysore</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[100px] rounded-3xl">
            <div className="relative">
              <img
                src={delhi}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Agra</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[150px] rounded-3xl">
            <div className="relative">
              <img
                src={bhubaneshwar}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Goa</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[200px] rounded-3xl">
            <div className="relative">
              <img
                src={jaipur}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">jaipur</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={ooty} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Ooty</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img
                src={mumbai}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Kashmir</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img
                src={ladakh}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Varanasi</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img
                src={delhi}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Himachal Pradesh</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img
                src={mumbai}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold"></p>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="bg-slate-300 py-10">
        <div className="ml-[60px] mb-[30px] mt-[30px] text-black font-bold text-[30px]">
          Year - round travel destinatiions
        </div>
        <Carousel responsive={responsive}>
          <div className="border-4 w-[300px] h-[350px] ml-[50px] rounded-3xl">
            <div className="relative">
              <img src={jan} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Mysore</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[100px] rounded-3xl">
            <div className="relative">
              <img src={feb} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Agra</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[150px] rounded-3xl">
            <div className="relative">
              <img
                src={march}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Goa</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[200px] rounded-3xl">
            <div className="relative">
              <img
                src={april}
                className="h-[300px] w-[300px] rounded-3xl"
              ></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">jaipur</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={may} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Ooty</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={june} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Kashmir</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={july} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Varanasi</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={aug} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold">Himachal Pradesh</p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={sept} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold"></p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={oct} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold"></p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={nov} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold"></p>
            </div>
          </div>

          <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
            <div className="relative">
              <img src={dec} className="h-[300px] w-[300px] rounded-3xl"></img>
            </div>
            <div className="absolute ml-[120px] text-black mt-3">
              <p className="text-[16px] text-lg font-bold"></p>
            </div>
          </div>
        </Carousel>
      </div>
      <Last></Last>
    </div>
  );
};

export default Discover;
