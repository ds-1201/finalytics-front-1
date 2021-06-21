import OtpInput from "react-otp-input";

export default function OtpField(props){
    const containerStyle={
        width:"100%",
        height:"180px",
        display:"flex",
        justifyContent:"space-between",
        borderStle:"solid",
        borderWidth:"1px",
        borderColor:"white"

    }
    const inputStyle={

        padding:"0px",
        width:"55%",
        height:"30%",
        backgroundColor:"#ffffff00",
        color:"white",
        margin:"auto",
        borderColor:"white",
        fontSize:"25px",
        borderWidth:"2px",
        fontWeight:"600",
    }

    return(<div>
        <OtpInput numInputs={6} separator={<span> </span>} containerStyle={containerStyle}
        inputStyle={inputStyle} value={props.value} onChange={props.onChange}
        />
        </div>
    )

}