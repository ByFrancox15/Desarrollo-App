import { Modal as NewModal} from 'react-native';
import React from 'react'

const Modal = ({ modalVisible, onHandleDelete }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}></NewModal>
  )
}

export default Modal
