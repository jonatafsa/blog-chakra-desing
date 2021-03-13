import { ColorModeScript } from '@chakra-ui/color-mode'
import Head from 'next/head'

import { Flex, Heading, Grid, Input, Link, Button, Text, Divider } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { HeaderPost } from '../components/HeaderPost'
import { PreviewPosts } from '../components/PreviewPosts'

import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      {/* Postagem de Destaque */}
      <HeaderPost />


      {/* Cria um grid com as postagens, o menu lateral */}
      <Grid
        as="main"
        w="95%"
        margin="auto"
        templateColumns="1fr 1fr 1fr 1fr"
        templateRows="1fr"
        templateAreas="
        'posts posts posts form' 
      "
        justifyContent="center"
        gap="1rem"
      >


        {/* Recebe as postagens */}
        <PreviewPosts
          gridArea="posts"
        />

        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={16}
        >

          <Input
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            placeholder="E-mail"
          />

          <Input
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            placeholder="Senha"
            marginTop={2}
          />
          <Link
            alignSelf="flex-start"
            marginTop={2}
            fontSize="sm"
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Esqueci minha senha
        </Link>

          <Button
            backgroundColor="purple.500"
            height="50px"
            borderRadius="sm"
            marginTop={6}
            _hover={{ backgroundColor: 'purple.600' }}
          >
            Entrar
      </Button>

          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.300"
            marginTop={6}
          >
            Não tem uma conta? {"  "}
            <Link
              color="purple.600"
              fontWeight="bold"
              _hover={{ color: 'purple.500' }}
            >
              Registre-se
            </Link>
          </Text>

          <Divider />

          <Flex alignItems="center">
            <Text fontSize="sm">Ou entre com</Text>
            <Button
              height="50px"
              flex="1"
              backgroundColor="gray.600"
              marginLeft={6}
              borderRadius="sm"
              _hover={{ backgroundColor: 'purple.500' }}
            >
              GITHUB
              </Button>
          </Flex>

        </Flex>
      </Grid>

      <Footer />

    </div>
  )
}
