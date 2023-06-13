import React, {useState} from 'react';
import { ListItem, ListIcon, Spacer, Divider, Text } from "@chakra-ui/layout";
import { MoonIcon,  } from '@chakra-ui/icons'


interface File {
  name: string
}
interface Folder {
  name: string;
  children?: File[]
}

class FolderLayout extends React.Component<Folder> {

  constructor(props: Folder) {
    super(props);
    const {this.name, this.children} = props;
    const [isOpen, setIsopne] = useState(false);
  }

  render(){
    return (
      <ListItem>
        <ListIcon  color="teal.500" /> {this.props.name}
        <div>
          {isOpen? children: null}
        </div>
      </ListItem>
    )
  }
}