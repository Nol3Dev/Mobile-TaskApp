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
          <FlatList/>
          <TouchableOpacity
            style={styles.buttonNewText}
          >
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>

        </View>
    )
}