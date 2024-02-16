import React from 'react'
import mysore from "../assets/mysore.jpg";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import palace from "../assets/palace.jpg";
import temple from "../assets/temple.jpg";
import park from "../assets/park.jpg";
import tipu from "../assets/tipu.jpeg";
import lalithha from "../assets/lalithha.jpg";
import Last from '../components/Last';

const Mysore = () => {
  return (
    <div>
      <div>
        <div className=" w-[] h-[] bg-orange-100">
          <div className="">
            <img src={mysore} className="bg-black"></img>
          </div>
        </div>
        <div>
          <p className="-mt-80 text-white text-center font-bold text-[40px]">
            MYSURU (Mysore)<br></br>{" "}
            <p className="text-[30px]">City of Palaces, yoga and gardens</p>
          </p>
        </div>
        <div className="mt-60">
          <div className="text-[20px] text-center rounded-md">
            <p>
              Boasting a rich royal heritage that is reinstated by the many
              monuments that dot its premises, Mysuru is nestled at the
              foothills of the picturesque Chamundi Hill in Karnataka. The city
              is a melange of the old and the new, its small-town charm well
              preserved in its palaces and well-laid out gardens. It also holds
              spirituality close to its heart that is evident from the various
              temples, churches and mosques here. Popularly called the Ivory
              city as most of its buildings are painted in ivory colour, it is
              an ideal destination for the modern-day traveller – it has
              excellent infrastructure and plenty of options for accommodation
              options ranging from the modest to the luxurious, and it offers an
              abundance of places of historical and natural significance. It
              also has a host of eateries that serve delicious South Indian
              fares.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="text-[30px] font-bold bg-slate-300">
          <p>Places of interests in Mysore</p>
        </div>

        <div className="bg-slate-300 flex">
          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={palace}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Mysore Palace</Heading>
                <Text>
                  Located at the heart of the city, the Mysore Palace or Amba
                  Vilas is a three-storeyed majestic monument that leaves
                  onlookers mesmerised with its beauty.
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
                src={temple}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Sri Chamundeshwari Temple</Heading>
                <Text>
                  The Chamundeshwari Temple is a Hindu temple located on the top
                  of Chamundi Hills.
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
                src={park}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Rajiv Gandhi National Park</Heading>
                <Text>
                  Also known as Nagarhole National Park, it is one of the
                  premier tiger reserves along with the adjoining Bandipur Tiger
                  Reserve and is a part of Nilgiri Biosphere Reserve.
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
                src={tipu}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Tipu Summer Palace</Heading>
                <Text>
                  Also known as Dariya Daulat Bagh (translating to garden of the
                  sea of wealth), the summer palace of Tipu Sultan was built in
                  1784 AD.
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
                src={lalithha}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Lalitha Mahal Palace</Heading>
                <Text>
                  Located on a hillock at the foothills of the Chamundi Hills,
                  Lalitha Mahal Palace, is the second-largest palace in the city
                  of palaces, as Mysuru is fondly called.
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

export default Mysore
