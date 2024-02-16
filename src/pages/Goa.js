import React from 'react'
import goa from "../assets/goa.jpg";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import anjuna from "../assets/anjuna.jpg";
import jesus from "../assets/jesus.jpg";
import wild from "../assets/wlld.jpg";
import nag from "../assets/nag.jpeg";
import mus from "../assets/mus.jpeg";
import Last from '../components/Last';


const Goa = () => {
  return (
    <div>
      <div>
        <div className=" w-[] h-[] bg-orange-100">
          <div className="">
            <img src={goa} className="bg-black h-[1000px] w-[1550px]"></img>
          </div>
        </div>
        <div>
          <p className="-mt-80 text-white text-center font-bold text-[40px]">
            GOA<br></br>{" "}
            <p className="text-[30px]">Land of sun, sand and spices</p>
          </p>
        </div>
        <div className="mt-60">
          <div className="text-[20px] text-center rounded-md">
            <p>
              The pocket-sized paradise of Goa is a traveller's dream. Sun, sea,
              sand, spices, spirituality and seafood, along with a balmy
              weather, call to the soul of trekkers, backpackers, nature lovers
              and those who simply want to languish in its slow-paced and
              relaxed vibes. Located by the glistening waters of the Arabian Sea
              on India’s western coast, the state of Goa is renowned for its
              breathtaking beaches, rich culture and pristine natural beauty.
              Formerly a Portuguese colony, Goa offers travellers a chance to
              experience a unique blend of sandy shores, forests, monuments and
              delectable cuisine, attracting tourists across age groups.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="text-[30px] font-bold bg-slate-300">
          <p>Places of interests in Goa</p>
        </div>

        <div className="bg-slate-300 flex">
          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={anjuna}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Anjuna Beach</Heading>
                <Text>
                  Renowned for its serene vistas of swaying palms, golden sand
                  and the unusual rock formations overlying a cove of white
                  sand, Anjuna Beach is located about 18 km away from Panaji.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Explore
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={jesus}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Basilica Of Bom Jesus</Heading>
                <Text>
                  Probably the most famous church in Goa and one of the most
                  revered by Christians globally, the Basilica of Bom Jesus in
                  Old Goa is famed for housing the mortal remains of St Francis
                  Xavier.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Explore
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={wild}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Bhagwan Mahavir Wildlife Sanctuary</Heading>
                <Text>
                  Nestled at the foothills of the Western Ghats, this sanctuary
                  is spread across an area of 240 sq km and is the largest of
                  Goa's wildlife reserves.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Explore
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={nag}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Naguesh Temple</Heading>
                <Text>
                  Located about 25 km from the state capital, this temple is
                  dedicated to Lord Naguesh, known as Lord Nagnath in ancient
                  times, who is believed to be an incarnation of Lord Shiva.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Explore
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={mus}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Goa State Museum</Heading>
                <Text>
                  The Goa State Museum, located in the Old Secretariat, Panaji,
                  was set up with an aim to preserve the arts and antiquities of
                  the state, along with objects of cultural significance.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Explore
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
          </div>
          <Last></Last>
    </div>
  );
}

export default Goa
