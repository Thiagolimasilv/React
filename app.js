import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Thiago({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O que eu quero que você faça??
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Gabriel"
          onPress={() => navigation.navigate('Gabriel')}
          color="#008080" // Personalize a cor conforme desejado
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Victor"
          onPress={() => navigation.navigate('Victor')}
          color="#800080" // Personalize a cor conforme desejado
        />
      </View>
    </View>
  );
}

function Andrey ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      Um dos unicos da sala que (na época) não me julgava pelas coisas que eu gostava, tambem é um dos poucos que é verdadeiro naessa sala e tambem é o unico que se preocupa com os amigos. Dito isso imite o video do berimbal em horario de almoço</Text>
    </View>
  );
}

function Ryan({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      Ryan é um cara gente fina, sempre me deu cola de prova, jogava comigo e é engraçado. Imite uma buzina.
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo para a tela
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20, // Adiciona um espaçamento horizontal para melhor legibilidade
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 10,
  },
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Thiago">
        <Stack.Screen name="Thiago" component={Thiago} />
        <Stack.Screen name="Andrey" component={Andrey} />
        <Stack.Screen name="Ryan" component={Ryan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;