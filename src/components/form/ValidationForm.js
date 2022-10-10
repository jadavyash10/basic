export const Arr = [
  {
    id: 1,
    type: "text",
    name: "username",
    placeholder: "Enter Username",
  },
  {
    id: 2,
    type: "email",
    name: "email",
    placeholder: "Enter Email",
  },
  {
    id: 3,
    type: "password",
    name: "password",
    placeholder: "Enter password",
  },
  {
    id: 4,
    type: "password",
    name: "confirmPassword",
    placeholder: "Enter confirmPassword",
  },
];
export const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const pass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


export const validateInput = (name,value,input) => {

  switch (name) {
    case "username":
      if (!value) { 
        return "Please enter a username";
      }
      break;
      case "email":
        if (!value) {
          return "please enter a email";
        } else if (!re.test(value)) {
          return "please enter valid email";
        }
        break;
        case "password":
          if (!value) {
            return "please enter a password";
          } else if (!pass.test(value)) {
        return "password should contain at least one number and one special character";
      }
      break;
    case "confirmPassword":
      if (!value) {
        return "please enter a confirm password";
      }
       else if (input.password && value !== input.password) {
        return "Password and Confirm Password does not match.";
      }
      break;

    default:
      break;
  }
};






// export const validateInput = (e, input) => {
//   let { name, value } = e.target;

//   switch (name) {
//     case "username":
//       if (!value) {
//         return "Please enter a username";
//       }
//       break;
//     case "email":
//       if (!value) {
//         return "please enter a email";
//       } else if (!re.test(value)) {
//         return "please enter valid email";
//       }
//       break;
//     case "password":
//       if (!value) {
//         return "please enter a password";
//       } else if (!pass.test(value)) {
//         return "password should contain at least one number and one special character";
//       }
//       break;
//     case "confirmPassword":
//       if (!value) {
//         return "please enter a confirm password";
//       } else if (input.password && value !== input.password) {
//         return "Password and Confirm Password does not match.";
//       }
//       break;

//     default:
//       break;
//   }
// };



