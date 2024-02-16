import React from 'react'
import kas1 from "../assets/kas1.webp";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import sri from "../assets/sri.jpg";
import gul from "../assets/gul.jpg";
import pah from "../assets/pah.jpg";
import dal from "../assets/dal.jpg";
import tul from "../assets/tul.jpg";
import Last from '../components/Last';


const Kashmir = () => {
  return (
    <div>
      <div>
        <div className=" w-[] h-[] bg-orange-100">
          <div className="">
            <img src={kas1} className="bg-black h-[1000px] w-[1550px]"></img>
          </div>
        </div>
        <div>
          <p className="-mt-80 text-white text-center font-bold text-[40px]">
            Kashmir<br></br> <p className="text-[30px]">Paradise On Earth</p>
          </p>
        </div>
        <div className="mt-60">
          <div className="text-[20px] text-center rounded-md">
            <p>
              Kashmir is the northernmost geographical region of the Indian
              subcontinent. Until the mid-19th century, the term "Kashmir"
              denoted only the Kashmir Valley between the Great Himalayas and
              the Pir Panjal Range. Today, the term encompasses a larger area
              that includes the India-administered territories of Jammu and
              Kashmir and Ladakh, the Pakistan-administered territories of Azad
              Kashmir and Gilgit-Baltistan, and the Chinese-administered
              territories of Aksai Chin and the Trans-Karakoram Tract.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="text-[30px] font-bold bg-slate-300">
          <p>Places of interests in Kashmir</p>
        </div>

        <div className="bg-slate-300 flex">
          <Card maxW="300px">
            <CardBody height="200px">
              <Image
                height="250px"
                width="300px"
                sizes="lg"
                src={sri}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Srinagar</Heading>
                <Text>
                  Picturesque and enchanting, Srinagar is cradled high in the
                  lofty green Himalayas and hailed all over the world for its
                  incredible natural beauty.
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
                src={gul}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Gulmarg</Heading>
                <Text>
                  With rolling green meadows carpeted by bushes of wild flowers
                  blending into snow-clad mountains, whose peaks peep into the
                  clouds, and mountain streams rushing by, Gulmarg is sheer
                  poetry in nature.
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
                src={pah}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Pahalgam</Heading>
                <Text>
                  Fringed by snow-covered Himalayan peaks, deep valleys and
                  skirted by the gushing glacial Lidder river, the hill station
                  of Pahalgam in Kashmir Valley, is one of nature's benevolent
                  and beatific expressions.
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
                src={dal}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Dal Lake</Heading>
                <Text>
                  One of the most magnificent and popular attractions in
                  Srinagar is the Dal Lake. Nestled at the foothills of Mount
                  Shridhara, the glistening waters of this lake are a sight to
                  behold.
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
                src={tul}
                alt="Green double couch with wooden legs"
                borderRadius="sm"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">Tulip Garden</Heading>
                <Text>
                  TLocated at the foothills of the Zabarwan mountain range, on
                  the banks of the Dal Lake, Indira Gandhi Tulip Garden is a
                  beautiful expanse of lush greenery.
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

export default Kashmir
