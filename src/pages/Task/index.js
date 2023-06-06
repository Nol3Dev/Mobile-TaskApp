import React, { useState, useEffect } from "react"
import { 
    View,
    Text, 
    TouchableOpacity,
    FlatList 
} from "react-native"

import database from "../../config/firebaseconfig.js"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"

export default function Task({ navigation }){
    const [task, setTask] = useState([])

    function deleteTask(id){
      database.collection("Tasks").doc(id).delete()
    }

    useEffect(()=>{
        database.collection("TaskApp").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTask(List)
        })
    }, [])

    return(
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={( item )=>{
              return(
              <View style={styles.Tasks}>
                  <TouchableOpacity
                   style={styles.deleteTasks}
                   onPress={() => {
                    deleteTask(item.id)
                   }}
                  >
                  <FontAwesome
                    name="star"
                    size={23} 
                    color="#f92e6a"
                  >

                  </FontAwesome>

                  <Text style={styles.iconButton}>+</Text>
                  </TouchableOpacity>
                  <Text
                    style={styles.descriptionTask}
                    onPress={()=>{
                      navigation.navigate("Details",{
                        id: item.id,
                        description: item.description
                      })
                    }}
                  >
                    {item.description}
                  </Text>
              </View>  
              )
            } }
          />
          <TouchableOpacity
            style={styles.buttonNewText}
            onPress={() => navigation.navigate("New Task")}
          >
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>

        </View>
    )
}