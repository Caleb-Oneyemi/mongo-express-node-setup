const getErrorMessage = (err) => {
    let message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err);
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (let errName in err.errors) {
            if (err.errors[errName].message)
                message = err.errors[errName].message
        }
    }
    return message
}

const getUniqueErrorMessage = (err) => {
    let output;

    try {
        console.log(err.message)
        let fieldName = err.message.substring(
            err.message.lastIndexOf('.$') + 2,
            err.message.indexOf('_1')
        );

        let index = fieldName.lastIndexOf(':') + 2;
        fieldName = fieldName.slice(index);

        output = `${fieldName} already exists`
    } catch (err) {
        output = 'Unique field already exists'
    }

    return output;
}

export default { getErrorMessage }