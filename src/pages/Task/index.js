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
              <View style={styles.contextAllTasks}>
                  <TouchableOpacity
                   style={styles.buttonNewText}
                   onPress={() => navigation.navigate("New Task")}
                  >
                  <Text style={styles.iconButton}>+</Text>
                  </TouchableOpacity>
              </View>  
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