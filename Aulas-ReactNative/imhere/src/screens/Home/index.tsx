import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export  function Home(){

  const participants = ["Simone","Patricia","Ana Carolina","Mariana","Regina","Michele","Eduarda","Leise","Analia","Mariana India","Williely","Sandra","Angelica","Brenda","Daniela","Maria","Edna"]

  function handleParticipantAdd(){
    if(participants.includes("Simone"))
    return Alert.alert("Participante existe","Já existe um participante na lista com esse nome");
  };

  function handleParticipantRemove(name : string){
    Alert.alert("Remover",`Remover o participante ${name} ?`,
    [
      {
        text:"Sim",
        onPress:() => Alert.alert("Deletado!")
      },
      {
        text:"Não",
        style:"cancel"
      }
    ])
    console.log(`Remove ${name}`);
  }
  return(
    <View style = {styles.container}>
     <Text style={styles.eventName}>Nome do Evento</Text>
     <Text style = {styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style = {styles.form}>
        <TextInput
          style = {styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
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