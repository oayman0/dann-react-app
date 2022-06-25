class validation {
    //name validation regx react
    static NameRegx = /^[A-Za-z\'\s\.\:\-]+$/;
    // phone validation
    static PhoneRegx =/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    static EmailRegx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    static PasswordRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;




}

export default validation