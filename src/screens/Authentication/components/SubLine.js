

export default function SubLine(props){
    return(
        <div style={{...props.style,color:"white",fontSize:props.size}}>{props.children}</div>
    )
}