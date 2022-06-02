import { StyleSheet } from "react-native"

export default StyleSheet.create({
    dotsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    current: {
        width: 10,
        height: 10,
        backgroundColor: 'green',
        margin: 10
    },
    before: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        margin: 10
    },
    after: {
        width: 10,
        height: 10,
        backgroundColor: 'blue',
        margin: 10
   },
})