import express from 'express';
import { Request, Response } from 'express';

// create express app
const app = express();
// config port to 3000
const PORT = 3000;


// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/2SumNum', (req: Request, res: Response) => {
    let { number, target } = req.query;

    if (!number || !target) {
        return res.status(400).send('Missing required parameters');
    }

    let numberStr:string = String(number).trim();
    let targetStr:string = String(target).trim();

    // Split the number string into an array of strings representing each number
    const numbers: number[] = numberStr.split(',').map(numStr => parseInt(numStr.trim(), 10));
    const targetNumber: number = parseInt(targetStr, 10);
    
    if(numbers.length > 0) {

        // start to find number that sum equal to target
        let result: number = 0;
        let resultIndex: number[] = [];
        let bResultFound: boolean = false;

        // the main logic is to loop through the array of numbers and find the sum of each number with the rest of the numbers
        // if the sum is equal to the target number, save the result and the index of the numbers that making sum equal the target
        for (let i = 0; i < numbers.length; i++) {
            // if result is found, break the loop
            if (bResultFound) {
                break;
            }
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === targetNumber) {
                    // save the result and the index of the numbers that sum to the target, and set result found to true to break the loop
                    result = numbers[i] + numbers[j];
                    resultIndex.push(i);
                    resultIndex.push(j);
                    bResultFound = true;
                    break;
                }
            }
        }
        if(bResultFound)
            res.send(`The values to sum to ${targetNumber} are ${numbers[resultIndex[0]]} and ${numbers[resultIndex[1]]}`);
        else
            res.send('No result found');

    }
    else {
        res.send('No numbers provided');
    }

});

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
});