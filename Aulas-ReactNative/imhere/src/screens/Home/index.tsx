import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";
import { useState } from "react";

export  function Home(){

  const [participants,setParticipants] = useState<string[]>([]);
  const [participantName,setParticipantName] = useState("");
  

  function handleParticipantAdd(){
    if(participants.includes(participantName))
    return Alert.alert("Participante existe","Já existe um participante na lista com esse nome");

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  };

  function handleParticipantRemove(name : string){
    Alert.alert("Remover",`Remover o participante ${name} ?`,
    [
      {
        text:"Sim",
        onPress:() => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text:"Não",
        style:"cancel"
      }
    ])
  }
  return(
    <View style = {styles.container}>
     <Text style={styles.eventName}>Nome do Evento</Text>
     <Text style = {styles.eventDate}>Terça, 27 de Fevereiro de 2024</Text>
      <View style = {styles.form}>
        <TextInput
          onChangeText={setParticipantName}
          style = {styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          />
          <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd}>
            <Text style = {styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant key={item} name = {item} onRemove = {() =>handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator = {false}
        ListEmptyComponent={() => (
          <Text style = {styles.listEmptyText}>
            Ninguém Chegou no evento ainda ? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
     
      
     
    </View>
  );
}