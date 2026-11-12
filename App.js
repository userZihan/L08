import React, {useState} from 'react';
import {Text, ScrollView, Button, Alert, View, ToastAndroid, StyleSheet} from 'react-native';
import MySanrio from './components/sanrio';

const MyApp = () => {
    const [a1, setA1] = useState('');
    const [a2, setA2] = useState('');
    const [a3, setA3] = useState('');
    const [a4, setA4] = useState('');

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.parent}>
                <View style={styles.child}>
                    <Text style={styles.title}>
                        ♡ My Sanrio Quiz ♡
                    </Text>

                    <Text style={styles.subtitle}>
                        How well do you know Sanrio?
                    </Text>
                </View>

                <Text style={styles.questionCount}>
                    4 QUIZ
                </Text>

            </View>

            <Text style={styles.description}>
                Test your knowledge of these adorable characters!
            </Text>

            <MySanrio
                question="Question 1"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJU1ORVDrsoxqx_VP22Xz-pK_kBSECt_teHfPp8LbAvbBN6mw2QkWQLNVw&s=10"
                option1="Hello Kitty" option2="My Melody" option3="Kuromi" option4="Cinnamoroll"
                onValueChange={(value) => setA1(value)}/>

            <MySanrio
                question="Question 2"
                image="https://static.vecteezy.com/system/resources/thumbnails/069/143/631/small_2x/pompom-purin-is-relaxing-free-vector.jpg"
                option1="Pompompurin" option2="My Melody" option3="Pochacco" option4="Keroppi"
                onValueChange={(value) => setA2(value)}/>

            <MySanrio
                question="Question 3"
                image="https://i.pinimg.com/236x/70/90/5e/70905e0723012ee3f4cc5e396df6a404.jpg"
                option1="Kuromi" option2="Keroppi" option3="Hangyodon" option4="Badtz-Maru"
                onValueChange={(value) => setA3(value)}/>

            <MySanrio
                question="Question 4"
                image="https://static.vecteezy.com/system/resources/previews/076/799/266/non_2x/my-melody-character-with-pink-hood-and-cape-isolated-on-white-free-vector.jpg"
                option1="My Melody" option2="Hello Kitty" option3="Pochacco" option4="Pompompurin"
                onValueChange={(value) => setA4(value)}/>

            <View style={styles.submitContainer}>

                <Button
                    title="Submit Quiz"
                    color="#D65A91"
                    onPress={() => {

                        if (a1 == '' || a2 == '' || a3 == '' || a4 == '') {

                            ToastAndroid.show(
                                'Answer every question before submitting!',
                                ToastAndroid.SHORT
                            );

                            return;
                        }

                        let score = 0;

                        if (a1 == 'Cinnamoroll') {
                            score = score + 1;
                        }

                        if (a2 == 'Pompompurin') {
                            score = score + 1;
                        }

                        if (a3 == 'Hangyodon') {
                            score = score + 1;
                        }

                        if (a4 == 'My Melody') {
                            score = score + 1;
                        }

                        if (score == 0 || score == 1 || score == 2) {

                            Alert.alert(
                                'Quiz Result',
                                'You got ' + score + ' out of 4 correct! Better luck next time!'
                            );

                        }

                        if (score == 3) {

                            Alert.alert(
                                'Quiz Result',
                                'You got ' + score + ' out of 4 correct! Not bad!'
                            );

                        }

                        if (score == 4) {

                            Alert.alert(
                                'Quiz Result',
                                'You got ' + score + ' out of 4 correct! Well done!'
                            );

                        }

                    }}
                />

            </View>

            <Text style={styles.footer}>
                ♡ Thank you for playing! ♡
            </Text>

        </ScrollView>

    );

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF0F5'
    },

    content: {
        paddingBottom: 30
    },

    parent: {
        backgroundColor: '#FFD6E7',
        marginHorizontal: 20,
        marginTop: 35,
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    child: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#C94F83'
    },

    subtitle: {
        fontSize: 14,
        color: '#A94F75',
        marginTop: 5
    },

    questionCount: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#C94F83',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 15
    },

    description: {
        fontSize: 13,
        color: '#A45B7B',
        textAlign: 'center',
        marginHorizontal: 25,
        marginTop: 15,
        marginBottom: 5
    },

    submitContainer: {
        marginHorizontal: 35,
        marginTop: 15,
        marginBottom: 15
    },

    footer: {
        fontSize: 14,
        color: '#C94F83',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15
    }

});

export default MyApp;
