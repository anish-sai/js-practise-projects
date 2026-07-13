/**
 * # Strong Password:
 * 1. number of char >= 8
 * 2. Capital letter
 * 3. Small letter
 * 4. Special char
 * 5. Number 
 */


const input = document.getElementById('pass')

input.addEventListener('input', () => {
    const password = input.value;
    // console.log(password)   password value


    // capital, small, special, number
    let hasCapital = false, hasSmall = false, hasSpecial = false, hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];



        // capital letter:
        if (ch >= 'A' && ch <= 'Z')
            hasCapital = true;
        else if (ch >= 'a' && ch <= 'z')
            hasSmall = true;
        else if (ch >= '0' && ch <= '9')
            hasNumber = true;
        else
            hasSpecial = true;
    }

    if (password.length  <= 8 && hasCapital && hasSmall && hasNumber && hasSpecial) {

        // UI display karo
        const h2 = document.querySelector('h2')
        h2.textContent = "Strong";
        h2.style.color = "green";
    }
    else {
        const h2 = document.querySelector('h2')
        h2.textContent = "Weak";
        h2.style.color = "red";
    }
})


