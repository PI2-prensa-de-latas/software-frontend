import colors from './../../style/colors'

const style = {
    container : {
        background: colors.White,
        height: '100px',
        width: '86vw',
        borderRadius: '5px',
        boxShadow: '2px 1px 5px rgba(0,0,0,25%)',
        margin: '12px auto',
    },
    imgContainer : {
        float: 'left',
        width: '80px',
        height: '80px',
        margin: '10px',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    img : {
        height: '80px',
        width: '80px',
        objectFit: 'cover',
    },
    infoContainer : {
        marginRight: '10px',
        marginLeft: '100px',
        height: '100%',
    },
    title : {
        height: '50px',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '10px 0 0 0',
        verticalAlign: 'middle',
        display: 'table-cell',
    },
    label : {
        height: '20px',
        width: '50px',
        float: 'right',
        marginLeft: '8px',
        marginTop: '10px',
        background: colors.LightGray,
        borderRadius: '3px',
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '20px',
        textAlign: 'center',
    },
    canIcon : {
        height: '20px',
        float: 'left',
        marginLeft: '3px',
    }
}

export default style;