/**
 * Created by geronimo on 10/1/14.
 */

app.service('TimeParsingSrv', [function TimeParsingSrv (){
    var
        AMOUNT_RE = /\d+/,
        UNIT_RE = /\D+/,
        GROUP_RE = /\d{1,4}\D{1,2}/g,

        //Time equivalences
        MS_2_MS = 1,
        S_2_MS = 1000,
        M_2_MS = 60 * S_2_MS,
        H_2_MS = 60 * M_2_MS,
        D_2_MS = 24 * H_2_MS,
        W_2_MS = 7 * D_2_MS,

        //Time tablet to avoid a a switch
        TIME_TABLE = {
            'ms': MS_2_MS,
            's': S_2_MS, 'S': S_2_MS,
            'm': M_2_MS, 'M': M_2_MS,
            'h': H_2_MS, 'H': H_2_MS,
            'd': D_2_MS, 'D': D_2_MS,
            'w': W_2_MS, 'W': W_2_MS
        },

        CONVERSION_TABLE = [S_2_MS,
                            M_2_MS / S_2_MS,
                            H_2_MS / M_2_MS,
                            D_2_MS / H_2_MS],

        UNITS_TABLE = ['day', 'week', 'days', 'weeks'],

        time2ms = function time2ms(value){
            var time = value.match(AMOUNT_RE)[0],
                unit = value.match(UNIT_RE)[0];

            return time * TIME_TABLE[unit];
        },

        timeSum = function timeSum(total, value) {
            var t1 = total,
                t2 = time2ms(value);

            if('[object Number]' !== Object.prototype.toString.apply(total)){
                t1 = time2ms(total);
            }

            return t1 + t2;
        },

        pad = function pad(value, extraZero){
            if(1 === value.length) value = '0' + value;
            if(extraZero) value = '0' + value;

            return value;
        };

    this.toNormalForm = function toNormalForm (time, model){
        var matched = time.match(GROUP_RE);

        if(!matched) return;

        return matched.reduce(timeSum);
    };

    this.toStringForm = function(ms){
        var offset = 0,
            conversionRatio = 0,
            plurality = 0,
            value = 0,

            prefix = '',
            postfix = '',
            time = '';


        do {
            conversionRatio = CONVERSION_TABLE[offset++];

            if(!conversionRatio) break;

            value = ms % conversionRatio;

            //We are dealing with ms
            if(1 === offset){
                prefix = '.';
            }else if ( offset < 4) {
                prefix = ':';
            }else if(4 === offset){
                prefix = ' ';
            }else if (offset > 5) {
                plurality = offset - 4 + (value > 1? 2 : 0);
                prefix = ' ';
                postfix = UNITS_TABLE[plurality];
            }

            time = prefix + pad(value.toString(), 1 === offset) + postfix + time;

            ms = Math.floor(ms/conversionRatio);

        } while (ms >= conversionRatio);
        if(offset > 4){
            plurality = offset - 4 + (value > 1? 2 : 0);
            postfix = UNITS_TABLE[plurality];
            time = ms + postfix + time;
        } else {
            time = pad(ms.toString()) + time;
        }


        return time;
    }
}]);