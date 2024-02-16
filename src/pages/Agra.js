import React from 'react'

import agra from "../assets/Agra1.avif";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import taj from "../assets/taj.jpg";
import fort from "../assets/fort.jpg";
import sikri from "../assets/sikri.jpg";
import bird from "../assets/bird.jpg";
import ram from "../assets/ram.jpg";
import Last from '../components/Last';

const Agra = () => {
  return (
    <div>
      <div>
        <div className=" w-[] h-[] bg-orange-100">
          <div className="">
            <img src={agra} className="bg-black h-[1000px] w-[1550px]"></img>
          </div>
        </div>
        <div className="text-center">
          <p className="-mt-80 text-white text-center font-bold text-[40px]">
            AGRA<br></br> <p className="text-[30px]">City of the Taj Mahal</p>
          </p>
        </div>
        <div className="mt-60">
          <div className="text-[20px] text-center rounded-md">
            <p>
              The city of the Taj Mahal, one of the seven wonders of the world,
              Agra in Uttar Pradesh is India's most popular tourist destination.
              Steeped in history, this ancient city is dotted with monuments,
              architectural wonders and beautifully landscaped gardens, which
              are remnants of the Mughal reign's majestic legacy. The city also
              enjoys a vibrant culinary scene while preserving its exquisite
              arts and crafts.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="text-[30px] font-bold bg-slate-300">
          <p>Places of interests in Agra</p>
        </div>

        <div className="bg-slate-300 flex">
          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={taj}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Taj Mahal</Heading>
                <Text>
                  Mughal emperor Shah Jahan, the creator of the Taj Mahal, said
                  that the beauty of the monument made “the sun and the moon
                  shed tears from their eyes”.
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
                src={fort}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Agra Fort</Heading>
                <Text>
                  Built by Mughal emperor Akbar in 1565 AD, Agra Fort is a
                  majestic sandstone built as an ode to the magnificence of the
                  Mughal empire. Encompassing within its 2.5-km-long enclosure
                  walls a stunning imperial city, the fortress is shaped like a
                  crescent, its eastern wall flanked by River Yamuna.
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
                src={sikri}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Fatehpur Sikri</Heading>
                <Text>
                  Mughal emperor Akbar built his capital at Fatehpur Sikri
                  between 1572 and 1585 AD. It was constructed using red
                  sandstone. It is said that the emperor, who wished for a son,
                  went to Sikri to get blessed by sufi saint, Sheikh Salim
                  Chishti.
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
                src={bird}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Soor Sarovar Bird Sanctuary</Heading>
                <Text>
                  Situated on the Delhi-Agra highway, Keetham Lake is about 20
                  km by road from Agra. A serene body of water surrounded by
                  lush green and enveloped in peaceful silence punctuated only
                  by the calls of birds,
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
                src={ram}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Ram Bagh</Heading>
                <Text>
                  A Mughal garden believed to have been designed by emperor
                  Babur and later renovated by his great-granddaughter-in-law
                  empress Nur Jahan, Ram Bagh is said to be the oldest Mughal
                  garden in the country.
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

export default Agra
