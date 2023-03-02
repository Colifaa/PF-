//import { useForm } from "react-hook-form";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,

} from '@chakra-ui/react'
  import React from 'react'

 
 

export default function landing(){
    // const {register,handleSubmit} = useForm()   

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Sign-Up
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay  />
          <DrawerContent backgroundColor = "orange.100" >
            <DrawerCloseButton />
            <DrawerHeader >Create your account</DrawerHeader>
            <DrawerHeader >Name</DrawerHeader>
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
            <DrawerHeader >Last name</DrawerHeader>
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
            <DrawerHeader >E-mail</DrawerHeader>
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
            <DrawerHeader >Password</DrawerHeader>
            
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <login/>

      </>
      

      
    )
    
  }
  
    
/* register es una funcion que sirve para registrar
    los diferentes campos del formulario


    gestiona el envio de datos cuando apretamos el boton de submit
    */