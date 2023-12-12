## Program Requirements

* Write a program that will produce a mad-lib generator and take the input of a noun, 2x verbs, an adjective, and an object
    * The program will take the users inputs and produce a madlib story
    * The program will out print to the user if a field hasn't been entered to let them know they are missing data

* The second program will calculate mortages. It'll take the cost as an input, interest rate, and the number of years. 
    * The program will have a default amount set within the input tag
    * If the user doesn't enter in the correct data, the form will tell the user they're missing information
    * The fields will check wether the input is a number or not
    

## Design.js 

    '''
        var input1 is equal to the input form of the name
        var input2 is equal to the input form of the second field
        var input3 is equal to the input form of the third field
        var input 4 equal to the input form of the fourth field 
        var input5 equal to the input form of the fifth field

        var madLib object {
            name: ""
            verb1: ""
            verb2: ""
            adj: ""
            obj: ""
        }   

        // generic function for the 5 fields



        input.addEventListener('text', () => {


            let inputvalue equal the input.value

            then set madlib.val = input val 
            

        })

        // Possbibly write this event listener 4x for each of the input form data


        button.addEventListeneer("click", () => {

            if madlib.val is empty 
                set the div inner html equal to some alert for the user to enter in proper data 
                
            otherwise generate the entire madlib text and return a giant string taking madlib.noun and etc and putting those into a `` formatted text

        })
    '''


## Mortage Calculator


    '''
        const input1 = dom input1 
        const input2 = dom input2
        const input3 = dom input3
        const output = dom output div


        calculation = (loan, interest, time) {

            let n = 12 * time

            return ((loan) * interest (1 + interest) ** n)) / ((1 + interest) ** n ) - 1)

        }


        mortageCalc equals an object with defaults pre-set
        {
            loan: 350000
            interest: 5.5
            numYears: 30
        }


        input.addEventListener("blur", () => {

          let loan equal input1.value

          

          if input1.value is not a number or is negative
                then prompt the user that they made an invalid input 


            output.innerhtml = calculation(mortageCalc.loan, mortageCalc.interest, mortageCalc.numYears)


        })

        do this for the other fields




    '''


