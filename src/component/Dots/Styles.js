import { StyleSheet } from "react-native"

export default StyleSheet.create({
    dotsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    current: {
        width: 15,
        height: 15,
        backgroundColor: 'transparent',
        margin: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#C9AB94',

    },
    before: {
        width: 10,
        height: 10,
        backgroundColor: '#C9AB94',
        margin: 5,
        borderRadius: 50
    },
    after: {
        width: 10,
        height: 10,
        backgroundColor: '#FFFFFF',
        margin: 5,
        borderRadius: 50
   },
})