import colors from './../../../style/colors'

const styles = {
    imgContainer : {

    },
    img : {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        display: 'block',
        margin: '30px auto',
        borderRadius: '5px'
    },
    description : {
        margin: '15px 25px',
        textAlign: 'center',
        fontSize: '20px'
    },
    participation : {
        textAlign: 'center',
        fontSize: '30px',
        margin: '20px auto'
    },
    infoColumns : {
        width: '80vw',
        height: '90px',
        margin: '20px auto',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    scoreColumn : {
        float: 'left',
        width: '49.5%',
        height: '100%',
        background: colors.LightGray,
        fontSize: '45px',
        lineHeight: '90px',
        textAlign: 'center',
        fontWeight: 'bold',
        display: 'inline-block',
    },
    canIcon : {
        height: '70px',
        margin: '-5px -10px -15px 0px'
    },
    whiteBorder : {
        float: 'left',
        width: '1%',
        height: '100%',
    },
    timeColumn : {
        background: colors.MidGreen,
        color: colors.White,
        float: 'left',
        height: '100%',
        width: '49.5%',
    },
    finishOn : {
        fontSize: '16px',
        margin: '8px',
    },
    date : {
        fontSize: '32px',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backButton : {
        width: '70vw',
        maxWidth: '300px',
        margin: '40px auto',
        display: 'block',
        height: '50px',
        lineHeight: '50px',
        fontSize: '22px',
        fontWeight: 'bold',
        background: colors.MidGreen,
        color: colors.White,
        borderRadius: '25px',
        textAlign: 'center',
    }
}

export default styles;