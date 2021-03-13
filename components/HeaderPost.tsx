import { Avatar } from "@chakra-ui/avatar"
import { Image } from "@chakra-ui/image"
import { Grid, Heading, Text } from "@chakra-ui/layout"

export const HeaderPost = () => {
    return (
        <Grid
        margin="auto"
        w="1200px"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        overflow="hidden"
        marginBottom={5}


        templateColumns="1fr 1fr 1fr 1fr"
        templateRows="1fr 1fr 70px"
        templateAreas="
        'image image title title' 
        'image image description description' 
        'image image footer footer'
        "
        gap="1rem"

      >
        <Image
          w="100%"
          gridArea="image"
          src="https://conteudo.imguol.com.br/c/noticias/3c/2019/04/02/inteligencia-artificial-algoritmo-tecnologia-codigo-de-programacao-1554210815064_v2_450x337.jpg"
          cursor="pointer"
          _hover={{ transform: 'scale(1.05)', transition: 'transform 0.5s' }}
          transition="all 0.5s"
        />
        <Heading
          gridArea="title"
          padding="1rem"
        >
          Título da postagem - OpneGraf com NodeJS
        </Heading>
        <Text gridArea="description">
          Descrição da postagem: Programe nas principais linguagens e
          plataformas. Explore plataformas como Python, Node.JS, PHP,
          Java, e .NET a fundo, além de muito conteúdo em outras linguagens
          como GoLang, Clojure, C/C++, VB ou Cobol. Iniciantes são bem vindos nos
          cursos de lógica e JavaScript. Saiba como começar com Programação.
        </Text>

        <Grid 
        gridArea="footer"
        h="100%"
        templateColumns="12% 40% 1fr 1fr"
        templateRows="1fr"
        templateAreas="
        'avatar username . tags'
        "
        justifyContent="center"
        alignItems="center"
        >
          <Avatar
          gridArea="avatar"
          src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256__340.png" 
          />
          <Text gridArea="username">Postado por: Jonata Santos</Text>
          <Text gridArea="tags">Tags: React</Text>
        </Grid>

      </Grid>
    )
}