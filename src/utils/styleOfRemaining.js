import colors from './../style/colors';

function styleOfRemain(remaining_time) {
    if (remaining_time.type !== 'd') {
        return {
            background: colors.Urgent,
            color: colors.White,
        }
    }
    if (remaining_time.quantity < 5) {
        return {
            background: colors.Warning,
            color: colors.Black,
        }
    }
    return {
        background: colors.MidGreen,
        color: colors.White
    }
}

export default styleOfRemain;