import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
  import React, { useState } from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
  import { faXmark } from '@fortawesome/free-solid-svg-icons';  
  import Modal from "./components/Modal"
  
  export default function App() {
    const [textValue, setTextValue] = useState('')
    const [itemsList, setItemsList] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
  
    const onHandleChangeItem = text => setTextValue(text)
  
    const addItem = () => {
      if (textValue === '') {
        return
      }
      console.log('ejecuta la funcion de agregar elemnto')
      setItemsList(prevState => [
        ...prevState,
        { id: Math.random(), value: textValue },
      ])
      setTextValue('')
    }
  
    const renderListItem = ({ item, index }) => (
      <TouchableOpacity
        style={styles.itemContainer}
      >

        <Text style={styles.textItem}>{item?.value}</Text>
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => onHandleDelete(index)}>
                <FontAwesomeIcon icon={faXmark} size={25} style={styles.icon} />
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  
    const onHandleDelete = (index) => {
        const updatedList = [...itemsList];
            updatedList.splice(index, 1);
            setItemsList(updatedList);
            setModalVisible(false);
    };      
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Tienda Virtual </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Item"
            value={textValue}
            onChangeText={onHandleChangeItem}
          />
        <View style={styles.addButtonContainer}>
            <Button title="+ ADD" color={'#000'} onPress={addItem} />
        </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={itemsList}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
        </View>
        <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
      </View>
      
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 70,
      backgroundColor: "#ffcdc5",
    },
    title: {
      fontSize: 30,
      fontWeight: '600',
      marginBottom: 20,
      backgroundColor: "#cc8383",
      borderColor: "black",
      borderWidth: 3,
      textAlign: 'center'

    },
    inputContainer: {
      borderRadius: 15,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
    input: {
      width: 200,
      height: 60,
      fontSize: 15,
      paddingLeft: 20,
    },
    addButtonContainer: {
        margin: 10,
      },
    listContainer: {
      marginTop: 15,
    },
    itemContainer: {
      height: 45,
      marginVertical: 10,
      marginHorizontal: 5,
      borderRadius: 15,
      justifyContent: 'center',
      backgroundColor: '#fe6855',
      shadowColor: '#fe6855',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
    },
    textItem: {
      fontSize: 20,
      paddingLeft: 15,
      marginTop: 2,
      color: '#fff',
      fontWeight: '600',
      fontVariant: 'no-common-ligatures',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
      icon: {
        color: 'white',
        marginTop: -23, 
        marginRight: 10
    },
  })