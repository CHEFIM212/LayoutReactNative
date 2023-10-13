import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default function HomeLayout() {
  return (
    
    <View style={styles.Container}>
      
       <View style={styles.appContainer}>
          
          <Text>App</Text>

      </View>

        <View style={styles.cubes}>

          <View style={styles.defalt1}>
          
          </View>
  
          <View style={styles.defalt2}>
            
          </View>
  
          <View style={styles.defalt3}>
            
          </View>
  
        </View>
    </View>


  );

}

const styles = StyleSheet.create({

  cubes: {
    flexDirection: 'row',
    height: 500,
    justifyContent: 'space-between',
  },

  defalt1: {
    border: '3px solid blue',
    width: 100,
    height: 100,
  },

  defalt2: {
    border: '3px solid green',
    width: 100,
    height: 100,
    marginTop: 100,
  },

  defalt3: {
    border: '3px solid purple',
    width: 100,
    height: 100,
  },

  appContainer: {
    marginTop: 3,
    border: '1px solid black', 
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Container: {
    width: '100%'
  },

});