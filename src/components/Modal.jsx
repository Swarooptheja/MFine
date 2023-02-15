import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { useSelector } from "react-redux"
import { useState } from "react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
//   variantprice={{el.variant_price}} producttype={el.product_type}  actual_color={el. actual_color} size={el.size} brand={el.brand} title={el.title} 
function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let data=JSON.parse(localStorage.getItem("singledata"))||[];
    return (
      <>
        <Button color="white" cursor="pointer" backgroundColor={"white"} border="none" _hover="none" onClick={onOpen}>
            <BsFillArrowRightCircleFill size={50} className="icon" cursor={"pointer"} color={"orangered"} />
        </Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Checkout</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
               <div>
               <h2>{data.name}</h2>
               <li>
                Creatinine
               </li>
               <li>
                BUN/Creatinine ratio
               </li>
               <li>
                Blood Urea Nitrozen
               </li>
               </div>
              
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export{TransitionExample}