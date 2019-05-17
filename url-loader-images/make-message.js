// module.exports =

function makeMessage(msg) {
    const element = document.createElement('p')
    element.textContent = msg
    return msg
}

export default makeMessage