import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { ViewIcon } from "@chakra-ui/icons"
import { Box, Grid, Heading, Link, List, ListIcon, ListItem, Text } from "@chakra-ui/layout"
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal"
import { useRef } from "react"

export const Footer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    const date = new Date
    const year = date.getFullYear()

    return (
        <Grid
        w="100%"
        h="sm"
        bg="purple.500"
        color="white"
        marginTop={5}

        templateColumns="1fr 1fr 1fr 1fr"
        templateRows="1fr 1fr"
        templateAreas="
        'heading heading tags links' 
        'end end end end'
      "
        alignItems="flex-end"
        gap="1rem"
      >
        <Box gridArea="heading" padding={5}>
          <Heading padding={5}>Desenvolvendo Web</Heading>
          <Text>
            O mundo do Front End possui diversas tecnologias e
            está sempre evoluindo, se você quiser conhecer ele desde a base,
            basta se inscrever para acompanhar o blog, que vai tá cheio de novidades
            no mundo do Desenvolvimento Web.
            </Text>
        </Box>

        <Box gridArea="tags" display="flex" justifyContent="center" alignItems="center">
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            TAGS
          </Button>

          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={btnRef}
            placement="right"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Lista de Tags</DrawerHeader>
                <DrawerBody>

                  <List >
                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        HTML
                      </ListItem>

                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        CSS
                      </ListItem>

                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        REACT
                      </ListItem>

                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        JAVASCRIPT
                      </ListItem>

                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        NEXTJS
                      </ListItem>

                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        VUE
                      </ListItem>

                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        DATABASE
                      </ListItem>

                    <ListItem>
                      <ListIcon as={ViewIcon} color="purple.100" />
                        NODEJS
                      </ListItem>
                  </List>
                </DrawerBody>

              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>

        <Box gridArea="links" padding={4}>
          <Heading fontSize="2xl" padding={2}>Links</Heading>
          <List >

            <Link src="/" _hover={{ color: 'gray.500' }}>
              <ListItem margin={5}>
                Página Inicial
            </ListItem>
            </Link>

            <Link src="/posts" _hover={{ color: 'gray.500' }} >
              <ListItem margin={5}>
                Postagens
            </ListItem>
            </Link>

            <Link src="/" _hover={{ color: 'gray.500' }}>
              <ListItem margin={5}>
                Contato
            </ListItem>
            </Link>

          </List>
        </Box>

        <Box
          gridArea="end"
          bg="blackAlpha.700"
          w="100%"
          h="3rem"
          color="gray.500"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Blog Desenvolvendo Web || Criado por - <Link src="https://github.com/jonatafsa"> Jonata Santos </Link>- {year}
        </Box>

      </Grid>
    )
}