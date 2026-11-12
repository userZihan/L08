
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const MySanrio = ({image, question, option1, option2, option3, option4, onValueChange}) => {

    return (
        <View style={styles.parent}>
            <Text style={styles.question}>
                {question}
            </Text>

            <View style={styles.child}>
                <Image source={{uri: image}} style={styles.image}/>
            </View>

            <Text style={styles.instruction}>
                Who is this character?
            </Text>

            <Picker onValueChange={(value) => onValueChange(value)} style={styles.picker}>
                <Picker.Item label="-- Select Answer --" value="" enabled={false}/>
                <Picker.Item label={option1} value={option1} />
                <Picker.Item label={option2} value={option2} />
                <Picker.Item label={option3} value={option3} />
                <Picker.Item label={option4} value={option4} />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({

    parent: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginVertical: 12,
        padding: 15,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#FFD1E3',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    child: {
        flex: 1,
        width: '100%',
        maxHeight: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D65A91',
        marginBottom: 10
    },

    image: {
        width: 250,
        height: 180,
        maxWidth: 300,
        maxHeight: 200,
        resizeMode: 'contain'
    },

    instruction: {
        fontSize: 14,
        color: '#A45B7B',
        marginTop: 10,
        marginBottom: 5
    },

    picker: {
        width: '100%',
        backgroundColor: '#FFF0F5'
    }
});

export default MySanrio;
