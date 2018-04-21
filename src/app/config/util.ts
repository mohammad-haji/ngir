export function getEmailPattern(): RegExp {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
}

export function nationalIdValidator(code) {
    var codeToString = code.toString();
    if (codeToString[0] == "۰" || codeToString[1] == "۰" || codeToString[2] == "۰" || codeToString[3] == "۰" || codeToString[4] == "۰" || codeToString[5] == "۰" || codeToString[6] == "۰" || codeToString[7] == "۰" || codeToString[8] == "۰" || codeToString[9] == "۰" || codeToString[10] == "۰") {
        code = code.replace(/۰/g, "0");
    }
    if (codeToString[0] == "۱" || codeToString[1] == "۱" || codeToString[2] == "۱" || codeToString[3] == "۱" || codeToString[4] == "۱" || codeToString[5] == "۱" || codeToString[6] == "۱" || codeToString[7] == "۱" || codeToString[8] == "۱" || codeToString[9] == "۱" || codeToString[10] == "۱") {
        code = code.replace(/۱/g, "1");
    }
    if (codeToString[0] == "۲" || codeToString[1] == "۲" || codeToString[2] == "۲" || codeToString[3] == "۲" || codeToString[4] == "۲" || codeToString[5] == "۲" || codeToString[6] == "۲" || codeToString[7] == "۲" || codeToString[8] == "۲" || codeToString[9] == "۲" || codeToString[10] == "۲") {
        code = code.replace(/۲/g, "2");
    }
    if (codeToString[0] == "۳" || codeToString[1] == "۳" || codeToString[2] == "۳" || codeToString[3] == "۳" || codeToString[4] == "۳" || codeToString[5] == "۳" || codeToString[6] == "۳" || codeToString[7] == "۳" || codeToString[8] == "۳" || codeToString[9] == "۳" || codeToString[10] == "۳") {
        code = code.replace(/۳/g, "3");
    }
    if (codeToString[0] == "۴" || codeToString[1] == "۴" || codeToString[2] == "۴" || codeToString[3] == "۴" || codeToString[4] == "۴" || codeToString[5] == "۴" || codeToString[6] == "۴" || codeToString[7] == "۴" || codeToString[8] == "۴" || codeToString[9] == "۴" || codeToString[10] == "۴") {
        code = code.replace(/۴/g, "4");
    }
    if (codeToString[0] == "۵" || codeToString[1] == "۵" || codeToString[2] == "۵" || codeToString[3] == "۵" || codeToString[4] == "۵" || codeToString[5] == "۵" || codeToString[6] == "۵" || codeToString[7] == "۵" || codeToString[8] == "۵" || codeToString[9] == "۵" || codeToString[10] == "۵") {
        code = code.replace(/۵/g, "5");
    }
    if (codeToString[0] == "۶" || codeToString[1] == "۶" || codeToString[2] == "۶" || codeToString[3] == "۶" || codeToString[4] == "۶" || codeToString[5] == "۶" || codeToString[6] == "۶" || codeToString[7] == "۶" || codeToString[8] == "۶" || codeToString[9] == "۶" || codeToString[10] == "۶") {
        code = code.replace(/۶/g, "6");
    }
    if (codeToString[0] == "۷" || codeToString[1] == "۷" || codeToString[2] == "۷" || codeToString[3] == "۷" || codeToString[4] == "۷" || codeToString[5] == "۷" || codeToString[6] == "۷" || codeToString[7] == "۷" || codeToString[8] == "۷" || codeToString[9] == "۷" || codeToString[10] == "۷") {
        code = code.replace(/۷/g, "7");
    }
    if (codeToString[0] == "۸" || codeToString[1] == "۸" || codeToString[2] == "۸" || codeToString[3] == "۸" || codeToString[4] == "۸" || codeToString[5] == "۸" || codeToString[6] == "۸" || codeToString[7] == "۸" || codeToString[8] == "۸" || codeToString[9] == "۸" || codeToString[10] == "۸") {
        code = code.replace(/۸/g, "8");
    }
    if (codeToString[0] == "۹" || codeToString[9] == "۹" || codeToString[2] == "۹" || codeToString[3] == "۹" || codeToString[4] == "۹" || codeToString[5] == "۹" || codeToString[6] == "۹" || codeToString[7] == "۹" || codeToString[8] == "۹" || codeToString[9] == "۹" || codeToString[10] == "۹") {
        code = code.replace(/۹/g, "9");
    }
    if (code.length < 8 || parseInt(code, 10) == 0) {
        return false;
    }
    /*code = ('0000' + code).substr(code.length + 4 - 10);*/
    if (parseInt(code.substr(3, 6), 10) == 0) {
        return false;
    }
    var c = parseInt(code.substr(9, 1), 10), s = 0;
    for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    var valid = (s < 2 && c == s) || (s >= 2 && c == (11 - s));
    console.log(valid)
    return valid ? code : valid;
    // return code;
}
