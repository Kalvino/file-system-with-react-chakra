
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Divider, Text, List } from "@chakra-ui/layout";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Folder from './folder/folder';
import File from './file/file';


   
function App() {
   
  const { colorMode, toggleColorMode } = useColorMode(); 
  const isDark = colorMode === "dark";
  return (
    <VStack>
      <Flex w="100%">
        <Heading ml="2" size="md" fontWeight='extrabold' 
        color='blue.500' >File System</Heading>
        
        <Spacer></Spacer>
       <IconButton ml={9} icon={isDark ? <SunIcon /> : <MoonIcon />}  
       isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Divider borderColor="red.200" />

      <List>
        <Folder name='calvino'>
          <File name='interview.txt' />
        </Folder>
      </List>
      <Text>Want to dig deeper into Chakra UI?</Text>
    </VStack>
  );
}
   
export default App;