module.exports = function toReadable (number) {
    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const regexp = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/

    const getLT20 = (n) => a[Number(n)]
    const get20Plus = (n) => b[n[0]] + ' ' + a[n[1]]

    const num = Number(number)
    if (isNaN(num)) return ''
    if (num === 0) return 'zero'

    const numStr = num.toString()
    
    const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regexp)

    let str = ''
    str += n1 != 0 ? (getLT20(n1) || get20Plus(n1)) + 'crore ' : ''
    str += n2 != 0 ? (getLT20(n2) || get20Plus(n2)) + 'lakh ' : ''
    str += n3 != 0 ? (getLT20(n3) || get20Plus(n3)) + 'thousand ' : ''
    str += n4 != 0 ? getLT20(n4) + 'hundred ' : ''
    str += n5 != 0 && str != '' ? '' : ''
    str += n5 != 0 ? (getLT20(n5) || get20Plus(n5)) : ''

    return str.trim()
}