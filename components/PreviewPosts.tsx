import { StarIcon } from "@chakra-ui/icons"
import { Image } from "@chakra-ui/image"
import { Badge, Box, Grid } from "@chakra-ui/layout"

interface PreviewPostsProps {
    gridArea: string
}

export const PreviewPosts: React.FC<PreviewPostsProps> = (props) => {

    const property = {
        reviewCount: 34,
        rating: 4,
      }

    return (
        <Grid
        w="100%"
        gridArea={props.gridArea}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={5}>
          <Image src="https://2.bp.blogspot.com/-kzdcNpZkkK0/VBHOHfDjlkI/AAAAAAAAALs/Ud6T0JfaB4A/s1600/SharedLink.png" alt="Nome da postagem" />

          <Box p="6">

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              OpneGraf com NodeJS
            </Box>

            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="sm" px="2" color="gray.500">
                Tags:
        </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                HTML &bull; CSS
        </Box>
            </Box>

            <Box height="4.5rem" overflow="hidden" textAlign="justify">
              Programe nas principais linguagens e plataformas. Explore plataformas como Python, Node.JS, PHP, Java, e .NET a fundo, além de muito conteúdo em outras linguagens como GoLang, Clojure, C/C++, VB ou Cobol. Iniciantes são bem vindos nos cursos de lógica e JavaScript. Saiba como começar com Programação.
            </Box>

          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={5}>
          <Image src="https://sitechecker.pro/wp-content/uploads/2018/01/open-graph.jpg" alt="Nome da postagem" />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="sm" px="2" color="gray.500">
                Tags:
        </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                HTML &bull; CSS
        </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              OpneGraf com NodeJS
            </Box>

            <Box height="4.5rem" overflow="hidden" textAlign="justify">
              Programe nas principais linguagens e plataformas. Explore plataformas como Python, Node.JS, PHP, Java, e .NET a fundo, além de muito conteúdo em outras linguagens como GoLang, Clojure, C/C++, VB ou Cobol. Iniciantes são bem vindos nos cursos de lógica e JavaScript. Saiba como começar com Programação.
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
        </Box>
            </Box>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={5}>
          <Image src="https://blog.addthiscdn.com/wp-content/uploads/sites/3/2015/10/08135734/Facebook-Open-Graph.jpg" alt="Nome da postagem" />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="sm" px="2" color="gray.500">
                Tags:
        </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                HTML &bull; CSS
        </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              OpneGraf com NodeJS
            </Box>

            <Box height="4.5rem" overflow="hidden" textAlign="justify">
              Programe nas principais linguagens e plataformas. Explore plataformas como Python, Node.JS, PHP, Java, e .NET a fundo, além de muito conteúdo em outras linguagens como GoLang, Clojure, C/C++, VB ou Cobol. Iniciantes são bem vindos nos cursos de lógica e JavaScript. Saiba como começar com Programação.
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
        </Box>
            </Box>
          </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={5}>
          <Image src="https://warfareplugins.com/wp-content/uploads/title-description-options-social-warfare-1920x1080.jpg" alt="Nome da postagem" />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="sm" px="2" color="gray.500">
                Tags:
        </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                HTML &bull; CSS
        </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              OpneGraf com NodeJS
            </Box>

            <Box height="4.5rem" overflow="hidden" textAlign="justify">
              Programe nas principais linguagens e plataformas. Explore plataformas como Python, Node.JS, PHP, Java, e .NET a fundo, além de muito conteúdo em outras linguagens como GoLang, Clojure, C/C++, VB ou Cobol. Iniciantes são bem vindos nos cursos de lógica e JavaScript. Saiba como começar com Programação.
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
        </Box>
            </Box>
          </Box>
        </Box>

      </Grid>
    )
}