
// CSS 

const Container = document.querySelector('.container');
const Counter = document.querySelector('.counter');
const Ctr = document.querySelector('.ctr');
const Dgt = document.querySelector('.digit');
const Button = document.querySelector('.button');
const Decr = document.querySelector('.decr');
const Incr = document.querySelector('.incr');
const Rst = document.querySelector('.reset');

const container =  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'hsl(210, 36%, 96%)'
}

const counter = {
    width: '35rem',
    height: '35rem',
    gap: '0.9rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 'bold',
    backgroundColor: 'white'
}

const ctr = {
    fontSize: '4rem',
    letterSpacing: '0.3rem',
    fontFamily: '"Roboto", sans-serif',
    color:  'hsl(209, 61%, 16%)'
}

const digit = {
    fontSize: '6rem',
    fontFamily: '"Open Sans", sans-serif',
    opacity: '90%',
}

const button = {
    display: 'flex',
    gap: '1rem',
}

const decr = {
    letterSpacing: '0.2rem',
    padding: '0.2rem 0.5rem',
    border: '2px solid black',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold'
}

const incr = {
    letterSpacing: '0.2rem',
    padding: '0.2rem 0.5rem',
    border: '2px solid black',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold'
}

const rst = {
    padding: '0.4rem 1rem',
    letterSpacing: '0.2rem',
    border: '2px solid black',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold'
}




Object.assign(Container.style, container);
Object.assign(Counter.style, counter);
Object.assign(Ctr.style, ctr);
Object.assign(Dgt.style, digit);
Object.assign(Button.style, button);
Object.assign(Decr.style, decr);
Object.assign(Incr.style, incr);
Object.assign(Rst.style, rst);






// Logic 

const Digit = document.querySelector('.digit')
var x = 0;
Digit.innerHTML = x;

const Increase = () => {
    x++;
    Digit.innerHTML = x;
    
    if(x>0) {
        Digit.style.color = 'green';
    }

    if(x==0) {
        Digit.style.color = 'black';
    }
    
    if(x<0) {
        Digit.style.color = 'red';
    }
}

const Decrement = () => {
    x--;
    Digit.innerHTML = x;

    if(x==0) {
        Digit.style.color = 'black';
    }

    if(x<0) {
        Digit.innerHTML = x;
        Digit.style.color = 'red';
    }
    
}

const Reset = () => {
    x = 0;
    Digit.innerHTML = x;
    Digit.style.color = 'black';
}
