import { Store } from 'react-notifications-component';
 function toastMessage(message, type='success') {

  if(type==='success'){
  Store.addNotification({
    title: type,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });

  }
  else{
     
  Store.addNotification({
    title: type,
    message: message,
    type: 'danger',
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });
  }
 
}
export default toastMessage;