import React,{useState,useEffect} from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const StripePayment = () => {
    const [response,setResponse] = useState()
    const [makePayment,setMakePayment] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')

    const cartInfo = {
        id:'202012reacttry',
        description:'Premium member',
        amount:1,
    }
    
    

    const onCheckStatus = async (PaymentResponse) =>{

    }
    
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default StripePayment;
