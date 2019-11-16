
    var temp=0; 
    var strOper=0; 
    var valueM=0;

    function clickBtn(str) {
        var input_object = document.getElementById("box");
        if (strOper==null) {
            input_object.value = str;
            strOper=0;
            return;
        };

       if (input_object.value==0) { 
            input_object.value = str;
        } else {
            input_object.value += str;
        }
    }

    function calBtn(str){
        var input_object = document.getElementById("box");
        equal();
        valueA=input_object.value;
        strOper=str;
        input_object.value=0;
    }

    function equal(){
        var input_object = document.getElementById("box");
        switch (strOper){
            case '**':
                input_object.value=parseFloat(valueA)^parseFloat(input_object.value);
                break;
            case '%':
                input_object.value=parseFloat(valueA)%parseFloat(input_object.value);
                break;
            case '*':
                input_object.value=parseFloat(valueA)*parseFloat(input_object.value);
                break;
            case '/':
                input_object.value=parseFloat(valueA)/parseFloat(input_object.value);
                break;
            default:
                break;
        }

        temp=null;
        strOper=null;
    }