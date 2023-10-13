import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image} from 'react-native';

export default function ScreenLayout() {
  return (
    
    <View style={styles.allwin}>
      <StatusBar/>
      <Text style={styles.Text1}>Meu Treino</Text>

      <View style={styles.Container}>

        <View style={{margin: 10}}>
          <Button
            title="Facil"
          />
        </View>

       <View style={{margin: 10}}>
          <Button
            title="Medio"
          />
       </View>

        <View style={{margin: 10}}>
          <Button
            title="Dificil"
            />
        </View>

      </View>

      <View style={styles.Imgs}>
      
        <View style={styles.Imgs1}>
          
          <TouchableOpacity>
            <Image
              style={{width: 100, height: 100, margin: 15, borderRadius: 20}}
              source={{uri:"https://s2-techtudo.glbimg.com/IUv-NQvFAdhU_avnApvf3rxz4_Q=/0x0:1000x644/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/O/erJJK4TA6NN9CY8hZaAw/neymar-al-hilal.jpg"}}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{width: 100, height: 100, margin: 15, borderRadius: 20}}
              source={{uri:"https://s2-techtudo.glbimg.com/IUv-NQvFAdhU_avnApvf3rxz4_Q=/0x0:1000x644/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/O/erJJK4TA6NN9CY8hZaAw/neymar-al-hilal.jpg"}}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.Imgs1}>
        <TouchableOpacity>
            <Image
              style={{width: 100, height: 100, margin: 15, borderRadius: 20}}
              source={{uri:"https://s2-techtudo.glbimg.com/IUv-NQvFAdhU_avnApvf3rxz4_Q=/0x0:1000x644/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/O/erJJK4TA6NN9CY8hZaAw/neymar-al-hilal.jpg"}}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{width: 100, height: 100, margin: 15, borderRadius: 20}}
              source={{uri:"https://s2-techtudo.glbimg.com/IUv-NQvFAdhU_avnApvf3rxz4_Q=/0x0:1000x644/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/O/erJJK4TA6NN9CY8hZaAw/neymar-al-hilal.jpg"}}
            ></Image>
          </TouchableOpacity>
        </View>

        
      </View>

      <Text>Seção por semana</Text>

      <View style={styles.Container}>

        <View style={{margin: 10}}>
          <Button
            title="1"
          />
        </View>

        <View style={{margin: 10}}>
          <Button
            title="2"
          />
        </View>

        <View style={{margin: 10}}>
          <Button
            title="3"
          />
        </View>

        <View style={{margin: 10}}>
          <Button
            title="4"
          />
        </View>


        <View style={{margin: 10}}>
          <Button
            title="5"
          />
        </View>


        <View style={{margin: 10}}>
          <Button
            title="6"
          />
        </View>

      </View>

      <Text>Duração de treino</Text>

      <View style={styles.Container}>

        <View style={{margin: 10}}>
            <Button
              title="15"
            />
          </View>

          <View style={{margin: 10}}>
            <Button
              title="20"
            />
          </View>

          <View style={{margin: 10}}>
            <Button
              title="25"
            />
          </View>

        
          <View style={{margin: 10}}>
            <Button
              title="30"
            />
          </View>

      </View>

      <View style={styles.btnIniciar}>
      <Button title="Iniciar Treino" />
      </View>

    </View>


  );

}

const styles = StyleSheet.create({

  btnIniciar: {
    marginTop: 15
    },

  Text1: {
    fontSize: 30,
    marginLeft: 10
  },

  allwin: {
    height: 90,
    flex: 1,
    margin: 5,
  },

  Container: {
    flexDirection: "row",
    justifyContent: 'center',
    marginLeft: '0 auto',
    marginRigth: '0 auto'
  },

  Imgs: {
    border: '1px solid black',
    width: 300,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50px',
    marginTop: 10,
  },

  Imgs1: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "row",
  }

});