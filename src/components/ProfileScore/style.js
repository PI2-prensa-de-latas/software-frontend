import colors from '../../style/colors'

const style = {
    container: {
        width: '100%',
        heigth: 100     ,
        position: 'fixed',
        top: "-1",
        left: "0",
        textAlign: 'center',
    },    
    circle: {
        height: "200px",
        width: "200px",
        backgroundColor: "#00695C",
        borderRadius: "50%",
        display: 'block',
        position: 'relative',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto', 
        verticalAlign: "middle",
    },
    scoreFont: {
        fontFamily: "roboto sans-serif",
        fontStyle: "bold",
        fontSize: "xxx-large",
        color: "#FFFFFF", 
        textAlign: "center",
        verticalAlign: "middle",
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto', 
        minHeight: '10em',
        display: 'table-cell',
        transform: 'translate(40%, 120%)',
    }
}

export default style;