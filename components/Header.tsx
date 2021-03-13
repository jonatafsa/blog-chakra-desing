import { Button } from "@chakra-ui/button"
import { ArrowLeftIcon, Search2Icon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftAddon, InputRightElement } from "@chakra-ui/input"
import { Grid, Heading, Text } from "@chakra-ui/layout"


export const Header = () => {
  return (
    <Grid
      as="header"
      backgroundColor="purple.500"
      width="100%"
      color="white"
      height="xs"

      templateColumns="1fr 1fr 1fr 1fr"
      templateRows="1fr 1fr 1fr 1fr"
      templateAreas="
          'backIcon . . .' 
          'heading heading . .' 
          'text text . .' 
          'input input . .' 
        "
      padding="1rem"
      justifyContent="center"
      alignItems="center"

      marginBottom={5}
    >
      <ArrowLeftIcon gridArea="backIcon" w={8} h={8} color="gray.300" _hover={{ color: 'gray.100' }} />

      <Heading gridArea="heading"> Desenvolvendo Web </Heading>

      <Text gridArea="text">
      O mundo do Front End possui diversas tecnologias e está sempre evoluindo, 
      se você quiser conhecer ele desde a base, basta se inscrever para acompanhar o blog,
      que vai tá cheio de novidades no mundo do Desenvolvimento Web.
          </Text>

      <InputGroup gridArea="input" >
        <InputLeftAddon
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input
          backgroundColor="white"
          borderRadius="sm"
          placeholder="Digite o que você procura.. Ex: Hooks React"
          focusBorderColor="none"
          color="gray.500"
        />
        <InputRightElement >
          <Button
            h="100%"
            color="gray.500"
            padding="1rem"
            size="55px"
            borderLeftRadius="0"
          >
            Buscar
                    </Button>
        </InputRightElement>
      </InputGroup>

    </Grid>
  )
}